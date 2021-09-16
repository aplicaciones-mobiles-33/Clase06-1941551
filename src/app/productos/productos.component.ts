import { Component, OnInit } from '@angular/core';
import { Producto } from './productos';

@Component({
  selector: 'productos-component',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  tituloPagina: string = 'Lista de Productos';
  mostrarImagenes: boolean = false;

  private _filtrarProductos : string = '';

  get filtrarProductos(): string {
    return this._filtrarProductos;
  }

  set filtrarProductos(value: string){
    this._filtrarProductos = value;
    console.log(value);
    this.productosFiltrados = this.filtroProductos(value);
  }

  productosFiltrados: Producto[] = [];


  productos: Producto[] = [
  {
    id: 1,
    nombre: "audifonos bluetooth",
    codigo: "BL-50",
    disponibilidad: false,
    precio: 999.99,
    rating: 4.2,
    imageUrl: "../../assets/Cardboardbox_1.png"
  },
  {
    id: 2,
    nombre: "Macbook Pro",
    codigo: "BL-50",
    disponibilidad: true,
    precio: 12000,
    rating: 3.9,
    imageUrl: "../../assets/Cardboardbox_1.png"
  },
  {
    id: 3,
    nombre: "iPhone XS",
    codigo: "BL-50",
    disponibilidad: false,
    precio: 6000,
    rating: 3.2,
    imageUrl: '../../assets/Cardboardbox_1.png'
  },
  {
    id: 4,
    nombre: "Laptop HP",
    codigo: "BL-50",
    disponibilidad: false,
    precio: 10000,
    rating: 4.5,
    imageUrl: '../../assets/Cardboardbox_1.png'
  },
  {
    id: 5,
    nombre: "Samsung Galaxy S3",
    codigo: "BL-50",
    disponibilidad: false,
    precio: 5000,
    rating: 1.2,
    imageUrl: '../../assets/Cardboardbox_1.png'
  },
  {
    id: 6,
    nombre: "Headsets Dell",
    codigo: "BL-50",
    disponibilidad: false,
    precio: 300,
    rating: 3,
    imageUrl: '../../assets/Cardboardbox_1.png'
  }
  ]
  constructor() { }

  filtroProductos(filtrarPor: string): Producto[]{
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.productos.filter((producto: Producto) =>
    producto.nombre.toLocaleLowerCase().includes(filtrarPor));
  }

  toggleImagenes(): void{
    this.mostrarImagenes = this.mostrarImagenes;
  }

  ngOnInit(): void {

    this.filtrarProductos = ' ';
  }

}
