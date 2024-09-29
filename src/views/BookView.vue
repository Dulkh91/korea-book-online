<template>
    <div class="mx-0 md:mx-2" >
        <div v-if="isLoading" class="flex items-center justify-center h-screen ">
            <img src="../assets/image/loading.svg" alt="" class="w-36">
        </div>
        <p class="text-gray-300 py-2 text-sm" v-if="currentBook.book">
            <span >{{ currentBook.book }} &gt;</span>
            <span>{{ currentBook.level }}</span>
        </p>
       
       <div v-for="(url,index) in book" :key="index">
        <img :src="url" alt="" >
       </div>
    </div>
    
</template> 
<script setup>
import {useRoute}  from 'vue-router'
import {ref, onMounted,computed,watch} from 'vue'
// import { useBook } from '@/store/storeBook';
import {useBookStore} from '@/store/index.js'
const datas = useBookStore()

const route = useRoute()
const book = ref([])
const currentBook = ref({book:'', level:''})

//Loading 
const isLoading = ref(true)

const getBookRead = computed(()=> datas.books)

onMounted(async () => {
    if(datas.books.length === 0){
        await datas.fetchBooks()
    }
    isLoading.value = false
})


watch(getBookRead,(readBook)=>{
        const number_id = route.params.id
        const dataFilter = []
        readBook.forEach(data =>{
          data.levels.forEach(d =>{
                if(d.id == number_id){
                    d.urls.forEach(f=>{
                           dataFilter.push(f.url)
                    })

                    currentBook.value.level = d.level
                    currentBook.value.book = data.book
                }
               
            }) 
           
        })
        book.value = dataFilter
     document.title = currentBook.value.level
    
},{immediate: true})

</script>