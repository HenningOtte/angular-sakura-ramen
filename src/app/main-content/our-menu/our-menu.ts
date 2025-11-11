import { Component, inject } from '@angular/core';
import { Meal } from './meal/meal';
import { Mealsdata } from '../../mealsdata';

@Component({
  selector: 'app-our-menu',
  imports: [Meal],
  templateUrl: './our-menu.html',
  styleUrl: './our-menu.scss',
})
export class OurMenu {
  mealsData = inject(Mealsdata);
}
