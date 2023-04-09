import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Employee } from '../model/employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  employeeForm: FormGroup;
  @Input() employee: any;

  constructor(private fb: FormBuilder, private router: Router, private employeeService: EmployeeService) {
    this.employeeForm = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    gender: ['', Validators.required],
    salary: ['', Validators.required]
  }); }

  onSubmit() {
    if (this.employeeForm.valid) {
      const employee: Employee = {
        _id: this.employee ? this.employee._id : null,
        first_name: this.employeeForm.value.first_name,
        last_name: this.employeeForm.value.last_name,
        email: this.employeeForm.value.email,
        gender: this.employeeForm.value.gender,
        salary: this.employeeForm.value.salary,
      };
      this.saveEmployee(employee);
    }
  }

  saveEmployee(employee: Employee) {
    this.employeeService.addEmployee(employee).subscribe(
      (data) => {
        console.log('Employee added successfully', data);
        this.router.navigate(['/employees']);
      },
      (error) => {
        console.error('Error adding employee: ', error);
        // Display error message to the user
      }
    );
  }
  
}
