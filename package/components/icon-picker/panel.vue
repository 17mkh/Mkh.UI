<template>
  <m-dialog v-model="visible" title="选择图标" icon="list" height="60%" width="800px">
    <template #toolbar>
      <el-input v-model="filter" class="m-icon-picker_panel_filter" placeholder="请输入图标名称" clearable></el-input>
    </template>
    <section class="m-icon-picker_panel">
      <el-tooltip v-for="icon in filterList" :key="icon" effect="dark" :open-delay="800" :content="icon" placement="top">
        <div class="m-icon-picker_panel_item" @click="handleSelect(icon)">
          <m-icon :name="icon" />
          <div class="m-icon-picker_panel_code">{{ icon }}</div>
        </div>
      </el-tooltip>
    </section>
  </m-dialog>
</template>
<script>
import { computed, ref } from 'vue'
import { useVisible } from '../../composables'
export default {
  props: {
    modelValue: Boolean,
  },
  emits: ['success'],
  setup(props, { emit }) {
    const { visible, open, close } = useVisible(props, emit)

    const filter = ref('')
    const icons = []
    document.querySelectorAll('body>svg>symbol').forEach(m => icons.push(m.id.replace('m-', '')))

    const handleSelect = icon => {
      emit('success', icon)
      visible.value = false
    }

    const filterList = computed(() => {
      if (!filter.value) {
        return icons
      }

      return icons.filter(m => m.indexOf(filter.value) > -1)
    })

    return {
      visible,
      open,
      close,
      filter,
      filterList,
      handleSelect,
    }
  },
}
</script>
