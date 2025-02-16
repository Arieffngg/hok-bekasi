<script setup></script>

<template>
    <!-- Hero Section Start -->
    <div class="container mx-auto px-8 md:px-24 overflow-x-hidden lg:overflow-x-visible dark:text-white"
        id="home">
        <section class="grid grid-cols-none lg:grid-cols-2 pb-4 pt-8 items-center">
            <div class="lg:w-5/6 order-2 lg:order-none">
                <h1 class="text-4xl xl:text-5xl font-bold text-center lg:text-left">
                    PENDAHULUAN
                </h1>
                <p class="lg:text-xl mt-10 lg:text-left">
                    Dalam beberapa tahun terakhir, industri esports telah mengalami
                    pertumbuhan yang sangat pesat, dengan jutaan penggemar di seluruh
                    dunia yang tertarik pada berbagai permainan kompetitif.
                    <br /><br />
                    <span class="dark:text-yellow-400">Honor Of Kings</span> adalah
                    permainan mobile bergenre MOBA (Multiplayer Online Battle Arena) yang
                    sangat populer, dikembangkan oleh <u><a href="https://www.tencentgames.com/introduce.html">Tencent Games</a></u>.
                    <br /><br />
                    <span class="dark:text-blue-400">HOK BEKASI</span> adalah Organisasi
                    Komunitas resmi dari Tencent dan sudah tergabung di <u><a href="https://hokacecommunity.id/community/list">HOK ACE</a></u>.
                </p>
                <div class="flex justify-center lg:justify-start mt-10">
                    <button @click="$scrollTo('#contact')"
                        class="px-5 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 dark:bg-yellow-600 dark:hover:bg-yellow-700">
                        Kontak Kami
                    </button>
                    <button @click="$scrollTo('#events')"
                        class="px-5 py-2 ml-4 border border-gray-600 text-gray-600 bg-white font-semibold rounded-md shadow-md hover:bg-gray-600 hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:border-gray-500 dark:hover:bg-gray-600 dark:hover:text-white">
                        Event
                    </button>
                </div>
            </div>
            <div class="relative order-1 lg:order-none mb-20 lg:mt-0 lg:mb-0 lg:-mr-10 flex justify-center">
                <img class="z-10 w-48 h-48 dark:brightness-75" src="/images/logo.png" />
            </div>
        </section>
    </div>
    <!-- Hero Section End -->
</template>
