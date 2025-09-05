<script setup lang="ts">
  import type { Component, FunctionalComponent } from 'vue'

  interface MissionCardProps {
    title: string
    point: number
    icon: FunctionalComponent | Component | null
    isChecked: boolean
  }

  const props = withDefaults(defineProps<MissionCardProps>(), {
    title: 'title',
    point: 0,
    icon: null,
    isChecked: false
  })
</script>

<template>
  <div class="w-full px-3 bg-cover bg-[url('/paper-texture.jpg')] shadow-md rounded-lg">
    <div class="flex justify-center items-center gap-3">
      <component :is="icon" class="w-10 h-10 text-amber-800" />
      <div class="w-full flex flex-col justify-center items-center divide-y divide-gray-200">
        <div class="w-full py-2">
          <h3 class="text-sm text-amber-800">{{ title }}</h3>
        </div>
        <div class="w-full py-2 flex justify-between items-center">
          <h4 class="text-xs text-amber-700">累積點數：{{ point }}</h4>
          <h5 class="text-xs text-amber-700">TEST</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
