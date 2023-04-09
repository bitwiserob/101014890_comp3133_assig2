import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from './model/employee';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:4000/graphql';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const query = `{
      getAllEmployees {
        _id
        first_name
        last_name
        email
        gender
        salary
      }
    }`;
    return this.http.post<any>(this.apiUrl, {query: query}, httpOptions)
      .pipe(
        map(res => res.data.getAllEmployees)
      );
  }

  getEmployeeById(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const query = `{
      searchEmployeeById(_id: "${id}") {
        _id
        first_name
        last_name
        email
        gender
        salary
      }
    }`;
    return this.http.post<any>(this.apiUrl, {query: query}, httpOptions)
    .pipe(
      map(res => {
        const employee = res.data.searchEmployeeById;
        console.log(res);
        if (!employee) {
          throw new Error('Employee with this ID does not exist');
        }
        return employee;
      })
    );
  }
  deleteEmployeeById(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const query = `mutation {
      deleteEmployeeById(_id: "${id}") {
        success
        message
        employee {
          _id
          first_name
          last_name
          email
          gender
          salary
        }
      }
    }`;
    return this.http.post<any>(this.apiUrl, {query: query}, httpOptions)
      .pipe(
        map(res => res.data.deleteEmployeeById)
      );
  }
  editEmployee(employee: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const query = `mutation {
      updateEmployee(
        _id: "${employee._id}",
        first_name: "${employee.first_name}",
        last_name: "${employee.last_name}",
        email: "${employee.email}",
        salary: ${employee.salary},
        gender: "${employee.gender}"
      ) {
        _id
        first_name
        last_name
        email
        department
        salary
        gender
      }
    }`;
    return this.http.post<any>(this.apiUrl, {query: query}, httpOptions)
      .pipe( 
        map(res => res.data.updateEmployee)
      );
  }
  addEmployee(employee: Employee): Observable<any> {
    if (!employee || !employee.first_name || !employee.last_name || !employee.email || !employee.gender || !employee.salary) {
      // handle invalid input
      return throwError('Invalid input');
    }
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  
    const query = `mutation {
      addNewEmployee(
        first_name: "${employee.first_name}",
        last_name: "${employee.last_name}",
        email: "${employee.email}",
        salary: ${employee.salary},
        gender: "${employee.gender}"
      ) {
        success
        message
        employee {
          first_name
          last_name
          email
          gender
          salary
        }
      }
    }`;
    console.log(query);
    return this.http.post<any>(this.apiUrl, JSON.stringify({query}), httpOptions).pipe();
  }
  
}
  
