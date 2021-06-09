<template>
  <b-container class="p-3">
     <h1>Projeto Vue - Dashboard</h1>
    <b-card
    title="Objetivos de Aprendizado"
    sub-title="O que aprendi:"
    class="m-4"
    >
      <b-card-text>
        <p>✔Aprender usar state com <strong>vuex</strong></p>
        <p>✔Aprender usar <strong>bootstrapVue</strong> </p>
        <p>✔Aprender a usar <strong>vue router</strong></p>
      </b-card-text>
      <a href="https://github.com/josedoce">
        <b-button
        variant="outline-primary"
        size="sm">
          go to github 😁
        </b-button>
      </a>
      
    </b-card>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul>
      <li v-for="produto in pegueLocalStorage" :key="produto.id">
        {{produto.nome}}
      </li>
    </ul>
  </b-container>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    pegueLocalStorage: function(){
      return this.$store.getters.pegueLS;
    }
  }
}
</script>
