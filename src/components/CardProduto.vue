<script setup>

</script>

<script>
  export default {
    props: {
      productImage: String,
      productName: String,
      productPrice: Number
    },

    mounted() {
      console.log(this.productImage)
    },

    methods: {
      toCurrency(value) {
        const formatter = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });

        return formatter.format(value);
      }
    }
  }
</script>

<template>
  <v-card class="mx-auto" width="344">
      <div class="product-image" v-bind:style="[{ 'background-image': `url('${productImage}')` }]"></div>

      <v-card-text>
        <p class="text-h4" style="color: #F03A9E">
          {{ productName }}
        </p> 

        <div class="text-h6">
          {{ toCurrency(productPrice) }}
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn text color="deep-purple accent-4">
          Adicionar ao carrinho
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<style scoped>
  .product-image {
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>