import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { AppService } from '../../service/app.service'
import { AuthGuardService } from '../../auth-guard.service'
import { Router } from '@angular/router';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private myRoute: Router, public authGuardService: AuthGuardService,
    private formBuilder: FormBuilder, public appService: AppService) { }

  login = true;
  register = false;
  imageUpload = '';
  filesToUpload: Array<File> = [];

  ngOnInit() {
    this.createForm()
    this.loginCreateForm()
  }

  loginForm() {
    this.login = true;
    this.register = false;
  }

  registerForm() {
    this.login = false;
    this.register = true;
  }

  contactForm: FormGroup;
  loginFormData: FormGroup;

  /* start form code */
  private createForm() {

    this.contactForm = this.formBuilder.group({
      name: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
      phone: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
    });
  }

  imageDataList;
  formData: any;
  // name = new FormControl('');

  upload() {
    this.formData = new FormData();
    const files: Array<File> = this.filesToUpload;

    this.formData.append("uploads[]", files[0], files[0]['name']);

    this.appService.uploadimage(this.formData)
      .subscribe(
      data => this.imageData(data)
      )
  }

  imageData(data) {
    this.imageDataList = data
    console.log(this.imageDataList)
  }


  fileChangeEvent(fileInput: any) {
    console.log(fileInput)
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.imageUpload = fileInput.target.files[0]['name'];
    console.log(this.imageUpload)
  }


  getError() {
    return '*This is required field'
  }


  // login form

  private loginCreateForm() {
    this.loginFormData = this.formBuilder.group({

      email: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(55)],
        updateOn: 'change'
      }),
    });
  }

  onLogin() {

    if (this.loginFormData.valid) {
      console.log(this.loginFormData.value)
      this.appService.loginData(this.loginFormData.value).subscribe(
        data => this.loginResponse(data),
        err => console.log(err)
      )
    }
  }

  loginResponse(data) {
    console.log(data)
    //this.appService.contactCachedListData (data)
    if (data.status === true) {
      this.authGuardService.sendToken(data.token)
      this.myRoute.navigate(['/dashboard'])
    }
    if (data.status === false) {
      alert(data.message)
    }
    console.log(data.messsage)
  }
  /**  submit function  */

  onSubmit() {
    if (this.contactForm.valid) {

      let contactFormData = {
        name: this.contactForm.controls['name'].value,
        email: this.contactForm.controls['email'].value,
        phone: this.contactForm.controls['phone'].value,
        password: this.contactForm.controls['password'].value,
        profile: this.imageUpload,
      }

      console.log(contactFormData)
      this.appService.registerData(contactFormData).subscribe(
        data => this.closeDialog(data),
        error => this.closeDialog(error)
      )
    } this.contactForm.reset();
  }

  closeDialog(data) {
    console.log(data)
    if (data.status = true) {
      alert(data.message)
      this.loginForm()
    }
    if (data.status = false) {
      alert(data.message)
      this.loginForm()
    }
  }
}




