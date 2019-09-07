import Vue from "vue";

import App from "./App.vue";
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

import wrap from '@vue/web-component-wrapper';
import VueWebComponent from './components/VueWebComponent';

const CustomElement = wrap(Vue, VueWebComponent);

window.customElements.define('my-custom-element', CustomElement);