import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login(): void {
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
