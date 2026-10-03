// === Module 6488: showInvalidUsernameToastNative ===

// Module 6488 (showInvalidUsernameToastNative)
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import _modDef4809 from "module_4809" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  const obj2 = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["TGg/2k"]);
  obj2.icon = _modDef4809;
  ToastActionCreatorsDefault.open(obj2);
};