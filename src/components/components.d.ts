import FJMSwiper from './FJMSwiper.vue'
declare module 'vue' {
  export interface GlobalComponents {
    FJMSwiper: typeof FJMSwiper
  }
}
