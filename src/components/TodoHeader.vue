<template>
  <header class="header">
    <h1 :style="{color:randomColor}">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" >
    <label for="toggle-all" @click="changeIsShow"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="value"
      @keyup.enter="addDataFn"
    />
  </header>
</template>
<script>
import { createNamespacedHelpers} from 'vuex'
const {mapMutations} = createNamespacedHelpers('main')
const {mapState:colormapState} = createNamespacedHelpers('color')
export default {
data () {
  return {
    value:'',
  }
},
methods: {
  ...mapMutations(['addData','changeIsShow']),
  addDataFn(){
    this.addData(this.value)
    this.value = ''
  }
},
computed: {
  ...colormapState(['randomColor'])
}
}
</script>
