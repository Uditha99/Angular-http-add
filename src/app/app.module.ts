import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AllComponent } from './components/all/all.component';
import {MatButtonModule} from "@angular/material/button";
import { DeleteComponent } from './components/delete/delete.component';
import { NewComponent } from './components/new/new.component';
import { UpdateComponent } from './components/update/update.component';
import { FindComponent } from './components/find/find.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatIconModule} from "@angular/material/icon";
import { LoadingComponent } from './components/loading/loading.component';
import {MatProgressSpinner, MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HttpManagerInterceptor} from "./components/interceptor/http-manager.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    DeleteComponent,
    NewComponent,
    UpdateComponent,
    FindComponent,
    LoadingComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatButtonModule,
        HttpClientModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatIconModule,
        MatProgressSpinnerModule,

    ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:HttpManagerInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
