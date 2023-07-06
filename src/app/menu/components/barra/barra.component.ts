import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent {
  constructor ( private router: Router){}

  [x: string]: any;

  token = localStorage.getItem('token');
  searchTerm!: string;
  resultados: any[] | undefined;

  ngOnInit(){
  }


  out(){
    this.router.navigate(['/login']);
    localStorage.removeItem('token');
  }

  carrito(){
  this.router.navigate(['/carrito']);
  }



}
