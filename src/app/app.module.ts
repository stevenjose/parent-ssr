import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ChildWrapperModule} from "./webcomponents/child-wrapper.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ChildWrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
