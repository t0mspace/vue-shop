import type { Category, FiltersInterface } from '@/interfaces'

export const DEFAULT_FILTERS: FiltersInterface = {
  search: '',
  priceRange: [0, 10000],
  category: 'all',
}

export interface FilterUpdate {
  search?: string;
  priceRange?: [number, number];
  category?: Category;
}
