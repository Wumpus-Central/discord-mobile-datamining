// === Module 8622: showInvalidUsernameToast ===

// Module 8622 (showInvalidUsernameToast)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import dispatcherDefault from "dispatcher" /* 4094 */;
import registerAssetDefault from "registerAsset" /* 8143 */;

const result = obj132.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  const obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["TGg/2k"]);
  obj[2] = registerAssetDefault;
  obj.open(obj);
};