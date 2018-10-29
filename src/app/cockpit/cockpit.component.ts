import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
@Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
@ViewChild('serverContentInput') serverContentInput: ElementRef;
// newServerName = '';
// newServerContent = '';
  constructor() { }

 onAddServer(nameInput: HTMLInputElement) {
   // console.log(this.serverContentInput.nativeElement.value);
  this.serverCreated.emit({
    serverName: nameInput.value,
    serverContent: this.serverContentInput.nativeElement.value});
 }
 onAddBlueprint(nameInput: HTMLInputElement) {
  this.blueprintCreated.emit({
    serverName: nameInput.value,
    serverContent: this.serverContentInput.nativeElement.value});
 }


}
