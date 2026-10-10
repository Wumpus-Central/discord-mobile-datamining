// === Module 6680: showInvalidUsernameToastNative ===

// Module 6680 (showInvalidUsernameToastNative)
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  const obj2 = { text: null, variant: "critical" };
  const intl = util.intl;
  obj2.text = intl.string(util.t["TGg/2k"]);
  ToastActionCreatorsDefault.open("USER_SETTINGS_UPDATE_FAILURE", obj2);
};