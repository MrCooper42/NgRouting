import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService {
  private loggedIn = false;
  private user = Object;
  constructor() {
    this.loggedIn = true;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
