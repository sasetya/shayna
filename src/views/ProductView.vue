<template>
  <div class="Product">
    <HeaderShayna />

     <!-- Breadcrumb Section Begin -->
     <div class="breacrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-text product-more text-left">
                      <router-link to="/">
                        <i class="fa fa-home"></i> home
                      </router-link>
                        <span>Detail</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Product Shop Section Begin -->
    <section class="product-shop spad page-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6">
                <div class="product-pic-zoom">
                  <img class="product-big-img" :src="gambar_default" alt="" />
                </div>
                <div class="product-thumbs">
                  <Carousel :items-to-show="2.5" class="product-thumbs-track ps-slider">
                    <Slider v-for="content in contents" :key="content">
                        <div class="pt" @click="changeImage(content)" :class="content == gambar_default ? 'active' : '' ">
                          <img :src="content" alt="" />
                        </div>

                        <!-- <div class="pt" data-imgbigurl="img/mickey2.jpg">
                          <img src="img/mickey2.jpg" alt="" />
                        </div>

                        <div class="pt" data-imgbigurl="img/mickey3.jpg">
                          <img src="img/mickey3.jpg" alt="" />
                        </div>

                        <div class="pt" data-imgbigurl="img/mickey4.jpg">
                          <img src="img/mickey4.jpg" alt="" />
                        </div> -->
                    </Slider>
                    
                  </Carousel>
                  
                 </div>
              </div>
              <div class="col-lg-6">
                <div class="product-details">
                  <div class="pd-title">
                    <span>oranges</span>
                    <h3>Pure Pineapple</h3>
                  </div>
                  <div class="pd-desc text-left">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, error officia. Rem aperiam laborum voluptatum vel, pariatur modi hic provident eum iure natus quos non a sequi, id accusantium! Autem.
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam possimus quisquam animi, commodi, nihil voluptate nostrum neque architecto illo officiis doloremque et corrupti cupiditate voluptatibus error illum. Commodi expedita animi nulla aspernatur.
                      Id asperiores blanditiis, omnis repudiandae iste inventore cum, quam sint molestiae accusamus voluptates ex tempora illum sit perspiciatis. Nostrum dolor tenetur amet, illo natus magni veniam quia sit nihil dolores.
                      Commodi ratione distinctio harum voluptatum velit facilis voluptas animi non laudantium, id dolorem atque perferendis enim ducimus? A exercitationem recusandae aliquam quod. Itaque inventore obcaecati, unde quam
                      impedit praesentium veritatis quis beatae ea atque perferendis voluptates velit architecto?
                    </p>
                    <h4>$495.00</h4>
                  </div>
                  <div class="quantity">
                    <router-link to="/cart" class="primary-btn pd-cart">Add To Cart</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Product Shop Section End -->

    <RelatedProductShayna />

    <FooterShayna />
    
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import HeaderShayna from '@/components/HeaderShayna.vue';
import FooterShayna from '@/components/FooterShayna.vue';
import RelatedProductShayna from '@/components/RelatedProductShayna.vue';

import { Carousel, Slider } from 'vue3-carousel'


export default {
  name: 'ProductView',
  components: {
    HeaderShayna,
    FooterShayna,
    Carousel,
    Slider,
    RelatedProductShayna,
  },

  data() {
    return {
      gambar_default: 'img/mickey1.jpg',
      contents: 
        ['img/mickey1.jpg',
          'img/mickey2.jpg',
          'img/mickey3.jpg',
          'img/mickey4.jpg',
        ]
    }
  },
  methods: {
    changeImage(urlImage){
      this.gambar_default = urlImage;
    }
  }
}
</script>

<style scoped>
  .product-thumbs .pt {
    min-width: 200px;
    margin-right: 12px;
  }
</style>
