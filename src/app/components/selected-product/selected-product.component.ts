import { Component } from '@angular/core';
import { Product, ShopCartService } from '../../services/shop-cart.service';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrl: './selected-product.component.scss'
})
export class SelectedProductComponent {
  constructor(public shopCartService: ShopCartService) { }

  addToShopCart(product: Product) {
    this.shopCartService.addToShopCart(product)
  }
}
