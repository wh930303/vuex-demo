<!--
 * @Author: your name
 * @Date: 2022-03-07 10:37:36
 * @LastEditTime: 2022-03-07 10:52:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vuex-demo/src/modules/demo/text.vue
-->
<template>
    <div>
        <my-addCount></my-addCount>
        <my-addCount></my-addCount>
        <my-addCount></my-addCount>
    </div>
</template>
<script>
import AddCount from 'src/components/AddCount.vue'
export default {
  data () {
    return {}
  },
  components: {
    'my-addCount': AddCount
  },
  methods: {
  }
}
</script>
