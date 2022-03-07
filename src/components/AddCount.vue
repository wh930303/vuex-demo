<!--
 * @Author: your name
 * @Date: 2022-03-07 10:37:36
 * @LastEditTime: 2022-03-07 12:11:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vuex-demo/src/modules/demo/text.vue
-->
<template>
    <div>
        <div>count值为：【{{$store.state.count}}】</div>
        <!-- <div>{{countStr}}</div> -->
        <div>count:{{$store.state.count}}</div>
        <button @click="addCountMethod(3)">+3</button>
        <button @click="addCountAsyncMethod(3)">async +3</button>
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['countStr'])
  },
  methods: {
    ...mapMutations(['addCount']),
    ...mapActions(['addCountAsync']),
    addCountMethod (num) {
      this.$store.commit('addCount', num)
    },
    addCountAsyncMethod (num) {
      this.$store.dispatch('addCountAsync', num)
    }
  }
}
</script>
