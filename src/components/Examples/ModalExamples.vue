<template>
  <div class="p-2">
    <div class="space-x-4">
      <BaseButton type="button" @click="confirmationModalOpen = true">
        Delete
        <ConfirmationModal
          :open="confirmationModalOpen"
          @close="confirmationModalOpen = false"
          @confirm="deleteRecord"
          title="confirmationModalOpen!!!"
        >
          here are some texts
        </ConfirmationModal>
      </BaseButton>

      <BaseButton type="button" @click="notificationModalOpen = true">
        Info
        <NotificationModal
          :open="notificationModalOpen"
          @close="notificationModalOpen = false"
          title="Notification!!!"
        >
          Notification Body hahaha
        </NotificationModal>
      </BaseButton>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import NotificationModal from "../NotificationModal.vue";
import ConfirmationModal from "../ConfirmationModal.vue";
import BaseButton from "../BaseButton.vue";

export default defineComponent({
  components: {
    NotificationModal,
    ConfirmationModal,
    BaseButton,
  },
  setup() {
    const confirmationModalOpen = ref(false);
    const notificationModalOpen = ref(false);
    const deleteRecord = () => {
      console.log("deleting");
      confirmationModalOpen.value = false;
    };
    return {
      confirmationModalOpen,
      deleteRecord,
      notificationModalOpen,
    };
  },
});
</script>
