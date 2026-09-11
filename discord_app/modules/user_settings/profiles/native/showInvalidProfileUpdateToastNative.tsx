// === Module 14658: showInvalidProfileUpdateToastNative ===

// Module 14658 (showInvalidProfileUpdateToastNative)
import nativeDefault from "native" /* 576 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4305 */;
import _modDef7065 from "module_7065" /* 7065 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(avatar) {
  const obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: _modDef7065, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj);
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(avatar) {
  const obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: _modDef7065, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj);
};