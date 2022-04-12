<template>
  <section class="port my-10">
    <h1 class="port__title text-center mb-10">Portafolio</h1>
    <div class="port__container flex flex-wrap justify-center">
      <div
        class="port__card flex justify-center items-center m-5 md:m-10"
        :class="proyecto.estilo"
        @click="ir(proyecto.link)"
        v-for="(proyecto, index) in proyectos"
        :key="index"
      >
        <img :src="proyecto.logo" :alt="proyecto.nombre" />
      </div>
    </div>
  </section>
</template>
<script>
import omron from '@/assets/logosWork/omron.svg'
import vibox from '@/assets/logosWork/vibox.svg'
import viboxApp from '@/assets/logosWork/viboxApp.svg'
import viboxE from '@/assets/logosWork/viboxE.svg'
import squdera from '@/assets/logosWork/squdera.svg'
import agua from '@/assets/logosWork/agua.svg'
import dipo from '@/assets/logosWork/dipo.svg'
import pintolux from '@/assets/logosWork/pintolux.svg'
import artex from '@/assets/logosWork/artex.svg'
import bicla from '@/assets/logosWork/bicla.svg'
import zuntra from '@/assets/logosWork/zuntra.svg'
import hall from '@/assets/logosWork/hall.svg'

export default {
  data() {
    return {
      proyectos: [
        {
          nombre: 'Omron',
          logo: omron,
          descripcion: '',
          estilo: 'omron',
          link: 'https://omronhealthcare.la/',
        },
        {
          nombre: 'Vibox',
          logo: vibox,
          descripcion: '',
          estilo: 'vibox',
          link: 'https://vibox.mx/',
        },
        {
          nombre: 'Vibox App',
          logo: viboxApp,
          descripcion: '',
          estilo: 'viboxApp',
          link: 'https://apps.apple.com/mx/app/vibox/id1458779058?l=en',
        },
        {
          nombre: 'Vibox Empresarial',
          logo: viboxE,
          descripcion: '',
          estilo: 'viboxE',
          link: 'https://empresas.vibox.mx/',
        },
        {
          nombre: 'Agua de Vida',
          logo: agua,
          descripcion: '',
          estilo: 'agua',
          link: 'https://aguadevida.netlify.app/',
        },
        {
          nombre: 'Squdera',
          logo: squdera,
          descripcion: '',
          estilo: 'squdera',
          link: 'https://squdera.netlify.app/',
        },
        {
          nombre: 'Dipo',
          logo: dipo,
          descripcion: '',
          estilo: 'dipo',
          link: 'https://www.dipoviajes.com/',
        },
        {
          nombre: 'Pintolux',
          logo: pintolux,
          descripcion: '',
          estilo: 'pintolux',
          link: 'https://pintolux.com.mx/',
        },
        {
          nombre: 'Artex',
          logo: artex,
          descripcion: '',
          estilo: 'artex',
          link: 'https://artexlatam.com/',
        },
        {
          nombre: 'Bicla',
          logo: bicla,
          descripcion: '',
          estilo: 'bicla',
          link: 'http://www.biclamx.com/',
        },
        {
          nombre: 'Zuntra',
          logo: zuntra,
          descripcion: '',
          estilo: 'zuntra',
          link: 'https://www.zuntrapopclub.mx/',
        },
        {
          nombre: 'Hall Café',
          logo: hall,
          descripcion: '',
          estilo: 'hall',
          link: 'http://hallcafe.mx/',
        },
      ],
    }
  },
  methods: {
    ir(link) {
      window.open(link, '_blank')
    },
  },
}
</script>
<style lang="scss" scoped>
.omron {
  background: #003153;
  border: 1px solid #003153;
}

.vibox {
  background: #fc6806;
  border: 1px solid #fc6806;
}

.viboxApp {
  background: #fff;
  border: 1px solid #fc6806;
}

.viboxE {
  background: #6a3bf7;
  border: 1px solid #6a3bf7;
}

.squdera {
  background: #fff;
  border: 1px solid #d67736;
}

.agua {
  background: #2049df;
  border: 1px solid #2049df;
}

.dipo {
  background: #ff1616;
  border: 1px solid #ff1616;
}

.pintolux {
  background: #0b2667;
  border: 1px solid #0b2667;
}

.artex {
  background: #ffffff;
  border: 1px solid #000000;
}

.bicla {
  background: #000;
  border: 1px solid #000;
}

.zuntra {
  background: #212121;
  border: 1px solid #212121;
}

.hall {
  background: #0b0146;
  border: 1px solid #0b0146;
}

.port {
  padding: 2rem;
  @include screen(tablet) {
    padding: 5rem;
  }
  &__title {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 114px;
    color: #000A3F;
    @include screen(tablet) {
      font-size: 96px;
    }
  }
  &__card {
    width: 274px;
    height: 274px;
    border-radius: 45px;
    cursor: pointer;
    transition: 1s;
  }
  &__card:hover {
    transform: scale(1.2);
  }
}
</style>
