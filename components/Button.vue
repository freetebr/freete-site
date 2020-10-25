<template>
  <button :class="[colorClass, sizeClass]" class="rounded-sm shadow text-white font-semibold focus:outline-none">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'md',
    },
    color: {
      type: String,
      default: 'gray',
    },
  },
  computed: {
    sizeClass() {
      return 'px-5 py-2 text-xl';
    },
    colorClass() {
      return `bg-${this.color}-600 hover:bg-${this.color}-500 border-2 border-transparent focus:border-${this.color}-100`;
    },
  },
};
</script>

<style></style>
