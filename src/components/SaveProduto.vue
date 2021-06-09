<template>
    <b-input-group :prepend="campo" class="mt-3">
        <b-form-input @input="alterar(dado)" v-model="dado"></b-form-input>
        <b-input-group-append>
        <b-button
        style="border-radius: 0px 10px 10px 0px;"
        variant="outline-danger"
        @click="apagar">X</b-button>
        </b-input-group-append>
    </b-input-group>
</template>

<script>
export default {
    props: ['campo','valor'],
    data(){
        return {
            dado: ''
        }
    },
    methods: {
        alterar(dado){
            this.$emit('novoDado',{[this.campo]:dado})
        },
        apagar(){
            this.dado = '';
        }
    }
}
</script>