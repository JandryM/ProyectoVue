<template>

    <!-- <div>
    <HelloWorld></HelloWorld>
  </div> -->
  <div>
    <header class="nav">
      <h2 class="logo">
        <a href="https://www.uleam.edu.ec/">
          <img src="../assets/css/logo.png" alt="" class="img" />
        </a>
      </h2>
      <nav>
        <ul>
          <li>
            <a href="registro.html">
              <i class="fas fa-user-plus"></i>Registro
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <form action="" class="form" id="form">
      <div class="contenedor">
        <h1>Bienvenido</h1>
        <div class="botons correo">
          <p class="warnings"></p>
          <input class="boton" type="email" v-model="email" placeholder="E-mail" />
          <label for="correo"></label>
        </div>
        <div class="botons pass">
          <p class="warnings"></p>
          <input class="boton" type="password" v-model="password" placeholder="Contraseña" />
          <label for="contraseña"></label>
        </div>
        <input class="control" type="submit" @click="enviar" value="Iniciar Sesión" />
        <p>Aún no tienes una Cuenta?<a href="registro.html"><b>Crear Cuenta</b></a></p>
      </div>
    </form>
  </div>
  </template>
  
  <script >
  export default{
    name: 'TestComponent',
    props: {
      compop:String
    }
  }

  </script>
  
  <style scoped>
    
  </style>
  