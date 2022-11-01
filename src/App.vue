<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{{ store.name }}</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/user">User</router-link>
            </li>
            <li class="nav-item">{{ store.total }}</li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>
<script>
import { useNt2Store } from "./store";

export default {
  setup() {
    //vamos a dejar disponible el state
    const store = useNt2Store();
    return { store };
  },
  async created() {
    await this.store.init();
  },
};
</script>
