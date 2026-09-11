// discord_app/modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import _modDef7065 from "../../../../../_runtime/metro/07065__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/user_settings/profiles/native/showInvalidProfileUpdateToastNative.tsx",
);

export const showGenericProfileUpdateFailureToast = function showGenericProfileUpdateFailureToast(avatar) {
  const obj = {
    key: "USER_SETTINGS_UPDATE_FAILURE",
    content: avatar,
    icon: _modDef7065,
    iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL,
    recolorLegacyIcon: true,
  };
  obj.open(obj);
};
export const showGenericGuildProfileUpdateFailureToast = function showGenericGuildProfileUpdateFailureToast(avatar) {
  const obj = {
    key: "USER_SETTINGS_UPDATE_FAILURE",
    content: avatar,
    icon: _modDef7065,
    iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL,
    recolorLegacyIcon: true,
  };
  obj.open(obj);
};
