import { Component } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  message:string
  constructor (private router:Router, ){}

  onclick(status:string){
    // alert(status);
    // this.router.navigate(['tab2']);
    this.router.navigate(['tab4'])


  }
}
