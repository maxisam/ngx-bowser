import { BowserService, BowserModule } from 'ngx-bowser';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BowserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
