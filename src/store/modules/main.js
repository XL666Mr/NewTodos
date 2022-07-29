import { dataArr } from "./data"

export default {
  namespaced: true,
  state: {
    isShow: true,
    dataArr,
    finishList: [],
  },
  getters: {
    remaining: (state) => state.dataArr.filter((ele) => ele.done === false),
  },
  mutations: {
    // 展示和隐藏
    changeIsShow(state) {
      state.isShow = !state.isShow
    },
    //回车添加
    addData(state, val) {
      state.dataArr.push({
        name: val,
        done: false,
        id: state.dataArr.length + 1,
      })
    },
    // 删除
    del(state, id) {
      state.dataArr = state.dataArr.filter((ele) => ele.id !== id)
    },
    // 切换done状态
    changeDone(state, id) {
      console.log(id)
      state.dataArr[id].done = !state.dataArr[id].done
    },
    // 未完成和清除已完成
    unfinished(state) {
      if (state.dataArr.length < state.finishList.length) return
      state.finishList = state.dataArr
      state.dataArr = state.dataArr.filter((ele) => ele.done === false)
    },
    // 已完成
    finished(state) {
      if (state.dataArr.length < state.finishList.length) return
      state.finishList = state.dataArr
      state.dataArr = state.dataArr.filter((ele) => ele.done === true)
    },
    // 全部
    changeAll(state) {
      if (state.finishList.length === 0) return
      state.dataArr = state.finishList
    },
  },
  actions: {},
  modules: {},
}
