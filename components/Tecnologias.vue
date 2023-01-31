<template>
  <section class="tec my-10 fondo">
    <h1 class="tec__title text-black text-center py-10">Mis skills</h1>
    <div class="w-screen flex flex-wrap justify-center items-center">
      <img
        v-for="(item, index) of tecnologias"
        :key="index"
        :src="item.logo"
        alt="logos"
        class="tec__logo"
      />
    </div>
  </section>
</template>
<script>
import angular from '@/assets/logos/angular.svg'
import aws from '@/assets/logos/aws.svg'
import bootstrap from '@/assets/logos/bootstrap.svg'
import css_3 from '@/assets/logos/css_3.svg'
import django from '@/assets/logos/django.svg'
import figma from '@/assets/logos/figma.svg'
import github from '@/assets/logos/github.svg'
import google from '@/assets/logos/google.svg'
import graphql from '@/assets/logos/graphql.svg'
import html_5 from '@/assets/logos/html_5.svg'
import jquery from '@/assets/logos/jquery.svg'
import js from '@/assets/logos/js.svg'
import laravel from '@/assets/logos/laravel.svg'
import next from '@/assets/logos/next.svg'
import node_js from '@/assets/logos/node_js.svg'
import npm from '@/assets/logos/npm.svg'
import nuxt from '@/assets/logos/nuxt.svg'
import pug from '@/assets/logos/pug.svg'
import python from '@/assets/logos/python.svg'
import react from '@/assets/logos/react.svg'
import sass from '@/assets/logos/sass.svg'
import shopify from '@/assets/logos/shopify.svg'
import tailwind from '@/assets/logos/tailwind.svg'
import vs_code from '@/assets/logos/vs_code.svg'
import vue from '@/assets/logos/vue.svg'
import vuetify from '@/assets/logos/vuetify.svg'
import wordpress from '@/assets/logos/wordpress.svg'
import yarn from '@/assets/logos/yarn.svg'
import zeplin from '@/assets/logos/zeplin.svg'

export default {
  data() {
    return {
      tecnologias: [
        {
          logo: html_5,
        },
        {
          logo: css_3,
        },
        {
          logo: js,
        },
        {
          logo: jquery,
        },
        {
          logo: bootstrap,
        },
        {
          logo: sass,
        },
        {
          logo: tailwind,
        },
        {
          logo: pug,
        },
        {
          logo: next,
        },
        {
          logo: nuxt,
        },
        {
          logo: angular,
        },
        {
          logo: vue,
        },
        {
          logo: vuetify,
        },
        {
          logo: react,
        },
        {
          logo: node_js,
        },
        {
          logo: laravel,
        },
        {
          logo: python,
        },
        {
          logo: django,
        },
        {
          logo: graphql,
        },
        {
          logo: figma,
        },
        {
          logo: zeplin,
        },
        {
          logo: aws,
        },
        {
          logo: google,
        },
        {
          logo: vs_code,
        },
        {
          logo: yarn,
        },
        {
          logo: npm,
        },
        {
          logo: github,
        },
        {
          logo: shopify,
        },
        {
          logo: wordpress,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.fondo {
  background: linear-gradient(-45deg, #ee7752, #ff0a6c, #001e26, #2d27ff);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
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
.tec {
  &__title {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 114px;
    color: #001d69;
    @include screen(tablet) {
      font-size: 96px;
    }
  }
  &__logo {
    height: 6rem;
    width: 6rem;
    margin: 1rem;
    transition-duration: 1s;
    @include screen(tablet) {
      height: 8rem;
      margin: 3rem;
    }
  }
  &__logo:hover {
    transform: scale(1.5);
  }
  &__container {
    @include screen(tablet) {
    }
  }
}
</style>
