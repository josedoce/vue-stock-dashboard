<template>
    <b-dropdown
    text="Exibir ações"
    variant="outline-success"
    class="m-0"
    menu-class="w-100"
    size="sm"
  >
    <b-dropdown-item
        v-for="acao in acoes" 
        :key="acao.id"
        @click="clicou(acao.id)"
    >{{acao.acao}}</b-dropdown-item>
  </b-dropdown>
</template>
<script>
export default {
    props: ['acoes','linha'],
    methods: {
    clicou(acao){
      switch (acao) {
        case 1:
          alert(`id: ${this.linha.id} | nome: ${this.linha.nome} | peso: ${this.linha.peso}`)
          break;
        case 2:
          this.deletar();
          break;
        default:
          alert('Selecione uma ação valida.')
          break;
      }
    },
    deletar(){
      alert('A linha '+this.linha.id+' foi deletada.');
      this.$store.dispatch('deleteLs',this.linha);
    }
  },
}
</script>