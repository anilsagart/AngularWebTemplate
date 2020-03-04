import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // variables which holds the data 
  userName: String;
  password: String;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // function which is linked to the login button 
  onLogin = function () {

    if (this.userName == "admin" && this.password == "nous123") {
      this.router.navigateByUrl('/Home');
    }
    else {
      alert("Please provide the correct username and password!")
    }
  }

  // function which updates username value on key press
  getUserName($event: Event) {
    this.userName = (event.target as HTMLInputElement).value;
  }

  // function which updates password value on key press
  getPassword($event: Event) {
    this.password = (event.target as HTMLInputElement).value;
  }

}
