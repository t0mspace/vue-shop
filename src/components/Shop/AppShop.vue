<script setup lang="ts">
import type { ProductInterface } from '@/interfaces'
import AppShopProductList from './AppShopProductList.vue'

defineProps<{
  products: ProductInterface[]
}>()

const emit = defineEmits<{
  (e: 'addProductToCart', productId: number): void
}>()
</script>

<template>
  <div>
    <AppShopProductList
      @add-product-to-cart="emit('addProductToCart', $event)"
      :products="products"
    />
  </div>
</template>

<style lang="scss" scoped></style>
