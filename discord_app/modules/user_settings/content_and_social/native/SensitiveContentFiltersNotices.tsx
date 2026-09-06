// === Module 14817: SensitiveContentFiltersNotices ===

// Module 14817 (SensitiveContentFiltersNotices)
import util from "util" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import LinkingDefault from "Linking" /* 4255 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8411 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 14687 */;
import noop from "module_19" /* 19 */;

require = fn;
const SafetySettingsNoticeType = fn(8399).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx");

export const SensitiveContentFiltersTeenNotice = function SensitiveContentFiltersTeenNotice() {
  let obj = require("SensitiveMediaGoreRedactionSettingsUtils");
  _require = obj.useSensitiveContentFilterHelpArticle();
  obj = {
    label: require("util").t.EUo0yj,
    labelHook() {
      const obj = LinkingDefault;
      obj.openURL(HelpdeskUtilsDefault.getArticleURL(closure_0));
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
  };
  return jsx(SafetySettingsNoticeDefault, {
    label: require("util").t.EUo0yj,
    labelHook() {
      const obj = LinkingDefault;
      obj.openURL(HelpdeskUtilsDefault.getArticleURL(closure_0));
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
  });
};
export const SensitiveContentFiltersAgeVerificationNotice = function SensitiveContentFiltersAgeVerificationNotice() {
  let obj = {
    label: util.t.OX4ybh,
    labelHook() {
      const obj = { entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
      const result = obj.showAgeVerificationGetStartedModal(obj);
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  };
  return jsx(SafetySettingsNoticeDefault, {
    label: util.t.OX4ybh,
    labelHook() {
      const obj = { entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
      const result = obj.showAgeVerificationGetStartedModal(obj);
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  });
};