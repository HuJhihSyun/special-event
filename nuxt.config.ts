import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: 'https://www.loveandword.tw/resource/images/favicon.ico' }]
    }
  },

  modules: ['nuxt-svgo-loader', '@vueuse/nuxt']
})
