<template>
  <div class="px-4 py-16 bg-gray-100">
    ListBox
    <ListBoxExamples></ListBoxExamples>
  </div>
  <div class="px-4 py-16 bg-yellow-100">
    Dropdown
    <DropdownExamples></DropdownExamples>
  </div>
  <div class="px-4 py-16 bg-gray-200">
    Modals
    <ModalExamples></ModalExamples>
  </div>
  <div class="px-4 py-16 bg-red-400">
    Transitions
    <TransitionExamples></TransitionExamples>
  </div>
  <div class="px-4 py-16 bg-blue-200">
    Disclosure
    <DisclosureExamples></DisclosureExamples>
  </div>
  <div class="px-4 py-16 bg-blue-100">
    Popover
    <div class="flex justify-center">
      <PopOverExamples></PopOverExamples>
    </div>
  </div>
  <div class="px-4 py-16 bg-red-100">
    Toggle
    <ToggleExamples></ToggleExamples>
  </div>
  <div class="px-4 py-16 bg-green-100">
    Radio Group
    <RadioGroupExamples></RadioGroupExamples>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import ListBoxExamples from "./components/Examples/ListBoxExamples.vue";
import ModalExamples from "./components/Examples/ModalExamples.vue";
import TransitionExamples from "./components/Examples/TransitionExamples.vue";
import DisclosureExamples from "./components/Examples/DisclosureExamples.vue";
import PopOverExamples from "./components/Examples/PopOverExamples.vue";
import ToggleExamples from "./components/Examples/ToggleExamples.vue";
import RadioGroupExamples from "./components/Examples/RadioGroupExamples.vue";
import DropdownExamples from "./components/Examples/DropdownExamples.vue";

export default defineComponent({
  components: {
    ListBoxExamples,
    ModalExamples,
    TransitionExamples,
    DisclosureExamples,
    PopOverExamples,
    ToggleExamples,
    RadioGroupExamples,
    DropdownExamples,
  },
});
</script>
