<template>
  <form @submit.prevent="submit" class="p-2">
    <Toggle v-model="toggle"></Toggle>
    <div class="pt-2">
      <BaseButton type="submit">submit</BaseButton>
    </div>
    Toggle value: {{ toggle }}
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import Toggle from "../Toggle.vue";
import BaseButton from "../BaseButton.vue";
export default {
  components: {
    Toggle,
    BaseButton,
  },
  setup() {
    const toggle = ref(false);
    const submit = () => {
      console.log("submitting: " + toggle.value);
    };
    return { toggle, submit };
  },
};
</script>

<style></style>
