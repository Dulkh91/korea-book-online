<template>
    <section id="loading">
        <div v-if="isLoading"
        class="flex relative items-center justify-center h-screen">
            <img src="../assets/image/loading.svg" alt="" class=" w-20 md:w-36">
        </div>
    </section>
    <section v-for="(d, index) in datas.value" :key="index">
   <!-- Book Content -->
       <div class="bg-sky-100 my-2">
           <h1 class="ml-4 py-1.5 text-gray-400 text-lg">{{ d.book }}</h1>
       </div>
   <!-- Item books -->
   <div 
       class="grid grid-cols-2 gap-1 mx-auto md:grid-cols-4 sm:grid-cols-3 py-2">
       <!-- Card -->
        <div v-for="(itme,index) in d.levels" :key="index"
            class="group"
        > 
        <router-link :to="({name: 'read', params:{id: itme.id}})" class="group">    
        <!-- <router-link :to="/read/+ itme.id" class="group"> -->
           <div class="bg-zinc-200 w-42 shadow-lg rounded-xl mb-6 p-1 space-y-3" >
           <div class=" overflow-hidden flex justify-center">
            <img class="rounded-t-xl duration-200 group-hover:scale-105 group-hover:opacity-50 group-hover:rounded-t-xl" 
               :src="itme.cover_url" alt="">
           </div>
           <h1 class="text-center flex-wrap overflow-hidden pb-2 text-gray-500">{{ itme.level}}</h1>
        </div>
       </router-link>
       </div>
      </div>
   
   </section>
   </template>
   
   <script setup>
import { useBookStore } from '@/store/index.js'
import {ref, onMounted, computed ,watch,reactive} from 'vue'

const datas = reactive([])
const bookStore = useBookStore()

const isLoading = ref(true)
const getBook = computed(()=>bookStore.books)

onMounted(async () => {
  if(bookStore.books.length === 0){
    await bookStore.fetchBooks()
  }  
  isLoading.value = false
})

watch(getBook, (newBook)=>{
    datas.value = newBook
    document.title = "books-online"
},{immediate: true})

</script>

