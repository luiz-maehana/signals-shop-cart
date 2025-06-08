import { Component } from '@angular/core'
import { ShopCartService } from '../../services/shop-cart.service'
import { Product } from '../../models/product'
import { ListService } from '../../services/list.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  products = this.listService.paginatedProducts
  currentPage = this.listService.currentPage
  totalPages = this.listService.totalPages

  constructor(
    public shopCartService: ShopCartService,
    public listService: ListService
  ) { }

  goToPage(page: number) {
    this.listService.setPage(page)
  }

  next() {
    this.listService.nextPage()
  }

  previous() {
    this.listService.previousPage()
  }

  viewProduct(product: Product) {
    this.shopCartService.selectProduct(product)
  }
}
