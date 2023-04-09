import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employees: any[] = [];
  constructor(private http: HttpClient, private router: Router, private emps: EmployeeService) {}
  
  ngOnInit() {
    this.emps.getAllEmployees().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    });
  }




}
