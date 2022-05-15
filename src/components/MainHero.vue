<template>
  <section class="relative bg-gray-dark pt-52 pb-60">
    <div
      class="max-w-screen-2xl mx-auto px-24 xs:px-36 sm:px-44 lg:px-52 md:px-60 grid grid-cols-12 gap-x-12 xs:gap-x-16 sm:gap-x-24 lg:gap-x-32 xl:gap-x-40"
    >
      <div
        class="row-start-2 md:row-start-1 col-start-1 md:col-start-2 col-span-12 md:col-span-5 z-10 flex flex-col justify-start items-start mt-40 md:mt-44 2xl:mt-[104px] -ml-12 md:-ml-32 xl:-ml-64"
      >
        <div class="relative flex gap-10 items-center py-4">
          <div
            class="absolute w-full h-full bg-yellow opacity-30 rounded-full"
          ></div>
          <span
            class="font-action text-12 font-600 text-gray-dark bg-yellow rounded-full uppercase text-14 py-6 px-8 ml-4"
          >
            destacado
          </span>
          <p class="font-display text-12 text-gray-light pr-10">
            Equipo confirmado
          </p>
        </div>
      </div>
      <div
        class="row-start-1 col-start-1 md:col-start-2 col-span-12 md:col-span-5 z-10 flex flex-col justify-center lg:-mt-128"
      >
        <h1
          class="font-heading text-40 lg:text-60 xl:text-80 font-600 leading-40 lg:leading-60 xl:leading-80 text-gray-light uppercase"
        >
          ha llegado la nueva generación
        </h1>
        <p
          class="font-display text-16 md:text-14 text-gray-light mt-40 lg:w-1/2"
        >
          Apoya a nuestros chamos en este nuevo torneo digital 🎮
        </p>
      </div>
      <div
        class="row-start-1 col-start-2 md:col-start-4 col-span-10 md:col-span-6"
      >
        <img
          class="h-full w-full md:w-[620px] md:mx-auto rounded-tr-[150px] md:rounded-tr-[200px] lg:rounded-tr-[250px] xl:rounded-tr-[300px] opacity-50 lg:opacity-100"
          :src="`${publicPath}img/hero-placeholder.jpg`"
          :srcset="`${publicPath}img/hero-placeholder.jpg`"
          alt=""
        />
      </div>
      <div
        class="row-start-3 md:row-start-2 xl:row-start-1 xl:col-start-10 col-span-12 xl:col-span-3 mt-40 md:mt-88"
      >
        <p
          class="flex items-center gap-12 font-display text-gray-default uppercase text-12"
        >
          <span class="relative flex h-8 w-8">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"
            ></span>
            <span
              class="relative inline-flex m-auto rounded-full h-6 w-6 bg-green"
            ></span>
          </span>
          últimas noticias
        </p>
        <div class="flex flex-col mt-16 md:mt-60 gap-y-56 gap-y-40">
          <div>
            <a class="group" href="/">
              <div class="flex justify-between">
                <h2
                  class="font-heading text-44 text-gray-light leading-44 font-600 uppercase"
                >
                  Charla de identidad
                </h2>
                <img
                  class="self-end transition-transform ease-in duration-200 group-hover:scale-50"
                  :src="`${publicPath}icons/arrow-link.svg`"
                  alt=""
                />
              </div>
              <p>may 2020</p>
              <span
                class="block ml-32 origin-left scale-x-50 group-hover:scale-x-100 transition-transform ease-in duration-200 delay-200 border-gray-light border-t-[1px]"
              ></span>
            </a>
          </div>
          <div>
            <a class="group" href="/">
              <h2
                class="font-heading text-44 text-gray-light leading-44 font-600 uppercase"
              >
                news 1
              </h2>
              <p>may 2020</p>
              <span
                class="block ml-32 origin-left scale-x-50 group-hover:scale-x-100 transition-transform ease-in duration-200 delay-200 border-gray-light border-t-[1px]"
              ></span>
            </a>
          </div>
          <div>
            <a class="group" href="/">
              <h2
                class="font-heading text-44 text-gray-light leading-44 font-600 uppercase"
              >
                news 1
              </h2>
              <p>may 2020</p>
              <span
                class="block ml-32 origin-left scale-x-50 group-hover:scale-x-100 transition-transform ease-in duration-200 delay-200 border-gray-light border-t-[1px]"
              ></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/javascript">
export default {
  name: "MainHero",
  components: {},
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  mounted() {},
  methods: {},
};
</script>
