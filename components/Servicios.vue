<template>
  <div class="services">
    <h1 class="services__title mb-10">Servicios</h1>
    <div class="flex flex-wrap justify-center">
      <div
        class="services__servicio"
        v-for="(servicio, index) in servicios"
        :key="index"
      >
        <h2 class="services__servicio__title mb-0">{{ servicio.nombre }}</h2>
        <hr v-if="true" class="text-white my-2" />
        <p
          class="services__servicio__text mb-5"
          v-for="(tipo, index) in servicio.tipos"
          :key="index"
        >
          ● {{ tipo }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      servicios: [
        {
          nombre: 'Desarrollo Web',
          tipos: [
            'Páginas Web',
            'Aplicaciones Web',
            'Progresive Web Apps',
            'Proyectos Personalizados',
          ],
        },
        {
          nombre: 'Diseño',
          tipos: ['Diseño Web', 'Diseño de Apps iOs & Android'],
        },
        {
          nombre: 'Desarrollo Apps ',
          tipos: ['iOs & Android', 'Apps Nativas', 'Apps Híbridas'],
        },
        {
          nombre: 'DevOps',
          tipos: [
            'Mantenimiento de Sistemas',
            'Soporte Técnico',
            'Configuración y deploy de apps',
            'Refactoring',
            'Migración de Servicios',
          ],
        },
        {
          nombre: 'Outsourcing',
          tipos: ['Project Managment', 'Equipos de desarrollo'],
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.services {
  height: 100%;
  width: 100vw;
  padding: 8rem 2rem;
  background: linear-gradient(-45deg, #ee7752, #ff0a6c, #001E26, #2d27ff);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  //background: #001E26;
  //border-radius: 40px;
  @include screen(tablet) {
    //border-radius: 15%;
  }
  &__title {
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: 114px;
    letter-spacing: -0.015em;
    text-align: center;
    color: white;
    background: linear-gradient(270deg, #2d27ff, #ff0a6c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    @include screen(tablet) {
      font-size: 96px;
    }
  }
  &__servicio {
    padding: 2rem;
    margin: 1rem 0rem;
    //border: 1px solid white;
    border-radius: 25px;
    @include screen(tablet) {
      min-width: 400px;
      margin: 1rem;
    }
    &__title {
      font-size: 36px;
      font-style: normal;
      font-weight: 500;
      line-height: 43px;
      letter-spacing: -0.015em;
      text-align: left;
      color: #ffffff;
    }
    &__text {
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: -0.015em;
      text-align: left;
      color: #ffffff;
    }
  }
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
}
</style>
