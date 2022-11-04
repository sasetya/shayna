<template>
  <!-- Partner Logo Section Begin -->
  <div class="partner-logo">
        <div class="container">
          <carousel :items-to-show="5" :wrap-around="true">
            <Slide v-for="slide in images" :key="slide">
              <div class="logo-carousel">
                <div class="logo-item">
                  <div class="tablecell-inner">
                    <img :src="slide.imgU" alt="" />
                  </div>
                </div>
              </div>
            </Slide>
          </carousel>
        </div>
    </div>
    <!-- Partner Logo Section End -->
</template>

<script>

//import { start } from 'repl';

import { Carousel, Slide} from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

  export default {
    name : 'ParnerShayna',
    components: {
      Carousel,
      Slide
    },
    data() {
    return {
      images: [
        { imgU: 'img/logo-carousel/logo-1.png' },
        { imgU: 'img/logo-carousel/logo-2.png' },
        { imgU: 'img/logo-carousel/logo-3.png' },
        { imgU: 'img/logo-carousel/logo-4.png' },
        { imgU: 'img/logo-carousel/logo-5.png' },
        
      ]
    }
  }
  }
</script>