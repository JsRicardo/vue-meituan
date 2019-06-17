<template>
  <div class="slide" hight='240px'>
    <el-carousel>
      <el-carousel-item v-for="item in sliderList" :key="item.img">
        <img :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return { 
        sliderList: [
            {
                url:'#asdas',
                img:'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg'
            },
            {
                url:'#ssa',
                img:'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
            },
            {
                url:'#asd',
                img:'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
            }
        ] 
    }
  }
}
</script>

