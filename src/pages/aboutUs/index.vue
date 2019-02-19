<template lang='pug'>
    .contact
        .content
            img(src='/static/imgs/showcase.jpg', alt='')
            .container
                span 在线学生 10+万人
                h1 专注在线教育，用心做课程，用心做服务
        .footer
            .list_item
                h4 QQ技术交流群:
                span 659643177
            .list_item
                h4 微信公众号:
                img(src='/static/imgs/account.png', alt='')
            .footing
                span @2018 成都爱米修科技有限公司
</template>

<script>
export default {};
</script>

<style scoped>
.contact {
  width: 100%;
  height: 100%;
}
.content {
  background-color: #fff;
  padding: 16px;
  box-sizing: border-box;
  position: relative;
  height: 60%;
}
.content img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.content .container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 100px 20px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  text-align: center;
}
.container span {
  font-size: 14px;
}
.container h1 {
  font-size: 28px;
  font-weight: bold;
  padding: 20px 0;
}
.footer {
  box-sizing: border-box;
  background-color: #021e34;
  color: white;
  width: 100%;
  padding: 16px;
}
.list_item {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  width: 100%;
}
.list_item h4 {
  width: 150px;
  font-weight: bold;
}
.list_item img {
  width: 100px;
  height: 100px;
}
.footer .footing {
  border-top: 1px solid #505253;
  text-align: center;
  color: #505253;
  padding: 20px;
  box-sizing: border-box;
  font-size: 13px;
}
</style>