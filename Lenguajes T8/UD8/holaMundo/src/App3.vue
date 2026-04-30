<script setup>
    
    const nombre = "Vue 3"
    const arrayFrutas = ["🍎", "🍌", "🍉", "🍓", "🍒"];
    const descragaFrutas = [
        {
            name: "Manzana",
            price: "1.00€",
            descripcion: "Manzana del himalaia",
            stock: 0
        },
         {
            name: "Pera",
            price: "2.50€",
            descripcion: "Pera de Pascual",
            stock: 67
        },
         {
            name: "Naranja",
            price: "3.00€",
            descripcion: "Naranja de DAM1",
            stock: 8
        }
     ]

    const fruta = 
        {
            name: "Fresa",
            price: "4.00€",
            descripcion: "Fresa"
        }
    
</script>

<template>
    <h1>Hola {{ nombre }}</h1>
    <hr>
    <h3>Directiva v-for</h3>

    <p>Recorremos un array</p>
    <p>{{ arrayFrutas }}</p>
    <ul class="sinPunto">
        <li v-for="(fruta, index) in arrayFrutas" :key="index">
            {{ index }} - {{ fruta}}
        </li>

    </ul>
    
    <hr>
    <p>Recorremos un array de Objetos</p>
    <ul>
        <li v-for="(fruta) in descragaFrutas" :Key="fruta.name"> <!--la key es para poner como clave primaria el nombre-->
            {{ fruta.name }} - {{ fruta.descripcion }} -- {{ fruta.price }}
        </li>
    </ul>
    <hr>
    <p>Recorremos un objeto</p>
    <ul>
        <li v-for ="(valor, propiedad, index) in fruta">
           {{ propiedad }} - {{ valor }} - {{ index }}
        </li>
    </ul>
</template>

<style>
    .sinPunto{
        list-style-type: none;
    }
</style>