<script setup>
    const productos = [
  { id: 1,  nombre: 'Portátil',      precio: 999,  stock: 12,  categoria: 'Electrónica' },
  { id: 2,  nombre: 'Teclado',     precio: 49,   stock: 34,  categoria: 'Periféricos' },
  { id: 3,  nombre: 'Monitor',     precio: 320,  stock: 8,   categoria: 'Electrónica' },
  { id: 4,  nombre: 'Ratón',       precio: 25,   stock: 60,  categoria: 'Periféricos' },
  { id: 5,  nombre: 'Auriculares', precio: 89,   stock: 20,  categoria: 'Audio'       },
  { id: 6,  nombre: 'Webcam',      precio: 75,   stock: 15,  categoria: 'Periféricos' },
  { id: 7,  nombre: 'SSD 1TB',    precio: 110,  stock: 27,  categoria: 'Almacenamiento' },
  { id: 8,  nombre: 'Hub USB',    precio: 35,   stock: 45,  categoria: 'Periféricos' },
  { id: 9,  nombre: 'Altavoces',  precio: 130,  stock: 9,   categoria: 'Audio'       },
  { id: 10, nombre: 'Alfombrilla',precio: 18,   stock: 80,  categoria: 'Periféricos' },
]


const estudiantes = [
  { id: 1,  nombre: 'Dani Remón',    nota: 9.2,  aprobado: true,  curso: 'DAW' },
  { id: 2,  nombre: 'Luis Martín',   nota: 4.8,  aprobado: false, curso: 'DAM' },
  { id: 3,  nombre: 'Sara López',    nota: 7.5,  aprobado: true,  curso: 'ASIR' },
  { id: 4,  nombre: 'Carlos Pérez', nota: 6.0,  aprobado: true,  curso: 'DAW' },
  { id: 5,  nombre: 'Diego Quiles',   nota: 3.1,  aprobado: false, curso: 'DAM' },
  { id: 6,  nombre: 'Pedro Sanz',   nota: 8.8,  aprobado: true,  curso: 'ASIR' },
  { id: 7,  nombre: 'Elena Vega',   nota: 5.5,  aprobado: true,  curso: 'DAW' },
  { id: 8,  nombre: 'Hector Enguita',   nota: 2.9,  aprobado: false, curso: 'DAM' },
  { id: 9,  nombre: 'Hector Lozano', nota: 9.7,  aprobado: true,  curso: 'ASIR' },
  { id: 10, nombre: 'Tomás Gil',    nota: 7.0,  aprobado: true,  curso: 'DAW' },
]



</script>


<template>
    <h1>Ejercicios de repaso</h1>
    <hr>
   
    <!--Recorro el array Productos y muestroel nombre y el precio-->
    <h2>Productos</h2>
    <ul>
        <li v-for="(p, index) in productos" :key="p.id">
            {{ index+1 }} - {{ p.nombre}} - {{ p.precio }}€
        </li>

    </ul>

    <hr>


    <!--Recorro el array Estudiantes y muestro el nombre-->
    <h2>Estudiantes</h2>
    <li v-for="e in estudiantes" :key="e.id">

        {{ e.nombre }}

    </li>


    <hr>

    <!--Recorro el array Productos y muestro los de precio > 50€-->
        <!--Si queremos usar un v-if dentro de n v-for hay q usar una etiqueta template-->
    <h2>V-for con V-if: Productos con precio superior a 50€</h2>

    <template v-for="(p, index) in productos" :key="p.id">

        <li v-if="p.precio > 50">
           {{ index+1 }} - {{ p.nombre }} - {{ p.precio }}
        </li>

    </template>


    <hr>


    <!--Recorro el array Estudiantes y muestro los alumnos aprobados-->
    <h2>V-for con V-if: Estudiantes aprobados</h2>

    <template v-for="(e, index) in estudiantes" :key="e.id">

        <li v-if="e.nota > 5">
           {{ index+1 }} - {{ e.nombre }} - {{ e.nota }}
        </li>

    </template>

</template>


<style>

</style>