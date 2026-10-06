// === Module 6495: showInvalidUsernameToastNative ===

// Module 6495 (showInvalidUsernameToastNative)
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import AssetRegistryDefault from "AssetRegistry" /* 4815 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let intl;
  const obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: intl.string(intl2.t["TGg/2k"]), icon: AssetRegistryDefault };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  open(obj);
};