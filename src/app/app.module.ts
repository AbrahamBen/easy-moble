import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import { HomeComponent } from './components/home/home.component';
import {FirebaseService} from './services/firebase.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBmqixvP0uJXs12r5S3ZkibYTu-kjOGLBg",
      authDomain: "easy-mobile-ceda9.firebaseapp.com",
      databaseURL: "https://easy-mobile-ceda9.firebaseio.com",
      projectId: "easy-mobile-ceda9",
      storageBucket: "easy-mobile-ceda9.appspot.com",
      messagingSenderId: "836746075163",
      appId: "1:836746075163:web:7ea6742b0176557e252cbe"

    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
