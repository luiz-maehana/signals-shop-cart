import { Component } from '@angular/core';
import { Product, ShopCartService } from '../../services/shop-cart.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  constructor(public shopCartService: ShopCartService) { }

  viewProduct(product: Product) {
    this.shopCartService.selectProduct(product)
  }
}
