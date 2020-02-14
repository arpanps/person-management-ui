import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http'; 

import * as $ from "jquery";
 
import { DataTablesModule } from 'angular-datatables';  

import { PersonComponent } from './person/person.component';
import { AddPersonComponent } from './add-person/add-person.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    AddPersonComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,  
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    DataTablesModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
