// === Module 14213: showDataPrivacyRateLimitAlert ===

// Module 14213 (showDataPrivacyRateLimitAlert)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import obj132Default from "obj132" /* 4827 */;

const result = obj132.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/showDataPrivacyRateLimitAlert.tsx");

export const showDataPrivacyRateLimitAlert = function showDataPrivacyRateLimitAlert(message) {
  const obj = { title: null, body: null, confirmText: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["43LbVL"]);
  obj[1] = message;
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t.BddRzS);
  obj.show(obj);
};