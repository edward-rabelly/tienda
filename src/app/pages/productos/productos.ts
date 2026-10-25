import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-productos',
  standalone: true,  // ← ESTO ES IMPORTANTE
  imports: [CommonModule],
  templateUrl: './productos.html',  // ← Debe ser exactamente así
  styleUrl: './productos.css'
})
export class Productos implements OnInit {
  productos: any[] = [];
  modalAbierto = false;
  tipoModal = '';

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe({
      next: (data: any[]) => {
        this.productos = data;
        console.log('✅ Productos cargados:', data);
      },
      error: (error: any) => {
        console.error('❌ Error:', error);
      }
    });
  }

  comprar(producto: any): void {
    this.router.navigate(['/compra'], {
      state: { producto: producto }
    });
  }

  openModal(tipo: string): void {
    console.log('🔔 Abriendo modal:', tipo);
    this.tipoModal = tipo;
    this.modalAbierto = true;
  }

  cerrarModal(): void {
    this.modalAbierto = false;
    this.tipoModal = '';
  }
}
