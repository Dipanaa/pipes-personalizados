import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/data';
import { Hero, ColorMap} from '../../interfaces/hero.interface';
import { CanFlyPipe } from '../../pipes/canFly.pipe';
import { heroColorPipe } from '../../pipes/heroColor.pipe';
import { HeroTextColorPipe } from '../../pipes/heroTextColor.pipe';
import { HeroCreatorPipe } from '../../pipes/heroCreator.pipe';
import { HeroSortByPipe } from '../../pipes/heroSortBy.pipe';
import { HeroFilterPipe } from '../../pipes/heroFilter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe,CanFlyPipe,heroColorPipe,HeroTextColorPipe
    ,HeroCreatorPipe,HeroSortByPipe,HeroFilterPipe],
  templateUrl: './custom-page.component.html',

})
export default class CustomPageComponent {

  name = signal<string>("Diego Guerra");

  sortBy = signal<keyof Hero | null>(null);



  //heroColors map
  heroColorsMap = ColorMap;


  //Valor para el toggle
  valueForToggle = signal<boolean>(true);

  //Signal para data de heroes
  heroes = signal<Hero[]>(heroes);

  //Search para el input
  search = signal<string>("");



  //Metodo para el toggle
  toggleValue(){
    console.log(this.valueForToggle());
    return (this.valueForToggle())? this.valueForToggle.set(false): this.valueForToggle.set(true);
  }
}
