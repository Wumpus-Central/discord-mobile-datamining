// === Module 6608: showInvalidUsernameToastNative ===

// Module 6608 (showInvalidUsernameToastNative)
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4558 */;
import _modDef6609 from "module_6609" /* 6609 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  const obj2 = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["TGg/2k"]);
  obj2.icon = _modDef6609;
  ToastActionCreatorsDefault.open(obj2);
};