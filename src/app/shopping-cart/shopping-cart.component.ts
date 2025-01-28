import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  @Input() cartItems: Product[] = [];

  get total(): number {
    // Verificar que los precios no sean negativos
    return this.cartItems.reduce((sum, item) => sum + Math.max(item.price, 0), 0);
  }

  // Función para eliminar un producto del carrito
  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
  }
}
