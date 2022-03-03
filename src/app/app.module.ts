import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoaderModule } from './loader/loader.module';

import { AppComponent } from './app.component';
import { ResizeDirective } from './directive/resize.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, LoaderModule ],
  declarations: [ AppComponent, ResizeDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
