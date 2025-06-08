import { Component } from '@angular/core';
import { ShopCartService } from '../../services/shop-cart.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrl: './shop-cart.component.scss'
})
export class ShopCartComponent {
  constructor(public shopCartService: ShopCartService) { }
}
