<template>
  <button
    :class="[colorClass, sizeClass]"
    class="rounded-sm shadow text-white font-semibold focus:outline-none flex items-center justify-center space-x-5 disabled:opacity-75 disabled:cursor-not-allowed"
  >
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
      switch (this.color) {
        case 'orange':
          return 'bg-orange-600 hover:bg-orange-500 border-2 border-transparent focus:border-orange-100';
        default:
          return `bg-gray-600 hover:bg-gray-500 border-2 border-transparent focus:border-gray-100`;
      }
    },
  },
};
</script>

<style></style>
