import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-compra',
  imports: [FormsModule, CommonModule],
  templateUrl: './compra.html',
  styleUrl: './compra.css'
})
export class Compra implements OnInit {

  producto: any = null;

  nombre: string = '';
  correo: string = '';
  cantidad: number = 1;
  metodoPago: string = '';

  mensaje: string = '';

  constructor(private location: Location) {}

  ngOnInit(): void {

    const navigation: any = this.location.getState();

    if (navigation && navigation.producto) {
      this.producto = navigation.producto;
    }

  }

  confirmarCompra(): void {

    console.log('Producto:', this.producto);
    console.log('Nombre:', this.nombre);
    console.log('Correo:', this.correo);
    console.log('Cantidad:', this.cantidad);
    console.log('Método de pago:', this.metodoPago);

    this.mensaje = '✅ ¡Compra realizada correctamente!';
  }
}
