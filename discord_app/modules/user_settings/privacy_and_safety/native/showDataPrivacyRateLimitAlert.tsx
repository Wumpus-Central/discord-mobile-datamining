// === Module 16652: showDataPrivacyRateLimitAlert ===

// Module 16652 (showDataPrivacyRateLimitAlert)
import util from "util" /* 1125 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5946 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/showDataPrivacyRateLimitAlert.tsx");

export function showDataPrivacyRateLimitAlert(message) {
  const obj2 = { title: null, body: null, confirmText: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["43LbVL"]);
  obj2.body = message;
  const intl2 = util.intl;
  obj2.confirmText = intl2.string(util.t.BddRzS);
  AlertActionCreatorsDefault.show(obj2);
}