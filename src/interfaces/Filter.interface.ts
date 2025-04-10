export type Category = 'gamer' | 'pro' | 'streaming' | 'all'

export interface FiltersInterface {
  search: string
  priceRange: [number, number]
  category: Category
}
