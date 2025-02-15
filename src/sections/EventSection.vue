<template>
    <!-- Events Section Start -->
    <div data-aos="fade-up">
        <h1 class="text-4xl xl:text-5xl font-bold text-center mt-8 dark:text-white">EVENT</h1>
        <div id="events" class="container mx-auto py-10">
            <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'"
                :coverflowEffect="{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }" :pagination="false" :modules="modules" @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide v-for="(item, index) in events" :key="index">
                    <div class="relative bg-gray-200 p-4 rounded-lg h-fit">
                        <!-- Label Coming Soon -->
                        <div class="absolute top-7 right-0 text-white text-xs font-bold px-3 py-1 w-20 text-center
                transform rotate-45 translate-x-4 -translate-y-2 shadow-lg" :class="item.color">
                            {{ item.status }}
                        </div>

                        <!-- Gambar -->
                        <img :src="item.imageUrl" :alt="item.title" class="w-full h-48 object-cover rounded-lg mb-4" />

                        <!-- Judul -->
                        <h3 class="text-lg font-bold text-center">{{ item.title }}</h3>

                        <!-- Deskripsi (hanya muncul jika slide aktif) -->
                        <p v-if="index === activeIndex" class="text-sm text-justify">
                        <table>
                            <tr>
                                <td>Tanggal</td>
                                <td>&nbsp;:&nbsp;</td>
                                <td>{{ item.date }}</td>
                            </tr>
                            <tr>
                                <td>Slot</td>
                                <td>&nbsp;:&nbsp;</td>
                                <td>{{ item.quota }} Tim</td>
                                <td>{{ item.quota2 }} Peserta</td>
                            </tr>
                            <tr>
                                <td>Pendaftaran</td>
                                <td>&nbsp;:&nbsp;</td>
                                <td>{{ item.registration }}</td>
                            </tr>
                            <tr>
                                <td>Tempat</td>
                                <td>&nbsp;:&nbsp;</td>
                                <td>{{ item.venue }}</td>
                            </tr>
                        </table>
                        <div class="flex justify-end py-1.5">
                            <div v-if="item.status === 'Berjalan'">
                                <a :href="item.link" target="_blank">
                                    <button class="px-5 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 dark:bg-yellow-600 dark:hover:bg-yellow-700">Daftar</button>
                                </a>
                            </div>
                            <div v-else>
                                <button class="bg-gray-600 text-white border-gray-600 py-2 px-4 rounded" disabled readonly>Daftar</button>
                            </div>
                        </div>
                        </p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
    <!-- Events Section End -->
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import eventsData from '../data/events.js';

const events = ref(eventsData);
const modules = ref([EffectCoverflow, Pagination]);
const activeIndex = ref(0);
let swiperInstance = null;

const onSwiper = (swiper) => {
    swiperInstance = swiper;
    activeIndex.value = swiper.activeIndex;
};

const onSlideChange = () => {
    if (swiperInstance) {
        activeIndex.value = swiperInstance.activeIndex;
    }
};
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 500px;
    padding-top: 50px;
    padding-bottom: 50px;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
}

.swiper-slide img {
    display: block;
    width: 100%;
}
</style>
