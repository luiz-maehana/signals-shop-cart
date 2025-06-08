import { computed, Injectable, signal } from '@angular/core'
import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ListService {
  products = signal<Product[]>([
    {
      name: 'Camiseta Básica',
      price: 49.90,
      category: 'Roupas',
      photo: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
      description: 'Camiseta leve e confortável, perfeita para o dia a dia com estilo casual.'
    },
    {
      name: 'Tênis Esportivo',
      price: 199.90,
      category: 'Calçados',
      photo: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=400&q=80',
      description: 'Tênis esportivo com amortecimento avançado, ideal para treinos e corridas.'
    },
    {
      name: 'Relógio de Pulso',
      price: 350.0,
      category: 'Acessórios',
      photo: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
      description: 'Relógio analógico moderno com pulseira ajustável e design elegante.'
    },
    {
      name: 'Mochila Escolar',
      price: 120.5,
      category: 'Bolsas',
      photo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      description: 'Mochila resistente com vários compartimentos, ideal para escola ou trabalho.'
    },
    {
      name: 'Óculos de Sol',
      price: 220.0,
      category: 'Acessórios',
      photo: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=400&q=80',
      description: 'Óculos de sol com proteção UV e armação moderna, perfeito para dias ensolarados.'
    },
    {
      name: 'Camisa Social',
      price: 89.99,
      category: 'Roupas',
      photo: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80',
      description: 'Camisa social de algodão, ideal para ambientes formais e eventos especiais.'
    },
    {
      name: 'Calça Jeans',
      price: 129.9,
      category: 'Roupas',
      photo: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
      description: 'Calça jeans de corte reto com excelente caimento e conforto para o dia a dia.'
    },
    {
      name: 'Tênis Casual',
      price: 149.5,
      category: 'Calçados',
      photo: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80',
      description: 'Tênis casual versátil, combina com diversos estilos e ocasiões.'
    },
    {
      name: 'Bolsa de Couro',
      price: 300.0,
      category: 'Bolsas',
      photo: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80',
      description: 'Bolsa elegante em couro legítimo, com acabamento refinado e espaço interno amplo.'
    },
    {
      name: 'Jaqueta Jeans',
      price: 199.9,
      category: 'Roupas',
      photo: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80',
      description: 'Jaqueta jeans atemporal, ideal para compor looks urbanos e modernos.'
    },
    {
      name: 'Chapéu Estilo Fedora',
      price: 79.99,
      category: 'Acessórios',
      photo: 'https://images.unsplash.com/photo-1494028698538-2cd52a400b17?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVkb3JhfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000',
      description: 'Chapéu estilo fedora com design clássico e acabamento de alta qualidade.'
    },
    {
      name: 'Sandália Feminina',
      price: 89.9,
      category: 'Calçados',
      photo: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
      description: 'Sandália leve e estilosa, perfeita para dias quentes com muito conforto.'
    },
    {
      name: 'Cinto de Couro',
      price: 59.99,
      category: 'Acessórios',
      photo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      description: 'Cinto de couro com fivela metálica, ideal para complementar o visual com elegância.'
    },
    {
      name: 'Vestido Casual',
      price: 129.9,
      category: 'Roupas',
      photo: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
      description: 'Vestido leve e confortável, ideal para passeios e encontros informais.'
    },
    {
      name: 'Tênis de Corrida',
      price: 230.0,
      category: 'Calçados',
      photo: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=400&q=80',
      description: 'Tênis de corrida com alta performance, conforto e resistência para atletas.'
    },
    {
      name: 'Bolsa Tiracolo',
      price: 180.0,
      category: 'Bolsas',
      photo: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80',
      description: 'Bolsa tiracolo prática e moderna, ideal para o dia a dia com estilo.'
    },
    {
      name: 'Camisa Polo',
      price: 75.5,
      category: 'Roupas',
      photo: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80',
      description: 'Camisa polo com toque macio e caimento impecável para um visual sofisticado.'
    },
    {
      name: 'Tênis Skate',
      price: 140.0,
      category: 'Calçados',
      photo: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80',
      description: 'Tênis robusto e estiloso, feito para garantir aderência e conforto ao andar de skate.'
    },
    {
      name: 'Relógio Digital',
      price: 400.0,
      category: 'Acessórios',
      photo: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
      description: 'Relógio digital moderno com múltiplas funções e resistência à água.'
    },
    {
      name: 'Jaqueta de Couro',
      price: 350.0,
      category: 'Roupas',
      photo: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
      description: 'Jaqueta de couro sofisticada, perfeita para um visual marcante e durável.'
    },
  ])

  pageSize = signal(8)
  currentPage = signal(1)

  totalPages = computed(() =>
    Math.ceil(this.products().length / this.pageSize())
  )

  paginatedProducts = computed(() => {
    const page = this.currentPage()
    const size = this.pageSize()
    const start = (page - 1) * size
    return this.products().slice(start, start + size)
  })

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page)
    }
  }

  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update(v => v + 1)
    }
  }

  previousPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update(v => v - 1)
    }
  }
}
