import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {

  //Creamos señal para proyeccion de contenido

  title = input<string>();




}
