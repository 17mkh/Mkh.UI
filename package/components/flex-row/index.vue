<template>
  <section :class="['m-flex-row', mode]">
    <slot />
  </section>
</template>
<script>
export default {
  name: 'FlexRow',
  props: {
    /**
     * 固定模式，left是左侧固定，右边响应式，right反之
     */
    mode: {
      type: String,
      validator(value) {
        return ['left', 'right'].includes(value)
      },
      default: 'left',
    },
  },
}
</script>
