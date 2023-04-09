import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';


import { RouterModule } from '@angular/router';
import { CurrencyPipe } from './currency.pipe';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeViewComponent,
    CurrencyPipe,
    EmployeeFormComponent,
    EmployeeAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/all', pathMatch: 'full'},
      { path: 'all', component: EmployeeComponent },
      { path: 'view/:id', component: EmployeeViewComponent }
    ])
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
