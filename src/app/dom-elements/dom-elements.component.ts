import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-elements',
  templateUrl: './dom-elements.component.html',
  styleUrls: ['./dom-elements.component.css'],
})
export class DomElementsComponent implements OnInit {
  constructor() {}
  clickCounter = 0;

  dblClickCounter = 0;
  name: string = '';
  number: number = 0;
  currentDate: number;
  ngOnInit(): void {
    this.click();
    this.dblclick();
    this.blur();
    this.focus();
    this.scroll();
    this.pipes(name);
    this.date();
  }

  click(): void {
    this.clickCounter += 1;
  }

  dblclick(): void {
    this.dblClickCounter += 1;
  }

  blur(): void {
    console.log('Blur event is working');
  }

  focus(): void {
    console.log('Focus event is working');
  }

  scroll(): void {
    console.log('Scroll is working');
  }
  pipes(name: string): void {
    this.name = name;
  }
  numbers(currency: number): void {
    this.number = currency;
  }
  date(): void {
    this.currentDate = Date.now();
  }
}
