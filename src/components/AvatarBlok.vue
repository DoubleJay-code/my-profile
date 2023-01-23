<template>
  <form @submit.prevent class="avatar-form">
    <FlexBlokRow>
      <FlexBlokColumn>
        <h2 class="avatar-form__title">Ваш аватар:</h2>
        <FlexBlokRow fW>
          <InputFile mR mT />
          <MyButton @click="$emit('clearAvatar', '')" :type="'reset'" red mT
            >Удалить аватар</MyButton
          >
        </FlexBlokRow>
      </FlexBlokColumn>
      <img
        class="avatar-form__image"
        :src="
          props.avatar.avatar ? props.avatar.avatar : props.avatar.defaultAvatar
        "
      />
    </FlexBlokRow>
  </form>
</template>

<script setup>
import { defineProps } from "vue";
import FlexBlokColumn from "./assistComponent/FlexBlokColumn.vue";
import FlexBlokRow from "./assistComponent/FlexBlokRow.vue";
import InputFile from "./UI/InputFile.vue";
import MyButton from "./UI/MyButton.vue";

const props = defineProps({
  avatar: Object,
});
</script>

<style lang="scss">
.avatar-form {
  padding: 15px;
  margin-bottom: 20px;
  .avatar-form__title {
    font-weight: 500;
    font-size: 20px;
  }
  .avatar-form__image {
    width: 100px;
    height: 120px;
    object-fit: cover;
  }
}
</style>
