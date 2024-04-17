import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsCompComponent } from './forms-comp/forms-comp.component';
import { ViewCompComponent } from './view-comp/view-comp.component';

import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildCompComponent } from './child-comp/child-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    FormsCompComponent,
    ViewCompComponent,
    ChildCompComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,MatButtonModule,MatCheckboxModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule,MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
