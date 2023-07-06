import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor ( private router: Router){}


  productos = [
    { nombre: 'Sueter Dolce & Gabanna', categoria: 'Casual', precio: 10, imagen:"https://praiacoleccion.com/wp-content/uploads/2020/04/20200425_133642-scaled-e1588207885672.jpg" },
    { nombre: 'Blusa con rosas', categoria: 'Elegante', precio: 20, imagen: "https://cdn-images.farfetch-contents.com/16/52/46/60/16524660_34981126_600.jpg"},
    { nombre: 'Sueter de Basquet', categoria: 'Deporte', precio: 15, imagen:"https://i.ebayimg.com/thumbs/images/g/UkwAAOSwTmRia-OM/s-l225.png"},
    { nombre: 'Conjunto verde', categoria: 'Informal', precio: 30, imagen:"https://image.made-in-china.com/202f0j00JCalFpUdSqkn/Blank-Logo-Custom-Trendy-Spring-Sweatshirt-and-Shorts-Set-Hot-Sale-Casual-Pullover-Loose-Cotton-Lounge-Wear-Women-Sets-.webp"},
  ];



  ngOnInit(){
    this.VerificarSiHayToken();
  }


  carrito(){
    this.router.navigate(['/']);
  }

  VerificarSiHayToken(){
    const token = localStorage.getItem('token');
    if(!token){
      this.router.navigate(['/login']);
    }
  }



}
