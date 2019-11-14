import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ReactiveFormsModule, FormGroup,FormsModule, FormControl, Validators, FormBuilder, NgForm} from"@angular/forms";
// import 'rxjs/Rx';

import { ServiceService } from '../service.service'
import { DeviceDetectorService } from 'ngx-device-detector';



@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  xxx=""
  form: FormGroup;
  phone = new FormControl("", [Validators.required]);
  username = new FormControl("" ,[Validators.required]);
  email=new FormControl("",  [Validators.required, Validators.email])
  submitted = false;

  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
 constructor (private deviceService: DeviceDetectorService,private router:Router,private service:ServiceService,private fb: FormBuilder){this.oninit() ;this.maxDate.setDate(this.maxDate.getDate() + 7);
  this.bsRangeValue = [this.bsValue, this.maxDate];this.detectDevice();this.isMobile();
  this.isTablet();
  this.isDesktop();
  
  }

  public deviceInfo = null;
  public isMobilevar = false;
  public isTabletvar = false;
  public isDesktopvar = false;
 
  
 oninit(){
 
  this.form =new FormGroup({
    "phone": this.phone,
    "username": this.username,
     "email":this.email
    });
 }

 get f() { return this.form.controls; }

 public detectDevice() {

  this.deviceInfo = this.deviceService.getDeviceInfo();
  console.log("1111111111")
  console.log(this.deviceInfo)
}
public isMobile() {
  this.isMobilevar = this.deviceService.isMobile();
  console.log("222222222")
  console.log(this.isMobilevar)
}

public isTablet() {
  this.isTabletvar = this.deviceService.isTablet();
  console.log("33333333333")
  console.log(this.isTabletvar)
}

public isDesktop() {
  this.isDesktopvar = this.deviceService.isDesktop();
  console.log("444444444444")
  console.log(this.isDesktopvar)
}


  onsubmit(form:any){
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
    else{
      // alert('SUCCESS!! :-)')
      // alert("*********** "+this.xxx)
      // alert(form.value.username)
      this.service.name=form.value.username;
      this.service.phone=form.value.phone;
      this.router.navigate(['tab1'])

    }
   
  }
}
