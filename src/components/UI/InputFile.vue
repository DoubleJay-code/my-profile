<template>
  <div class="input" :class="{ marginRight20: props.mR, marginTop10: mT }">
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
  background: #448456c0;
  border-radius: 15px;
  .input__file {
    visibility: hidden;
    position: absolute;
  }
  .input__deception {
    min-width: 160px;
    max-width: 250px;
    display: inline-block;
    height: 40px;
    background: #5fb677;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    cursor: pointer;
    margin: 0 auto;
    padding: 0 15px;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: translate(-2px, -5px);
    }
    &:active {
      transform: translate(0, 0);
    }
  }
}
</style>
