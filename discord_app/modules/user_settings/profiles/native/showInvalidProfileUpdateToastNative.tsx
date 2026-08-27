// discord_app/modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx
import set from "../../../../../_runtime/00002_set.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import dispatcherDefault from "../../../toast/native/ToastActionCreators.tsx";
import registerAssetDefault from "../../../../../_runtime/07697_registerAsset.js";

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