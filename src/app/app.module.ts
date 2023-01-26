import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentDashBComponent } from './student-dash-b/student-dash-b.component';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';



const appRoutes: Routes = [
      { path: '', component:StudentDashBComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentDashBComponent,
    HomeComponent,
    NavbarComponent,
    TeacherListComponent,
    CreateAccountComponent,
    TeacherDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbAccordionModule,
    NgbNavModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
