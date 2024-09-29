import { defineStore } from 'pinia'
import axios from 'axios'
const url_api = process.env.VUE_APP_API_URL
const key_api = process.env.VUE_APP_API_KEY
 
 

export const useBookStore = defineStore('bookStore', {
  state: () => ({ 
    books: [],
    loading: false
  }),
  actions: {
   async fetchBooks (){
    
    this.loading = true;
    
    try { 
      const respone = await axios(url_api+key_api)
      this.books = respone.data.DATA
      // console.log("pinia", this.books)
    } catch (err) {
      console.log(err)
    }
   }
  }
 
})
