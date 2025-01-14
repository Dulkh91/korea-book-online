<template>
    <div class=" relative flex flex-col md:flex-row">
        <rightBar class=" relative w-[25%]"></rightBar>
        <div class=" relative container mx-auto max-w-4xl min-h-screen bg-gray-100 mt-3 pt-9 ">
            <router-view></router-view>
        </div>
        <rightBar class="relative w-[25%]"></rightBar>
    </div>
</template>

<script setup>
    import rightBar from '@/views/RightBarView.vue';
</script>
