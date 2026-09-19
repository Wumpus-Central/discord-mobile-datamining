// === Module 14875: showInvalidProfileUpdateToastNative ===

// Module 14875 (showInvalidProfileUpdateToastNative)
import nativeDefault from "native" /* 576 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4454 */;
import _modDef7232 from "module_7232" /* 7232 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(avatar) {
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: _modDef7232, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true });
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(avatar) {
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: _modDef7232, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true });
};