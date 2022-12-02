<script setup>
</script>

<script>
  import imgHome from '/src/assets/imagens/img-home.jpg';
  import imgTwix from '/src/assets/imagens/twix.jpg';
  import imgCharge from '/src/assets/imagens/charge.jpg';
  import imgOreo from '/src/assets/imagens/oreo.jpg';
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
            src: imgHome,
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>

<template>
    <div class="carousel-wrapper">
      <v-card class="card-carousel">
          <v-carousel cycle interval="3000" :show-arrows="false">
              <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" />
          </v-carousel>
      </v-card>
    </div>
    
    <article class="vendidos">
        <h1>Você tem que experimentar!</h1>
    </article>

    <article class="row" style="margin-top: 40px; margin-bottom: 70px;">
      <CardProduto :productImage="imgTwix" productName="Twix" :productPrice="8.00" />
      <CardProduto :productImage="imgCharge" productName="Charge" :productPrice="8.00" />
      <CardProduto :productImage="imgOreo" productName="Oreo" :productPrice="8.00" />
    </article>

    <article class="row paixao">
        <h2>
            Paixão por Donuts
        </h2>
        <div style="padding:20px"></div>
        <p>
            Nossa especialidade é criar e produzir donuts, visando a felicidade e a satisfação dos clientes e
            funcionários através de um produto de extrema qualidade, com um sabor incrível e inesquecível. <br>
            <br>
            Buscamos ser a opção número um para quem quer saciar o desejo de pura alegria e satisfação de sabores.
            Pretendemos nos tornar a maior e mais gostosa empresa de donuts do mundo.</p>
    </article>
</template>

<style scoped>
  .carousel-wrapper {
    width: 100%;
    margin-top: 100px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card-carousel {
    width: 80%;
  }

</style>
