<script setup></script>

<script>
  import imgTwix from '/src/assets/imagens/twix.jpg';
  import imgCharge from '/src/assets/imagens/charge.jpg';
  import imgOreo from '/src/assets/imagens/oreo.jpg';
  import imgConfete from '/src/assets/imagens/confete.png';
  import imgNutella from '/src/assets/imagens/nutella.jpg';
  import imgHomer from '/src/assets/imagens/homer.jpg';
  import imgKitkat from '/src/assets/imagens/kitkat.jpg';
  import imgMaracuja from '/src/assets/imagens/maracuja.jpg';
  import imgLimao from '/src/assets/imagens/limao.jpg';

  import CardProduto from './CardProduto.vue';

  export default {
    components: {
      CardProduto
    },
    data() {
      return {
        imgTwix,
        imgCharge,
        imgOreo,
        imgConfete,
        imgNutella,
        imgHomer,
        imgKitkat,
        imgMaracuja,
        imgLimao
      }
    }
  }

</script>
<template>
  <div class="titulo-cardapio">
      <h1>Cardápio</h1>
      <h2>Descubra o seu novo vício em Donuts!</h2>
  </div>
  
  <article class="row" style="margin-top: 40px; margin-bottom: 70px;">
    <CardProduto :productImage="imgTwix" productName="Twix" :productPrice="8" />
    <CardProduto :productImage="imgCharge" productName="Charge" :productPrice="8" />
    <CardProduto :productImage="imgOreo" productName="Oreo" :productPrice="8" />
  </article>

  <article class="row" style="margin-top: 40px; margin-bottom: 70px;">
    <CardProduto :productImage="imgConfete" productName="Confete" :productPrice="8" />
    <CardProduto :productImage="imgNutella" productName="Nutella" :productPrice="10" />
    <CardProduto :productImage="imgHomer" productName="Homer" :productPrice="8" />
  </article>

  <article class="row" style="margin-top: 40px; margin-bottom: 70px;">
    <CardProduto :productImage="imgKitkat" productName="KitKat" :productPrice="10" />
    <CardProduto :productImage="imgMaracuja" productName="Maracujá" :productPrice="8" />
    <CardProduto :productImage="imgLimao" productName="Limão" :productPrice="8" />
  </article>
</template>

<style scoped>
</style>