<template>
  <div
    class="outer-btn"
    :class="{
      outerRed: props.outerRed,
      outerGreen: props.outerGreen,
      marginTop10: mT,
    }"
  >
    <button :class="{ red: props.red, green: green }">
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  red: Boolean,
  green: Boolean,
  mT: Boolean,
  tepeBtn: String,
  outerRed: Boolean,
  outerGreen: Boolean,
});
</script>

<style lang="scss" scoped>
.outer-btn {
  border-radius: 15px;
  display: inline-block;
  min-width: 160px;
  max-width: 194.3px;
}
button {
  min-width: 160px;
  max-width: 250px;
  height: 40px;
  font-weight: 500;
  font-size: 16px;
  border-radius: 15px;
  padding: 0 15px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translate(-2px, -5px);
  }
  &:active {
    transform: translate(0, 0);
  }
}
@media (max-width: 768px) {
  button {
    &:active {
      transform: translate(-2px, -5px);
    }
  }
}
</style>
