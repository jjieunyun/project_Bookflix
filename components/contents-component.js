Vue.component('contents-component',{
    template : 
    `<div>
        <div class="swiper mySwiper">
            <div class="contentsText"><h2><slot></slot></h2></div>
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="./img/book1.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/book1.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/book1.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/book1.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/book1.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/book1.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/book1.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/book1.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/book1.jpg" alt=""></div>
        </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
        </div>
    </div>`,
    data () {
        return {
            

        }
    }
});                