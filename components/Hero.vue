<template>
  <div
    class="
      bg-black
      h-screen
      2xl_h-mid
      relative
      flex
      items-center
      justify-center
    "
  >
    <div class="flex flex-col items-center md_items-start md_flex-row">
      <div class="px-5 z-10">
        <h1 class="text-white text-center text-3xl md_text-7xl mb-5 md_mb-10">
          Hola, soy Roberto
        </h1>
        <p class="text-white text-xl md_text-2xl text-center">
          Soy un desarrollador web full-stack con más de 4 años de experiencia.
        </p>
      </div>

      <img
        class="w-56 md_w-96 z-10 my-32 md_my-0 mx-10"
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

<style></style>
