import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '../views/Login.vue';
import ModelType from '../views/ModelType.vue';
import DeviceModel from '../views/DeviceModel.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/modeltype',
    name: 'ModelType',
    component: ModelType
  },
  {
    path: '/devicemodel',
    name: 'DeviceModel',
    component: DeviceModel
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
