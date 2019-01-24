<template lang='pug'>
  div.container
    .login
      img(src='/static/imgs/guide_bg.jpg')
    .learn
      button(
        open-type="getUserInfo"
        @getuserinfo="getUserInfo"
      ) 开始学习
</template>

<script>
export default {
  methods: {
    getUserInfo(e) {
      // 判断授权是否成功
      if(e.mp.detail.userInfo){
        // console.log(e.mp.detail.userInfo)
        // 存储到vuex
        this.$store.dispatch('setIsAuthenticated',true)
        this.$store.dispatch('setUser', e.mp.detail.userInfo)
        // 获取code
        this.getCode()
      }  
    },
    getCode(){
      // 在mpvue中，提供了一个全局小程序对象wx
      wx.login({
        success: res => {
          // console.log(res)
          this.getOpenid(res.code)
        }
      })
    },
    // 获取openid
    getOpenid(code){
      // 三个参数 appid secret code
      const appid = 'wx69b17e48d6b0184b'
      const secret = '3381d752fea477148c255a0cf99dbebe'

      this.$https.request({
        url: this.$interfaces.getOpenid + '/' + appid + '/' + secret + '/' + code,
        method: 'get',
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
    },
  }  
}
</script>

<style scoped lang='scss'>
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.login {
  width: 100%;
  height: 100%;
  position: relative;
}
.login img {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.login .learn {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
}
.learn button {
  position: absolute;
  top: 90%;
  left: 10%;
  width: 80%;
  background-color: #009eef;
  color: white;
}
</style>
