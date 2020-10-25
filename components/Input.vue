<template>
  <div class="flex-1 flex flex-col">
    <label v-if="label" :for="id" class="text-gray-400 font-bold uppercase text-sm mb-1">{{ label }}</label>
    <input
      v-bind="$attrs"
      class="py-2 px-3 text-white bg-gray-500 outline-none border-2 rounded border-transparent focus:border-orange-500"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'md',
    },
    suffix: {
      type: String,
      default: '',
    },
  },
  computed: {
    sizeClass() {
      return 'px-3 py-2';
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  &::after {
    content: 'asdas';
    width: 10px;
  }
}
</style>
