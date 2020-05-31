import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseComponent } from './promise/promise.component';
import { NgifelseComponent } from './promise/ngifelse/ngifelse.component';
import { NgifelsetestComponent } from './promise/ngifelsetest/ngifelsetest.component';
import { NgSwitchtestComponent } from './promise/ng-switchtest/ng-switchtest.component';
import { MessageDirectiveDirective } from './promise/message-directive.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    
    PromiseComponent,
    NgifelseComponent,
    NgifelsetestComponent,
    NgSwitchtestComponent,
    MessageDirectiveDirective,
    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
