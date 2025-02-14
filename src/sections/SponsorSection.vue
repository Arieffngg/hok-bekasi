<template>
    <div  data-aos="fade-up"
    data-aos-anchor-placement="top-center">
        <h1 class="text-4xl xl:text-5xl font-bold text-center mt-8 mb-4" id="sponsors">Sponsor</h1>
        <div>
            <swiper :slidesPerView="1" :spaceBetween="10" :centeredSlides="true" :breakpoints="{
                '640': {
                    slidesPerView: 1,
                },
                '768': {
                    slidesPerView: 2,
                },
                '1024': {
                    slidesPerView: 3,
                },
            }" :autoplay="{
            delay: 1500,
            disableOnInteraction: false,
        }" :navigation="false" :pagination="false" :loop="true" :modules="modules" class="mySwiper">
                <swiper-slide v-for="(sponsor, index) in sponsors" :key="index">
                    <div class="flex justify-center">
                        <img :src="sponsor.imageUrl" :alt="sponsor.title" class="w-1/2 h-auto rounded-lg" />
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import sponsorsData from '../data/sponsors.js';

const sponsors = ref(sponsorsData);

const modules = ref([Navigation, Pagination, Autoplay]);
</script>