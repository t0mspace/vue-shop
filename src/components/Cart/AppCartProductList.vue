<script setup lang="ts">
import type { ProductCartInterface } from '@/interfaces'
import AppCartProduct from './AppCartProduct.vue'

defineProps<{
  cart: ProductCartInterface[]
}>()

const emit = defineEmits<{
  (e: 'removeProductFromCart', productId: number): void
}>()
</script>

<template>
  <div class="d-flex flex-column">
    <AppCartProduct
      v-for="product of cart"
      :product="product"
      @remove-product-from-cart="emit('removeProductFromCart', $event)"
      :key="product.id"
    />
  </div>
</template>

<style lang="scss" scoped></style>
