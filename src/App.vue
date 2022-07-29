<template>
  <div>
    <button @click="randomColorFn">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
import { createNamespacedHelpers} from 'vuex'
const {mapMutations:colormapMutations} = createNamespacedHelpers('color')
export default {
  data() {
    return {}
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
  },

  created() {},

  methods: {
  ...colormapMutations(['randomColorFn']),
  },
  computed: {    
  }
}
</script>

<style scoped></style>
