// === Module 14675: showInvalidProfileUpdateToastNative ===

// Module 14675 (showInvalidProfileUpdateToastNative)
import nativeDefault from "native" /* 587 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import _modDef5009 from "module_5009" /* 5009 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(avatar) {
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: _modDef5009, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true });
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(avatar) {
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: _modDef5009, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true });
};