<template lang="pug">
    .mylesson watch video
</template>

<script>
export default {
    data(){
        return {
            lessonDetail:{

            },
        }    
    },
    onLoad(){
        this.getData()
    },
    methods:{
        getData(){
            this.$https.request({
                url: this.$interfaces.getCatalogue,
                method: 'get',
            })
            .then(res => {
                // console.log(res)
                this.lessonDetail = res
            })
        },
    },
}
</script>

