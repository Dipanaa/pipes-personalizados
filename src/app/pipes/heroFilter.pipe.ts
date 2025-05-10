import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroFilter'
})

export class HeroFilterPipe implements PipeTransform {
  transform(value: Hero[], txtSearch: string): Hero[] | []{

    return  value.filter(hero => hero.name.toLowerCase().includes(txtSearch.toLowerCase())) ?? [];


  }
}