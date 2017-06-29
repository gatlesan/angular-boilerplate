import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import {SharedModule} from './shared/shared.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports:      [ BrowserModule,SharedModule,FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
  
})
export class AppModule { }
