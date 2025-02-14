<script setup>
import { ref, onMounted, watch } from 'vue';

// State untuk mobile menu
let mobileNav = ref(false);
let toggleMobileNav = () => {
    mobileNav.value = !mobileNav.value;
};

// State untuk dark mode
let isDarkMode = ref(false);

// Fungsi toggle dark mode
const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle('dark', isDarkMode.value);
    localStorage.setItem('darkMode', isDarkMode.value);
};

// Set dark mode sesuai preferensi pengguna
onMounted(() => {
    isDarkMode.value = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode.value) document.documentElement.classList.add('dark');
});
</script>

<template>
    <!-- Navbar Start -->
    <div class="px-5 sticky top-0 w-full z-50 bg-blue-500 dark:bg-yellow-600">
        <header class="flex justify-between items-center container mx-auto">
            <div>
                <button @click="$scrollTo('#home')">
                    <img src="/images/logo.png" alt="HOK Bekasi" class="w-16">
                </button>
            </div>

            <!-- Menu Toggler -->
            <button @click="toggleMobileNav" type="button" class="flex md:hidden focus:outline-none">
                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current text-white">
                    <path fill-rule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z">
                    </path>
                </svg>
            </button>

            <!-- Tombol Dark Mode -->
            <div class="-mt-4 md:hidden">
                <DarkModeToggle />
            </div>

            <!-- Desktop Menu -->
            <ul class="hidden md:flex space-x-10 font-medium items-center">
                <li class="uppercase hover:text-black text-white transition duration-200">
                    <button @click="$scrollTo('#home')">Tentang Kami</button>
                </li>
                <li class="uppercase hover:text-black text-white transition duration-200">
                    <button @click="$scrollTo('#events')">Event</button>
                </li>
                <li class="uppercase hover:text-black text-white transition duration-200">
                    <button @click="$scrollTo('#documentations')">Dokumentasi</button>
                </li>
                <li class="uppercase hover:text-black text-white transition duration-200">
                    <button @click="$scrollTo('#sponsors')">Sponsor</button>
                </li>
                <li class="uppercase hover:text-black text-white transition duration-200">
                    <button @click="$scrollTo('#contact')">Kontak</button>
                </li>
                <li>
                    <div class="-mt-4">
                        <DarkModeToggle />
                    </div>
                </li>
            </ul>
        </header>

        <!-- Mobile Menu -->
        <transition name="slide-fade">
            <div v-if="mobileNav"
                class="md:hidden absolute top-16 left-0 w-full bg-blue-500 dark:bg-gray-900 py-4 z-50">
                <ul class="flex flex-col space-y-4 text-center">
                    <li class="uppercase hover:text-black text-white transition duration-200">
                        <button @click="$scrollTo('#home'); toggleMobileNav()">Tentang Kami</button>
                    </li>
                    <li class="uppercase hover:text-black text-white transition duration-200">
                        <button @click="$scrollTo('#events'); toggleMobileNav()">Event</button>
                    </li>
                    <li class="uppercase hover:text-black text-white transition duration-200">
                        <button @click="$scrollTo('#documentations'); toggleMobileNav()">Dokumentasi</button>
                    </li>
                    <li class="uppercase hover:text-black text-white transition duration-200">
                        <button @click="$scrollTo('#sponsors'); toggleMobileNav()">Sponsor</button>
                    </li>
                    <li class="uppercase hover:text-black text-white transition duration-200">
                        <button @click="$scrollTo('#contact'); toggleMobileNav()">Kontak</button>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
    <!-- Navbar End -->
</template>

<style scoped>
/* Animasi masuk */
.slide-fade-enter-active {
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.slide-fade-enter-from {
    transform: translateY(-10px);
    opacity: 0;
}

.slide-fade-enter-to {
    transform: translateY(0);
    opacity: 1;
}

/* Animasi keluar */
.slide-fade-leave-active {
    transition: transform 0.3s ease-in, opacity 0.3s ease-in;
}

.slide-fade-leave-from {
    transform: translateY(0);
    opacity: 1;
}

.slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}
</style>
