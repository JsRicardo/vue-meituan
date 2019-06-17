<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu/>
      </el-col>
      <el-col :span="19">
        <life/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-container :nav="iStyle"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-container :nav="recomment"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MMenu from "@/components/Index/menu.vue";
import Life from "@/components/Index/life.vue";
import MContainer from "@/components/Index/container.vue";
export default {
  data() {
    return {
      iStyle: {
        title: "有格调",
        list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "约会聚餐",
            tab: "food"
          },
          {
            text: "丽人SPA",
            tab: "spa"
          },
          {
            text: "电影演出",
            tab: "movie"
          }
        ]
      },
      recomment: {
        class: "youhui",
        title: "很优惠",
        list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "美食",
            tab: "food"
          },
          {
            text: "休闲",
            tab: "xiuxian"
          }
        ]
      }
    };
  },
  components: {
    MMenu,
    Life,
    MContainer
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
