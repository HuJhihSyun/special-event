<script setup lang="ts">
  import { computed, markRaw, ref, reactive, watch, onMounted } from 'vue'
  import type { Component, FunctionalComponent } from 'vue'
  import CatSvg from '@/assets/images/cat.svg?skipsvgo'
  import CarrotSvg from '@/assets/images/carrot.svg?skipsvgo'
  import HeartSvg from '@/assets/images/heart-pulse.svg?skipsvgo'
  import PhotosSvg from '@/assets/images/photos.svg?skipsvgo'
  import CarSvg from '@/assets/images/car.svg?skipsvgo'
  import HammerSvg from '@/assets/images/hammer.svg?skipsvgo'
  import TalkSvg from '@/assets/images/talk.svg?skipsvgo'
  import BoatSvg from '@/assets/images/boat.svg?skipsvgo'
  import CameraSvg from '@/assets/images/camera.svg?skipsvgo'
  import TempleSvg from '@/assets/images/temple.svg?skipsvgo'
  import SandwichSvg from '@/assets/images/sandwich.svg?skipsvgo'
  import SaladSvg from '@/assets/images/salad.svg?skipsvgo'
  import HeartMessageSvg from '@/assets/images/message-heart.svg?skipsvgo'

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
      point: 5,
      star: 1,
      icon: markRaw(CatSvg),
      isChecked: false
    },
    {
      id: 'farm-mission-2',
      title: '到現在還是要小鹿亂撞！',
      description: '成功讓小鹿舔手與親密碰觸並拍下互動瞬間，讓小鹿感受自己心跳加速了',
      point: 5,
      star: 1,
      icon: markRaw(HeartSvg),
      isChecked: false
    },
    {
      id: 'farm-mission-3',
      title: '偷吃被抓罪證確鑿',
      description: '找到正在享用他人美食的動物並拍下證據，讓牠知道偷吃要注意別被發現',
      point: 5,
      star: 2,
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
    },
    {
      id: 'museum-mission-1',
      title: '與你分享的快樂勝過獨自擁有',
      description: '與其他對家庭局成員交流、分享過程中的體會，或最近發生的趣事與生活點滴',
      point: 5,
      star: 1,
      icon: markRaw(TalkSvg),
      isChecked: false
    },
    {
      id: 'museum-mission-2',
      title: '要不要來傳藝看悟空後空翻？',
      description: '觀賞臨水劇場、演藝廳表演或廟埕所安排的踩街遊行或街頭表演，用心感受文化魅力',
      point: 5,
      star: 1,
      icon: markRaw(TempleSvg),
      isChecked: false
    },
    {
      id: 'museum-mission-3',
      title: '妳說藍染是妳最愛的顏色',
      description: '參加實境解謎或任一藍染、木藝、手拉坏、茶席、琉璃、玉石、香包、金工等手作體驗',
      point: 10,
      star: 2,
      icon: markRaw(HammerSvg),
      isChecked: false
    },
    {
      id: 'museum-mission-4',
      title: '我們的世界容得下其他人',
      description: '在園區內景點拍攝至少 5 人以上大合照並上傳至 Line 群組相簿，留下美好回憶',
      point: 10,
      star: 2,
      icon: markRaw(CameraSvg),
      isChecked: false
    },
    {
      id: 'museum-mission-5',
      title: '傑克～把船開到水深之處',
      description: '搭乘渡船遊覽宜蘭傳藝沿岸的美麗風光，做出傑克與蘿絲的經典動作並拍照留念',
      point: 15,
      star: 3,
      icon: markRaw(BoatSvg),
      isChecked: false
    },
    {
      id: 'night-mission-1',
      title: '這裡我熟！我推薦的包準好吃',
      description: '購買你最愛的夜市美食並與其他對家庭局交換，請對方品嚐看看你的口味並描述口感',
      point: 5,
      star: 1,
      icon: markRaw(SandwichSvg),
      isChecked: false
    },
    {
      id: 'night-mission-2',
      title: '我要成為夜市王',
      description: '與自己的對象一起吃超過三道以上的夜市美食且花費超過 300 元，享受美食饗宴',
      point: 10,
      star: 2,
      icon: markRaw(SaladSvg),
      isChecked: false
    },
    {
      id: 'night-mission-3',
      title: '今天也獻上感謝',
      description: '平安賦歸也不忘與對象分享今日的體會或感想，並向神獻上感謝',
      point: 5,
      star: 2,
      icon: markRaw(HeartMessageSvg),
      isChecked: false
    }
  ])

  const farmMissions = computed(() => missions.filter((item) => item.id.includes('farm-mission')))
  const museumMissions = computed(() => missions.filter((item) => item.id.includes('museum-mission')))
  const nightMissions = computed(() => missions.filter((item) => item.id.includes('night-mission')))

  const totalPoint = computed(() =>
    missions.reduce((acc, curr) => {
      if (curr.isChecked) {
        return acc + curr.point
      }
      return acc
    }, 0)
  )

  onMounted(() => {
    const savedMissions = localStorage.getItem('missions')
    if (savedMissions) {
      const checkedMissionsIds = JSON.parse(savedMissions) as string[]
      missions.forEach((item) => {
        if (checkedMissionsIds.includes(item.id)) {
          item.isChecked = true
        }
      })
    }
  })

  watch(
    () => missions.map((item) => item.isChecked),
    (newVal) => {
      const checkedMissionsIds = missions.filter((item) => item.isChecked).map((item) => item.id)
      localStorage.setItem('missions', JSON.stringify(checkedMissionsIds))
    },
    { deep: true }
  )

  const currentMode = ref(0)
  const handleTabChange = (mode: number) => {
    currentMode.value = mode
  }
