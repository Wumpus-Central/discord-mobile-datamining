// === Module 7231: showInvalidUsernameToastNative ===

// Module 7231 (showInvalidUsernameToastNative)
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4454 */;
import _modDef7232 from "module_7232" /* 7232 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  const obj2 = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["TGg/2k"]);
  obj2.icon = _modDef7232;
  ToastActionCreatorsDefault.open(obj2);
};