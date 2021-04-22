<template>
  <div class="w-full px-4 p-16 bg-red-400">
    <div class="w-full max-w-md p-2 mx-auto bg-white rounded-2xl space-y-2">
      <Disclosure
        v-for="disclosure in disclosures"
        :key="disclosure"
        v-slot="{ open }"
      >
        <DisclosureButton
          class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>{{ disclosure.button }}</span>
          <ChevronUpIcon
            :class="open ? 'transform rotate-180' : ''"
            class="w-5 h-5 text-purple-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-2 pb-2 text-sm text-gray-500">
          {{ disclosure.panel }}
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/solid";

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronUpIcon,
  },
  props: {
    disclosures: {
      type: Array,
    },
  },
};
</script>
