<template>
  <div class="choose-wrap" @click="showWrapper" v-document-click='documentClick'>
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"/>
      <div :class="{'mt-content': true, 'active': showWrapperActive}">
        <h2>{{title}}</h2>
        <div class="wrapper">
          <div class="col">
            <span :class="{'mt-item': true, 'active': item==value}" v-for="(item, index) in list" :key="index" @click="changeVal(item)">{{item}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
     
    }
  },
  props: [
      "list",
      'value',
      'title',
      'showWrapperActive'
  ],
  methods: {
    showWrapper(e){
      e.stopPropagation()
      // this.showWraperActive = true
      this.$emit('change_active', true)
    },
    documentClick(){
      // this.showWraperActive = false
      // console.log('document-click')
      this.$emit('change_active', false)
    },
    changeVal(item){
      this.$emit('change', item)
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>
