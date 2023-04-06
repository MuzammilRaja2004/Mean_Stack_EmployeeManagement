import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Employee } from './employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: any = Employee;
  employee: Employee[]
  readonly baseUrl = 'http://localhost:4000/employees'

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee) {
    const {name,position,office,salary} = emp
    const body = {name,position,office,salary}
    return this.http.post(this.baseUrl, body)
  }
  getEmployeeList() {
    return this.http.get(this.baseUrl);
  }
  // putEmployee(_id: string, name: string, position: string, office: string, salary: string,) {
    putEmployee(emp: Employee) {
      // const body = {}
      const {_id,name,position,office,salary} = emp
      const body = {name,position,office,salary}

    return this.http.put(this.baseUrl + `/${_id}`, body);
  }
  deleteEmployee(_id: string) {
    return this.http.delete(this.baseUrl + `/${_id}`);
  }
}
