// === Module 15090: SensitiveContentFiltersNotices ===

// Module 15090 (SensitiveContentFiltersNotices)
import util from "util" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2108 */;
import LinkingDefault from "Linking" /* 4451 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8681 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 14956 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const SafetySettingsNoticeType = fn(8669).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx");

export const SensitiveContentFiltersTeenNotice = function SensitiveContentFiltersTeenNotice() {
  const isTinyBroncoSettingsNoticeEnabled = require("TinyBroncoSettingsNoticesLazy").useIsTinyBroncoSettingsNoticeEnabled();
  let obj = require("TinyBroncoSettingsNoticesLazy");
  _require = require("SensitiveMediaGoreRedactionSettingsUtils").useSensitiveContentFilterHelpArticle();
  if (isTinyBroncoSettingsNoticeEnabled) {
    let tmp4Result = jsx(tmp(15088).ContentFiltersTeenNotice, {});
  } else {
    const obj3 = {
      label: tmp(1115).t.EUo0yj,
      labelHook() {
          const obj = LinkingDefault;
          obj.openURL(HelpdeskUtilsDefault.getArticleURL(closure_0));
        },
      noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
    };
    tmp4Result = jsx(SafetySettingsNoticeDefault, {
      label: tmp(1115).t.EUo0yj,
      labelHook() {
          const obj = LinkingDefault;
          obj.openURL(HelpdeskUtilsDefault.getArticleURL(closure_0));
        },
      noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
    });
  }
  return tmp4Result;
};
export const SensitiveContentFiltersAgeVerificationNotice = function SensitiveContentFiltersAgeVerificationNotice() {
  let obj = {
    label: util.t.OX4ybh,
    labelHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      const result = obj.showAgeVerificationGetStartedModal({ entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE });
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  };
  return jsx(SafetySettingsNoticeDefault, {
    label: util.t.OX4ybh,
    labelHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      const result = obj.showAgeVerificationGetStartedModal({ entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE });
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  });
};