<template>
    <div>
    <header class="nav">
      <h2 class="logo"><a href="https://www.uleam.edu.ec/"><img src="../assets/css/logo.png" alt="" class="img"></a></h2>
      <nav>
        <ul>
          <li><a href="index.html"><i class="fas fa-sign-in-alt"></i>Iniciar Sesión</a></li>
        </ul>
      </nav>
    </header>

    <div class="todo">
      <form @submit="submitForm" class="form" ref="form">
        <div class="contenedor">
          <h1>Registro de Estudiantes con Capacidades Especiales en la ULEAM</h1>
          <div class="botons name">
            <p class="warnings"></p>
            <input class="boton" type="text" id="name" placeholder="Nombres Completos">
            <label for="nombre"></label>
          </div>
          <div class="botons cedu">
            <p class="warnings"></p>
            <input class="boton" type="text" id="cedu" placeholder="Cédula">
            <label for="cedu"></label>
          </div>
          <div class="botons correo">
            <p class="warnings"></p>
            <input class="boton" type="email" id="correo" placeholder="E-mail">
            <label for="correo"></label>
          </div>
          <div class="botons celular">
            <p class="warnings"></p>
            <input class="boton" type="text" id="celular" placeholder="Celular">
            <label for="celular"></label>
          </div>
          <div class="botons phonerepre">
            <p class="warnings"></p>
            <input class="boton" type="text" placeholder="Celular del Representante" id="phonerepre">
            <label for="phonerepre"></label>
          </div>
          <div class="botons dire">
            <p class="warnings"></p>
            <input class="boton" type="text" id="dire" placeholder="Dirección">
            <label for="dire"></label>
          </div>

          <div class="botons text1">
            <p class="warnings"></p>
            <span>Tipo de Discapacidad:</span>
            <br>
            <select class="desple" id="text1">
              <option value="0" disabled selected>Seleccione</option>
              <option value="1" class="grado">Física</option>
              <option value="2" class="grado">Intelectual</option>
              <option value="3" class="grado">Mental</option>
              <option value="4" class="grado">Psicosocial</option>
              <option value="5" class="grado">Múltiple</option>
              <option value="6" class="grado">Sensorial</option>
              <option value="7" class="grado">Auditiva</option>
              <option value="8" class="grado">Otros...</option>
            </select>
          </div>

          <div class="botons text2">
            <p class="warnings"></p>
            <span>Grado de Dependencia:</span>
            <br>
            <select class="desple" id="text2">
                <option value="0" disabled selected>Seleccione</option>
                <option value="1" class="grado">Grado 1: Discapacidad Nula</option>
                <option value="2" class="grado">Grado 2: discapacidad leve</option>
                <option value="3" class="grado">Grado 3: discapacidad moderada</option>
                <option value="4" class="grado">Grado 4: discapacidad grave</option>
                <option value="5" class="grado">Grado 5: discapacidad muy grave</option>
            </select>
        </div>

        <div class="botons tipgenero">
        <p class="warnings"></p>
        <span>Género</span>
        <div class="genero" id="tipgenero">
            <label> Masculino
            <input type="radio" id="tipe1" name="gender">
            </label>
            <label> Femenino
            <input type="radio" id="tipe2" name="gender">
            </label>
            <label> Prefiero No Responder
            <input type="radio" id="tipe3" name="gender">
            </label>
        </div>
        </div>
        <div class="botons pass">
        <p class="warnings"></p>
        <input class="boton" type="password" id="contraseña" placeholder="Contraseña">
        <label for="contraseña"></label>
        </div>
        <div class="botons contra">
        <p class="warnings"></p>
        <input class="boton" type="password" id="repcontra" placeholder="Repita su Contraseña">
        <label for="repcontra"></label>
        </div>
        <div class="botons terminosycondiciones">
        <p class="warnings"></p>
        <input type="checkbox" id="terminosycondiciones" />He leído y Acepto los
        <a href="#"><b>Términos y Condiciones</b></a>        
    </div>
        <input class="control" type="submit" value="Registrar">
        <p>Ya tienes una Cuenta?<a href="index.html"><b>Iniciar Sesión</b> </a></p>
        </div>
        </form>
        </div>
        </div>
</template>

<script>
export default {
    name: 'RegistroComponent',
}
</script>

<style>

</style>