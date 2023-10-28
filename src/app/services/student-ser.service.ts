import { Injectable } from '@angular/core';
import { Student } from '../Model/student';

@Injectable({
  providedIn: 'root',
})
export class StudentSerService {
  constructor() {}

  Student: Student[] = [
    {
      rollno: 1001,
      name: 'ram',
      class: 'X',
      mark: {
        english: 88,
        tamil: 88,
        maths: 88,
      },
    },
    {
      rollno: 1002,
      name: 'ravi',
      class: 'X',
      mark: {
        english: 77,
        tamil: 76,
        maths: 23,
      },
    },
    {
      rollno: 1003,
      name: 'gopal',
      class: 'X',
      mark: {
        english: 44,
        tamil: 33,
        maths: 99,
      },
    },
    {
      rollno: 1004,
      name: 'ragul',
      class: 'X',
      mark: {
        english: 66,
        tamil: 78,
        maths: 99,
      },
    },
    {
      rollno: 1005,
      name: 'pathi',
      class: 'X',
      mark: {
        english: 88,
        tamil: 100,
        maths: 33,
      },
    },
    {
      rollno: 1006,
      name: 'bala',
      class: 'X',
      mark: {
        english: 88,
        tamil: 100,
        maths: 33,
      },
    },
  ];

  studentdetils(rollno: number) {
    this.Student = this.Student.filter((std) => std.rollno == rollno);
  }
}
