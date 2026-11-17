// === Module 9020: ThreadNotificationSettingsToast ===

// Module 9020 (ThreadNotificationSettingsToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6009 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/ThreadNotificationSettingsToast.native.tsx");

export default {
  showError(text) {
    ToastActionCreatorsDefault.open("THREAD_NOTIFICATION_SETTINGS_RATE_LIMITED", { text, variant: "critical" });
  }
};