<template>
  <header class="bg-white py-40">
    <!-- desktop -->
    <div class="container px-16">
      <nav>
        <div class="flex justify-between items-center">
          <a
            href="/"
            class="font-univia text-gray-default md:text-14 flex gap-x-8 items-center"
          >
            <img
              class="w-20"
              :src="`${publicPath}icons/cc-logo.svg`"
              :srcset="`${publicPath}icons/cc-logo.svg`"
              alt=""
            />
            Carlos 'Charlie' Caro
          </a>
          <div class="hidden md:block">
            <ul class="flex flex-row gap-x-72">
              <li
                v-for="navigation_item in navigation_items"
                :key="navigation_item.title"
              >
                <a
                  :href="`${navigation_item.url}`"
                  v-text="navigation_item.title"
                  class="font-roboto font-700 text-14 text-gray-default capitalize transition duration-500 ease-in-out hover:text-grape"
                >
                </a>
              </li>
            </ul>
          </div>
          <MainCTA
            url="mailto:carocarlosj@gmail.com"
            target="_blank"
            title="contact charlie"
          />
        </div>
      </nav>
    </div>
    <!-- mobile -->
    <div class="container md:hidden px-16 mt-48">
      <ul class="flex justify-around gap-x-72">
        <li
          v-for="navigation_item in navigation_items"
          :key="navigation_item.title"
        >
          <a
            :href="`${navigation_item.url}`"
            v-text="navigation_item.title"
            class="font-roboto font-700 text-14 text-gray-default capitalize transition duration-500 ease-in-out hover:text-grape"
          >
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
import MainCTA from "@/components/MainCTA.vue";
export default {
  name: "NavBar",
  components: {
    MainCTA,
  },
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
