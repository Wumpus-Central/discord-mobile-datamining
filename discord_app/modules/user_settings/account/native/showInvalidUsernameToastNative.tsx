// discord_app/modules/user_settings/account/native/showInvalidUsernameToastNative.tsx
import { registerAsset } from "../../../../../_runtime/08093_registerAsset.js";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { dispatcher } from "../../../toast/native/ToastActionCreators.tsx";
const result = require("registerAsset").fileFinishedImporting("modules/user_settings/account/native/showInvalidUsernameToastNative.tsx");

export const showInvalidUsernameToast = function showInvalidUsernameToast() {
  let obj = dispatcher;
  obj = { key: "USER_SETTINGS_UPDATE_FAILURE", content: null, icon: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["TGg/2k"]);
  obj[2] = registerAsset;
  obj.open(obj);
};