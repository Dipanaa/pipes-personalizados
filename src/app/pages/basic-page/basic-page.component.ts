import { Component, computed, effect, inject, signal } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { LanguageService } from '../../services/language-service.service';

@Component({
  selector: 'basic-page',
  imports: [LowerCasePipe,UpperCasePipe,TitleCasePipe,DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  LanguageService = inject(LanguageService);



  nameLower = signal<string>("diego");
  nameUpper = signal<string>("GUERRA");
  fullName = computed (() => `${this.nameLower()} ${this.nameUpper()}`);

  dateVar = signal(new Date());

  //cambio de fecha automatico

  tickDate = effect(()=>{

    const interval = setInterval(()=>{
      this.dateVar.set(new Date())

    },1000)

    return () => clearInterval(interval);


  });







}
