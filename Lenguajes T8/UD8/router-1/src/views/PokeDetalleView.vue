<script setup>
import router from '@/router';
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';


    const route = useRoute()  //SI USAMOS ESTO ABAJO YA NO TENEMOS QUE USAR EL $ ABAJO
    const poke = ref({})

    const getData = async() => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
            //console.log(response.data)
            poke.value = response.data

        } catch (error) {
            console.log("Error al obtener info de pokemos: ", error)
        }
    }

    getData()

    const back = () => {
        router.back()
    }


</script>




<template>

    
    <div v-if="poke.name">
        <h1>PokeDetalle: {{ route.params.name }}</h1>
        <img :src="poke.sprites.front_default"  :alt="poke.name">
        <button @click="back">Atras</button>
    </div>


</template>