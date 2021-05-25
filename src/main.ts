import Vue from 'vue';
import App from './App.vue';
import uikitFrontendCore from './lib';

Vue.use(uikitFrontendCore);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
