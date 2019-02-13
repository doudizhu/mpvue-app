<template lang='pug'>
    div.lesson
        swiper(
            :indicator-dots='indicatorDots'
            :autoplay='autoplay'
            :interval='interval'
            :duration='duration'
            :circular='circular'
            indicator-active-color='rgba(255,255,255,.6)'
        )
            block(v-for='(item,index) in imgUrls' :key='index')
                swiper-item
                    img(:src='item').slide-image     
</template>

<script>
export default {
    data(){
        return {
            imgUrls: [],
            allLessons: [],

            indicatorDots: true,
            autoplay: true,
            interval: 3000,
            duration: 500,
            circular: true,
        }
    },
    onLoad(){
        this.getData()
    },
    methods: {
        getData(){
            console.log(this.$interfaces.getLessons)

            this.$https.request({
                url: this.$interfaces.getLessons,
                method: 'get',
            }).then(res => {
                // console.log(res)
                this.imgUrls = res.imgUrls
                this.allLessons = res.allLessons
            })
        },
    },
}
</script>

<style>
::-webkit-scrollbar{
    display: none;
}

.slide-image{
    width: 100%;
    height: 100%;
}
</style>