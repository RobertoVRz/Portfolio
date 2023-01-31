<template>
  <footer class="footer flex flex-col justify-center items-center">
    <h1 class="footer__title text-white mb-10">Contacto</h1>
    <div class="flex flex-col md_flex-row items-center justify-center">
      <div class="flex items-center justify-center p-5">
        <img class="mr-5" src="@/assets/icons/mail.svg" alt="" />
        <a href="mailto:roberto.vzrz@gmail.com" class="footer__texto text-white"
          >roberto.vzrz@gmail.com</a
        >
      </div>

      <div class="flex items-center justify-center p-5">
        <img class="mr-5" src="@/assets/icons/phone.svg" alt="" />
        <a href="tel:+2711391988" class="footer__texto text-white"
          >271 139 1988</a
        >
      </div>

      <div class="flex items-center justify-center p-5">
        <img class="mr-5" src="@/assets/icons/github.svg" alt="" />
        <a href="https://github.com/RobertoVRz" class="footer__texto text-white"
          >RobertoVRz</a
        >
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  background: #001220;
  border-radius: 10px 10px 0 0;
  padding: 5rem 0rem;
  @include screen(tablet) {
    border-radius: 10px 10px 0 0;
  }
  &__title {
    font-size: 4rem;
  }
  &__texto {
    font-size: 1.5rem;
    @include screen(tablet) {
      font-size: 2rem;
    }
  }
}
</style>
