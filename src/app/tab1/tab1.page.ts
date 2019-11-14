import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceService } from '../service.service'
import { EmailComposer } from '@ionic-native/email-composer/ngx';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 name:string
  constructor (private router:Router,private emailcomp:EmailComposer, private service:ServiceService){this.name=this.service.name}

  onclick(status:string){
    // alert(status);
    // this.router.navigate(['tab2']);
    if(status=='free'){
      this.service.maseage="המקום שלי פנוי"
    }
    else{
      this.service.maseage="יש לי אורח"
    }
    this.router.navigate(['tab2'])


  }
  oncencel(){
    // this.router.navigate(['tab3'])
    this.onsendmail()

  }


  
  onsendmail(){
   
    // this.emailcomp.isAvailable().then((available: boolean) =>{
    //   if(available) {
    //     //Now we know we can send
    //   }
    //  });
     
     let body='אדון '+(this.service.name)+' מספר טלפון: '+(this.service.phone)+' מבקש לבטל הודעה אחרונה'
     // this.emailS.sendEmail ('andup987@gmail.com','brachi2626@gmail.com','new message',body)
 
     // if (this.platform.is('cordova')) {
       let email = {
         to: 'brachi2626@gmail.com',
         cc: 'andup987@gmail.com, pesir310@gmail.com',
         // bcc: ['john@doe.com', 'jane@doe.com'],
         subject: 'עדכון מאת '+this.service.phone,
         body : 'אדון '+(this.service.name)+' מספר טלפון: '+(this.service.phone)+' מבקש לבטל הודעה אחרונה',
         isHtml: true
       };
     
     // Send a temailcompext message using default options
     this.emailcomp.open(email);
    //  this.xxx=this.service.parasha+" "+ this.service.place
    //  alert(this.xxx)
      // alert("if1")
      // this.service.add++;
      this.router.navigate(['tab3'])
    
    // else{
    //   alert(this.service.add)
    //   if(this.service.add==4){
    //     alert("if2")
       
    //     // this.service.add=1
    //           }
   

  }
}
