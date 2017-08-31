import Vue from 'vue'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import VueWamp from 'vue-wamp'
import App from './App.vue'
import Home from './Home.vue'

Vue.use(VueWamp, {
  debug: true,
  lazy_open: false,
  url: 'ws://api.swadge.com:1337/ws',
  realm: 'swadges',
  onopen: function(session, details) {
    console.log('WAMP connected', session, details);
  },
  onclose: function(reason, details) {
    console.log('WAMP closed: ' + reason, details);
  }
});

Vue.use(VueMaterial);

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: Home
  },
];

const router = new VueRouter({
  routes
});

const store = new Vuex.Store();

window.vue = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
