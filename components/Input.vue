<template>
  <div class="flex-1 flex flex-col">
    <label v-if="label" :for="id" class="text-gray-400 font-bold uppercase text-sm mb-1">{{ label }}</label>
    <div class="flex">
      <input
        v-bind="$attrs"
        class="w-full py-2 px-3 text-white bg-gray-500 outline-none border-2 border-transparent focus:border-orange-500"
        :class="[suffix ? 'rounded-l' : 'rounded']"
        @input="$emit('input', $event.target.value)"
      />
      <div v-if="suffix" class="px-2 bg-gray-500 opacity-75 self-stretch flex items-center rounded-r">
        <span class="text-black text-sm">{{ suffix }}</span>
      </div>
    </div>
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
