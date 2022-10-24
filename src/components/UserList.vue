<template>
  <div>
    <div class="list-group">
      <a
        v-for="(usuario, index) in usuarios"
        :key="usuario.id"
        @click="goTo(usuario.id)"
        class="list-group-item list-group-item-action"
        style="cursor: pointer"
        >{{ usuario.nombre }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [],
    };
  },
  methods: {
    goTo(id) {
      this.$router.push(`/user/${id}`);
    },
  },
  created() {
    this.usuarios = [
      { id: 1, nombre: "Juan perez" },
      { id: 2, nombre: "Jose Lopez" },
      { id: 3, nombre: "Pepe martinez" },
    ];
  },
};
</script>
