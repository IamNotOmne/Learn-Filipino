import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { StudentDashBComponent } from './student-dash-b/student-dash-b.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'student-dash-b', component: StudentDashBComponent},
  {path: 'teacher-list', component: TeacherListComponent},
  {path: 'create-account', component: CreateAccountComponent},
  {path: 'teacher-dashboard', component: TeacherDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
