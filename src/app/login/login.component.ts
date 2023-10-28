import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../Model/user';
import { UserSerdataService } from '../services/user-serdata.service';
import { AuthService } from '../authServices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private userServices: UserSerdataService,
    private authServices: AuthService
  ) {}

  userData: any = User;
  userValues: any;
  name: string;

  UserInp = this.formBuilder.group({
    name: ['', { Validation: [Validators.required] }],
    mobNo: ['', { Validation: [Validators.required] }],
    gmail: ['', { Validation: [Validators.required, Validators.email] }],
    Address: this.formBuilder.group({
      address1: ['', { Validation: [Validators.required] }],
      city: ['', { Validation: [Validators.required] }],
      state: ['', { Validation: [Validators.required] }],
    }),
  });

  sub() {
    this.userValues = this.UserInp.value;
    this.name = this.userValues.name;
    let isValid = this.authServices.validation(this.name);
    if (isValid) {
      this.showSuccess('Sucessfull');
      this.UserInp.reset();
    } else {
      this.showError('Username and Password is not Valid', 'User not allowed');
    }
  }
  // setVakue() {
  //   this.UserInp.setValue({
  //     name: this.userData.name,
  //     mobNo: '',
  //     gmail: '',
  //     Address: {
  //       address1: this.userData.Address.address1,
  //       city: '',
  //       state: '',
  //     },
  //   });
  // }

  showSuccess(message: string, error?: string) {
    this.toastr.success(message, error);
  }

  showError(message: string, error: string) {
    this.toastr.error(message, error);
  }
}
