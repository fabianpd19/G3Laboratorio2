import { Component, HostListener } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { Product } from './product';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, ProductDetailsComponent, ShoppingCartComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedProduct: Product | null = null;
  cart: Product[] = [];
  isMobileView: boolean = window.innerWidth <= 768;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobileView = window.innerWidth <= 768;
  }

  onSelectProduct(product: Product) {
    this.selectedProduct = product;
  }

  onAddToCart(product: Product) {
    this.cart.push(product);
  }
}