</script>

<template>
  <div class="pt-6">
    <aside class="w-11/12 mx-auto">
      <TabMenu @toggle="handleTabChange" />
    </aside>
    <header class="w-full py-0.5 border-y-2 border-amber-700/50 mt-6">
      <div class="bg-white/50 border-y border-amber-700/50 p-3 flex justify-center items-center">
        <p class="text-amber-900 text-sm text-center">累積分數</p>
        <p class="text-amber-900 text-xl font-bold mx-2">{{ totalPoint }}</p>
        <p class="text-amber-900 text-sm text-center">分</p>
      </div>
    </header>
    <section v-show="currentMode === 0" id="farm" class="w-11/12 mx-auto mt-6 pb-10">
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
          :isChecked="item.isChecked"
        >
          <template #action>
            <BasicCheckbox v-model="item.isChecked" class="w-6 h-6" />
          </template>
        </MissionCard>
      </div>
    </section>
    <section v-show="currentMode === 1" id="museum" class="w-11/12 mx-auto mt-6 pb-10">
      <h2 class="text-amber-900 font-medium text-sm mb-2">宜蘭傳藝中心</h2>
      <div class="flex flex-col gap-3">
        <MissionCard
          v-for="item in museumMissions"
          :key="item.id"
          :title="item.title"
          :description="item.description"
          :point="item.point"
          :star="item.star"
          :icon="item.icon"
          :isChecked="item.isChecked"
        >
          <template #action>
            <BasicCheckbox v-model="item.isChecked" class="w-6 h-6" />
          </template>
        </MissionCard>
      </div>
    </section>
    <section v-show="currentMode === 2" id="night" class="w-11/12 mx-auto mt-6 pb-10">
      <h2 class="text-amber-900 font-medium text-sm mb-2">夜市巡禮</h2>
      <div class="flex flex-col gap-3">
        <MissionCard
          v-for="item in nightMissions"
          :key="item.id"
          :title="item.title"
          :description="item.description"
          :point="item.point"
          :star="item.star"
          :icon="item.icon"
          :isChecked="item.isChecked"
        >
          <template #action>
            <BasicCheckbox v-model="item.isChecked" class="w-6 h-6" />
          </template>
        </MissionCard>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
