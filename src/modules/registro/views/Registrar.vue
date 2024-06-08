<script setup>
import {Form, Field, ErrorMessage} from 'vee-validate';
import {schema} from '../schemas/validationSchema';
import {useRegistrarStore} from '../stores/registrarStore'; 
import {ref} from 'vue';

const registrarStore = useRegistrarStore()

const nombre = ref('');
const email = ref('');

const onSubmit = () => {
    registrarStore.guardarRegistro(nombre.value, email.value);
    console.log('Formulario enviado');
}
</script>

<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label
          >Nombre:
          <Field v-model="nombre" type="text" name="nombre" placeholder="Ingrese su nombre" />
          <ErrorMessage name="nombre" />
        </label>
      </div>
      <div class="form">
        <label>
          Correo:
          <Field v-model="email" type="email" name="email" placeholder="Ingrese su email" />
            <ErrorMessage name="email" />
        </label>
      </div>
      <div class="form">
        <button type="submit">Registrar</button>
      </div>
    </Form>
  </div>
</template>

<style scoped>
    .form {
        margin-bottom: 10px;
    }

</style>
