import { Component } from '@angular/core';
import { StudentSerService } from '../services/student-ser.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

constructor(private stdSer:StudentSerService){}




}
