import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe } from '@angular/common';
import { interval, map, Observable, tap } from 'rxjs';

//Clientes

const cliMale = {
  name: "Diego",
  gender: "male"
}

const cliFemale = {
  name: "Tefy",
  gender: "female"
}

//lista de gatos para el plural

const cats: string[] = ["samu","nova","rusio"];

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent,I18nSelectPipe,I18nPluralPipe,SlicePipe,JsonPipe,KeyValuePipe,AsyncPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  client = signal(cliMale);
  gatos = signal<string[]>(cats);


  //Configuracion i18n plural

  catsMap = signal({
    '=0': "No hay gatos en la pieza",
    '=1': "Hay un gato",
    other: "Hay # gatos en la pieza "
  })

  //Keyvaluepipe

  profile = {
    name: "Diego",
    age: 23
  }

  //Asyncpipe

  promiseValue: Promise<string> = new Promise((resolve, reject) =>{

    setTimeout(()=>{
      resolve("tenemos data en la promesa");
      console.log("promesa finalizada");
    },5000)
  })



  //Async pipe con observables
  myObservableTimer = interval(2000).pipe(


    tap((value)=> console.log('tap:', value + 1)),
    map(value => value +1)


  )


  //Map para cambio de palabras i18nselect

  invitationMap= {
    male: "bienvenido",
    female: "bienvenida"
  }

  changeClient(){
    return (this.client() === cliMale)? this.client.set(cliFemale): this.client.set(cliMale);
  }

  deleteCat(){
    return this.gatos.update(gatos=>gatos.slice(1))

  }








}
