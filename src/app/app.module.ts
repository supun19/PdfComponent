import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import {PdfComponent} from './pdf/pdf.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ,PdfComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
