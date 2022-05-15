<template>
  <section class="bg-gray-light py-44">
    <div class="container flex h-auto px-16 justify-between items-center">
      <p class="font-roboto text-12 font-400 text-gray-default">
        &copy; Carlos 'Charlie' Caro | Front-End Developer 2022
      </p>
      <div class="flex gap-x-16 items-center">
        <a href="https://github.com/MrCaro" target="_blank">
          <img
            :src="`${publicPath}icons/github.svg`"
            :srcset="`${publicPath}icons/github.svg`"
            alt="Check out my github profile"
          />
        </a>
        <a href="https://linkedin.com/in/carlos-caro94/" target="_blank">
          <img
            :src="`${publicPath}icons/linkedin.svg`"
            :srcset="`${publicPath}icons/linkedin.svg`"
            alt="Check out my linkedin profile"
          />
        </a>
      </div>
    </div>
    <div class="container px-16">
      <small class="font-roboto text-10 font-400 text-gray-default flex">
        Made with
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          class="fill-[#b928e5]"
        >
          <g
            style="animation:pulsate .5s ease-in-out infinite both;transform-origin:center center"
            stroke-width="1.5"
          >
            <path
              stroke="#f6f7f9"
              d="M11.515 6.269l.134.132a.5.5 0 00.702 0l.133-.132A4.44 4.44 0 0115.599 5c.578 0 1.15.112 1.684.33a4.41 4.41 0 011.429.939c.408.402.733.88.954 1.406a4.274 4.274 0 010 3.316 4.331 4.331 0 01-.954 1.405l-6.36 6.259a.5.5 0 01-.702 0l-6.36-6.259A4.298 4.298 0 014 9.333c0-1.15.464-2.252 1.29-3.064A4.439 4.439 0 018.401 5c1.168 0 2.288.456 3.114 1.269z"
            />
            <path
              stroke="#b928e5"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.5 7.5c.802.304 1.862 1.43 2 2"
            />
          </g>
        </svg>
      </small>
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
