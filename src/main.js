import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  render: h => h(App),
}).$mount('#app');

const axios = require('axios');