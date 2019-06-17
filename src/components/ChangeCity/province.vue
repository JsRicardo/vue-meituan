<template>
  <div>
    <span class="name">按省份选择：</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change='changeProvince'
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change='changeCity'
    />
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from "@/components/ChangeCity/select.vue";
export default {
  data() {
    return {
      provinceList: [
        "黑龙江",
        "成都",
        "黑龙江",
        "黑龙江",
        "黑龙江",
        "黑龙江",
        "黑龙江"],
      province: "省份",
      cityList: [
        "黑龙江",
        "成都",
        "黑龙江",
        "黑龙江",
        "黑龙江",
        "黑龙江",
        "黑龙江"],
      city: "城市",
      provinceActive: false,
      cityActive: false,
      searchList: [
        "黑龙江",
        "成都",
        "黑龙江",
        "黑龙江",
        "黑龙江",
        "黑龙江",
        "黑龙江"
      ],
      searchWord:'',
      loading: false
    };
  },
  components: {
    MSelect
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(value){
      this.province = value
    },
    changeCity(value){
      this.city = value
    },
    remoteMethod(val){

    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
