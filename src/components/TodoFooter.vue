<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{remaining.length}}</strong></span>
    <ul class="filters">
      <li>
        <a class="selected" href="javascript:;" @click="changeAll">全部</a>
      </li>
      <li>
        <a href="javascript:;" @click="unfinished">未完成</a>
      </li>
      <li>
        <a href="javascript:;" @click="finished">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="unfinished">清除已完成</button>
  </footer>
</template>

<script>
import { createNamespacedHelpers} from 'vuex'
const {mapState,mapGetters,mapMutations} = createNamespacedHelpers('main')
export default {
  data () {
    return {
    }
  },
computed:{
  ...mapState(['dataArr']),
  ...mapGetters(['remaining'])
},
methods: {
  ...mapMutations(['unfinished','changeAll','finished'])
}
}

</script>
