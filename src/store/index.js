import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      ls: ''
  },
  getters: {
    pegueLS: function(state){
      return state.ls;
    }
  },
  mutations: {
    setLS: function(state, data){
      return state.ls = data;
    },
    setCreateLS: function(state, data){
      return state.ls = data;
    },
    setDeleteLS: function(state, data){
      return state.ls = data;
    },
    setClearLS: function(state, data){
      return state.ls = data;
    }
  },
  actions: {
    todoLS: function(context){
      context.commit('setLS',JSON.parse(localStorage.getItem('produtos')));
    },
    createLs: function(context, data){
      const dados = JSON.stringify(data);
      localStorage.setItem('produtos',dados);
      return context.commit('setCreateLS', data);
    },
    deleteLs: function(context, data){
      const dados = JSON.parse(JSON.stringify(this.state.ls));
      const dadosFiltrados = dados.filter((e)=>e.id != data.id);
      localStorage.setItem('produtos',JSON.stringify(dadosFiltrados));
      return context.commit('setDeleteLS', dadosFiltrados);
    },
    clearLs: function(context){
      localStorage.setItem('produtos',JSON.stringify([]));
      return context.commit('setClearLS', []);
    }
  },
  modules: {
  }
})
