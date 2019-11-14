import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {ReactiveFormsModule, FormGroup,FormsModule, FormControl, Validators, FormBuilder, NgForm} from"@angular/forms";


import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http'
// import { HTTP } from '@ionic-native/http';
// import 'rxjs/Rx';

import { Injectable } from '@angular/core';
// import { DatePipe } from '@angular/common';
import { ServiceService } from '../service.service'
import { EmailService } from '../email.service'
import { from } from 'rxjs';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

import * as $ from 'jquery';
// import * as  from 'hebcal-fullcalendar.js'
// <script src="hebcal-fullcalendar.js"></script>




import { DatePipe } from '@angular/common';

@Injectable()


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  parashot: string[] = [];
  hagim: string[] = ['ראש השנה', 'יום כיפור', 'סוכות', 'שמחת תורה','פורים', 'פסח', 'שביעי של פסח','שבועות'];
  list: string[] = this.service.list1;
 //list: string[] = [];
  message: string;
  calander1='false'
  date = false
 
  x = 0;
  y = 1;
  myDate2: any
  parshaCard = '';
  xxx = " "
  xx = " "
  xxxx: any = ''
  placeCard = ''
  add = false
  addlimited = this.service.add;
  status='parasha'
  p:number;
  next=true;
  dateselected:any;

  date1=new FormControl("");
  constructor(private datePipe: DatePipe,public platform: Platform, private emailcomp: EmailComposer, private router: Router, private emailS: EmailService, private http: HttpClientModule, private http1: HttpClient, private service: ServiceService) {this.oninit(), this.message = this.service.maseage,this.list=this.service.list1, this.onask() }

  // btngroup1=new FormControl("");

  form1: FormGroup;
  // phone = new FormControl("", [Validators.required]);
  // username = new FormControl("" ,[Validators.required]);
  // email=new FormControl("",  [Validators.required, Validators.email])

  // oninit(){
 
  //   this.form =new FormGroup({
  //     "data":this.date1,
  //     "btngroup1":this.btngroup1

  //     });
  //  }

  oninit(){
 
    this.form1 =new FormGroup({
     "date1":this.date1
      });
   }


  onsubmit(status: string) {
    // alert(this.service.place+" "+this.service.parasha)
    this.service.place = this.y;
    this.add = false;
    this.onsendmail()
  }

  onsendmail() {
    if(this.service.parasha==''|| this.service.parasha==undefined ){
     
        alert("לא ניתן לשלוח הודעה ריקה!")
    
    }
    else{

// if(){
//   let email = {
//     to: 'brachi2626@gmail.com',
//     cc: 'andup987@gmail.com, pesir310@gmail.com',
//     subject: 'עידכון חדש מאת '+this.service.phone,
//     body: 'אדון ' + this.service.name + 'מבקש להודיע על ביטול הודעה קודמת'
//   };
// }
// else{
    let body = 'אדון ' + this.service.name + '( '+this.service.phone+' ) מודיע: ' + this.service.maseage + ' ב: ' + this.service.parasha + '( ' + this.service.place + ')'
    let email = {
      to: 'brachi2626@gmail.com',
      cc: 'andup987@gmail.com, pesir310@gmail.com',
      subject: 'עידכון חדש מאת '+this.service.phone,
      body: 'אדון ' + this.service.name + ' מודיע: ' + this.service.maseage + ' ב: ' + this.service.parasha + '( ' + this.service.place + ')',
      isHtml: true
    };
  // }
    // Send a text message using default options
    this.emailcomp.open(email);
    // this.xxx = this.service.parasha + " " + this.service.place
    //  alert(this.xxx)
    if (this.add && this.service.add <= 3) {
      // alert("if1")
      this.service.add++;
      this.router.navigate(['tab1'])
      this.add = false
    }

    else {
      if (this.service.add != 1) {
        this.router.navigate(['tab5'])
        this.add = false
      }
      else {
        this.router.navigate(['tab4'])
      }
    }


    this.service.place = null;;
    this.service.parasha = '';
    this.service.maseage = '';
  }

  }
  onadd() {
    if(this.status=='parasha'){
      if(this.next==true){
        this.x++;
        this.next=false
      }
      else{
        alert('לא ניתן לקבוע סידור מקומות מעבר לשבתות החודש הקרוב')
      }
    }
    else
    if (this.x < (this.list.length - 3)) {
      this.x++;
    }
  }
  onminus() 
  {
    if(this.status=='parasha'){
      if(this.next==false){
        this.x--;
        this.next=true
      }
      else{
        alert('לא ניתן לקבוע סידור מקומות מעבר לשבתות החודש הקרוב')
      }
    }
    else
    if (this.x > 0) {
      this.x--;
    }
  }

  onadd1() {
    if(this.y<10){
    this.y++;
    if (this.message === 'יש לי אורח') {
      this.xxxx = "+ " + this.y + " מקומות"
    }
    else {
      this.xxxx = "- " + this.y + " מקומות"
    }
  }
  else{
    alert('מספר מקומות מוגבל ל -10')
  }
  }
  onminus1() {
    if (this.y > 1) {
      this.y--;
    }
    if (this.message === 'יש לי אורח') {
      this.xxxx = "+ " + this.y + " מקומות"
    }
    else {
      this.xxxx = "- " + this.y + " מקומות"
    }
  }

  try() {
    this.xxx = this.parashot[this.y]
  }

  cutaString(stringf: string) {
    let stringS = '';
    for (let i = 4; i < stringf.length; i++) {
      stringS = stringS + stringf[i];
    }
    return (stringS)


  }



  onask() {
    let myDate = new Date();
    let now = Date.now();
    var birthday = myDate;
    var day1 = birthday.getDay();
    let x = 7 - day1;
    x--
    let date = new Date();
    date.setDate(date.getDate() + x);
    let shortnow=this.datePipe.transform(date,"yyyy-MM-dd");
    let url = 'https://www.hebcal.com/hebcal/?v=1&cfg=json&maj=off&min=off&mod=off&nx=off&year=now&month=x&ss=off&mf=off&c=off&geo=geoname&geonameid=3448439&m=50&s=on';
    return this.http1.get(url).subscribe((res: any) => {
      console.log(res);
      console.log("****************");
      let x: { data: any, items: any[], latitude: any, link: any, location: any, longitude: any, title: any };
      let y: { category: any, date: any, hebrew: any, leyning: any, triennial: any, link: any, title: any }
      x = res;
      for (let i = 0; i < 48; i++) {
        y = x.items[i]
        if(y.date==shortnow){
          let index=i
          for(let j=0;j<48;j++){
            y=x.items[index]
            let yy = this.cutaString(y.hebrew)
             this.parashot[j] = yy;
             if(index==48){
               index=0
             }else{
               index++
             }
            
          }
        }
      }
    });

  }
  getdisplay() {
    if (this.date === true) {
      return ('none')
    }
  }
  onselect(status: string) {
    this.x = 0;
    this.y =1;
    this.status=status
    if (status == 'parasha') {
      this.date = false
      this.list = this.parashot;
      this.service.list1=this.list
      this.onask()
    }
    else {
      if (status == 'hag') {
        // alert("hag")
        this.date = false
        this.list = this.hagim;
        this.service.list1=this.hagim
        // this.oninit()
      }
      else {
        // this.dateselected=this.form.value.data
        // alert(this.dateselected) 
        this.date = true
      }
    }
  }


  onaddm() {
    this.add = true;
    this.addlimited++;
    if (this.service.add == 3) {
      alert("לא ניתן לשלוח יותר מ 3 הודעות ברצף.")
      this.router.navigate(['tab5'])
      this.add = false
    }
    else {
      this.onsendmail()
    }
  }

  onselectParsha(place: number) {
    let parasha = this.parashot[this.x + place]
    this.service.parasha = parasha
    this.xxx = "שבת פרשת " + parasha;

    if (this.message === 'יש לי אורח') {
      this.xxxx = "+1 מקומות";
    }
    else {
      this.xxxx = "-1 מקומות";
    }

  }

  onselecthag(place:number){
    let hag = this.hagim[this.x + place]
    this.service.parasha = hag
    this.xxx = hag;

    if (this.message === 'יש לי אורח') {
      this.xxxx = "+1 מקומות";
    }
    else {
      this.xxxx = "-1 מקומות";
    }

  }

  select(place:number){
    this.y=1
    this.p=place
    if(this.status=='parasha'){
      this.onselectParsha(place)
    }
    else{
      if(this.status=='hag'){
        this.onselecthag(place)
      }
    }}

    onchange(form:any){

      this.service.parasha = form.value.date1
      this.xxx ="בתאריך: "+form.value.date1;
  
      if (this.message === 'יש לי אורח') {
        this.xxxx = "+1 מקומות";
      }
      else {
        this.xxxx = "-1 מקומות";
      }
     

    }


    onclean(){
      this.xxx='';
      this.xxxx='';
      this.service.parasha='';
      this.service.place=null
    }
  }

  



