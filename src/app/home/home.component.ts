import { Component, OnInit } from '@angular/core';
import { StudentSerService } from '../services/student-ser.service';
import { Student } from '../Model/student';
import { AuthService } from '../authServices/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  student: Student[];
  isLogin: Boolean;

  constructor(
    private studentSer: StudentSerService,
    private authServ: AuthService
  ) {}

  ngOnInit(): void {
    this.student = this.studentSer.Student;
    this.isLogin = this.authServ.isLogin();
  }

  stdDetails(rolno: number) {
    console.log("---");
    
    this.studentSer.studentdetils(rolno);
  }
}
