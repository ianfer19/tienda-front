import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Auth } from 'src/app/interfaces/Auth';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {

  constructor (private authService: AuthService, private router: Router){}

  users = [
    { username: 'admin', password: 'admin' },
    { username: 'iamfer19', password: 'iamfer19' },
  ];

  error: string | undefined;

  newUsername = '';
  userExists = false;
  newPassword = '';

  auth :Auth={
    email: '',
    password: '',
  }

  ngOnInit(){
  }

  showLoginForm: boolean = true;



  botonregister(){
    this.router.navigate(['/login/register']);
}

  botonlogin(){
    this.router.navigate(['/login']);
}

registerUser() {
  // Verificar si el usuario ya existe antes de registrar
  const userExists = this.users.some(user => user.username === this.newUsername);

  if (userExists) {
    this.error = 'Este usuario ya existe';
  } else {
    const usuario = this.newUsername;
    localStorage.setItem('token',usuario);
    this.router.navigate(['/']);
    this.users.push({ username: this.newUsername, password: this.newPassword });
  }
}
}
