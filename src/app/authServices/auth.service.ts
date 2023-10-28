import { Injectable } from '@angular/core';
import { UserSerdataService } from '../services/user-serdata.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAvalib: Boolean;
  constructor(private userServices: UserSerdataService) {}

  validation(name: string): Boolean {
    console.log(name);

    this.isAvalib = Boolean(
      this.userServices.userData.find((u) => u.name === name)
    );

    if (this.isAvalib) {
      return (this.isAvalib = true);
    } else {
      return (this.isAvalib = false);
    }
  }

  isLogin(): Boolean {
    return this.isAvalib;
  }
}
