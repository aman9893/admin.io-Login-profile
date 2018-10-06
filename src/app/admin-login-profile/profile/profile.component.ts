import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { AppService } from '../../service/app.service'
import { Router } from '@angular/router';
declare var jquery: any;
declare var $: any;
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private myRoute: Router, public appService: AppService) { }
  profileList;
  public env = env;
  ngOnInit() {
    this.profileData()
  }


  profileData(): void {
    this.appService.getprofileData()
      .subscribe(
      data => this.profileDataList(data),
      error => this.profileDataListerror(error)
      )
  }

  profileDataList(data) {
      this.profileList = data;
      console.log(this.profileList)
    
  }
  profileDataListerror(error) {
    console.log("error")
  }
}
