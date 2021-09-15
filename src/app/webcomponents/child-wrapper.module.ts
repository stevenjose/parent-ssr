import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChildWrapperComponent} from "./child-wrapper.component";
import {LazyElementModuleOptions, LazyElementsModule} from "@angular-extensions/elements";



// pre-configured LazyElementsModule
const options: LazyElementModuleOptions = {
  elementConfigs: [
    {
      tag: 'wired-button',
      url: 'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js',
      preload: true
    }
  ]
};


@NgModule({
  declarations: [ChildWrapperComponent],
  imports: [
    CommonModule,
    LazyElementsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ChildWrapperComponent]
})
export class ChildWrapperModule { }

