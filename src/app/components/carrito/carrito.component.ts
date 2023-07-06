import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  productos = [
    { nombre: 'Blusa con rosas', categoria: 'Elegante', precio: 20, imagen: "https://cdn-images.farfetch-contents.com/16/52/46/60/16524660_34981126_600.jpg"},
    { nombre: 'Sueter de Basquet', categoria: 'Deporte', precio: 15, imagen:"https://i.ebayimg.com/thumbs/images/g/UkwAAOSwTmRia-OM/s-l225.png"},
    { nombre: 'Conjunto verde', categoria: 'Informal', precio: 30, imagen:"https://image.made-in-china.com/202f0j00JCalFpUdSqkn/Blank-Logo-Custom-Trendy-Spring-Sweatshirt-and-Shorts-Set-Hot-Sale-Casual-Pullover-Loose-Cotton-Lounge-Wear-Women-Sets-.webp"},
  ];
}
