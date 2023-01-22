<template>
  <div class="flexbox-column">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style scoped>
.flexbox-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
