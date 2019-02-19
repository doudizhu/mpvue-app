<template lang='pug'>
    .mine
        .user_info
            //- 用户信息
            img(:src='user.avatarUrl')
            .user_detail
                h4 {{user.nickName}}
                span {{user.gender == 1 ? '男' : '女'}}
        .learn_info
            //- 课程信息
            .learn_detail
                h4 课程
                span {{lessonInfo.totalCount}}
            .learn_detail
                h4 已完成
                span {{lessonInfo.finishCount}}
            .learn_detail
                h4 直播订阅
                span {{lessonInfo.liveCount}}
        .order_info
            orderCell(icon='/static/imgs/lev.jpg' title='当前学习等级' :text='grade')
            orderCell(icon='/static/imgs/task.jpg' title='今日学习任务' :text='finish')
        .order_info
            orderCell(icon='/static/imgs/us.jpg' title='关于我们' @click='handleCell()')
</template>

<script>
import orderCell from '../../components/orderCell/index'
export default {
    data(){
      return {
        grade: '',
        finish: '',
      }
    },
    computed: {
        user(){
            // console.log(this.$store.getters.user)
            return this.$store.getters.user    
        },
        lessonInfo(){
            // console.log(this.$store.getters.lessonInfo)
            return this.$store.getters.lessonInfo    
        },
    },
    components:{
      orderCell,
    },
    onShow(){
      const learnInfo = wx.getStorageSync('learnInfo')
      this.finish = learnInfo.minutes >= 60 ? '完成' : '未完成'
      this.grade = wx.getStorageSync('grade')
    },
    methods: {
      handleCell(){
        wx.navigateTo({
          url: '../aboutUs/main',
        })
      },
    },
}
</script>

<style scoped>
.user_info {
  background-color: #fff;
  padding: 8px 16px;
  box-sizing: border-box;
  border-bottom: 1px solid #ebeef5;
  border-top: 1px solid #ebeef5;
  display: flex;
  flex-direction: row;
}
.user_info img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
}
.user_detail h4 {
  margin: 10px 0;
  font-weight: bold;
}
.user_detail span {
  color: #aaa;
  font-size: 14px;
}
.learn_info {
  padding: 10px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #ebeef5;
}
.learn_info .learn_detail {
  text-align: center;
  flex: 1;
}
.learn_detail span {
  color: #aaa;
  font-size: 14px;
}

.order_info {
  margin-top: 16px;
}
</style>
