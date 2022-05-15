<template>
  <section id="about" class="relative">
    <div class="container grid grid-col-1 md:grid-cols-2 h-full px-16 gap-y-48">
      <div
        class="relative flex flex-col items-center justify-center order-2 md:order-1"
      >
        <div class="relative">
          <img
            :src="`${publicPath}icons/squaredot-pattern.svg`"
            :srcset="`${publicPath}icons/squaredot-pattern.svg`"
            alt=""
            class="absolute top-[-2rem] left-[-4rem]"
          />
          <img
            :src="`${publicPath}icons/squaredot-pattern.svg`"
            :srcset="`${publicPath}icons/squaredot-pattern.svg`"
            alt=""
            class="absolute bottom-[-1rem] right-[-3rem] "
          />
          <img
            :src="`${publicPath}img/charlie-header-bw.png`"
            :srcset="`${publicPath}img/charlie-header-bw.png`"
            alt="Charlie headshot"
            class="headshot relative h-[372px] w-auto"
            style="filter: drop-shadow(11px 11px 10px #00000029);"
          />
          <div
            class="absolute left-[-3rem] bottom-[5rem] flex justify-center items-center"
          >
            <div
              class="absolute h-full w-full rounded-xl bg-white"
              style="box-shadow: 0 0 5rem 0 rgba(0, 0, 0, .3)"
            ></div>
            <div class="relative h-auto w-auto px-20 py-12">
              <p class="text-28">
                🇻🇪
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center gap-y-20 order-1 md:order-2">
        <h2 class="font-univia text-40 text-gray-dark leading-tight">
          <span
            class="text-white"
            style="text-shadow: -1px -1px 0 #b928e5, 1px -1px 0 #b928e5, -1px 1px 0 #b928e5, 1px 1px 0 #b928e5;"
          >
            About
          </span>
          Who? Charlie?
        </h2>
        <p class="font-roboto font-400 text-gray-default mt-32 text-14">
          Carlos/Charlie/Charlos is a Front-End Web Developer at
          <a
            class="text-gray-dark"
            href="https://tasty.studio/"
            target="_blank"
            rel="noopener noreferrer"
            >Tasty Studio</a
          >. Before moving to Orlando, Charlie spent seven years in Miami, FL
          where he got his Bachelors in Computer Science and Business Management
          from St. Thomas University. Charlie is responsible to bring digital
          experiences to the www. which can range from e-commerce, marketing
          landing pages, or overall web projects. At Tasty Studio Charlie not
          only craft complex web solutions but also takes part of business
          development in departments like sales, project management and overall
          business innovation.
        </p>
        <p class="font-roboto font-400 text-gray-default text-14">
          While not coding or assisting clients with tech you can find Charlie
          lifting weights, playing soccer, or geeking about Batman, Star Wars,
          Harry Potter, Spiderman... I think you get the point. Aside from being
          a full-time nerd! Charlie also likes to spend his time with Family and
          Friends.
        </p>
        <p class="font-roboto font-400 text-gray-default text-14">
          Currently, Charlie is a full time student at the University of Central
          Florida where he is getting his Master's degree in Computer Science
          with a specialization in Mixed Reality Development.
        </p>
        <ul class="font-roboto font-400 text-gray-default text-14">
          <li>
            Hometown / Caracas, Venezuela
          </li>
          <li>
            <span>Palette / </span
            ><span class="inline-block h-14 w-14 rounded-full bg-grape"></span>
            <span
              class="inline-block h-14 w-14 rounded-full -ml-8 bg-[#F202F2]"
            ></span>
          </li>
          <li>
            Teams / Chelsea FC, NETS, Marlins & Red Sox
          </li>
          <li>
            Hobbies / 🎮 🏋️‍♀️ 🏃‍♂️ ⚽️ 📚
          </li>
        </ul>
      </div>
      <!-- <img
        class="absolute rotate-[270deg] opacity-[0.1] -z-1"
        :src="`${publicPath}img/charlie-signature.png`"
        :srcset="`${publicPath}img/charlie-signature.png`"
        alt=""
      /> -->
    </div>
  </section>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>
