<script setup>
const props = defineProps({
    link: String,
    class: {
        type: String,
        default: "bg-blue-500 text-white hover:border-blue-500 hover:text-blue-500 border-transparent "
    }
});
</script>

<template>
    <a :href="link" :class="class" class="font-medium px-6 py-2 rounded shadow-md hover:bg-white border-2 cursor-pointer transition duration-200 mr-5">
        <slot></slot>
    </a>
</template>
