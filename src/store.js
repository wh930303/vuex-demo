/*
 * @Author: your name
 * @Date: 2022-03-07 10:10:09
 * @LastEditTime: 2022-03-07 12:18:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vuex-demo/src/store.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    countStr (state) {
      return 'count值为：【' + state.count + '】'
    }
  },
  mutations: {
    addCount (state, num) {
      state.count += num
    }
  },
  actions: {
    addCountAsync (context, num) {
      setTimeout(() => {
        context.commit('addCount', num)
      }, 1000)
    }
  }
})
