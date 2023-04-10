import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../model/employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee?: Employee = undefined;

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private route: ActivatedRoute) {
    this.employeeForm = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    gender: ['', Validators.required],
    salary: ['', Validators.required]
  }); }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.paramMap);
    if(id){
      this.employeeService.getEmployeeById(id).subscribe(
        data => {
          this.employee = data;
          console.log(data)
          this.employeeForm.patchValue({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            gender: data.gender,
            salary: data.salary
          });
        }
      );
    }

  }

  onSubmit() {
    
    if (this.employeeForm.valid && this.employee) {
      const employee: Employee = {
        _id: this.employee._id,
        first_name: this.employeeForm.value.first_name,
        last_name: this.employeeForm.value.last_name,
        email: this.employeeForm.value.email,
        gender: this.employeeForm.value.gender,
        salary: this.employeeForm.value.salary,
      };

      this.employeeService.editEmployee(employee).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );

    }else{
      console.log("invalid form");
    }
  }

}
