<script setup lang="ts">
import type { FiltersInterface } from '@/interfaces'
import type { FilterUpdate } from '@/data/filters.ts'

defineProps<{
  filters: FiltersInterface
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
      Choisir la fourchette des prix
      <div class="mb-5">
        <label for="0-10000">De 0 à 10000 eur</label>
        <input
          type="radio"
          @input="emit('updateFilter', { priceRange: [0, 10000] })"
          name="priceRange"
          id="0-10000"
        />
      </div>
      <div class="mb-5">
        <label for="800-1000">800-1000</label>
        <input
          type="radio"
          name="priceRange"
          id="800-1000"
          @input="emit('updateFilter', { priceRange: [800, 1000] })"
        />
      </div>
      <div class="mb-5">
        <label for="1000-1500">1000-1500</label>
        <input
          type="radio"
          name="priceRange"
          id="1000-1500"
          @input="emit('updateFilter', { priceRange: [1000, 1500] })"
        />
      </div>
      <div class="mb-5">
        <label for="1500-2000">1500-2000</label>
        <input
          @input="emit('updateFilter', { priceRange: [1500, 2000] })"
          type="radio"
          name="priceRange"
          id="1500-2000"
        />
      </div>
      <div class="mb-5">
        <label for="2000-10000">2000-10000</label>
        <input
          @input="emit('updateFilter', { priceRange: [2000, 10000] })"
          type="radio"
          name="priceRange"
          id="2000-10000"
        />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
