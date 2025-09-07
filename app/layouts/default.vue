<script setup lang="ts">
  useSeoMeta({
    title: '甜蜜出走日：愛語十三期家庭局一日小旅行',
    description:
      '親愛的十三期家庭局，在日常的忙碌與服事中，是時候牽起彼此的手，來一場輕鬆又充電的小旅行啦～一起拍照、放鬆、留下屬於你們的甜蜜盛夏回憶！',
    ogTitle: '甜蜜出走日：愛語十三期家庭局一日小旅行',
    ogDescription:
      '親愛的十三期家庭局，在日常的忙碌與服事中，是時候牽起彼此的手，來一場輕鬆又充電的小旅行啦～一起拍照、放鬆、留下屬於你們的甜蜜盛夏回憶！',
    ogImage: 'images/cover.jpg'
  })

  const isLoading = ref<boolean>(true)

  onMounted(() => {
    isLoading.value = false
  })
</script>

<template>
  <div>
    <div class="w-full h-full min-h-screen bg-cover bg-[url('images/paper-bg.jpg')]">
      <slot />
    </div>
    <transition name="fade">
      <aside
        v-if="isLoading"
        class="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-amber-400 to-amber-700 z-[60] flex flex-col items-center justify-center"
      >
        <LoadingWave class="w-10 md:w-20 h-10 md:h-20" />
      </aside>
    </transition>
  </div>
</template>

<style scoped></style>
