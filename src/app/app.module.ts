import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { DemoAccordionBasicComponent } from './accordion/accordion.component';
import { AccordionModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, AccordionModule.forRoot(), BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, DemoAccordionBasicComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
