import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { Product } from './product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, ProductDetailsComponent, ShoppingCartComponent], // Importa los componentes que se usen aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedProduct: Product | null = null;
  cart: Product[] = [];

  onSelectProduct(product: Product) {
    this.selectedProduct = product;
  }

  onAddToCart(product: Product) {
    this.cart.push(product);
  }
}
