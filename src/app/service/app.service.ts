import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, ReplaySubject } from 'rxjs';


@Injectable()
export class AppService {

  constructor(public http: HttpClient) { }


  registerData(message) {
    return this.http.post('http://localhost:8000/api/register', message);
  }
  loginData(message) {
    return this.http.post('http://localhost:8000/api/login', message);
  }
  getprofileData() {
    return this.http.get('http://localhost:8000/api/user_list');
  }


  uploadimage(message){
    return this.http.post('http://localhost:8000/upload', message);
  }


  private updateLabelValue = new BehaviorSubject<string>("");
  updateLabelData = this.updateLabelValue.asObservable();
  updateLabelList(message: string) {
    this.updateLabelValue.next(message)
    console.log(this.updateLabelValue)
  }


}
