<template>
  <div>
   
    <h2>está é a descrição da pessoa: {{ nome }}</h2>
      <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
      <p v-else>Estou em busca de novas oportunidades.</p>
      <p>utilizo as seguintes tecnologias: </p>
      <ul>
        <li  v-for="(technology, index) in backend_technologies" v-bind:key="index"> {{ technology }}</li>
      </ul>
      <p>Utilizo as seguintes tecnologias para front end</p>
      <ul>
        <li v-for="technology in frontend_technologies" :key="technology.id">
        {{ technology.language }}
        </li>
      </ul>
      <div>
        <button @click="showEmail">{{ textoBotao }}</button>
      </div>
      <p v-show="mostrar_email">Mande uma mensagem para o email: {{ email }}</p>
      <p>Para acessa meu portfolio <a v-bind:href="meu_link" target="_blank">clique aqui!</a></p>
      <Picture />
  </div>
</template>

<script>
  import Picture from './Picture.vue'
  export default{
    name: 'info',
    components: {
      Picture
    },
    props: {
      email: String,
      esta_trabalhando: Boolean
    }
    ,
  
    data() {
        return {
            mostrar_email: false,
            meu_link: "https://google.com",
            textoBotao: 'Mostrar email',
            backend_technologies: ['JavaScript','PHP','C#'],
            frontend_technologies:[
              {id: 1, language: 'HTML'},
              {id: 2, language: 'CSS'},
              {id: 3, language: 'VUE'}
            ]
        };
    },
    methods: {
      showEmail() {
        this.mostrar_email = !this.mostrar_email
        if(!this.mostrar_email){
          this.textoBotao = 'Mostrar Email'
        }
        else{
          this.textoBotao = 'Esconder Email'
        }
      }
    }
}
</script>