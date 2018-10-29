import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
@Output() feautureSelected = new EventEmitter<string>();
  constructor() { }


  onSelect(feature: string) {
    this.feautureSelected.emit(feature);
  }

}
