<script setup></script>

<template>
    <!-- Hero Section Start -->
    <div class="container mx-auto px-8 md:px-24 overflow-x-hidden lg:overflow-x-visible" id="home">
        <section class="grid grid-cols-none lg:grid-cols-2 pb-4 pt-8 items-center">
            <div class="lg:w-5/6 order-2 lg:order-none">
                <h1 class="text-4xl xl:text-5xl font-bold  text-center lg:text-left">PENDAHULUAN</h1>
                <p class="lg:text-xl mt-10 lg:text-left">
                    Dalam beberapa tahun terakhir, industri esports telah mengalami pertumbuhan yang sangat pesat, dengan
                    jutaan penggemar di seluruh dunia yang tertarik pada berbagai permainan kompetitif.
                    <br><br>
                    Honor Of Kings adalah permainan mobile bergenre MOBA (Multiplayer Online Battle Arena) yang sangat
                    populer, dikembangan oleh Tencent Games
                    <br><br>
                    HOK BEKASI adalah Organisasi Komunitas resmi dari Tencent dan sudah tergabung di HOK ACE.</p>
                <div class="flex justify-center lg:justify-start mt-10">
                    <Button link="#contact">Kontak Kami</Button>
                    <Button link="#events" :class="'bg-gray-600 text-white border-gray-600 hover:bg-white hover:text-gray-600'">Event</Button>
                </div>
            </div>
            <div class="relative order-1 lg:order-none mb-20 lg:mt-0 lg:mb-0 lg:-mr-10 flex justify-center">
                <img class="z-10 w-48 h-48" src="/images/logo.png" />
            </div>
        </section>
    </div>
    <!-- Hero Section End -->
</template>
