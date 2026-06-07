import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './producto-page.html'
})
export class ProductoPage implements OnInit {

  productos: Producto[] = [];

  codigo?: number;

  nombre = '';

  mostrarModal = false;

  nuevoNombre = '';

  nuevoPrecio = 0;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.obtenerProductos()
      .subscribe(data => {
        this.productos = data;
      });
  }

  buscar(): void {

  this.productoService
      .buscar(
          this.codigo,
          this.nombre)
      .subscribe(data => {

          this.productos = data;

      });

  }

  limpiar(): void {

  this.codigo = undefined;
  this.nombre = '';

  this.cargarProductos();
  }


  abrirModal(): void {
  console.log('CLICK EN NUEVO PRODUCTO');
  this.nuevoNombre = '';

  this.nuevoPrecio = 0;

  this.mostrarModal = true;

  }


  cerrarModal(): void {

  this.mostrarModal = false;

  }

  guardarProducto(): void {

  const producto: Producto  = {

    id: 0,

    nombre: this.nuevoNombre,

    precio: this.nuevoPrecio


  }

  this.productoService
      .crearProducto(producto)
      .subscribe(() => {

        this.cerrarModal();

        this.cargarProductos();

      });

}

}
