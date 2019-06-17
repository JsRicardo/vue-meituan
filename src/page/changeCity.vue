<template>
  <div class="page-changeCity">
    <el-row>
      <province/>
    </el-row>
    <el-row>
      <hot title="热门城市：" :list="hotList"/>
    </el-row>
    <el-row>
        <hot title="最近访问：" :list='recentList' />
    </el-row>
    <el-row>
        <categroy />
    </el-row>
  </div>
</template>

<script>
import Province from "@/components/ChangeCity/province.vue"
import Hot from "@/components/ChangeCity/hot.vue"
import Categroy from "@/components/ChangeCity/categroy.vue"

export default {
  data() {
    return {
      hotList: [
        "黑龙江",
        "成都",
        "黑龙江",
        "黑龙江",
        "黑龙江",
        "黑龙江",
        "黑龙江"
      ],
      recentList: [
        "黑龙江",
        "成都",
        "黑龙江",
        "黑龙江",
        "黑龙江",
        "黑龙江",
        "黑龙江"
      ]
    };
  },
  components: {
    Province,
    Hot,
    Categroy
  }
};
</script>
