import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddContactComponent } from './add-contact/add-contact.component';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports:      [ 
    AppRoutingModule,
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    AngularEditorModule,
    MatSidenavModule,   
    MatListModule,
    BrowserAnimationsModule,  
    ReactiveFormsModule, 
    MatFormFieldModule,  
    MatInputModule,      
    MatButtonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    AddContactComponent, 
    DashboardComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
