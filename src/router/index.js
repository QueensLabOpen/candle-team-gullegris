import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/views/Start.vue'
import Game from '@/views/Game.vue'
import End from '@/views/End.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/end',
      name: 'End',
      component: End
    }
  ]
})
