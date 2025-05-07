import { Injectable, signal } from '@angular/core';


//Tipos de typescript para indicar que es lo que puede recibir

type languages = "es" | "fr";

function saveToLocalStorage(value: languages) {
  localStorage.setItem("language",value);
}



@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private currentLocale = signal<languages>("es");
  constructor() {

    this.currentLocale.set(localStorage.getItem("language") as languages ?? "es");
  }

  get getLocale(){
    return this.currentLocale()
  }

  changeLocal(locales: languages){
    this.currentLocale.set(locales);
    saveToLocalStorage(locales);
    window.location.reload();

  }

}
