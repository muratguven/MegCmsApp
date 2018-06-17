import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminnavComponent } from './adminnav/adminnav.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent,
    DashboardComponent,
    AdminnavComponent
],
bootstrap: [LoginComponent]

})
export class AdminModule { }
