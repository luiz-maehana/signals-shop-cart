import { Component } from '@angular/core';
import { ShopCartService } from '../../services/shop-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public shopCartService: ShopCartService) { }

}
