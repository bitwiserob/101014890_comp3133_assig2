import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    getEmployeeById(id: "${id}") {
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
      map(res => res.data.getEmployeeById)
    );
}
}