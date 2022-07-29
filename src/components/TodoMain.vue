<template>
  <ul class="todo-list" v-if="isShow">
    <!-- completed: 完成的类名 -->
    <li :class="{'completed':item.done}" v-for="(item,index) in dataArr" :key="index">
      <div class="view">
        <input class="toggle" type="checkbox" :checked="item.done" @change="changeDone(index)"/>
        <label>{{item.name}}</label>
        <button class="destroy" @click="del(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const {mapState,mapMutations} = createNamespacedHelpers('main')
export default {
  computed:{
    ...mapState(['dataArr','isShow']),
  },
  methods: {
    ...mapMutations(['changeDone','del']),
  }
}
</script>
