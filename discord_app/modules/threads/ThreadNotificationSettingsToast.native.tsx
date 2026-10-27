// discord_app/modules/threads/ThreadNotificationSettingsToast.native.tsx
import ToastActionCreatorsDefault from "../toast/native/ToastActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/threads/ThreadNotificationSettingsToast.native.tsx");

export default {
  showError(text) {
    ToastActionCreatorsDefault.open("THREAD_NOTIFICATION_SETTINGS_RATE_LIMITED", { text, variant: "critical" });
  },
};
