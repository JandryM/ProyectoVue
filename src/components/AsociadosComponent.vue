<template>
    <div>
        <button id="botonjson">Mostrar Datos Mediante JSON</button>
    <br/><br/> 

    <table border="1" id="personas">
        <thead class="tablehead">
          <tr>
            <th>NOMBRE</th>
            <th>APELLIDO</th>
            <th>FECHA DE NACIMIENTO</th>
            <th>NACIONALIDAD</th>
            <th>DISCAPACIDAD</th>
            <th>CARRERA</th>
            <th>SEMESTRE</th>
          </tr>
        </thead>
        <tbody>
          <!-- Aquí se agregarán las filas de datos dinámicamente -->
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
    name: 'AsociadosComponent',
}
</script>

<style>

</style>