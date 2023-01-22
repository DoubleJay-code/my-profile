<template>
  <div class="input" :class="{ marginRight: props.mR, marginTop10: mT }">
    <label for="input__file">
      <input
        name="file"
        type="file"
        id="input__file"
        class="input input__file"
      />
      <span class="input__deception">Выберите файл</span>
    </label>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  mR: Boolean,
  mT: Boolean,
});
</script>

<style lang="scss" scoped>
.input {
  display: inline-block;
  position: relative;
  .input__file {
    visibility: hidden;
    position: absolute;
  }
  .input__deception {
    min-width: 160px;
    max-width: 250px;
    height: 40px;
    background: #1bbc9b;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    cursor: pointer;
    margin: 0 auto;
    padding: 0 15px;
  }
}
</style>
