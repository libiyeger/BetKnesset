import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// import { BsDatepickerModule } from 'boo'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FormsModule } from '@angular/forms'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DatePipe } from '@angular/common';
// import {ReactiveFormsModule } from '@angular/forms';

// import {ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder, NgForm} from
// "@angular/forms";
// import 'rxjs/Rx';


// import { HTTP } from '@ionic-native/http';
// import { EmailComposer } from '@ionic-native/email-composer';

import { Camera } from '@ionic-native/camera/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { DatePipe } from '@angular/common';
import {DeviceDetectorModule} from 'ngx-device-detector';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ReactiveFormsModule,BrowserModule,BsDatepickerModule.forRoot(),DeviceDetectorModule.forRoot(),FormsModule,ReactiveFormsModule,HttpClientModule,IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    EmailComposer,
    DatePipe,
    // EmailComposer,
    // DatePipe,
    // HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
