<script setup lang="ts">
import type { FiltersInterface, ProductInterface } from '@/interfaces'
import ShopProductList from './ShopProductList.vue'
import type { FilterUpdate } from '@/features/shop/datas/filters.ts'
import ShopFilters from '@/features/shop/components/Shop/ShopFilters.vue'

defineProps<{
  products: ProductInterface[]
  filters: FiltersInterface
}>()

const emit = defineEmits<{
  (e: 'addProductToCart', productId: number): void
  (e: 'updateFilter', updateFilter: FilterUpdate): void
  (e: 'loadMoreProduct'): void
}>()
</script>

<template>
  <div class="d-flex flex-row">
    <ShopFilters
      :nbr-of-products="products.length"
      :filters="filters"
      @updateFilter="emit('updateFilter', $event)"
      class="shop-filters"
    />
    <ShopProductList
      :filters="filters"
      @add-product-to-cart="emit('addProductToCart', $event)"
      @update-filter="emit('updateFilter', $event)"
      @loadMoreProduct="emit('loadMoreProduct')"
      :products="products"
    />
  </div>
</template>

<style lang="scss" scoped></style>
