import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import User from "./components/User.vue";
import UserList from "./components/UserList.vue";
import UserView from "./components/UserView.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

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
  render: (h) => h(App),
}).$mount("#app");
