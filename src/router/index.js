import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '../views/NewsView.vue'
import GalleryView from '../views/GalleryView.vue'
import ForumView from '../views/ForumView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/news',
    name: 'News',
    component: NewsView, 
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: GalleryView, 
  },
  {
    path: '/forum',
    name: 'Forum',
    component: ForumView, 
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
