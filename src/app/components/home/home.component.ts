import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() isLogOut = new EventEmitter<void>()

  constructor(public firebaseService:FirebaseService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.firebaseService.logOut();
    this.isLogOut.emit();
  }
}
