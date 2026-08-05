// discord_app/modules/user_settings/privacy_and_safety/native/showDataPrivacyRateLimitAlert.tsx
import { set } from "../../../../actions/AlertActionCreators.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
const result = require("set").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/showDataPrivacyRateLimitAlert.tsx");

export const showDataPrivacyRateLimitAlert = function showDataPrivacyRateLimitAlert(message) {
  let obj = set;
  obj = { title: null, body: null, confirmText: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t["43LbVL"]);
  obj[1] = message;
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[2] = intl2.string(getSystemLocale /* getSystemLocale */.t.BddRzS);
  obj.show(obj);
};