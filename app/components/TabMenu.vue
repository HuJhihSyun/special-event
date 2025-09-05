<script setup lang="ts">
  import { ref, defineEmits } from 'vue'

  interface TabMenuEmits {
    (event: 'toggle', value: number): void
  }

  const emit = defineEmits<TabMenuEmits>()

  enum MENU {
    FARM,
    MUSEUM,
    NIGHT
  }

  const currentMode = ref<MENU>(MENU.FARM)

  const handleShow = (mode: MENU) => {
    currentMode.value = mode
    emit('toggle', mode)
  }
</script>

<template>
  <div>
    <div class="w-full p-0.5 border border-amber-600">
      <ul class="border border-amber-600 flex justify-center items-center divide-x divide-amber-600">
        <li
          class="w-full text-xs text-amber-600 font-bold tracking-wider p-2 text-center"
          :class="{ 'bg-white/50 backdrop-blur-sm': currentMode === MENU.FARM }"
          @click="handleShow(MENU.FARM)"
        >
          張美農場
        </li>
        <li
          class="w-full text-xs text-amber-600 font-bold tracking-wider p-2 text-center"
          :class="{ 'bg-white/50 backdrop-blur-sm': currentMode === MENU.MUSEUM }"
          @click="handleShow(MENU.MUSEUM)"
        >
          宜蘭傳藝
        </li>
        <li
          class="w-full text-xs text-amber-600 font-bold tracking-wider p-2 text-center"
          :class="{ 'bg-white/50 backdrop-blur-sm': currentMode === MENU.NIGHT }"
          @click="handleShow(MENU.NIGHT)"
        >
          夜市逛街
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
