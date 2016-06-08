import Vue from 'vue';
import { domain, fromNow } from './filters';
import App from './components/App.vue';
import AppCNHK from './components/AppCNHK.vue';

// register filters globally
Vue.filter('domain', domain);
Vue.filter('fromNow', fromNow);

new Vue({
  el: 'body',
  components: {
    App, // 普通电子票
    AppCNHK // 中港通电子票
  }
});
