// === Module 14395: showDataPrivacyRateLimitAlert ===

// Module 14395 (showDataPrivacyRateLimitAlert)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import setDefault from "set" /* 4822 */;

const result = set.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/showDataPrivacyRateLimitAlert.tsx");

export const showDataPrivacyRateLimitAlert = function showDataPrivacyRateLimitAlert(message) {
  let obj = setDefault;
  obj = { title: null, body: null, confirmText: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["43LbVL"]);
  obj[1] = message;
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t.BddRzS);
  obj.show(obj);
};