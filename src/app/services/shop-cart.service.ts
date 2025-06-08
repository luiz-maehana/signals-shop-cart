import { computed, effect, Injectable, signal } from '@angular/core'
import { Product } from '../models/product'
import { CartItem } from '../models/cart-item'

const STORAGE_KEY = 'cart-products'

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

  shopCartList = signal<Product[]>([])
  selectedProduct = signal<Product | null>(null)

  constructor() {
    this.loadFromStorage()
    effect(() => {
      const products = this.shopCartList()
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
    })
  }

  selectProduct(product: Product) {
    this.selectedProduct.set(product)
  }

  addToShopCart(product: Product) {
    this.shopCartList.update((products) => [...products, product])
  }

  removeFromShopCart(product: Product) {
    let removed = false
    this.shopCartList.update((products) =>
      products.filter((p) => {
        if (!removed && p.name === product.name) {
          removed = true
          return false
        }
        return true
      })
    )
  }

  private loadFromStorage() {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!!data) {
      try {
        const parsed: Product[] = JSON.parse(data)
        this.shopCartList.set(parsed.filter(p => p.name && p.price))
      } catch {
        this.shopCartList.set([])
      }
    }
  }

  cartItems = computed(() => {
    const grouped = new Map<string, CartItem>()
    for (const product of this.shopCartList()) {
      const existing = grouped.get(product.name)
      if (existing) {
        existing.quantity++
      } else {
        grouped.set(product.name, { product, quantity: 1 })
      }
    }
    return Array.from(grouped.values())
  })

  priceTotal = computed(() => {
    return this.cartItems().reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  })

  cartTotal = computed(() => {
    return this.shopCartList().length
  })
}
