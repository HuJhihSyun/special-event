<script setup lang="ts">
  import type { Component, FunctionalComponent } from 'vue'
  import CatSvg from '@/assets/images/cat.svg?skipsvgo'
  import CameraSvg from '@/assets/images/camera.svg?skipsvgo'

  type farmMissions = {
    id: string
    title: string
    point: number
    icon: FunctionalComponent | Component
    isChecked: boolean
  }

  const farmMissions = reactive<farmMissions[]>([
    {
      id: 'farm1',
      title: '與水豚君來張甜蜜合照',
      point: 10,
      icon: markRaw(CatSvg),
      isChecked: false
    },
    {
      id: 'farm2',
      title: '療癒打卡點拍張「老來伴」照',
      point: 10,
      icon: markRaw(CameraSvg),
      isChecked: false
    }
  ])
</script>

<template>
  <div class="pt-4">
    <aside class="w-11/12 mx-auto">
      <TabMenu />
    </aside>
    <section class="w-11/12 mx-auto mt-4 flex flex-col gap-2">
      <MissionCard
        v-for="item in farmMissions"
        :key="item.id"
        :title="item.title"
        :point="item.point"
        :icon="item.icon"
      />
    </section>
  </div>
</template>

<style scoped></style>
