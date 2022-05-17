<template>
  <header class="bg-gray-dark py-40">
    <nav
      class="max-w-screen-2xl mx-auto px-24 xs:px-36 sm:px-44 lg:px-52 md:px-60 grid grid-cols-12 gap-x-12 xs:gap-x-16 sm:gap-x-24 lg:gap-x-32 xl:gap-x-40 flex h-auto px-16 justify-between items-center"
    >
      <div class="col-span-3">
        <p class="font-main text-30 leading-30 text-gray-light">
          FVF ESPORT
        </p>
      </div>
      <div class="col-span-3 text-center">
        <p class="font-main text-30 leading-30 text-gray-light">
          FVF ESPORT
        </p>
      </div>
      <div class="col-span-3 text-center">
        <p class="font-main text-30 leading-30 text-gray-light">
          FVF ESPORT
        </p>
      </div>
      <div class="col-span-3 text-right">
        <p class="font-main text-30 leading-30 text-gray-light">
          FVF ESPORT
        </p>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "NavBar",
  components: {},
  data() {
    const navigation_items = [
      { title: "about", url: "./#about" },
      { title: "work", url: "./#work" },
      { title: "skills", url: "./#skills" },
    ];
    return {
      navigation_items,
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>
