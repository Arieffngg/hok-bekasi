<script setup>
import { ref } from 'vue';

let mobileNav = ref(false);

let toggleMobileNav = () => {
    mobileNav.value = !mobileNav.value;
};
</script>

<template>
    <!-- Navbar Start -->
    <div class="container mx-auto px-5 sticky top-0 w-full z-50 bg-white">
        <header class="flex justify-between py-4 items-center">
            <div>
                <button @click="$scrollTo('#home')"><img src="/images/logo.png" alt="HOK Bekasi" class="w-16"></button>
            </div>
            
            <!-- Menu Toggler -->
            <button @click="toggleMobileNav" type="button" class="flex md:hidden focus:outline-none">
                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
            </button>
            
            <!-- Desktop Menu -->
            <ul class="hidden md:flex space-x-10  font-medium items-center">
                <li class="uppercase hover:text-blue-500 transition duration-200"><button @click="$scrollTo('#home')">Tentang Kami</button></li>
                <li class="uppercase hover:text-blue-500 transition duration-200"><button @click="$scrollTo('#events')">Event</button></li>
                <li class="uppercase hover:text-blue-500 transition duration-200"><button @click="$scrollTo('#documentations')">Dokumentasi</button></li>
                <li class="uppercase hover:text-blue-500 transition duration-200"><button @click="$scrollTo('#sponsors')">Sponsor</button></li>
                <li class="uppercase hover:text-blue-500 transition duration-200"><button @click="$scrollTo('#contact')">Kontak</button></li>
            </ul>
        </header>
        
        <!-- Mobile Menu -->
        <div v-if="mobileNav" class="md:hidden absolute top-20 left-0 w-full bg-white py-4 z-50">
            <ul class="flex flex-col space-y-4 text-center">
                <li class="uppercase hover:text-blue-500 transition duration-200"><button @click="$scrollTo('#home')">Tentang Kami</button></li>
                <li class="uppercase hover:text-blue-500 transition duration-200"><button @click="$scrollTo('#events')">Event</button></li>
                <li class="uppercase hover:text-blue-500 transition duration-200"><button @click="$scrollTo('#documentations')">Dokumentasi</button></li>
                <li class="uppercase hover:text-blue-500 transition duration-200"><button @click="$scrollTo('#sponsors')">Sponsor</button></li>
                <li class="uppercase hover:text-blue-500 transition duration-200"><button @click="$scrollTo('#contact')">Kontak</button></li>
            </ul>
        </div>
    </div>
    <!-- Navbar End -->
</template>
