<script setup>
import BotonContador from './components/BotonContador.vue';
import BlogPost from './components/BlogPost.vue';
import { ref } from 'vue';


const posts = ref ([
  {id: 1, title: "Posts 1", body: "Contenido Posts 1"},
  {id: 2, title: "Posts 2", body: "Contenido Posts 2"},
  {id: 3, title: "Posts 3", body: "Contenido Posts 3"},
  {id: 4, title: "Posts 4"},
  {id: 5, title: "Posts 5", body: "Contenido Posts 5"},
])


const miFavorito = ref("")

const cambiarFavorito = (titulo) => {
  miFavorito.value = titulo;
}

</script>


<template>

  <div class="container">
    <h1>DAM 1 - 2026</h1>

    <BotonContador />

    <hr>

    <h2>Mi post favorito: {{ miFavorito}}</h2>

    <div class="container">
    <BlogPost 
      v-for="post in posts"
        :key="post.id"
      :title=post.title 
      :body=post.body
      :id=post.id
      colorText="primary"
      @cambiarTituloFavorito = "cambiarFavorito"
      class="mb-2"
      />

    </div>
    

    


  </div>


</template>


<style scoped></style>
