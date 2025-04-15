import type { Category } from '@/interfaces/types.ts'

export interface FiltersInterface {
  search: string
  priceRange: [number, number]
  category: Category
}
