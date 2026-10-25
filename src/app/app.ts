import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  modalAbierto = false;
  tipoModal = '';

  openModal(tipo: string) {
    console.log('Abriendo modal:', tipo);
    this.tipoModal = tipo;
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
    this.tipoModal = '';
  }
}
