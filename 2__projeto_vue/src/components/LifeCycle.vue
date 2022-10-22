<template>
  <h1>Meu nome é: {{ nome }} </h1>
</template>

<script>
  export default {
    name: "LifeCycle",
    data(){
      return{
        nome: 'Ainda Não sei'
      }
    },
   created() {
    setTimeout(() => {
      this.nome = "Pedro Piedade"
    }, 1000);

    this.lifeCycle()
   },
   mounted() {
    setTimeout(() => {
      this.nome = "Matheus"
    },2000);
    this.lifeCycle()
   },
   methods: {
    lifeCycle() {
      console.log("Deu certoGG")
    }
   }
  }
</script>