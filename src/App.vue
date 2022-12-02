<script setup>
</script>

<template>
    <v-app>
      <v-app-bar class="header-vuetify" color="#F03A9E">
        <div class="header-logo">
          <v-toolbar-title>
            <img src="/src/assets/imagens/logo.png" alt="Logo">
          </v-toolbar-title>
        </div>

        <v-spacer></v-spacer>

        <div class="header-right-flex">
          <router-link to="/">
            <v-btn>
              <v-icon small style="margin-right: 5px;">mdi-home</v-icon>
              HOME
            </v-btn>
          </router-link>

          <router-link to="/sobre">
            <v-btn>
              <v-icon small style="margin-right: 5px;">mdi-information</v-icon>
              SOBRE
            </v-btn>
          </router-link>

          <router-link to="/cardapio">
            <v-btn>
              <v-icon small style="margin-right: 5px;">mdi-file-document</v-icon>
              CARDÁPIO
            </v-btn>
          </router-link>

          <a href="https://www.ifood.com.br/" target="_blank">
            <v-btn>
              <v-icon small style="margin-right: 5px;">mdi-food</v-icon>              
              DELIVERY
            </v-btn>
          </a>
        </div>
      </v-app-bar>

      <body>
        <main>
          <router-view></router-view>
        </main>
      </body>

      <v-footer dark padless>
          <v-card style="width: 100%; margin-top: 10px;" flat tile class="white--text text-center">
            <v-card-text class="white--text pt-0">
                With love by <strong>Camile de Alano</strong>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — © — <strong>All rights reserved</strong>
            </v-card-text>
          </v-card>
      </v-footer>
    </v-app>
</template>

<style scoped>

  .header-vuetify {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-logo img {
    width: 170px;
    padding: 20px;
  }

  .header-right-flex {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
  }

  .header-right-flex a {
    text-decoration: none;
  }

  .header-right-flex i {
    color: white;
  }

</style>
