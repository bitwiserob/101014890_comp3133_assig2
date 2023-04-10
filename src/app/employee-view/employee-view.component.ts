import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model/employee';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  employee: any;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.employeeService.getEmployeeById(id).subscribe(
        data => {
          this.employee = data;
          console.log(data)
        }
      );
    }
  }
  deleteEmployee(id: string) {
    this.employeeService.deleteEmployeeById(id).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  editEmployee(_id: string) {
    this.employeeService.getEmployeeById(_id).subscribe((employee: Employee) => {
      
    });
  }
  

  

}