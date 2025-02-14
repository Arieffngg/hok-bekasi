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
                <a href="/"><img src="/images/logo.png" alt="HOK Bekasi" class="w-16"></a>
            </div>
            
            <!-- Menu Toggler -->
            <button @click="toggleMobileNav" type="button" class="flex md:hidden focus:outline-none">
                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
            </button>
            
            <!-- Desktop Menu -->
            <ul class="hidden md:flex space-x-10  font-medium items-center">
                <li class="uppercase hover:text-blue-500 transition duration-200"><a href="#home">Tentang Kami</a></li>
                <li class="uppercase hover:text-blue-500 transition duration-200"><a href="#events">Event</a></li>
                <li class="uppercase hover:text-blue-500 transition duration-200"><a href="#faq">FAQ</a></li>
            </ul>
        </header>
        
        <!-- Mobile Menu -->
        <div v-if="mobileNav" class="md:hidden absolute top-20 left-0 w-full bg-white py-4 z-50">
            <ul class="flex flex-col space-y-4 text-center">
                <li class="uppercase hover:text-blue-500 transition duration-200"><a href="#home" @click="toggleMobileNav">Tentang Kami</a></li>
                <li class="uppercase hover:text-blue-500 transition duration-200"><a href="#events" @click="toggleMobileNav">Event</a></li>
                <li class="uppercase hover:text-blue-500 transition duration-200"><a href="#faq" @click="toggleMobileNav">FAQ</a></li>
            </ul>
        </div>
    </div>
    <!-- Navbar End -->
</template>
