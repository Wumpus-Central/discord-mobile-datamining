// === Module 14605: showInvalidProfileUpdateToastNative ===

// Module 14605 (showInvalidProfileUpdateToastNative)
import nativeDefault from "native" /* 576 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import _modDef6992 from "module_6992" /* 6992 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(avatar) {
  const obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: _modDef6992, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj);
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(avatar) {
  const obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: _modDef6992, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj);
};