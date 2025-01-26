import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  standalone: true, // Esto declara el componente como standalone
  imports: [CommonModule], // Importa módulos comunes que necesites (por ejemplo, *ngFor, *ngIf)
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Output() selectProduct = new EventEmitter<Product>();
  @Output() addToCart = new EventEmitter<Product>();

  products: Product[] = [
    {
      id: 1,
      name: 'Vestido Rojo',
      description: 'Vestido de seda con detalles florales.',
      price: 1500,
      imageUrl: 'https://via.placeholder.com/150',
      onSale: true
    },
    {
      id: 2,
      name: 'Camisa Blanca',
      description: 'Camisa clásica de algodón.',
      price: 800,
      imageUrl: 'https://via.placeholder.com/150',
      onSale: false
    },
    {
      id: 3,
      name: 'Pantalón Negro',
      description: 'Pantalón formal para ocasiones especiales.',
      price: 1200,
      imageUrl: 'https://via.placeholder.com/150',
      onSale: true
    }
  ];

  viewDetails(product: Product) {
    this.selectProduct.emit(product);
  }

  addProductToCart(product: Product) {
    this.addToCart.emit(product);
  }
}
