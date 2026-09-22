// === Module 15141: showDataPrivacyRateLimitAlert ===

// Module 15141 (showDataPrivacyRateLimitAlert)
import util from "util" /* 1115 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5109 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/showDataPrivacyRateLimitAlert.tsx");

export const showDataPrivacyRateLimitAlert = function showDataPrivacyRateLimitAlert(message) {
  const obj2 = { title: null, body: null, confirmText: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["43LbVL"]);
  obj2.body = message;
  const intl2 = util.intl;
  obj2.confirmText = intl2.string(util.t.BddRzS);
  AlertActionCreatorsDefault.show(obj2);
};