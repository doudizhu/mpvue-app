<template lang='pug'>
    scroll-view.learn(scroll-y)
        .learn_info
            img(src="/static/imgs/plan.jpg")
            .info_text
                h4 已学习
                    span {{minutes}}
                    | 分钟
                p 今日目标已完成
                    span {{percentage}}
        .my_lesson(v-if='mylessons.length > 0')
            cart-header(title='我的课程' :lessonCount='lessonCount' @click="switchMyLesson")
            .lesson_wrap
                .lesson_scroll
                    .lesson_card(v-for='(lesson,index) in mylessons' :key='index')
                        img(:src='lesson.img')
                        span {{lesson.title}}
                    .lesson_card(@click='switchMyLesson')
                        img(src='/static/imgs/lookall.jpg')
        .start_lesson
            button 进入课程

        .hot_lesson
            cart-header(title='今日最热课程' @click='switchToHotLessons')
            div(v-for='(item,index) in hotLessons' :key='index')
                lesson-cell(:img='item.img' :title='item.title' :level='item.level' :count='item.count' :url='item.url')
</template>

<script>
import cartHeader from '../../components/cartHeader/index' 
import lessonCell from '../../components/lessonCell/index' 
import {formatTime} from '../../utils'
export default {
    data(){
        return{
            minutes: 0,
            percentage: "0%",
            lessonCount: 0,
            hotLessons: [],
        }
    },
    computed: {
        mylessons(){
            const lessons = []
            // 获取课程
            const myLesson = this.$store.getters.lessonInfo.mylessons
            console.log(myLesson)
            // 课程个数
            this.lessonCount = myLesson.length
            // 判断是否大于5，如果大于5显示前5个，否则显示所有课程
            const count = myLesson.length > 5 ? 5 :myLesson.length
            for(let i=0;i<count;i++){
                lessons.push(myLesson[i])
            }

            return lessons
        },
    },
    components:{
        cartHeader,
        lessonCell,
    },
    methods:{
        switchMyLesson() {
            wx.navigateTo({
                url: "../mylesson/main"
            })
        },
        getData(){
            this.$https.request({
                url: this.$interfaces.getHotLessons,
                method: 'get',
            })
            .then(res => {
                // console.log(res)
                this.hotLessons = res
            })
        },
        switchToHotLessons(){
            wx.switchTab({
                url: '../lesson/main'    
            })
        },
        setLearnInfo(){
          let self = this
          // 获取当前日期 2020-1-10 12:00:00 new Date()
          let date = formatTime(new Date()).split(' ')[0]
          // console.log(date)
          wx.getStorage({
            key:'date',
            success(res){
              // console.log(res)
              if(res.data != date) self.storageDate(date)
              else {
                // 显示当前数据
                const learnInfo = wx.getStorageSync('learnInfo')
                self.minutes = learnInfo.minutes
                self.percentage = learnInfo.percentage
              }
            },
            fail(){
              // 如果没有时间date 存储
              self.storageDate(date)
            }
          })
        },
        storageDate(date){
          // 存储当前日期，并将数据初始化
          wx.setStorage({
            key:'date',
            data: date,
          })

          wx.setStorage({
            key: 'learnInfo',
            data: {
              minutes: 0,
              percentage: '0%',
            }
          })
          this.minutes = 0
          this.percentage = '0%'
        },
    },
    onLoad(){
        this.getData()
    },
    onShow(){
        this.setLearnInfo()
    },
}
</script>

<style scoped>
.learn {
  height: 100%;
  box-sizing: border-box;
}
.learn_info {
  padding: 10px;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #ebeef5;
}
.learn_info img {
  width: 85px;
  height: 85px;
}
.info_text {
  padding: 10px;
}
.info_text h4 {
  font-weight: bold;
}
.info_text h4 span {
  color: #009eef;
}
.info_text p {
  color: #ccc;
  font-size: 14px;
  margin-top: 10px;
}
.info_text p span {
  color: #85c646;
}

.my_lesson .hot_lesson {
  width: 100%;
  margin-top: 16px;
  background-color: #fff;
  border: 1px solid #ebeef5;
}

.lesson_wrap {
  width: 100%;
  overflow-x: auto;
}
.lesson_scroll {
  max-width: 200%;
  min-width: 100%;
  display: flex;
  flex-direction: row;
}
.lesson_card {
  display: flex;
  flex-direction: column;
  min-width: 120px;
  padding: 10px 5px;
}
.lesson_card img {
  width: 100%;
  height: 100px;
  border-radius: 5px;
}
.lesson_card span {
  font-size: 14px;
  color: #333;
}
::-webkit-scrollbar {
  display: none;
}
.start_lesson {
  padding: 20px 0;
  box-sizing: border-box;
  text-align: center;
}
.start_lesson button {
  background-color: #fff;
  color: #009eef;
  width: 150px;
  border-radius: 30px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.start_lesson button::after {
  border: none;
}

/* 修复样式 */
.my_lesson,
.start_lesson{
  background-color: #fff;
}
.my_lesson{
  margin-top: 16px;
  border-top: 1px solid #ebeef5;
}
.start_lesson{
  border-bottom: 1px solid #ebeef5;
}

.hot_lesson {
  width: 100%;
  margin-top: 16px;
  background-color: #fff;
  border: 1px solid #ebeef5;
}
</style>