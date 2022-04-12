export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'RobertoVRz | Mobile & Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Soy un Ingeniero en Software con más de 5 años de experiencia en desarrollo web y móvil.Poseo una gran versatilidad para aprender y desarrollar con diferentes tecnologías.Tengo experiencia trabajando en equipo y dirección de proyectos de software.',
      },
      { name: 'google', value: 'notranslate' },
      { 'http-quiv': 'Content-Language', content: 'es_MX' },
      { name: 'theme-color', content: '#000A3F' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.robertovrz-portfolio.netlify.app/',
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'RobertoVRz' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'RobertoVRz | Mobile & Web Developer',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Soy un Ingeniero en Software con más de 5 años de experiencia en desarrollo web y móvil.Poseo una gran versatilidad para aprender y desarrollar con diferentes tecnologías.Tengo experiencia trabajando en equipo y dirección de proyectos de software.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.robertovrz-portfolio.netlify.app/icon.png',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content:
          'Soy un Ingeniero en Software con más de 5 años de experiencia en desarrollo web y móvil.Poseo una gran versatilidad para aprender y desarrollar con diferentes tecnologías.Tengo experiencia trabajando en equipo y dirección de proyectos de software.',
      },
      {
        name: 'theme-color',
        content: '#000A3F',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  styleResources: {
    scss: ['@/assets/sass/app.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
