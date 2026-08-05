// discord_app/modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx
const result = require("Themes").fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(avatar) {
  let obj = require("../../../toast/native/ToastActionCreators.tsx");
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: require("../../../../../_runtime/07837_registerAsset.js"), iconColor: require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj);
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(avatar) {
  let obj = require("../../../toast/native/ToastActionCreators.tsx");
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: require("../../../../../_runtime/07837_registerAsset.js"), iconColor: require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj);
};