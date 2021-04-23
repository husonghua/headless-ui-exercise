<template>
  <Disclosure :disclosures="disclosures"></Disclosure>
</template>

<script>
import Disclosure from "../Disclosure.vue";
export default {
  components: {
    Disclosure,
  },
  setup() {
    const disclosures = [
      { button: "Return Policy", panel: "You cannot return " },
      {
        button: "Refund Policy",
        panel: "You have to call customer customer service line",
      },
    ];
    return { disclosures };
  },
};
</script>
