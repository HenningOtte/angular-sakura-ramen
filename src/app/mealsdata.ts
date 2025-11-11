import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Mealsdata {
  meals = [
    {
      name: 'Tonkotsu Ramen',
      ingredients: [
        { name: 'chicken', price: 11.95 },
        { name: 'beef', price: 12.95 },
        { name: 'shrimp', price: 13.95 },
      ],
    },
    {
      name: 'Spicy Miso Ramen',
      ingredients: [
        { name: 'chicken', price: 11.95 },
        { name: 'beef', price: 13.95 },
        { name: 'shrimp', price: 14.95 },
      ],
    },
    {
      name: 'Shio Ramen',
      ingredients: [
        { name: 'chicken', price: 10.95 },
        { name: 'beef', price: 12.95 },
        { name: 'shrimp', price: 12.95 },
      ],
    },
  ];
}
