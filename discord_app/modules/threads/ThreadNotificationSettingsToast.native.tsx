// === Module 8422: ThreadNotificationSettingsToast ===

// Module 8422 (ThreadNotificationSettingsToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5839 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/ThreadNotificationSettingsToast.native.tsx");

export default {
  showError(text) {
    ToastActionCreatorsDefault.open("THREAD_NOTIFICATION_SETTINGS_RATE_LIMITED", { text, variant: "critical" });
  }
};