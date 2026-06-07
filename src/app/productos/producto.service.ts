import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'https://localhost:7084/api/productos';

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  buscar(id?: number, nombre?: string): Observable<Producto[]> {

    let params = new HttpParams();

    if (id) params = params.set('id', id);
    if (nombre) params = params.set('nombre', nombre);

    return this.http.get<Producto[]>(
      `${this.apiUrl}/find`,
      { params }
    );
  }

  crearProducto(producto: Producto) {

  return this.http.post(
      this.apiUrl,
      producto
  );

  }
}
