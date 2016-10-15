import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import {LoginComponent} from './components/Login/LoginComponent';
import {HomeComponent} from './components/Home/HomeComponent';
import {AboutComponent} from './components/About/AboutComponent';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
