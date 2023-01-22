<template>
  <form @submit.prevent="$emit('sendData', sendForm($event))" class="info-form">
    <div class="info-form__elem">
      <label class="info-form__label">ФИО<span>*</span></label>
      <MyInput class="info-form__input" name="name" type="text" required />
      <p class="info-form__data">{{ props.personalInfo.fullName }}</p>
    </div>
    <div class="info-form__elem">
      <label class="info-form__label">Дата рождения</label>
      <MyInput class="info-form__input" name="birthDate" type="text" />
      <p class="info-form__data">{{ personalInfo.birthDate }}</p>
    </div>
    <div class="info-form__elem">
      <label class="info-form__label">E-mail<span>*</span></label>
      <MyInput class="info-form__input" name="email" type="email" required />
      <p class="info-form__data">{{ personalInfo.email }}</p>
    </div>
    <div class="info-form__elem">
      <label class="info-form__label">Город</label>
      <MyInput class="info-form__input" name="city" type="text" />
      <p class="info-form__data">{{ personalInfo.city }}</p>
    </div>
    <div class="info-form__elem">
      <label class="info-form__label">Номер телефона</label>
      <div class="info-form__input">
        <select>
          <option :value="personalInfo.selectedCountryCode">+7</option>
          <option
            v-for="code in personalInfo.countryCodes"
            :key="code"
            :value="code"
          >
            {{ code }}
          </option>
        </select>
        <MyInput name="phone" type="text" inside />
      </div>
      <p class="info-form__data">{{ personalInfo.phone }}</p>
    </div>
    <div class="info-form__elem">
      <label class="info-form__label" for="languages">Владение языками</label>
      <select
        name="selectedLanguages"
        :value="personalInfo.selectedLanguages"
        class="info-form__input"
        id="languages"
      >
        <option disabled :value="personalInfo.selectedLanguages">
          Выбирете варианты:
        </option>
        <option
          v-for="language in personalInfo.languages"
          :key="language"
          :value="language"
        >
          {{ language }}
        </option>
      </select>
      <p class="info-form__data">
        <span>{{ personalInfo.selectedLanguages }}</span>
      </p>
    </div>
    <MyButton green>Cохранить изминения</MyButton>
  </form>
</template>

<script setup>
import { defineProps } from "vue";
import MyButton from "./UI/MyButton.vue";
import MyInput from "./UI/MyInput.vue";

const props = defineProps({
  personalInfo: {
    fullName: String,
    birthDate: String,
    email: String,
    city: String,
    phone: String,
    selectedCountryCode: String,
    selectedLanguages: String,
    countryCodes: Array,
    languages: Array,
  },
});
const sendForm = (event) => {
  const formElement = event.target;
  const formData = new FormData(formElement);
  return formData;
};
</script>

<style lang="scss">
.info-form {
  font-weight: bold;
  .info-form__elem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    border: 1px solid black;
    padding: 5px;
    .info-form__label {
      flex: 0 1 150px;
    }
    .info-form__input {
      flex: 0 1 230px;
      border: 1px solid black;
      padding: 5px 10px;
      border-radius: 15px;
    }
    .info-form__data {
      flex: 0 1 200px;
      text-align: left;
    }
  }
}
label {
  span {
    color: red;
  }
}
</style>

<!-- <input name="name" class="info-form__input" type="text" required /> -->
