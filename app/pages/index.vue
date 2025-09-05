<script setup lang="ts">
  import { computed, markRaw, reactive } from 'vue'
  import type { Component, FunctionalComponent } from 'vue'
  import CatSvg from '@/assets/images/cat.svg?skipsvgo'
  import CarrotSvg from '@/assets/images/carrot.svg?skipsvgo'
  import HeartSvg from '@/assets/images/heart-pulse.svg?skipsvgo'
  import PhotosSvg from '@/assets/images/photos.svg?skipsvgo'
  import CarSvg from '@/assets/images/car.svg?skipsvgo'
  import CameraSvg from '@/assets/images/camera.svg?skipsvgo'

  type Missions = {
    id: string
    title: string
    description: string
    point: number
    star: number
    icon: FunctionalComponent | Component
    isChecked: boolean
  }

  const missions = reactive<Missions[]>([
    {
      id: 'farm-mission-1',
      title: '與水豚君的第一次親密接觸',
      description: '幫水豚梳理毛髮或餵食並拍下甜蜜療癒照，與水豚一起享受美好相處時光',
      point: 10,
      star: 1,
      icon: markRaw(CatSvg),
      isChecked: false
    },
    {
      id: 'farm-mission-2',
      title: '現在還是要小鹿亂撞！',
      description: '成功讓小鹿舔手或肢體碰觸並拍下互動瞬間，讓小鹿感受自己心跳加速了',
      point: 10,
      star: 1,
      icon: markRaw(HeartSvg),
      isChecked: false
    },
    {
      id: 'farm-mission-3',
      title: '偷吃被抓罪證確鑿',
      description: '找到正在享用他人美食的動物並拍下證據，讓牠知道偷吃要注意別被發現',
      point: 10,
      star: 1,
      icon: markRaw(CarrotSvg),
      isChecked: false
    },
    {
      id: 'farm-mission-4',
      title: '討厭的限動放閃魔人出沒',
      description: '分享至少與 3 種動物的同框畫面於限時動態，讓大家知道你今天來閃瞎眾人',
      point: 10,
      star: 2,
      icon: markRaw(PhotosSvg),
      isChecked: false
    },
    {
      id: 'farm-mission-5',
      title: '快來看看這回誰還沒上車',
      description: '發送訊息與照片給其他沒來參加的 13 期家庭局夥伴，叫他們下次記得報名活動',
      point: 10,
      star: 2,
      icon: markRaw(CarSvg),
      isChecked: false
    }
  ])

  const farmMissions = computed(() => missions.filter((item) => item.id.includes('farm-mission')))
</script>

<template>
  <div class="pt-6">
    <aside class="w-11/12 mx-auto">
      <TabMenu />
    </aside>
    <section class="w-11/12 mx-auto mt-6">
      <h2 class="text-amber-900 font-medium text-sm mb-2">張美阿嬤農場</h2>
      <div class="flex flex-col gap-3">
        <MissionCard
          v-for="item in farmMissions"
          :key="item.id"
          :title="item.title"
          :description="item.description"
          :point="item.point"
          :star="item.star"
          :icon="item.icon"
        >
          <template #action>
            <BasicCheckbox v-model="item.isChecked" class="w-6 h-6" />
          </template>
        </MissionCard>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
