// === Module 14856: showDataPrivacyRateLimitAlert ===

// Module 14856 (showDataPrivacyRateLimitAlert)
import util from "util" /* 1114 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/showDataPrivacyRateLimitAlert.tsx");

export const showDataPrivacyRateLimitAlert = function showDataPrivacyRateLimitAlert(message) {
  const obj = { title: null, body: null, confirmText: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["43LbVL"]);
  obj.body = message;
  const intl2 = util.intl;
  obj.confirmText = intl2.string(util.t.BddRzS);
  obj.show(obj);
};