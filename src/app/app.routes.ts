import { Routes } from '@angular/router';
import { ProductoPage } from './productos/producto-page/producto-page';

export const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'productos', component: ProductoPage }
];
