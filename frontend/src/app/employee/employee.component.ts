import { Employee } from './../shared/employee.model';
import { Component } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';

declare var M :any
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent {
  public employeeService: EmployeeService; // create a public variable to hold the employee service instance
  employeeList: any;

  constructor(private employee: EmployeeService) {
    this.employeeService = employee; // assign the employee service instance to the public variable
  }




  ngOnInit() {
    this.resetForm();
    this.refreshEmployeeList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.employeeService.selectedEmployee = {
      name: "",
      position: "",
      office: "",
      salary: null
    }
  }

  onSubmit(form: NgForm) {
    console.log("inner func ")
    console.log(form.value,"iinner func")
    if (form.value._id == "" || form.value._id == undefined) {
      console.log("inner if")
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.refreshEmployeeList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
        this.resetForm(form);
      });
    }
    else {
      console.log("inner else")
      console.log(form.value)
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        console.log("inner condition")
        this.refreshEmployeeList();
        console.log("after func hit")
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
        this.resetForm(form);
      });
    }
  }
  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      console.log(res);
      // this.employeeService.employee = res as Employee[];
      this.employeeList = res;
    });
  }

  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
