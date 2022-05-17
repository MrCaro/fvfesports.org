<template>
  <section>
    <div
      class="max-w-screen-2xl mx-auto px-24 xs:px-36 sm:px-44 lg:px-52 md:px-60 grid grid-cols-12 gap-x-12 xs:gap-x-16 sm:gap-x-24 lg:gap-x-32 xl:gap-x-40 gap-y-64"
    >
      <div
        class="col-start-1 col-span-12 xl:col-start-2 xl:col-span-3 text-gray-light flex flex-col md:flex-row md:flex-wrap md:justify-center gap-40 order-3 md:order-1"
      >
        <div class="flex items-center justify-between gap-16">
          <!-- player 1 -->
          <div
            class="relative min-h-[150px] min-w-[150px] rounded-full overflow-hidden"
          >
            <img
              class="absolute w-full h-full object-cover"
              src="https://source.unsplash.com/random"
              alt=""
            />
          </div>
          <div>
            <p class="font-display text-gray-light uppercase">
              Jose kazanji 🎮
            </p>
            <p class="font-display text-gray-default">26 años</p>
            <p class="font-display text-gray-default">miranda</p>
          </div>
        </div>
        <!-- player 2 -->
        <div class="flex items-center justify-around gap-16">
          <div
            class="relative min-h-[150px] min-w-[150px] rounded-full overflow-hidden"
          >
            <img
              class="absolute w-full h-full object-cover"
              src="https://source.unsplash.com/random"
              alt=""
            />
          </div>
          <div>
            <p class="font-display text-gray-light uppercase">
              Jose kazanji 🎮
            </p>
            <p class="font-display text-gray-default">26 años</p>
            <p class="font-display text-gray-default">miranda</p>
          </div>
        </div>
        <!-- player 3 -->
        <div class="flex items-center justify-around gap-16">
          <div
            class="relative min-h-[150px] min-w-[150px] rounded-full overflow-hidden"
          >
            <img
              class="absolute w-full h-full object-cover"
              src="https://source.unsplash.com/random"
              alt=""
            />
          </div>
          <div>
            <p class="font-display text-gray-light uppercase">
              Jose kazanji 🎮
            </p>
            <p class="font-display text-gray-default">26 años</p>
            <p class="font-display text-gray-default">miranda</p>
          </div>
        </div>
        <!-- player 4 -->
        <div class="flex items-center justify-around gap-16">
          <div
            class="relative min-h-[150px] min-w-[150px] rounded-full overflow-hidden"
          >
            <img
              class="absolute w-full h-full object-cover"
              src="https://source.unsplash.com/random"
              alt=""
            />
          </div>
          <div>
            <p class="font-display text-gray-light uppercase">
              Jose kazanji DT 🎮
            </p>
            <p class="font-display text-gray-default">26 años</p>
            <p class="font-display text-gray-default">miranda</p>
          </div>
        </div>
      </div>
      <div
        class="relative col-start-1 col-span-12 xl:col-start-5 xl:col-span-4 text-gray-light flex flex-col text-center items-center self-center order-1 md:order-2"
      >
        <img
          class="realtive  h-auto w-[424px] opacity-50 mix-blend-overlay top-0 bottom-0 my-auto"
          :src="`${publicPath}img/fvf-equipo.svg`"
          alt=""
        />
        <div
          class="absolute top-0 bottom-0 m-auto flex flex-col justify-center"
        >
          <span
            class="font-main opacity-20 text-40 lg:text-60 xl:text-80 font-600 leading-40 lg:leading-60 text-gray-light uppercase"
          >
            equipo
          </span>
          <span
            class="font-main opacity-50 text-40 lg:text-60 xl:text-80 font-600 leading-40 lg:leading-60 text-gray-light uppercase"
          >
            equipo
          </span>
          <h2
            class="font-heading text-40 lg:text-60 xl:text-80 font-600 leading-40 lg:leading-60 text-gray-light uppercase"
          >
            equipo
          </h2>
          <span
            class="font-main opacity-50 text-40 lg:text-60 xl:text-80 font-600 leading-40 lg:leading-60 text-gray-light uppercase"
          >
            equipo
          </span>
          <span
            class=" font-main opacity-20 text-40 lg:text-60 xl:text-80 font-600 leading-40 lg:leading-60 text-gray-light uppercase"
          >
            equipo
          </span>
        </div>
      </div>
      <div
        class="col-start-1 col-span-12 xl:col-start-9 xl:col-span-3 text-gray-light flex flex-col items-center self-center uppercase order-2 md:order-3"
      >
        <!-- player dt -->
        <div class="flex items-center gap-16">
          <div
            class="relative min-h-[150px] min-w-[150px] rounded-full overflow-hidden"
          >
            <img
              class="absolute w-full h-full object-cover"
              src="https://source.unsplash.com/random"
              alt=""
            />
          </div>
          <div>
            <p class="font-display text-gray-light uppercase">
              Jose kazanji DT 🎮
            </p>
            <p class="font-display text-gray-default">26 años</p>
            <p class="font-display text-gray-default">miranda</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Roster",
  components: {},
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>
