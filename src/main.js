import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import User from "./components/User.vue";
import UserList from "./components/UserList.vue";
import UserView from "./components/UserView.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { PiniaVuePlugin, createPinia } from "pinia";
Vue.use(PiniaVuePlugin);
const pinia = createPinia();
/**
 * Pagina oficial de Vue-router
 * https://v3.router.vuejs.org/
 *
 * Frameworks de UI
 * https://getbootstrap.com/
 * https://bootstrap-vue.org/
 * https://www.primefaces.org/primevue/
 * https://vuetifyjs.com/en/
 */

// paso 1
const routes = [
  { path: "/", component: Home },
  {
    path: "/user",
    component: User,
    children: [
      { path: "", component: UserList },
      { path: ":id", component: UserView },
    ],
  },
  {
    path: "*",
    redirect: "/",
  },
];

//paso 2
const router = new VueRouter({
  routes,
});

//paso 3
Vue.use(VueRouter); //injecta algunos utiles.

new Vue({
  router, //paso 4
  pinia,
  render: (h) => h(App),
}).$mount("#app");
