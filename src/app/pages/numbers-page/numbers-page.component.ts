import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [DecimalPipe,PercentPipe,CurrencyPipe],
  templateUrl: './numbers-page.component.html',
})
export default class NumbersPageComponent {

  genericNumber = signal<number>(10);



}
