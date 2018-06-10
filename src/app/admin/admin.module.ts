import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent,
    DashboardComponent
],
bootstrap: [LoginComponent]

})
export class AdminModule { }
