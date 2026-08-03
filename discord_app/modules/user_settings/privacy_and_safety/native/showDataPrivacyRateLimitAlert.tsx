// === Module 13973: showDataPrivacyRateLimitAlert ===

// Module 13973 (showDataPrivacyRateLimitAlert)
const result = require("set").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/showDataPrivacyRateLimitAlert.tsx");

export const showDataPrivacyRateLimitAlert = function showDataPrivacyRateLimitAlert(message) {
  let obj = importDefault(4594);
  obj = { title: null, body: null, confirmText: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["43LbVL"]);
  obj[1] = message;
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl2.string(require(1236) /* getSystemLocale */.t.BddRzS);
  obj.show(obj);
};