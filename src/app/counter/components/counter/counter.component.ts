import { Component } from '@angular/core';
//import { CounterComponent } from './';

@Component({
  selector: 'app-counter',
  template: `
      <h3>Counter: {{counter}}</h3>
      <button (click)="incresyBy(1)">+1</button>
      <button (click)="resetCounter()">Reset</button>
      <button (click)="incresyBy(-1)">-1</button>
  `
})

export class CounterComponent  {
  constructor() { }
  public counter:number=10
  public incresyBy(value:number):void{
    this.counter+=value;
  }
  resetCounter(){
    this.counter=10;
  }


}
