<template>
    <!-- Events Section Start -->
    <div data-aos="fade-up">
        <h1 class="text-4xl xl:text-5xl font-bold  text-center mt-8">EVENT</h1>
        <div id="events" class="container mx-auto py-10">
            <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'"
                :coverflowEffect="{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }" :pagination="false" :modules="modules" @swiper="onSwiper" @slideChange="onSlideChange" class="mySwiper">
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
                                <td>:</td>
                                <td>{{ item.date }}</td>
                            </tr>
                            <tr>
                                <td>Slot</td>
                                <td>:</td>
                                <td>{{ item.quota }} Tim</td>
                            </tr>
                            <tr>
                                <td>Pendaftaran</td>
                                <td>:</td>
                                <td>{{ item.registration }}</td>
                            </tr>
                            <tr>
                                <td>Tempat</td>
                                <td>:</td>
                                <td>{{ item.venue }}</td>
                            </tr>
                        </table>
                        <div class="flex justify-end -mt-8">
                            <div v-if="item.status === 'Berjalan'">
                                <a :href="item.link" target="_blank">
                                    <Button>Daftar</Button>
                                </a>
                            </div>
                            <div v-else>
                                <Button disabled>Daftar</Button>
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
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
    AOS.init({
        duration: 1000, // Durasi animasi dalam ms
        // once: true, // Animasi hanya terjadi sekali
    });
});

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
