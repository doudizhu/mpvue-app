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

        .classify
            //- 导航
            scroll-view.btns_wrap(scroll-x)
                span.btns_scroll(
                    :class='{active: currentIndex == index}'
                    v-for='(item,index) in allLessons'
                    :key='index'
                    @click='switchItem(index)'
                ) {{item.name}}
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

            currentIndex: 0,
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
        switchItem(index){
            this.currentIndex = index
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

.btns_wrap {
  background-color: #fff;
  white-space: nowrap;
  border-bottom: 1px solid #ebeef5;
}
.btns_scroll {
  display: inline-block;
  padding: 0 16px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  box-sizing: border-box;
  text-align: center;
}

.active {
  color: #009eef;
}
</style>