import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child-wrapper',
  template: `
    <!-- will be lazy loaded and uses standard Angular template bindings -->
    <some-element
      *axLazyElement="link"
    >
    </some-element>
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
