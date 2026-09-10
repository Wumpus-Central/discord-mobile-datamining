// === Module 7043: showInvalidUsernameToastNative ===

// Module 7043 (showInvalidUsernameToastNative)
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4303 */;
import _modDef7044 from "module_7044" /* 7044 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  const obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = util.intl;
  obj.content = intl.string(util.t["TGg/2k"]);
  obj.icon = _modDef7044;
  obj.open(obj);
};