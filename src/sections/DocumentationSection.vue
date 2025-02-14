<template>
    <div class="flex justify-center items-center px-16 w-full md:w-1/2 mx-auto" id="documentations" data-aos="zoom-in">
        <div class="w-full">
            <h1 class="text-4xl xl:text-5xl font-bold text-center my-8 dark:text-white">DOKUMENTASI</h1>
            <swiper :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            }" :loop="true" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
                class="mySwiper2">
                <swiper-slide v-for="(item, index) in images" :key="index">
                    <img :src="item.imageUrl" :alt="item.title" />
                </swiper-slide>
            </swiper>

            <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10" :slidesPerView="4" :freeMode="true"
                :watchSlidesProgress="true" :modules="modules" class="mySwiper">
                <swiper-slide v-for="(item, index) in images" :key="index">
                    <img :src="item.imageUrl" :alt="item.title" />
                </swiper-slide>
            </swiper>
        </div>
    </div>

</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import documentationData from '../data/documentations.js';

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

const images = documentationData;
const modules = [FreeMode, Navigation, Thumbs];
</script>