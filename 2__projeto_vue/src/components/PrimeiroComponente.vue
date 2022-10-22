<template>
  <div>
    <h1>Olá vue!</h1>
    <Reutilizacao />
    <p>Meu nome é {{ nome }}, trabalho como {{ profissao }}</p>
    <MultiplosEventos />
    <Reutilizacao />
    <Reutilizacao />
    <Reutilizacao />
    <Reutilizacao />
  </div>
</template>

<script>
import MultiplosEventos from "./MultiplosEventos.vue"
import Reutilizacao from "./Reutilizacao.vue"
  export default {
    name: 'PrimeiroComponente',
    components : {
      MultiplosEventos,
      Reutilizacao
    },
    data() {
      return{
        nome: "Pedro",
        profissao: "Programador"
      }
    }
  }
</script>