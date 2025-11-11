import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meal',
  imports: [CommonModule],
  templateUrl: './meal.html',
  styleUrl: './meal.scss',
})
export class Meal {
  @Input() imgNumber: number = 1;
  @Input() isOdd: boolean = false;
  @Input() meal = {
    name: '',
    ingredients: [
      { name: 'chicken', price: 0 },
      { name: 'beef', price: 1 },
      { name: 'shrimp', price: 2 },
    ],
  };
  rowReverse = 'row-reverse';
  row = 'row';
}
