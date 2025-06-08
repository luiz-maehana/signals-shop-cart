import { computed, effect, Injectable, signal } from '@angular/core'

const STORAGE_KEY = 'cart-products'

interface CartItem {
  product: Product
  quantity: number
}

export interface Product {
  name: string
  price: number
  category: string
  photo: string
}

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

  shopCartList = signal<Product[]>([])
  selectedProduct = signal<Product | null>(null)

  products: Product[] = [
    {
      name: 'Camiseta Básica',
      price: 49.90,
      category: 'Roupas',
      photo: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Tênis Esportivo',
      price: 199.90,
      category: 'Calçados',
      photo: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Relógio de Pulso',
      price: 350.0,
      category: 'Acessórios',
      photo: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Mochila Escolar',
      price: 120.5,
      category: 'Bolsas',
      photo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Óculos de Sol',
      price: 220.0,
      category: 'Acessórios',
      photo: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Camisa Social',
      price: 89.99,
      category: 'Roupas',
      photo: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Calça Jeans',
      price: 129.9,
      category: 'Roupas',
      photo: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Tênis Casual',
      price: 149.5,
      category: 'Calçados',
      photo: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Bolsa de Couro',
      price: 300.0,
      category: 'Bolsas',
      photo: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Jaqueta Jeans',
      price: 199.9,
      category: 'Roupas',
      photo: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Chapéu Estilo Fedora',
      price: 79.99,
      category: 'Acessórios',
      photo: 'https://images.unsplash.com/photo-1494028698538-2cd52a400b17?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVkb3JhfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000',
    },
    {
      name: 'Sandália Feminina',
      price: 89.9,
      category: 'Calçados',
      photo: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Cinto de Couro',
      price: 59.99,
      category: 'Acessórios',
      photo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Vestido Casual',
      price: 129.9,
      category: 'Roupas',
      photo: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Tênis de Corrida',
      price: 230.0,
      category: 'Calçados',
      photo: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Bolsa Tiracolo',
      price: 180.0,
      category: 'Bolsas',
      photo: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Camisa Polo',
      price: 75.5,
      category: 'Roupas',
      photo: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Tênis Skate',
      price: 140.0,
      category: 'Calçados',
      photo: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Relógio Digital',
      price: 400.0,
      category: 'Acessórios',
      photo: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Jaqueta de Couro',
      price: 350.0,
      category: 'Roupas',
      photo: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
    },
  ]

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

  getSelectedProduct() {
    return this.selectedProduct()
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

  total = computed(() => {
    return this.cartItems().reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  })
}
