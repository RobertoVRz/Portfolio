<template>
  <div
    class="
      bg-black
      h-screen
      3xl_h-screen
      relative
      flex
      items-center
      justify-center
      pt-28
      md_pt-0
    "
  >
    <div class="flex flex-col items-center md_items-start md_flex-row">
      <div class="px-5 z-10">
        <h1 class="text-white text-center text-6xl md_text-8xl mb-10 md_mb-14">
          Hola, soy Roberto
        </h1>
        <p class="hero__text text-white text-xl md_text-3xl text-center md_text-left">
          Soy un Ingeniero en Software con más de 5 años de experiencia en
          desarrollo web y móvil.<br /><br />
          Poseo una gran versatilidad para aprender y desarrollar con diferentes
          tecnologías.<br /><br />
          Tengo experiencia trabajando en equipo y dirección de proyectos de
          software.
        </p>
      </div>

      <img
        class="w-60 md_w-96 z-10 my-10 md_my-0 mx-10"
        src="@/assets/AvatarBig.png"
      />
    </div>

    <img
      class="absolute left-0 z-0 md_mt-0 mt-20"
      src="@/assets/Rectangle_1.svg"
    />
    <img class="absolute top-96 z-0" src="@/assets/Rectangle_2.svg" />
    <img
      class="absolute top-40 right-40 z-0 hidden md_block"
      src="@/assets/Rectangle_3.svg"
    />

    <img class="w-screen absolute bottom-0 -mb-1" src="@/assets/wave.svg" />
    <!--img
      class="md_hidden block w-screen absolute bottom-0"
      src="@/assets/waveMobile.svg"
    /-->
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
  &__text {

    @include screen(tablet) {
      width: 600px;
    }
  }
}
</style>
