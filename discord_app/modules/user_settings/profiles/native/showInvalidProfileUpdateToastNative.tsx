// === Module 16769: showInvalidProfileUpdateToastNative ===

// Module 16769 (showInvalidProfileUpdateToastNative)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5837 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export function showGenericProfileUpdateFailureToast(text) {
  ToastActionCreatorsDefault.open("USER_SETTINGS_UPDATE_FAILURE", { text, variant: "critical" });
}
export function showGenericGuildProfileUpdateFailureToast(intl2) {
  ToastActionCreatorsDefault.open("USER_SETTINGS_UPDATE_FAILURE", { text: intl2, variant: "critical" });
}