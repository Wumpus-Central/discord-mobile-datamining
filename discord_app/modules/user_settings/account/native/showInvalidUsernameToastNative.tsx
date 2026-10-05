// discord_app/modules/user_settings/account/native/showInvalidUsernameToastNative.tsx
import intl2 from "../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import AssetRegistryDefault from "../../../../../_runtime/04809_AssetRegistry.js";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let intl;
  const obj = {
    key: "USER_SETTINGS_UPDATE_FAILURE",
    content: intl.string(intl2.t["TGg/2k"]),
    icon: AssetRegistryDefault,
  };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  open(obj);
};
