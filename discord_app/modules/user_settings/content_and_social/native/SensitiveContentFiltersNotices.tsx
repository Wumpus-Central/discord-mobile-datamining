// === Module 16998: SensitiveContentFiltersNotices ===

// Module 16998 (SensitiveContentFiltersNotices)
import util from "util" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2190 */;
import LinkingDefault from "Linking" /* 5846 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8100 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 16856 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const SafetySettingsNoticeType = fn(7632).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx");

export function SensitiveContentFiltersTeenNotice() {
  const isAgeNoticeSettingsNoticeEnabled = require("AgeNoticeSettingsNoticesLazy").useIsAgeNoticeSettingsNoticeEnabled();
  let obj = require("AgeNoticeSettingsNoticesLazy");
  _require = require("SensitiveMediaGoreRedactionSettingsUtils").useSensitiveContentFilterHelpArticle();
  if (isAgeNoticeSettingsNoticeEnabled) {
    let tmp4Result = jsx(tmp(16989).ContentFiltersTeenNotice, {});
  } else {
    const obj3 = {
      label: tmp(1113).t.EUo0yj,
      labelHook: function handleOpenHelpCenterArticle() {
          const obj = LinkingDefault;
          obj.openURL(HelpdeskUtilsDefault.getArticleURL(closure_0));
        },
      noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
    };
    tmp4Result = jsx(SafetySettingsNoticeDefault, {
      label: tmp(1113).t.EUo0yj,
      labelHook: function handleOpenHelpCenterArticle() {
          const obj = LinkingDefault;
          obj.openURL(HelpdeskUtilsDefault.getArticleURL(closure_0));
        },
      noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
    });
  }
  return tmp4Result;
}
export function SensitiveContentFiltersAgeVerificationNotice() {
  let obj = {
    label: util.t.OX4ybh,
    labelHook: function handleOpenAgeVerificationModal() {
      const obj = AgeVerificationActionCreatorsDefault;
      const result = obj.showAgeVerificationGetStartedModal({ entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE });
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  };
  return jsx(SafetySettingsNoticeDefault, {
    label: util.t.OX4ybh,
    labelHook: function handleOpenAgeVerificationModal() {
      const obj = AgeVerificationActionCreatorsDefault;
      const result = obj.showAgeVerificationGetStartedModal({ entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE });
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  });
}