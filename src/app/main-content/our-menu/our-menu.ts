import { Component } from '@angular/core';
import { Meal } from './meal/meal';

@Component({
  selector: 'app-our-menu',
  imports: [Meal],
  templateUrl: './our-menu.html',
  styleUrl: './our-menu.scss',
})
export class OurMenu {

}
