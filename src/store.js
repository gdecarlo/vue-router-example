import { defineStore } from "pinia";

export const useNt2Store = defineStore("nt2", {
  state: () => ({ contador: 3, appName: "" }),
  getters: {
    total: (state) => state.contador + 10,
    name: (state) => state.appName,
  },
  actions: {
    incrementar() {
      //hacer mas cosas
      console.log("incrementar");
      this.contador++;
    },
    async init() {
      const result = await fetch(
        "https://www.mockachino.com/7b684186-b77e-48/name"
      );
      const data = await result.json();
      this.appName = data.name;
    },
  },
});
