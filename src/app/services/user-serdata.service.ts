import { Injectable, OnInit } from '@angular/core';
import { User } from '../Model/user';
import { StudentSerService } from './student-ser.service';

@Injectable({
  providedIn: 'root',
})
export class UserSerdataService implements OnInit {



  userData: User[];


  constructor(private stdDetails : StudentSerService) {
    this.userData = [
      new User('ara', '1234', 'ara@gmail.com'),
      new User('ram', '1234', 'ram@gmail.com'),
      new User('ravi', '1234', 'ravi@gmail.com'),
    ];
  }

  ngOnInit(): void {}


}
