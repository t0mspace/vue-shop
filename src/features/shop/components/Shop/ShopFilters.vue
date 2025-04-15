<script setup lang="ts">
import type { Category, FiltersInterface } from '@/interfaces'
import type { FilterUpdate } from '@/features/shop/datas/filters.ts'

defineProps<{
  filters: FiltersInterface
  nbrOfProducts: number
}>()

const emit = defineEmits<{
  (e: 'updateFilter', filterUpdate: FilterUpdate): void
}>()
</script>

<template>
  <div class="p-20">
    <section>
      <h3>Rechercher</h3>
      <input
        :value="filters.search"
        @input="emit('updateFilter', { search: ($event.target as HTMLInputElement).value })"
        type="text"
        placeholder="Recherche"
      />
    </section>
    <section>
      <h3>Choisir la fourchette des prix</h3>
      <div
        class="mb-5"
        v-for="(priceRange, index) in [
          [0, 10000],
          [800, 1000],
          [1000, 1500],
          [1500, 2000],
        ] as [number, number][]"
        :key="index"
      >
        <label :for="`${priceRange[0]}-${priceRange[1]}`">
          {{ priceRange[0] }} - {{ priceRange[1] }}
        </label>
        <input
          :checked="filters.priceRange[0] === priceRange[0]"
          type="radio"
          @input="$emit('updateFilter', { priceRange })"
          name="priceRange"
          :id="`${priceRange[0]}-${priceRange[1]}`"
          :value="`${priceRange[0]}-${priceRange[1]}`"
        />
      </div>
    </section>
    <section>
      <h3>Trier par catégorie</h3>
      <div class="mb-5" v-for="category in ['all', 'streaming', 'gamer', 'pro'] as Category[]">
        <label :for="category"> {{ category }} </label>
        <input
          type="radio"
          @input="$emit('updateFilter', { category })"
          name="category"
          :id="`${category}`"
          :value="`${category}`"
        />
      </div>
    </section>
    <small>Result: {{ nbrOfProducts }}</small>
    <button class="btn btn-danger" @click="emit('updateFilter', {})">Reset filters</button>
  </div>
</template>

<style scoped lang="scss"></style>
