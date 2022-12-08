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
  <v-card class="mx-auto card-shadow" width="344">
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
        <v-btn text color="deep-purple accent-4 ">
          <span class="add-cart">Adicionar ao carrinho</span>
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

  .card-shadow {
    transition: box-shadow .3s;
    box-shadow: 0 0 3px rgb(105, 104, 104);
  }

  .card-shadow:hover{
    box-shadow: 0 0 20px rgb(0, 0, 0); 
  }

  .add-cart:hover {
    color: green;
  }
</style>