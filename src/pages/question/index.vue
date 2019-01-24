<template lang='pug'>
    .question 推荐课程测试    
</template>

<script>
export default {
    data(){
        return {
            questions:[]
        }
    },
    onLoad(){
        this.getData();
    },
    methods:{
        getData(){
            this.$https.request({
                url: this.$interfaces.getQuestions,
                methods: 'get',
            })
            .then(res => {
                // console.log(res)
                this.questions = res.questions
            })
        }
    }
}
</script>