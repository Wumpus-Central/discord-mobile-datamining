// discord_app/modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import AssetRegistryDefault from "../../../../../_runtime/04815_AssetRegistry.js";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx",
);

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(avatar) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = {
    key: "USER_SETTINGS_UPDATE_FAILURE",
    content: avatar,
    icon: AssetRegistryDefault,
    iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL,
    recolorLegacyIcon: true,
  };
  obj.open(obj2);
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(avatar) {
  const obj = ToastActionCreatorsDefault;
  const obj2 = {
    key: "USER_SETTINGS_UPDATE_FAILURE",
    content: avatar,
    icon: AssetRegistryDefault,
    iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL,
    recolorLegacyIcon: true,
  };
  obj.open(obj2);
};
