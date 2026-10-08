// === Module 6672: showInvalidUsernameToastNative ===

// Module 6672 (showInvalidUsernameToastNative)
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import _modDef5009 from "module_5009" /* 5009 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  const obj2 = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = util.intl;
  obj2.content = intl.string(util.t["TGg/2k"]);
  obj2.icon = _modDef5009;
  ToastActionCreatorsDefault.open(obj2);
};