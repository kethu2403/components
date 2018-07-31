import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { LeaveDetails } from '../LeaveDetails';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LeaveDetailsService } from '../leave-details.service';
import { jqxNotificationComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnotification';


@Component({
  selector: 'app-leave-apply',
  templateUrl: './leave-apply.component.html',
  styleUrls: ['./leave-apply.component.css'],
  providers: [LeaveDetailsService, EmployeeService]
})
export class LeaveApplyComponent implements OnInit {
  @ViewChild('leaveApplied') leaveApplied: jqxNotificationComponent;
    

   // tslint:disable-next-line:no-shadowed-variable
   // tslint:disable-next-line:max-line-length
   constructor(private leaveDetailsService: LeaveDetailsService, private EmployeeService: EmployeeService, private activeRoute: ActivatedRoute, private route: Router) { 
           this.employeeId = this.activeRoute.snapshot.params['employeeId'];
         }
   
  msg: string;
   daydiff: number;
   timediff: number;
   eD: Date;
   sD: Date;
   employeeId:number;
   leaveReason:number;
   noOfDays:number;
   startDate;
   endDate;
   leaveType;
   startDATE;
   name:String;
   date;
   manager;
   phone;
   dept;
   email;
   leaves;
  
 today = new Date();
 presentDate = new Date(this.startDate);
         // empId=this.employeeId;
         // tslint:disable-next-line:member-ordering
         title = 'Leave Management Application';
         employee: Employee;
 
//  curDate = (this.today.getMonth()+1)+'/'+this.today.getDate()+'/'+this.today.getFullYear();
//  checkDate(startDate){
//    this.startDATE = (this.startDate.getMonth()+1)+'/'+this.startDate.getDate()+'/'+this.startDate.getFullYear();
//    if(this.startDATE<=this.curDate){
//      this.msg="Enter valid startDate";
//      alert(this.msg);
//      this.route.navigate(['/apply', this.employeeId]);
//    }
//  }
   getDate(startDate, endDate) {
     this.sD= new Date(this.startDate);
     this.eD = new Date(this.endDate)
    this.timediff = Math.abs(this.sD.getTime() - this.eD.getTime());
    this.daydiff = Math.ceil(this.timediff / (1000 * 3600 * 24) + 1);
    return this.daydiff;
   }
         getEmployeeDetails(employeeId): void {
             this.EmployeeService.getEmployeeDetails(this.employeeId).then(employee => {
             console.log('getEmployeeDetails promise resolved : ' + employee);
             this.employee = employee;
             this.name = this.employee.empName;
             this.date = this.employee.empDate;
             this.manager = this.employee.managerId;
             this.phone = this.employee.empPhone;
             this.dept = this.employee.empDept;
             this.leaves = this.employee.empLeaveAvailable;
           }
           ); }
       doApply(empId, startDate, endDate, leaveReason) {
         this.leaveDetailsService.setApply(this.employeeId, this.startDate, this.endDate, this.leaveReason).subscribe(
           data => {
             alert(data);
             
             if (data === 'Leave Applied') {
              
               this.route.navigate(['/dashboard', this.employeeId]);
             }
           },
           err => {
             console.log(err);
           });
         }
     onapply(empId, startDate, endDate, leaveReason) {
      
         this.doApply(this.employeeId, this.startDate, this.endDate, this.leaveReason);
         this.leaveApplied.open();
        }
      oncancel() {
        this.route.navigate(['/history', this.employeeId]);
      }
     ngOnInit(): void {
            this.getEmployeeDetails(this.employeeId);
     }
     }

