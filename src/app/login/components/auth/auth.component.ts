import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Auth } from 'src/app/interfaces/Auth';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor (private authService: AuthService, private router: Router){}

  username: string | undefined;
  password: string | undefined;
  error: string | undefined;


  auth :Auth={
    email: '',
    password: '',
  }

  users = [
    { username: 'admin', password: 'admin' },
    { username: 'iamfer19', password: 'iamfer19' },
  ];

  ngOnInit(){
  }

  showLoginForm: boolean = true;


  botonregister(){
    this.router.navigate(['/login/register']);
}

  botonlogin(){
    this.router.navigate(['/login']);
}

  login(){
    const user = this.users.find(u => u.username === this.username && u.password === this.password);
    if (user) {
      const usuario = user.username;
      this.router.navigate(['/']);
      localStorage.setItem('token',usuario);
    } else {
      this.error = 'Usuario o contraseña incorrectos.';
    }
  }

}


