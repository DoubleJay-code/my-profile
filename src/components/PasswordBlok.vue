<template>
  <form
    @submit.prevent="$emit('sendPass', sendForm($event))"
    class="password-form"
  >
    <div v-if="!props.password" class="password-form__absent">
      <h2 class="password-form__title">Создать Пароль:</h2>
      <p>{{ error }}</p>
      <MyInput
        type="password"
        name="newPassword"
        class="password-form__input bg"
        required
      />
      <MyButton outerGreen green>Cохранить изменения</MyButton>
    </div>
    <div v-if="password" class="password-form__present">
      <h2 class="password-form__title">Поменять Пароль:</h2>
      <p>{{ error }}</p>
      <MyInput
        type="password"
        name="oldPass"
        placeholder="Cтарый пароль"
        class="password-form__input bg"
        required
      />
      <MyInput
        type="password"
        name="newPasswordFirst"
        placeholder="Новый пароль"
        class="password-form__input bg"
        required
      />
      <MyInput
        type="password"
        name="newPasswordSecond"
        placeholder="Повторите новый пароль"
        class="password-form__input bg"
        required
      />
      <MyButton outerGreen green>Cохранить изменения</MyButton>
    </div>
  </form>
</template>

<script setup>
import MyInput from "./UI/MyInput.vue";
import MyButton from "./UI/MyButton.vue";
import { defineProps, ref } from "vue";

const props = defineProps({
  password: String,
});

const error = ref("");

const sendForm = (event) => {
  const formElement = event.target;
  const formData = new FormData(formElement);
  const newPass = formData.get("newPassword");
  if (!props.password) {
    if (newPass.length < 8) {
      error.value = "Пароль должен быть минимум 8 символов";
    } else if (!/\d/.test(newPass)) {
      error.value = "Пароль должен содержать как минимум 1 цифру";
    } else if (!/[!@#$%^&*]/.test(newPass)) {
      error.value = "Пароль должен содержать как минимум 1 спец символ";
    } else {
      error.value = "";
      return newPass;
    }
  }
  const oldPass = formData.get("oldPass");
  const newPassFirst = formData.get("newPasswordFirst");
  const newPassSecond = formData.get("newPasswordSecond");
  if (props.password) {
    if (oldPass !== props.password) {
      error.value = "Вы ввели не правильный пароль";
      return props.password;
    } else if (newPassFirst.length < 8) {
      error.value = "Новый пароль должен быть минимум 8 символов";
      return props.password;
    } else if (!/\d/.test(newPassFirst)) {
      error.value = "Новый пароль должен содержать как минимум 1 цифру";
      return props.password;
    } else if (!/[!@#$%^&*]/.test(newPassFirst)) {
      error.value = "Новый пароль должен содержать как минимум 1 спец символ";
      return props.password;
    } else if (newPassFirst !== newPassSecond) {
      error.value = "Ваши пароли не совпадают";
      return props.password;
    } else {
      error.value = "";
      return newPassFirst;
    }
  }
};
</script>

<style lang="scss">
.password-form {
  padding-top: 15px;
  p {
    font-weight: 500;
    font-size: 18px;
    color: red;
    margin-bottom: 5px;
  }
  .password-form__title {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 15px;
  }
  .password-form__input {
    border: 1px solid #c7c7c7;
    height: 35px;
    border-radius: 10px;
    max-width: 270px;
    min-width: 270px;
    padding: 5px 10px;
    margin-bottom: 10px;
    &:focus {
      border: 2px solid rgb(52, 209, 209);
    }
  }
}
.password-form__absent {
  display: flex;
  flex-direction: column;
}
.password-form__present {
  display: flex;
  flex-direction: column;
}
</style>
