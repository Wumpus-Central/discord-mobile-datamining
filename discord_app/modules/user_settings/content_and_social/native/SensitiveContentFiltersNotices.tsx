// === Module 14242: SensitiveContentFiltersTeenNotice ===

// Module 14242 (SensitiveContentFiltersTeenNotice)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 14172 */;
import { SafetySettingsNoticeType } from "SafetyToastType" /* 5435 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
let result = require("set").fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx");

export const SensitiveContentFiltersTeenNotice = function SensitiveContentFiltersTeenNotice() {
  let obj = _require(5030);
  _require = obj.useSensitiveContentFilterHelpArticle();
  obj = {
    label: _require(1236).t.EUo0yj,
    labelHook() {
      const obj = closure_1_1(closure_1_2[6]);
      obj.openURL(closure_1_1(closure_1_2[7]).getArticleURL(closure_0));
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
  };
  return jsx(SafetySettingsNoticeDefault, {
    label: _require(1236).t.EUo0yj,
    labelHook() {
      const obj = closure_1_1(closure_1_2[6]);
      obj.openURL(closure_1_1(closure_1_2[7]).getArticleURL(closure_0));
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
  });
};
export const SensitiveContentFiltersAgeVerificationNotice = function SensitiveContentFiltersAgeVerificationNotice() {
  let obj = {
    label: getSystemLocale.t.OX4ybh,
    labelHook() {
      let obj = callback2(5433);
      obj = { entryPoint: callback(5259).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
      const result = obj.showAgeVerificationGetStartedModal(obj);
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  };
  return jsx(SafetySettingsNoticeDefault, {
    label: getSystemLocale.t.OX4ybh,
    labelHook() {
      let obj = callback2(5433);
      obj = { entryPoint: callback(5259).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
      const result = obj.showAgeVerificationGetStartedModal(obj);
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  });
};