import Vue from 'vue';
import Router from 'vue-router';
import TrafficLight from './components/TrafficLight.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'red'
      }
    },
    {
      name: 'red',
      path: '/red',
      component: TrafficLight,
      props: {
        delay: 10
      }
    },
    {
      name: 'yellow',
      path: '/yellow',
      component: TrafficLight,
      props: {
        delay: 3
      }
    },
    {
      name: 'green',
      path: '/green',
      component: TrafficLight,
      props: {
        delay: 15
      }
    }
  ]
});

export default router;
