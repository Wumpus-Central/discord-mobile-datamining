// === Module 14174: SensitiveContentFiltersTeenNotice ===

// Module 14174 (SensitiveContentFiltersTeenNotice)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1993 */;
import _modDef4090 from "module_4090" /* 4090 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 14104 */;
import { SafetySettingsNoticeType } from "SafetyToastType" /* 5430 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
let result = require("obj132").fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx");

export const SensitiveContentFiltersTeenNotice = function SensitiveContentFiltersTeenNotice() {
  let obj = _require(5025);
  _require = obj.useSensitiveContentFilterHelpArticle();
  obj = {
    label: _require(1236).t.EUo0yj,
    labelHook() {
      const obj = _modDef4090;
      obj.openURL(combinedDefault.getArticleURL(closure_0));
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
  };
  return jsx(SafetySettingsNoticeDefault, {
    label: _require(1236).t.EUo0yj,
    labelHook() {
      const obj = _modDef4090;
      obj.openURL(combinedDefault.getArticleURL(closure_0));
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
  });
};
export const SensitiveContentFiltersAgeVerificationNotice = function SensitiveContentFiltersAgeVerificationNotice() {
  return jsx(SafetySettingsNoticeDefault, {
    label: getSystemLocale.t.OX4ybh,
    labelHook() {
      callback2(5428);
      const obj = { entryPoint: callback(5254).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
      const result = obj.showAgeVerificationGetStartedModal(obj);
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  });
};