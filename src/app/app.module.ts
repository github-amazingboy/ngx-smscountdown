import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { SMSCountDownModule } from 'dist/smscount-down';
import { SMSCountDownModule } from 'projects/smscount-down/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,SMSCountDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
