import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  // @Output() selectedDescription = new EventEmitter<string>();
  // @Output() selectedImage = new EventEmitter<string>();
  selectedRecipe: Recipe;
  selectedDescription: string;
  selectedImage: string;

  constructor() { }

  ngOnInit() {
  }

  getSelectedDes(selectedRecipe) {
    this.selectedDescription = selectedRecipe;
    // this.selectedDescription.emit(selectedRecipe);
  }
  getSelectedImg(selectedRecipe) {
    this.selectedImage = selectedRecipe;
    // this.selectedImage.emit(selectedRecipe);
  }


}
