<script setup>
    const nombre = " La clase de DAM1"
    const styleColor = "color:blue;"
    const active = false
    const colores = ["blue", "red", "green"]
</script>


<template>
    <h1>Hola mundo{{ nombre }}</h1>
    <hr>
    <h2 v-bind:style="styleColor">Hola {{ nombre }}</h2> <!--v-bind:style="styleColor" se puede acortar con : -->
    <h2 :style="styleColor">Hola {{ nombre.toUpperCase() }}</h2>
    <hr>
    <p>{{ active ? 'Estoy activo' : 'Estoy inactivo' }}</p>
    <p>{{ colores }}</p>
    <h3 :style="`color: ${colores[0]}`">Color con interpolacion</h3>
    <hr>

    <!--Directiva v-if-->
    <div v-if ="active === true"><h2>Actice vale true</h2></div>
    <p v-else-if = "active === false">Actice vale false</p>
    <div v-else ="active === false"><h2>no se sabe lo que vale active</h2></div>

    <!--Directiva v-show, si no quieres q se vea la va a esconder (no se usa casi nada) -->
    <hr>
    <h3>Directiva v-show</h3>
    <h2 v-show="active">Active vale true</h2>

    
</template>

<style>
    h1{
        color: red;
    }
</style>


