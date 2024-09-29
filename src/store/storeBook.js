import {reactive} from 'vue'

const datas = reactive([
    {
        id:1,
        book:"Sejong",
        levels:[{
            id_book: 1,
            level: "Sejong 1",
            conver_url: "https://nuri.iksi.or.kr/e-book/catImage/660/001.jpg",
            book_urls:[
                {url:"https://nuri.iksi.or.kr/e-book/catImage/660/001.jpg"},
                {url:"https://nuri.iksi.or.kr/e-book/catImage/660/002.jpg"},
                {url:"https://nuri.iksi.or.kr/e-book/catImage/660/003.jpg"},
                {url:"https://nuri.iksi.or.kr/e-book/catImage/660/004.jpg"},
                {url:"https://nuri.iksi.or.kr/e-book/catImage/660/005.jpg"},
                {url:"https://nuri.iksi.or.kr/e-book/catImage/660/006.jpg"},]
        },
        {   id_book: 2,
            level: "Sejong 2",
            conver_url: "https://nuri.iksi.or.kr/e-book/catImage/661/001.jpg",
            book_urls:[
                {url:"https://nuri.iksi.or.kr/e-book/catImage/661/001.jpg"},
                {url:"https://nuri.iksi.or.kr/e-book/catImage/661/002.jpg"},
                {url:"https://nuri.iksi.or.kr/e-book/catImage/661/003.jpg"},
                {url:"https://nuri.iksi.or.kr/e-book/catImage/661/004.jpg"},
                {url:"https://nuri.iksi.or.kr/e-book/catImage/661/005.jpg"},
                {url:"https://nuri.iksi.or.kr/e-book/catImage/661/006.jpg"},]
        }
    ]}

])

export function useBook(){
    return {datas}
}