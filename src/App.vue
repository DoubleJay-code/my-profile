<template>
  <div class="wrapper">
    <AvatarBlok @clearAvatar="clearAvatar" :avatar="avatar" />
    <PersonalInfo @sendData="changePersonalInfo" :personalInfo="personalInfo" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import AvatarBlok from "@/components/AvatarBlok.vue";
import PersonalInfo from "@/components/PersonalInfo.vue";

const avatar = ref({
  avatar: "https://klike.net/uploads/posts/2020-06/1593063514_1.jpg",
  defaultAvatar: "https://hornews.com/upload/images/blank-avatar.jpg",
});

const personalInfo = ref({
  fullName: "Не назначено",
  birthDate: "Не назначено",
  email: "Не назначено",
  city: "Не назначено",
  phone: "Не назначено",
  selectedCountryCode: "+7",
  countryCodes: ["+1", "+44", "+81"],
  selectedLanguages: "Не назначено",
  languages: ["English", "French", "Spanish"],
});

const clearAvatar = (str) => {
  avatar.value.avatar = str;
};
const changePersonalInfo = (formData) => {
  personalInfo.value.fullName = formData.get("name");
  personalInfo.value.birthDate = formData.get("birthDate");
  personalInfo.value.email = formData.get("email");
  personalInfo.value.city = formData.get("city");
  personalInfo.value.phone = formData.get("phone");
  personalInfo.value.selectedLanguages = formData.get("selectedLanguages");
};
</script>

<style lang="scss">
.wrapper {
  max-width: 800px;
  margin: 50px auto;
  border: 1px solid black;
  padding: 10px;
}
</style>
