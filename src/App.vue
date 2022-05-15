<template>
  <div id="app" class="relative bg-gray-dark">
    <!-- <NavBar /> -->
    <SideBar />
    <main class="grid gap-y-96 md:gap-y-192 overflow-x-hidden">
      <MainHero />
      <!-- <About />
      <HelloWorld />
      <Footer /> -->
    </main>
  </div>
</template>

<script type="text/javascript">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
import MainHero from "@/components/MainHero.vue";
// import HelloWorld from "@/components/HelloWorld.vue";
// import About from "@/components/About.vue";
// import Footer from "@/components/Footer.vue";

export default {
  components: {
    // NavBar,
    SideBar,
    MainHero,
    // HelloWorld,
    // About,
    // Footer,
  },
  mounted: function() {
    //hero
    ScrollTrigger.matchMedia({
      "(min-width: 0px)": function() {
        gsap.to(document.querySelector(".hero--img"), {
          scrollTrigger: {
            trigger: ".hero--img",
            start: "top",
            end: "bottom center",
            scrub: 2,
            // markers: true,
          },
          y: 20,
          duration: 3,
        });
      },
    });
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function() {
        gsap.to(document.querySelector(".hero--title-top"), {
          scrollTrigger: {
            trigger: ".hero--img",
            start: "top",
            end: "bottom center",
            scrub: 2,
          },
          x: 60,
          duration: 4,
        });
      },
    });
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function() {
        gsap.to(document.querySelector(".hero--title-bottom"), {
          scrollTrigger: {
            trigger: ".hero--img",
            start: "top",
            end: "bottom center",
            scrub: 2,
          },
          x: -60,
          duration: 4,
        });
      },
    });
    //about
    ScrollTrigger.matchMedia({
      "(min-width: 0px)": function() {
        gsap.to(document.querySelector(".headshot"), {
          scrollTrigger: {
            trigger: ".headshot",
            start: "top center",
            end: "bottom center",
            scrub: 2,
            // markers: true,
          },
          y: 50,
          duration: 3,
        });
      },
    });
  },
};
</script>
