import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
