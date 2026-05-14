<script setup>
import BotonContador from './components/BotonContador.vue';
import BlogPost from './components/BlogPost.vue';
import { ref, computed } from 'vue';
import PaginatePosts from './components/PaginatePosts.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';


const posts = ref ([])


const miFavorito = ref("")


//paginacion
const postXpagina = 10;
const inicio = ref(0)
const fin = ref(postXpagina)

//loading
const loading = ref(true)


//metodos para la paginacion
const next = () => {
  inicio.value = inicio.value + postXpagina
  fin.value = fin.value + postXpagina
}

const previous = () => {
  inicio.value = inicio.value - postXpagina
  fin.value = fin.value - postXpagina
}

const cambiarFavorito = (titulo) => {
  miFavorito.value = titulo;
}



//vamos a usar fetch para cargar datos deuna API publica
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => posts.value = data)
  .finally(
    setTimeout(() => {
      loading.value = false
    }, 2000)
  
  )

const tamanoPost = computed(() => posts.value.length) //100
</script>


<template>

  <div class="container">
    <h1>DAM 1 - 2026</h1>

    <BotonContador />

    <hr>

    <h2>Mi post favorito: {{ miFavorito}}</h2>
    <LoadingSpinner v-if="loading"/>

    <div class="container" v-else>
     
    <PaginatePosts 
      class="mb-2"
      @next="next"
      @previous="previous"
      :inicio="inicio"
      :fin="fin"
      :tamanio="tamanoPost"
      />

    <BlogPost 
      v-for="post in posts.slice(inicio, fin)"
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
