<script setup>
import BotonContador from './BotonContador.vue';


//defineProps(['title', 'body', 'id', 'colorText'])

const props = defineProps({
    title: String,
    id: Number,
    body: {
        type: String,
        default: 'Sin descripcion'
    }
})


</script>






<template>

    <div class="card">
        <div class="card-body">
            <div class="card-title">
                {{ id }} - {{ title }}
            </div>
            <p>
                {{ body }}
            </p>
            <button @click="$emit('cambiarTituloFavorito', title)" class="btn btn-outline-primary">
                Mi favorito
            </button>
        </div>
    </div>


</template>