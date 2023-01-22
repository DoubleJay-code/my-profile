<template>
  <div class="flexbox-row" :class="{ flexWrap: props.fW }">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  fW: Boolean,
});
</script>

<style scoped>
.flexbox-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
