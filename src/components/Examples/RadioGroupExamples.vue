<template>
  <form @submit.prevent="submit" class="p-2">
    <RadioGroup v-model="selectedPlanId" :options="plans"></RadioGroup>
    <div class="pt-2">
      <BaseButton type="submit">submit</BaseButton>
    </div>
    Result: {{ selectedPlanId }}
  </form>
</template>

<script>
import RadioGroup from "../RadioGroup.vue";
import BaseButton from "../BaseButton.vue";
import { ref } from "@vue/reactivity";

export default {
  components: {
    RadioGroup,
    BaseButton,
  },
  setup() {
    const selectedPlanId = ref(1);
    const plans = [
      { id: 1, label: "Startup", desciption: "Cheap" },
      { id: 2, label: "Business", desciption: "Moderate" },
      { id: 3, label: "Enterprise", desciption: "Expensive" },
    ];
    const submit = () => {
      console.log("submitting: " + selectedPlanId.value);
    };
    return { selectedPlanId, plans, submit };
  },
};
</script>

<style></style>
