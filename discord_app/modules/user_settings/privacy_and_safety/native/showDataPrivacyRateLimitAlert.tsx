// discord_app/modules/user_settings/privacy_and_safety/native/showDataPrivacyRateLimitAlert.tsx
const result = require("set").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/showDataPrivacyRateLimitAlert.tsx");

export const showDataPrivacyRateLimitAlert = function showDataPrivacyRateLimitAlert(message) {
  let obj = require("../../../../actions/AlertActionCreators.tsx");
  obj = { title: null, body: null, confirmText: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["43LbVL"]);
  obj[1] = message;
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[2] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.BddRzS);
  obj.show(obj);
};