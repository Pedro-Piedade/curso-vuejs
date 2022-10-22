<template>
  <div>
    <h2>Está é a descrição da pessoa: {{ nome }}</h2>
    <info :email = "email" :esta_trabalhando=true />
    <Form />
  </div>
</template>
    

<script>
  import info from './info'
  import Form from './Form'


  export default {
    name: 'Pessoa',
    components: {
      info,
      Form
    },
    data() {
      return {
        nome: 'Pedro',
        email: "matheus@gmail.com"
      }
    },
  }
</script>