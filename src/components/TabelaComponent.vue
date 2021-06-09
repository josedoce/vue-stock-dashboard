<template>
    <b-table-simple hover small responsive bordered>
        <b-tr>
          <b-th>id</b-th>
          <b-th>nome</b-th>
          <b-th>preco</b-th>
          <b-th>acões</b-th>
        </b-tr>
        <b-tr v-for="prod in dados" :key="prod.id">
          <b-td>{{prod.id}}</b-td>
          <b-td>{{prod.nome}}</b-td>
          <b-td>{{prod.peso}}</b-td>
          <b-td>
            <acao-component 
              :linha="prod"
              :acoes="acoes"/>
          </b-td>
        </b-tr>
      </b-table-simple>
    
</template>
<script>
import AcaoComponent from './Actions.vue';
export default {
    props: ['dados'],
    data(){
        return {
            acoes: [
                {id: 1, acao: 'detalhes'},
                {id: 2, acao: 'deletar'}
            ],
        }
    },
    components: {
        AcaoComponent,
    },
}

</script>