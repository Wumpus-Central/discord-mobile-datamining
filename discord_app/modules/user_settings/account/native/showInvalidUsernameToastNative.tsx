// === Module 7086: showInvalidUsernameToastNative ===

// Module 7086 (showInvalidUsernameToastNative)
import util from "util" /* 1128 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5661 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  const obj2 = { text: null, variant: "critical" };
  const intl = util.intl;
  obj2.text = intl.string(util.t["TGg/2k"]);
  ToastActionCreatorsDefault.open("USER_SETTINGS_UPDATE_FAILURE", obj2);
};