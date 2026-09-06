// === Module 6991: showInvalidUsernameToastNative ===

// Module 6991 (showInvalidUsernameToastNative)
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import _modDef6992 from "module_6992" /* 6992 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  const obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = util.intl;
  obj.content = intl.string(util.t["TGg/2k"]);
  obj.icon = _modDef6992;
  obj.open(obj);
};