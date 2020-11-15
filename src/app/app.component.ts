import {Component, OnInit} from '@angular/core';
import {FirebaseService} from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'easy-mobile';
  isSignIn = false;

constructor(public firebaseService:FirebaseService) {
}

  ngOnInit(): void {
  if (localStorage.getItem('user') !== null){
    this.isSignIn = true;
  }else{
    this.isSignIn = false;
  }
  }

  async onSignup(email: string, password: string) {

    await this.firebaseService.signup(email,password);

    if (this.firebaseService.isLoggIn)
      this.isSignIn = false;
  }

  async onSignIn(email: string, password: string) {
    await this.firebaseService.signin(email,password);

    if (this.firebaseService.isLoggIn)
      this.isSignIn = true;

  }

  handelerLogout(){
 this.isSignIn = false;

}
}
