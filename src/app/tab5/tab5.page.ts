import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service'


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(private service:ServiceService) { }
  x=this.service.add;
  

  ngOnInit() {
    this.service.add=1;
  }

}
