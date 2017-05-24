import { InitialModule } from './initial/initial.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InitialComponent } from './initial/initial.component';

@NgModule({
  declarations: [
    AppComponent,
    // InitialComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InitialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 