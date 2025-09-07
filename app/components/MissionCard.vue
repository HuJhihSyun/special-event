<script setup lang="ts">
  import type { Component, FunctionalComponent } from 'vue'
  import StarSvg from '@/assets/images/round-star.svg?skipsvgo'

  interface MissionCardProps {
    title: string
    description?: string
    point: number
    star: number
    icon: FunctionalComponent | Component | null
    isChecked?: boolean
  }

  const props = withDefaults(defineProps<MissionCardProps>(), {
    title: 'title',
    point: 0,
    star: 0,
    icon: null,
    isChecked: false
  })
</script>

<template>
  <div class="relative w-full px-3 bg-cover bg-[url('images/paper-texture.jpg')] shadow-md rounded-lg overflow-hidden">
    <div class="flex justify-center items-center gap-3">
      <div class="flex flex-col gap-1">
        <component :is="icon" class="w-10 h-10 text-amber-800" />
        <div class="flex justify-center items-center">
          <StarSvg v-for="n in star" :key="n" class="w-3 h-3 text-amber-700" />
        </div>
      </div>
      <div class="w-full flex flex-col justify-center items-center divide-y divide-gray-200">
        <div class="w-full pt-2 pb-1.5 flex justify-between items-center">
          <h3 class="text-sm font-medium text-amber-800">{{ title }}</h3>
          <h4 class="text-[10px] text-amber-700 bg-amber-700/20 py-0.5 px-1.5 rounded">+{{ point }} pt</h4>
        </div>
        <div class="w-full pt-2 pb-3">
          <h5 class="text-xs font-normal text-gray-500 line-clamp-2">{{ description }}</h5>
        </div>
      </div>
      <div>
        <slot name="action"></slot>
      </div>
    </div>
    <aside
      v-if="isChecked"
      class="absolute w-full h-full left-0 top-0 bg-emerald-200/30 flex justify-center items-center pointer-events-none"
    >
      <div class="relative h-full w-4/5 flex justify-center items-center">
        <div class="absolute w-full h-full bg-white/80 rounded-full blur-xl"></div>
        <h6 class="text-center text-white font-bold quest-text">QUEST<br />COMPLETED</h6>
      </div>
    </aside>
  </div>
</template>

<style scoped>
  .quest-text {
    filter: drop-shadow(-1px -1px 0px #00b388) drop-shadow(1px -1px 0px #00b388) drop-shadow(1px 1px 0px #00b388)
      drop-shadow(-1px 1px 0px #00b388);
  }
</style>
