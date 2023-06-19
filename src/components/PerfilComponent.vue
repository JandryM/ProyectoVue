<template>
    <div>
        <header class="nav">
        <h2 class="logo"><a href="https://www.uleam.edu.ec/" ><img src="../assets/css/logo.png" alt="" class="img"></a></h2>
        <nav>
            <ul>
                <li><a href="inicio.html"><i class="fas fa-home"></i></a></li>
            </ul>
        </nav>
    </header>
    <button id="XML" class="XML">Mostrar Datos Mediante XML</button>
        <div class="contenido" id="contenido">
            <article id="contenido">
                <h1 id="titulo">PERFIL DE USUARIO</h1>
                <img class="imagen" src="../assets/css/usuario.avif" >
                <h2>DATOS PERSONALES</h2>
                <br>
                <p id="nombres"> <b>NOMBRES:</b></p>
                <br>
                <p id="apellidos"> <b>APELLIDOS:</b></p>
                <br>
                <p id="fechaNacimiento"> <b>FECHA DE NACIMIENTO:</b></p>
                <br>
                <p id="nacionalidad"> <b>NACIONALIDAD:</b></p>
                <br>
                <p id="genero"><b>G&Eacute;NERO: </b></p>
                <br>
                <p id="estadoCivil"> <b>ESTADO CIVIL:</b></p>
                <br>
                <p id="cedula"> <b>CEDULA DE IDENTIDAD:</b></p>
                <br>
                <p id="domicilio"> <b>DOMICILIO:</b></p>
                <br>
                <p id="discapacidad"><b>TIPO DE DISCAPACIDAD: </b></p>
                <br>
                <p id="dependencia"><b>GRADO DE DEPENDENCIA: </b></p>
                <br>
                <p id="telefonoCelular"> <b>TEL&Eacute;FONO CELULAR:</b></p>
                <br>
                <p id="correo"> <b>CORREO:</b></p>
            </article>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PerfilComponent',
}
</script>

<style>

</style>