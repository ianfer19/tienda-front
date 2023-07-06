import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  constructor ( private router: Router){}

  productos: Producto[] = [];

  carrito: any[] = [];

  ngOnInit(){
    this.VerificarSiHayToken();
    this.leerCarrito();
    this.productos= this.carrito;
  }

  VerificarSiHayToken(){
    const token = localStorage.getItem('token');
    if(!token){
      this.router.navigate(['/login']);
    }
  }

  removerItemCarrito(producto: { nombre: any; }) {
    const indice = this.carrito.findIndex(item => item.nombre === producto.nombre);
    if (indice !== -1) {
      this.carrito.splice(indice, 1);
      localStorage.setItem('carrito', JSON.stringify(this.carrito));
    }
  }

  leerCarrito(){
    const carrito = localStorage.getItem('carrito');
    if (carrito) {
      this.carrito = JSON.parse(carrito);
    }
  }
}
