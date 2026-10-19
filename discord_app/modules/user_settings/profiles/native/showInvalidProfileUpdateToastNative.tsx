// === Module 15655: showInvalidProfileUpdateToastNative ===

// Module 15655 (showInvalidProfileUpdateToastNative)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5625 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(intl2) {
  ToastActionCreatorsDefault.open("USER_SETTINGS_UPDATE_FAILURE", { text: intl2, variant: "critical" });
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(intl2) {
  ToastActionCreatorsDefault.open("USER_SETTINGS_UPDATE_FAILURE", { text: intl2, variant: "critical" });
};