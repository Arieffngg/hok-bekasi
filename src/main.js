import { createApp } from "vue";
import './assets/main.css'
import App from "./App.vue";
import DarkModeToggle from "./components/DarkModeToggle.vue";

import AOS from 'aos';
import 'aos/dist/aos.css';

import VueScrollTo from 'vue-scrollto';

const app = createApp(App);

app.component("DarkModeToggle", DarkModeToggle);

// Inisialisasi AOS setelah aplikasi di-mount
app.mount("#app");

// Panggil AOS.init() setelah mounting selesai
AOS.init({
    duration: 1000, // Durasi animasi dalam ms
});

app.use(VueScrollTo, {
    duration: 800, // Durasi animasi scrolling (ms)
    easing: "ease-in-out", // Efek animasi
    offset: -150, // Jarak dari elemen tujuan
    cancelable: true, // Bisa dibatalkan dengan scroll manual
});