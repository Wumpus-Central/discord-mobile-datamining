// === Module 7064: showInvalidUsernameToastNative ===

// Module 7064 (showInvalidUsernameToastNative)
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4305 */;
import _modDef7065 from "module_7065" /* 7065 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  const obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = util.intl;
  obj.content = intl.string(util.t["TGg/2k"]);
  obj.icon = _modDef7065;
  obj.open(obj);
};