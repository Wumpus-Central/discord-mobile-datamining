// discord_app/modules/user_settings/account/native/showInvalidUsernameToastNative.tsx
const result = require("registerAsset").fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let obj = require("../../../toast/native/ToastActionCreators.tsx");
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["TGg/2k"]);
  obj[2] = require("../../../../../_runtime/07837_registerAsset.js");
  obj.open(obj);
};