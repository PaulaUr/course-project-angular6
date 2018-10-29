import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.mode';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Potatos', 20),
    new Ingredient('Tomatos', 15)
  ];
  constructor() { }

  ngOnInit() {
  }
  onIngredients(ingredientReceive: Ingredient) {
    this.ingredients.push(ingredientReceive);
    console.log(ingredientReceive);
  }

}
