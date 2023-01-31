<template>
  <div>
    <Hero />
    <Tecnologias />
    <div class="b"></div>
    <Servicios />
    <div class="c"></div>
    <Portafolio />
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

.b {
  clip-path: polygon(0 0, 100% 80px, 100% 100%, 0 100%);
  background-color: #001E26;
  height: 100px;
}
.c {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 80px));
  background-color: #001E26;
  height: 100px;
}
</style>
