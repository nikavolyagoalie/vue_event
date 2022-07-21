import { createRouter, createWebHistory } from 'vue-router'
import Step1 from '@/views/Step1.vue'
import Step2 from '@/views/Step2.vue'

const routes = [
  {
    path: '/step1',
    name: 'Step1',
    component: Step1
  },

  {
    path: '/step2',
    name: 'Step2',
    component: Step2
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
