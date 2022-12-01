<template>
  <div id="app">
    <div>
      <input v-model="texto" placeholder="escreva aqui">
      <p>o texto é: {{ texto }}</p>
    </div>
      <ul>
        <li v-for="item in items">
          {{ item.nome }}
        </li>
      </ul>
      <ul>
        <li v-for="i in 10" :key="i.id">
          Numero {{ i }}
        </li>
      </ul>
      <div>
        <button @click="(resultado += 1)">+1</button>
        <button @click="(resultado -= 1)">-1</button>
        <p v-if="(resultado < 10)">O Numero é: {{ resultado }}</p>
        <p v-else><img src="./assets/logo.png" alt="vue image"> O Numero é maior que 10!</p>
      </div>
      <div>
        <h2>Frutas</h2>
        <div v-for="(fruta, n) in frutas">
          <p>
            <span class="fruta">{{ fruta }} </span>
            <button @click="removerFruta(n)">Remover</button>
          </p>
        </div>
        <p>
          <input type="text" v-model="novaFruta">
          <button @click="adicionarFruta">Adiconar Fruta</button>
        </p>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      texto: "",
      items: [ {nome: "Pedro"}, {nome: "Matheus"},{nome: "Lucas"}],
      resultado: 0,
      frutas: [],
      novaFruta: null
    }
  },
  mounted() {
    if (localStorage.getItem('frutas')) {
      try {
        this.frutas = JSON.parse(localStorage.getItem('frutas'));
      } catch(e) {
        localStorage.removeItem('frutas');
      }
    }
  },
  methods: {
    adicionarFruta() {
      if (!this.novaFruta) {
        return;
      }

      this.frutas.push(this.novaFruta);
      this.novaFruta = '';
      this.salvarFrutas();
    },
    removerFruta(x) {
      this.frutas.splice(x, 1);
      this.salvarFrutas();
    },
    salvarFrutas() {
      const parsed = JSON.stringify(this.frutas);
      localStorage.setItem('frutas', parsed);
    }
  }
}
</script>

