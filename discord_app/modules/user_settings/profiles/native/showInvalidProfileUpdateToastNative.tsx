// === Module 14122: showGenericProfileUpdateFailureToast ===

// Module 14122 (showGenericProfileUpdateFailureToast)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import dispatcherDefault from "dispatcher" /* 4098 */;
import registerAssetDefault from "registerAsset" /* 8178 */;

const result = set.fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(avatar) {
  let obj = dispatcherDefault;
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: registerAssetDefault, iconColor: ThemesDefault.colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj);
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(avatar) {
  let obj = dispatcherDefault;
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: registerAssetDefault, iconColor: ThemesDefault.colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj);
};