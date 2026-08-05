// discord_app/modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx
import { registerAsset } from "../../../../../_runtime/07809_registerAsset.js";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { dispatcher } from "../../../toast/native/ToastActionCreators.tsx";
const result = require("Themes").fileFinishedImporting("modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx");

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(avatar) {
  let obj = dispatcher;
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: registerAsset, iconColor: Themes.colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj);
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(avatar) {
  let obj = dispatcher;
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: avatar, icon: registerAsset, iconColor: Themes.colors.ICON_FEEDBACK_CRITICAL, recolorLegacyIcon: true };
  obj.open(obj);
};