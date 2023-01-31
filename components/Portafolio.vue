<template>
  <section class="port my-10">
    <h1 class="port__title font-bold text-center mb-10">Portafolio</h1>
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
import gii from '@/assets/logosWork/gii.png'
import rsvp from '@/assets/logosWork/rsvp.png'
import jazzatlan from '@/assets/logosWork/jazzatlan.svg'
import coordex from '@/assets/logosWork/coordex.svg'
import cje from '@/assets/logosWork/cje.svg'
import fg from '@/assets/logosWork/fgAbogados.png'
import hall from '@/assets/logosWork/hall.svg'
import laesposa from '@/assets/logosWork/laesposa.png'
import hugo from '@/assets/logosWork/hugo.svg'

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
          nombre: 'Coordex',
          logo: coordex,
          descripcion: '',
          estilo: 'coordex',
          link: 'https://www.coordexcentrocambiario.com/',
        },
        {
          nombre: 'Gii Studio',
          logo: gii,
          descripcion: '',
          estilo: 'gii',
          link: 'https://giistudio.mx/',
        },
        {
          nombre: 'Dipo',
          logo: dipo,
          descripcion: '',
          estilo: 'dipo',
          link: 'https://www.dipoviajes.com/',
        },
        {
          nombre: 'Jazzatlan',
          logo: jazzatlan,
          descripcion: '',
          estilo: 'jazzatlan',
          link: 'https://boletera.jazzatlan.club/',
        },
        {
          nombre: 'Dr. Hugo',
          logo: hugo,
          descripcion: '',
          estilo: 'hugo',
          link: 'https://drhugocabrera.com/',
        },
        {
          nombre: 'RSVP',
          logo: rsvp,
          descripcion: '',
          estilo: 'rsvp',
          link: 'https://www.rsvpboutique.com.mx/',
        },
        {
          nombre: 'La Esposa',
          logo: laesposa,
          descripcion: '',
          estilo: 'laesposa',
          link: 'https://laesposa.mx/',
        },
        {
          nombre: 'CJE ABogados',
          logo: cje,
          descripcion: '',
          estilo: 'cje',
          link: 'https://www.cjegarciayasociados.com/',
        },
        {
          nombre: 'F&G ABogados',
          logo: fg,
          descripcion: '',
          estilo: 'fg',
          link: 'https://www.fgabogadosfiscalistas.com/',
        },
        {
          nombre: 'Squdera',
          logo: squdera,
          descripcion: '',
          estilo: 'squdera',
          link: 'https://squdera.netlify.app/',
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
          nombre: 'Agua de Vida',
          logo: agua,
          descripcion: '',
          estilo: 'agua',
          link: 'https://aguadevida.netlify.app/',
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

.coordex {
  background: #fff;
  border: 1px solid #2049df;
  padding: 1rem;
}

.gii {
  background: #000;
  border: 1px solid #000;
  padding: 2rem;
}

.cje {
  background: #041c2c;
  border: 1px solid #041c2c;
  padding: 5rem;
}

.fg {
  background: #000;
  border: 1px solid #000;
  padding: 1rem;
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

.jazzatlan {
  background: #262729;
  border: 1px solid #262729;

  img {
    width: 80%;
  }
}

.rsvp {
  background: #e5167c;
  border: 1px solid #e5167c;
  img {
    width: 80%;
  }
}

.pintolux {
  background: #0b2667;
  border: 1px solid #0b2667;
}

.laesposa {
  background: #aacad1;
  border: 1px solid #aacad1;
  img {
    width: 80%;
  }
}

.hugo {
  background: #eb515b;
  border: 1px solid #eb515b;
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
    background: linear-gradient(0deg, #2d27ff, #ff0a6c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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
