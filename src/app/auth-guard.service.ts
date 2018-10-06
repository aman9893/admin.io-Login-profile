import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService {
  constructor(private myRoute: Router) { }
  
  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }
  getToken() {
    return localStorage.getItem("LoggedInUser")
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(["login"]);
  }

  loggedIn() {
    // const token: string = this.jwtHelper.tokenGetter()
    // if (!token) {
    //   return false
    // }
    // const tokenExpired: boolean = this.jwtHelper.isTokenExpired(token)
    // return !tokenExpired
    // localStorage.removeItem("LoggedInUser");
    // this.myRoute.navigate(["login"]);
  }

}