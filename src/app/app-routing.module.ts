import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/all', pathMatch: 'full'},
  { path: 'all', component: EmployeeComponent},
  { path: 'edit/:id', component: EmployeeFormComponent },
  { path: 'add', component: EmployeeAddComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
