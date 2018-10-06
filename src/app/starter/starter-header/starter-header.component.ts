import { Component, OnInit } from '@angular/core';
import{ AuthGuardService } from '../../auth-guard.service'
@Component({
  selector: 'app-starter-header',
  templateUrl: './starter-header.component.html',
  styleUrls: ['./starter-header.component.css']
})
export class StarterHeaderComponent implements OnInit {

  constructor(private authService: AuthGuardService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }
}
