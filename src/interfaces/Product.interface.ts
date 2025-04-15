import type { Category } from '@/interfaces/types.ts'

export interface ProductInterface {
  id: number
  title: string
  image: string
  price: number
  description: string
  category: Category
}
