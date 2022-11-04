<template>
  <section class="women-banner spad">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 mt-5">
          <Carousel :settings="settings" :breakpoints="breakpoints" :wrap-around="true">
            <Slide v-for="slide in 4" :key="slide">
              <div class="carousel__item" v-if="slide == 1">
                <div class="product-item">
                  <div class="pi-pic">
                    <img src="img/mickey1.jpg" alt="" />                    
                      <ul>                  
                        <li class="w-icon active">
                          <a href="#"><i class="icon_bag_alt"></i></a>
                        </li>
                        <li class="quick-view">
                          <router-link to="/product">
                            + Quick View
                          </router-link>
                        </li>
                      </ul>                    
                  </div>
                  <div class="pi-text">
                    <div class="catagory-name">Coat</div>
                      <router-link to="/product">
                        <h5>Mickey Baggy</h5>
                      </router-link>
                      <div class="product-price">
                        $14.00
                        <span>$35.00</span>
                      </div>
                    </div>
                  </div>                  
              </div>
              <div class="product-item" v-if="slide == '2'">
                <div class="pi-pic">
                  <img src="img/products/women-2.jpg" alt="" />
                  <ul>
                    <li class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">Shoes</div>
                    <a href="#">
                      <h5>Guangzhou sweater</h5>
                    </a>
                    <div class="product-price">
                      $13.00
                    </div>
                  </div>
              </div>
              <div class="product-item" v-if="slide == 3">
                <div class="pi-pic">
                  <img src="img/products/women-3.jpg" alt="" />
                    <ul>
                      <li class="w-icon active">
                        <a href="#"><i class="icon_bag_alt"></i></a>
                      </li>
                      <li class="quick-view"><a href="#">+ Quick View</a></li>
                    </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">Towel</div>
                    <a href="#">
                      <h5>Pure Pineapple</h5>
                    </a>
                    <div class="product-price">
                      $34.00
                    </div>
                  </div>
                </div>
                <div class="product-item" v-if="slide == 4">
                  <div class="pi-pic">
                    <img src="img/products/women-4.jpg" alt="" />
                      <ul>
                        <li class="w-icon active">
                          <a href="#"><i class="icon_bag_alt"></i></a>
                        </li>
                        <li class="quick-view"><a href="#">+ Quick View</a></li>
                        <li class="w-icon">
                          <a href="#"><i class="fa fa-random"></i></a>
                        </li>
                      </ul>
                  </div>
                  <div class="pi-text">
                    <div class="catagory-name">Towel</div>
                      <a href="#">
                        <h5>Converse Shoes</h5>
                      </a>
                      <div class="product-price">
                        $34.00
                      </div>
                    </div>
                </div>
            </Slide>

            <template #addons>
              <Pagination />
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
  
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'ProductSlider',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 3,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
      // 1020 up
      1920: {
        itemsToShow: 4,
        snapAlign: 'start',
      }
    },
  }),
})
</script>

<style scoped>
.pi-pic img {
  height: 450px;
  width: 600px;
}

.product-item {
  margin-right: 25px;
}

</style>