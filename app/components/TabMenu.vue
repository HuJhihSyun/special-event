<script setup lang="ts">
  enum MENU {
    FARM,
    MUSEUM
  }

  const currentMode = ref<MENU>(MENU.FARM)
</script>

<template>
  <div>
    <div class="w-full p-0.5 border border-amber-600">
      <ul class="border border-amber-600 flex justify-center items-center divide-x divide-amber-600">
        <li
          class="w-full text-xs text-amber-600 font-bold tracking-wider p-2 text-center"
          :class="{ 'bg-white/50 backdrop-blur-sm': currentMode === MENU.FARM }"
          @click="currentMode = MENU.FARM"
        >
          張美阿嬤農場
        </li>
        <li
          class="w-full text-xs text-amber-600 font-bold tracking-wider p-2 text-center"
          :class="{ 'bg-white/50 backdrop-blur-sm': currentMode === MENU.MUSEUM }"
          @click="currentMode = MENU.MUSEUM"
        >
          宜蘭傳藝中心
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
