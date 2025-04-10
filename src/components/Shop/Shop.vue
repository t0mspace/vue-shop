<script setup lang="ts">
import type { FiltersInterface, ProductInterface } from '@/interfaces'
import ShopProductList from './ShopProductList.vue'
import type { FilterUpdate } from '@/data/filters.ts'
import ShopFilters from '@/components/Shop/ShopFilters.vue'

defineProps<{
  products: ProductInterface[]
  filters: FiltersInterface
}>()

const emit = defineEmits<{
  (e: 'addProductToCart', productId: number): void
  (e: 'updateFilter', updateFilter: FilterUpdate): void
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
      :products="products"
    />
  </div>
</template>

<style lang="scss" scoped></style>
