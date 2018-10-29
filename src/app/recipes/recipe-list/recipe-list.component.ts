import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipeDescription = new EventEmitter<string>();
@Output() recipeImage = new EventEmitter<string>();
@Output() recipeWasSelected = new EventEmitter<Recipe>();

recipes: Recipe[];
recipeSelected: string;

  constructor() {
  }


  ngOnInit() {

    this.recipes = [
      new Recipe('Pizza barbacoa', 'meat minced, barbecue sauce', 'https://okdiario.com/img/2015/09/08/receta-pizza-barbacoa-655x368.jpg'),
      new Recipe('Pizza rural', 'chicken, cheese, onions...', 'https://www.cbc.ca/food/content/images/recipes/WinterVegPie.jpg')];
      
  }
  onSelected(recipeData: Recipe) {
    // console.log(recipeData);
    // this.recipes.map( data => {
    //   if (recipeData === data.name) {
    //     this.recipeDescription.emit(data.description);
    //     this.recipeImage.emit(data.imagePath);
    //   }
    // });
    this.recipeWasSelected.emit(recipeData);
  }

}
