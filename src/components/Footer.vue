<template>
  <section class="bg-gray-dark py-44">
    <div
      class="container max-w-screen-2xl mx-auto px-24 xs:px-36 sm:px-44 lg:px-52 md:px-60 grid grid-cols-12 gap-x-12 xs:gap-x-16 sm:gap-x-24 lg:gap-x-32 xl:gap-x-40 flex h-auto px-16 justify-between items-center"
    >
      <div class="col-span-6">
        <p class="font-action text-12 font-400 text-gray-default">
          &copy; 2022 FVF ESPORT
        </p>
      </div>
      <div class="col-span-6">
        <p class="font-action text-12 font-400 text-gray-default text-right">
          creado por
          <a
            href="https://carloscaro.me"
            target="_blank"
            rel="noopener noreferrer"
            class="underline hover:text-wine-light transition-colors ease-in duration-100"
            >carloscaro.me</a
          >
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>
