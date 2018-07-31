import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  title="Leave Management System";
  constructor() { }
  ngOnInit(): void {
    
  }
}
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { HttpModule } from '@angular/http';
// import { ActivatedRoute } from '@angular/router';
// import { EmployeeService } from './employee.service';
// import { Employee } from './employee';


// @Component({
//     selector: 'app-dashboard-mydetails',
//     templateUrl: './mydetails.component.html',
//     styleUrls: ['./mydetails.component.css'],
//     providers: [EmployeeService]
// })

// export class MyDetailsComponent implements OnInit {
//   employeeId:number;
//   constructor(private employeeService: EmployeeService, private activeRoute: ActivatedRoute,private route: Router) { 
//     this.employeeId = this.activeRoute.snapshot.params['employeeId'];
//   }
//   empId=this.employeeId;
//   employee: Employee[];
//   getEmployeeDetails(empId): void {
//       this.employeeService.getEmployeeDetails(empId).then(employee => {
//       console.log('getEmployeeDetails promise resolved : ' + employee.length);
//       this.employee = employee;
//     }
//     );}
//     onback() {
//         this.route.navigate(['/dashboard', this.employeeId]); 
//     }
//   ngOnInit(): void {
//       this.getEmployeeDetails(this.employeeId);
//     }
// }