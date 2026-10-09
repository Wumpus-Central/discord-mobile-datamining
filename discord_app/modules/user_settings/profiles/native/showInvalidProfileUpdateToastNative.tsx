// === Module 14780: showInvalidProfileUpdateToastNative ===

// Module 14780 (showInvalidProfileUpdateToastNative)
import nativeDefault from "native" /* 587 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import _modDef5010 from "module_5010" /* 5010 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(avatar) {
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: _modDef5010, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL });
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(avatar) {
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: _modDef5010, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL });
};