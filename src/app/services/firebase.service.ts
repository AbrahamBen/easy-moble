import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggIn = false;

  constructor(public angularFireAuth:AngularFireAuth) { }

  async signin(email:string,password:string){
    await this.angularFireAuth.signInWithEmailAndPassword(email,password)
      .then(res=>{
        this.isLoggIn = true;
        localStorage.setItem('user',JSON.stringify(res.user))
      });
}

  async signup(email:string,password:string){
    await this.angularFireAuth.createUserWithEmailAndPassword(email,password)
      .then(res=>{
        this.isLoggIn = true;
        localStorage.setItem('user',JSON.stringify(res.user))
      });
  }


  public logOut(){
    this.angularFireAuth.signOut();
    localStorage.removeItem('user');
  }
}
