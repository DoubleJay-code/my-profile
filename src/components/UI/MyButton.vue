<template>
  <button :class="{ red: props.red, green: green, marginTop10: mT }">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  red: Boolean,
  green: Boolean,
  mT: Boolean,
  tepeBtn: String,
});
</script>

<style lang="scss" scoped>
button {
  min-width: 160px;
  max-width: 250px;
  height: 40px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 15px;
  padding: 0 15px;
}
</style>
