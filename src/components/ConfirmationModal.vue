<template>
  <BaseModal :open="open" @close="close">
    <template v-slot:title v-if="title">
      {{ title }}
    </template>
    <template v-slot:title v-else> Some other title </template>

    <p class="pb-4 text-gray-500">
      <slot></slot>
    </p>
    <div class="space-x-2">
      <BaseButton @click="close">Never Mind</BaseButton>
      <BaseButton @click="confirm">Please Proceed!</BaseButton>
    </div>
  </BaseModal>
</template>

<script>
import { defineComponent } from "vue";
import BaseModal from "./BaseModal.vue";
import BaseButton from "./BaseButton.vue";
export default defineComponent({
  components: {
    BaseModal,
    BaseButton,
  },
  props: {
    open: {
      type: Boolean,
    },
    title: {
      type: String,
    },
    callback: {
      type: Function,
    },
  },
  emits: ["close", "confirm"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    const confirm = () => {
      emit("confirm");
    };
    return { close, confirm };
  },
});
</script>
