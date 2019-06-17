<template>
    <el-row class="m-header-topbar m-header">
        <el-col :span='10'>
            <location />
        </el-col>
        <el-col :span='14'>
            <my-nav />
        </el-col>
    </el-row>
</template>

<script>
import location from './location.vue'
import myNav from './nav.vue'

export default {
    components:{
        location,
        myNav
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/public/header/topbar.scss';
</style>
