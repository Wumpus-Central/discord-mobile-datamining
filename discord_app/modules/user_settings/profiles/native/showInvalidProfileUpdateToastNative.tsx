// === Module 14019: showGenericProfileUpdateFailureToast ===

// Module 14019 (showGenericProfileUpdateFailureToast)
import obj132 from "obj132" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import dispatcherDefault from "dispatcher" /* 4094 */;
import registerAssetDefault from "registerAsset" /* 8143 */;

const result = obj132.fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(avatar) {
  const obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: registerAssetDefault, iconColor: ThemesDefault.colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj);
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(avatar) {
  const obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: registerAssetDefault, iconColor: ThemesDefault.colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj);
};