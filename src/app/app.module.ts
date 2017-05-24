import { ChildModule } from './child/child.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { InitialComponent } from './initial/initial.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    // ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChildModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
