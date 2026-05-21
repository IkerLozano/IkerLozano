<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'



    const pokemones = ref([]);
    const nPokemons = ref(0)

    const getData = async() => {
        try{
            const response =  await axios.get('https://pokeapi.co/api/v2/pokemon/')
            //console.log(response.data.results)
            pokemones.value = response.data.results
            nPokemons.value = response.data.count

        }catch (error){
            console.log('Error al obtener pokemons: ', error)
        }
    }

    getData()

</script>



<template>

    <h1>Nº de Pokemons: {{ nPokemons }}</h1>
    <ul>
        <li v-for="poke in pokemones" :key="poke.name">
            <RouterLink :to="`/pokemones/${poke.name}`"> {{ poke.name }} </RouterLink> 
        </li>

    </ul>

</template>