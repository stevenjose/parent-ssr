import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child-wrapper',
  template: `
    <micro-app *axLazyElement="link"></micro-app>
  `,
  styles: [
  ]
})
export class ChildWrapperComponent  {
  link: string = 'http://localhost:3000/main.js'
  listOfData: string[] = [];

  dataToParent($event: CustomEvent) {

  }

}
