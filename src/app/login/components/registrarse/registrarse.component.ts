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

  login(){
  this.router.navigate(['/']);
}
}
