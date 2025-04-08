import type { Category } from '@/interfaces/Filter.interface.ts'

export interface ProductInterface {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: Category;
}
