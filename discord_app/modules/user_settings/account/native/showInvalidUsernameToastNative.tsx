// discord_app/modules/user_settings/account/native/showInvalidUsernameToastNative.tsx
import util from "../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import _modDef6992 from "../../../../../_runtime/metro/06992__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  const obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = util.intl;
  obj.content = intl.string(util.t["TGg/2k"]);
  obj.icon = _modDef6992;
  obj.open(obj);
};
