// === Module 7348: showInvalidUsernameToastNative ===

// Module 7348 (showInvalidUsernameToastNative)
import util from "util" /* 1112 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5725 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export function showInvalidUsernameToast() {
  const obj2 = { text: null, variant: "critical" };
  const intl = util.intl;
  obj2.text = intl.string(util.t["TGg/2k"]);
  ToastActionCreatorsDefault.open("USER_SETTINGS_UPDATE_FAILURE", obj2);
}