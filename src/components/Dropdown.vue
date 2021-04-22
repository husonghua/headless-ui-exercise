<template>
  <Menu>
    <MenuButton>More</MenuButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems>
        <MenuItem v-slot="{ active }" v-for="item in listItems">
          <a
            :class="[active ? 'bg-blue-500 text-white' : 'bg-white text-black']"
            :href="item.href"
          >
            {{ item.text }}
          </a>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
  props: {
    listItems: {
      type: Array,
    },
  },

  setup() {},
};
</script>
