// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app:{
    baseURL: "./"
  },
  devtools: { 
    enabled: true
  }
})