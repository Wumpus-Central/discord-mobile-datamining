// === Module 14835: showInvalidProfileUpdateToastNative ===

// Module 14835 (showInvalidProfileUpdateToastNative)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(avatar) {
  ToastActionCreatorsDefault.open("USER_SETTINGS_UPDATE_FAILURE", { text: avatar, variant: "critical" });
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(avatar) {
  ToastActionCreatorsDefault.open("USER_SETTINGS_UPDATE_FAILURE", { text: avatar, variant: "critical" });
};