new Vue({
  el: "#desafio",

  data() {
    return{
      nome: "Pedro Piedade",
      idade: 14,
      img: "https://i.ytimg.com/vi/ZuGvcPFoYJw/maxresdefault.jpg",
    }
  },

  methods: {
    idadeVezesTres(){
      return this.idade * 3;
    },

    numeroAleatorio() {
        return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    },


  }
})