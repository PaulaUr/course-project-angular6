import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit, ContentChild } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated// None, Native
})
export class ServerElementComponent implements OnInit, AfterViewInit {
  @Input('srvElement') element: { type: string, name: string, content: string};
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log('@ViewChild:', this.header.nativeElement.textContent);
    console.log('texte paragraph', this.paragraph.nativeElement.textContent);
  }
  ngAfterViewInit() {
    console.log('text content AfterViewInit:', this.header.nativeElement.textContent);
    console.log('texte paragraph', this.paragraph.nativeElement.textContent);

  }

}
