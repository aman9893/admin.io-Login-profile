import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { StarterComponent } from './../starter/starter.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RegisterComponent } from '../admin-login-profile/register/register.component';
import { ProfileComponent } from '../admin-login-profile/profile/profile.component';
import { AuthGuard } from '../auth.guard';
@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'login', component: RegisterComponent },
     { path: 'singup', component: RegisterComponent },
      { path: '', component: StarterComponent, pathMatch: 'full' , canActivate: [AuthGuard]},
      { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
      { path: 'dashboard', component: StarterComponent , canActivate: [AuthGuard]},
      { path: 'Profile', component: ProfileComponent , canActivate: [AuthGuard]},
      { path: '**', component: StarterComponent , canActivate: [AuthGuard]},
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }

