<template>
  <section class="hero-section">
    <div class="hero-items">
        <carousel :items-to-show="1" :wrap-around="true" :autoplay="3600" :pause-autoplay-on-hover="true">
        <slide v-for="slide in contents" :key="slide">
          <div class="single-hero-items set-bg" :style="{backgroundImage: `url('${slide.bg}')`}">
            <div class="container">
              <div class="row">
                <div class="col-lg-5">
                  <span>{{slide.span}}</span>
                  <h1>{{slide.h}}</h1>
                  <p>
                    {{slide.p}}
                  </p>
                  <a :href="slide.href" class="primary-btn">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </slide>

        <template #addons>
        <!-- <pagination /> -->
        </template>
      </carousel>
    </div>
    </section>
</template>

<script>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide} from 'vue3-carousel'

  export default {
    name : 'HeroShayna',
    components : {
      Carousel,
      Slide,
    },

    data () {
      return {
        contents: [
          {
            bg: "/img/hero-1.jpg",
            span: "Bag,kids",
            h: "Black friday",
            p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
            href: "www.youtube.com"
          },
          {
            bg: "/img/hero-2.jpg",
            span: "Bag,kids",
            h: "Black friday",
            p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
            href: "www.youtube.com"
          },
          {
            bg: "/img/hero-3.jpg",
            span: "Bag,kids",
            h: "Black friday",
            p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore",
            href: "www.youtube.com"
          }
        ]
      }
    }
  };

</script>

<style scoped>
.carousel__item {
    min-height: 200px;
    width: 100%;
    /* background-color: var(--vc-clr-primary); */
    /* color: var(--vc-clr-white); */
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

</style>