import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {

  transform(value: string, toggleValue: boolean = true): string {
    return (toggleValue)?value.toUpperCase():value.toLowerCase();

  }
}
