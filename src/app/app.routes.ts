import { Routes } from '@angular/router';
import { Productos } from './pages/productos/productos';
import { Compra } from './pages/compra/compra';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    component: Productos
  },
  {
    path: 'compra',
    component: Compra
  }
];
