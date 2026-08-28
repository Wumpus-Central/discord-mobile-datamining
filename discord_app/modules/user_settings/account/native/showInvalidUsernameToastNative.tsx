// === Module 7710: showInvalidUsernameToast ===

// Module 7710 (showInvalidUsernameToast)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import dispatcherDefault from "dispatcher" /* 4163 */;
import registerAssetDefault from "registerAsset" /* 7711 */;

const result = set.fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let obj = dispatcherDefault;
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["TGg/2k"]);
  obj[2] = registerAssetDefault;
  obj.open(obj);
};