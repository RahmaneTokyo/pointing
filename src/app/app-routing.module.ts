import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {EmployeeComponent} from "./directeur/employee/employee.component";
import {DirecteurComponent} from "./directeur/directeur.component";
import {PointageComponent} from "./directeur/pointage/pointage.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'directeur',
    component: DirecteurComponent,
    children: [
      {path: '', redirectTo: 'employees', pathMatch: 'full'},
      {path: 'employees', component: EmployeeComponent},
      {path: 'pointages/entree', component: PointageComponent},
      {path: 'pointages/sortie', component: PointageComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
