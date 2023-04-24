import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  firstname: string = "";
  lastname: string = "";
  password: string = "";
  confirmpassword: string = "";
  email: string = "";
  phone: string = "";
  pleaseSelectYourSecurityQuestion: string = "";
  enterYourAnswer: string = "";
  town: string = "";
  suburb: string = "";
  street: string = "";
  code: string = "";

  constructor(private router: Router) {}

  ngOnInit(): void {}

  registerSubmit() {
    const user = {
      name: this.firstname,
      surname: this.lastname,
      email: this.email,
      address: {
        town: this.town,
        suburb: this.suburb,
        street: this.street,
        code: this.code
      }
    };

    const usersJSON = localStorage.getItem('users') || '[]';
    const users = JSON.parse(usersJSON);
    const loginUser = users.find((user: any) => user.email === this.email && user.password === this.password);
    if (loginUser) {
      alert('User Logged In Successful');
      this.router.navigate(['/home']);
    } else {
      alert('User doesn\'t exist');
      this.router.navigate(['/register']);
    }
  }
}
