// discord_app/modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx",
);

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(avatar) {
  ToastActionCreatorsDefault.open("USER_SETTINGS_UPDATE_FAILURE", { text: avatar, variant: "critical" });
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(avatar) {
  ToastActionCreatorsDefault.open("USER_SETTINGS_UPDATE_FAILURE", { text: avatar, variant: "critical" });
};
