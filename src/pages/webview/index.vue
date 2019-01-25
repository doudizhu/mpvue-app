<template lang="pug">
    web-view(:src='url')
</template>

<script>
export default {
    data(){
        return{
            url: ''
        }
    },
    onLoad(option){
        // console.log(option)
        this.url = option.url
    },
}
</script>
