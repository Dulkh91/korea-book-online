<template>
  <section id="navi">
    <nav> 
    <NaviComponent :class="{'-translate-y-full':isHidden, 'translate-y-0': !isHidden}"/>
  </nav>
  </section>
  <section id="body">
    <BodyComponents />
  </section>
  <section id="foot">
    <FooterComponents/>
  </section>
</template>

<script setup>
import NaviComponent from './components/NaviComponents.vue'
import BodyComponents from './components/BodyComponents.vue'
import FooterComponents from './components/FooterComponents.vue';
// ScrollBar 
import {ref,onMounted, onBeforeUnmount} from 'vue'

let lastScroll = ref(0)
//Loading
const isHidden = ref(false)

const scrollHandle = ()=>{
  const scrollTop = window.scrollY
  if(scrollTop>lastScroll.value){
    // scroll down 
    isHidden.value = true
    
  }else{
    // scroll up
    isHidden.value = false
    
  }
  lastScroll.value = scrollTop

}

onMounted(()=>{
  window.addEventListener('scroll', scrollHandle)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollHandle)
})


</script>