import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // variables which holds the data 
  userName: String;
  password: String;

  constructor() { }

  ngOnInit(): void {
  }

  // function which is linked to the login button 
  onLogin(): void {
    alert("logged in:" + " User Name is : " + this.userName + " Password is : " + this.password);
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
