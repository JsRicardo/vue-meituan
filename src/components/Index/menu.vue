<template>
    <div class="m-menu">
        <dl class="nav" @mouseleave="menuLeave">
            <dt>全部分类</dt>
            <dd v-for='(item, index) in menuList' :key="index" @mouseenter="menuEnter(item)">
                <i :class="item.type" />
                {{item.name}}
                <span class="arrow" />
            </dd>
        </dl>
        <div class="detail" v-if='curDetaile' @mouseenter="detailEnter" @mouseleave="detailLeave">
            <template v-for="(item,index) in curDetaile.items">
                <h4 :key="index">{{item.title}}</h4>
                <span v-for="(v, i) in item.items" :key="v + '_' + i">{{v}}</span>
            </template>
        </div>
    </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    data() {
        return {
            curDetaile: null,
            menuList: []
        }
    },
    created(){
        api.getMenuList().then(res => {
            this.menuList = res.data.data
        })
    },
    methods: {
        menuEnter (item){
            this.curDetaile = item
        },
        menuLeave() {
            let self = this
            this.timer = setTimeout(function(){
                self.curDetaile = null
            }, 200)
        },
        detailEnter(){
            clearTimeout(this.timer)
        },
        detailLeave(){
            this.curDetaile = null
        }
    }
}
</script>



