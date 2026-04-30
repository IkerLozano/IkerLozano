<script setup>
import { computed, ref } from 'vue'

//Metodos
const manejarClik = () => {
    console.log("Luis")
}

const manejarClikConParemtro = (mensaje) => {
    console.log(mensaje)
}


const contador = ref(0)
const incrementar = () => {
    contador.value++
}

const restar = () => {
    contador.value--
}

const resetear = () => {
    contador.value = 0
}

//Propiedades
const claseContador = computed(() => {
    if (contador.value === 0) {
        return 'zero'
    }
    return contador.value > 0 ? 'verde' : 'rojo'
})


const arrayFavoritos = ref([])
const addFavorito = () => {
    arrayFavoritos.value.push(contador.value)
}
</script>



<template>
    <div class="container py-4">
        <div class="text-center">
            <!--EVENTOS-->

            <button v-on:click="manejarClik">Clik aqui</button>
            <button v-on:click="manejarClikConParemtro('Mensaje como parametro')">Clik aqui 2</button>
            <!--poniendo nombreFuncion() le pasamos un mensaje por parametro-->
            <button @click.middle="manejarClik">Danii!!!</button> <!--en vez de v-on:click se puede poner @clik-->

            <hr>

            <div class="">
                <h1>Contador</h1>
                <h1 v-bind:class="claseContador">{{ contador }}</h1>
                <button @click="incrementar" class="btn btn-success">Aumentar</button>
                <button @click="restar" class="btn btn-danger">Restar</button>
                <button @click="resetear" class="btn btn-primary">Resetear</button>
                <button @click="addFavorito" class="btn btn-info">Favorito</button>

                <h3>Favoritos:</h3>
                <ul>
                    <li v-for="f in arrayFavoritos">
                        {{ f }}
                    </li>
                </ul>
            </div>

        </div>
    </div>

</template>

<style>
.rojo {
    color: red;
}

.verde {
    color: green;
}

.zero {
    color: aqua;
}
</style>