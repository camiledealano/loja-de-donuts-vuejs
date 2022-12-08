<script setup>
</script>

<script>
  import imgTwix from '/src/assets/imagens/twix.jpg';
  import imgCharge from '/src/assets/imagens/charge.jpg';
  import imgOreo from '/src/assets/imagens/oreo.jpg';
  import imgCarousel1 from '/src/assets/imagens/img-carousel-1.jpg'
  import imgCarousel2 from '/src/assets/imagens/img-carousel-2.jpg'
  import imgCarousel3 from '/src/assets/imagens/img-carousel-3.jpg'
  import imgCarousel4 from '/src/assets/imagens/img-carousel-4.jpg';
  import CardProduto from './CardProduto.vue';
  
  export default {
    components: {
      CardProduto
    },

    data () {
      return {
        imgTwix,
        imgCharge,
        imgOreo,
        items: [
          {
            src: imgCarousel1,
          },
          {
            src: imgCarousel3,
          },
          {
            src: imgCarousel2,
          },
          {
            src: imgCarousel4,
          },
        ],
        show: false,
      }
    },
  }
</script>

<template>
    <div class="carousel-wrapper">
      <v-card class="card-carousel">
          <v-carousel cycle interval="4000" :show-arrows="true">
              <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" />
          </v-carousel>
      </v-card>
    </div>
    
    <div class="vendidos">
        <h1>Você tem que experimentar!</h1>
    </div>

    <article class="row" style="margin-top: 40px; margin-bottom: 70px;">
      <CardProduto :productImage="imgTwix" productName="Twix" :productPrice="8.00" />
      <CardProduto :productImage="imgCharge" productName="Charge" :productPrice="8.00" />
      <CardProduto :productImage="imgOreo" productName="Oreo" :productPrice="8.00" />
    </article>

    <div class="vendidos">
        <h1>Nosso Diferencial</h1>
      <div class="diferencial">
        <div>
          <img class="img-diferencial" src="../assets/imagens/diferencial.jpg" alt="Nosso Diferencial">
        </div>

        <div class="list-diferencial">

          <p class="font-weight-medium">
            <v-icon small color="pink lighten-1">mdi-check</v-icon>
            Massas e recheios artesanais
          </p>
          <p class="font-weight-medium">
            <v-icon small color="pink lighten-1">mdi-check</v-icon>
            Padrão americano de produção
          </p>
          <p class="font-weight-medium">
            <v-icon small color="pink lighten-1">mdi-check</v-icon>
            Produção diária
          </p>
          <p class="font-weight-medium">
            <v-icon small color="pink lighten-1">mdi-check</v-icon>
            Sabores adaptados ao paladar brasileiro
          </p>
          <p class="font-weight-medium">
            <v-icon small color="pink lighten-1">mdi-check</v-icon>
            Sem conservantes
          </p>
        </div>
      </div>
  </div>
</template>

<style>
.carousel-wrapper {
    width: 100%;
    height: 100vh;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: 50% 0;
  }
  .card-carousel {
    width: 90%;
    background: transparent!important;
  }

  .diferencial {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img-diferencial {
    vertical-align:middle;
    width: 395px;
    height: 263px;
    margin-right: 50px;
    border-radius: 10%;
  }

  .list-diferencial {
    margin-left: 50px;
  }

  .list-diferencial p {
    margin: 8px 0 0 8px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    font-weight: bolder;
    background-color: white;
  }

  .v-carousel__controls {
    background: var(--primary)!important;
  }

  .v-carousel__controls button {
    color: white!important;
  }
</style>
