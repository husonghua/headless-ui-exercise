<template>
  <form @submit.prevent="submit" class="p-2">
    <ListBox :options="people" v-model="selectedPersonId"></ListBox>
    <div class="pt-2">
      <BaseButton type="submit">submit</BaseButton>
    </div>
    ListBox result: {{ selectedPersonId }}
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import ListBox from "../ListBox.vue";
import BaseButton from "../BaseButton.vue";
export default {
  components: {
    ListBox,
    BaseButton,
  },
  setup() {
    const selectedPersonId = ref(1);
    const people = [
      { id: 1, label: "Wade Cooper" },
      { id: 2, label: "Arlene Mccoy" },
      { id: 3, label: "Devon Webb" },
      { id: 4, label: "Tom Cook" },
      { id: 5, label: "Tanya Fox" },
      { id: 6, label: "Hellen Schmidt" },
      { id: 11, label: "Wade Cooper" },
      { id: 21, label: "Arlene Mccoy" },
      { id: 31, label: "Devon Webb" },
      { id: 41, label: "Tom Cook" },
      { id: 51, label: "Tanya Fox" },
      { id: 61, label: "Hellen Schmidt" },
    ];
    const submit = () => {
      console.log("Submiting: " + selectedPersonId.value);
    };
    return { people, selectedPersonId, submit };
  },
};
</script>
