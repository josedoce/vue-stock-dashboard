<template>
  <b-container class="p-3">
    <h1>Gerenciamento</h1>
    <div id="nav">
      <router-link style="color: #42b983;" class="link_para_home" to="/">Home</router-link>
    </div>
      <b-card title="Salvar Produto">
            <save-produto 
              v-for="s in campos" 
              :key="s"
              :campo="s"
              @novoDado="dados[s] = $event[s]"/>
              <b-button 
                  @click="salvar" 
                  class="m-2" 
                  size="sm" 
                  variant="success"
                  v-b-modal.modal-sm
              >salvar</b-button>
              <b-button 
                  @click="limparTudo" 
                  class="m-2" 
                  size="sm" 
                  variant="danger"
                  v-b-modal.modal-sm
                  
              >limpar estoque</b-button>
              <b-modal ok-only id="modal-sm" size="sm" title="Aviso">{{aviso}}</b-modal>
      </b-card>
    <div>
      <tabela-component :dados="pegueLocalStorage"/>
    </div>
  </b-container>
</template>
<script>
import SaveProduto from '../components/SaveProduto.vue';
import TabelaComponent from '../components/TabelaComponent.vue';
export default {
  components: {
    SaveProduto,
    TabelaComponent
  },
  data(){
    return{
      campos: [
        'nome',
        'peso'
      ],
      aviso: '',
      dados: {
        nome: '',
        peso: ''
      },
    }
  },
  methods: {
    salvar(){
      const novoLS = this.pegueLocalStorage;
      if(this.dados.nome!='' && this.dados.peso!=''){
        novoLS.push({
        id: (novoLS.length+1),
        nome: this.dados.nome,
        peso: this.dados.peso
      });
        this.aviso = 'Os dados foram salvos com sucesso.'
        this.$store.dispatch('createLs', novoLS)
        return
      }
      this.aviso = 'Não foi possivel salvar os dados.'
    },
    limparTudo(){
      this.aviso = 'Os dados do estoque foram deletados.';
      this.$store.dispatch('clearLs');
    }
  },
  computed: {
    pegueLocalStorage: function(){
      const dados = JSON.parse(JSON.stringify(this.$store.getters.pegueLS));
      return dados!=''?dados:[];
    }
  }
}
</script>
