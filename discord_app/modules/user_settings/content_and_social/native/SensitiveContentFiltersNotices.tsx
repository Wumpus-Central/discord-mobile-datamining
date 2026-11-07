// discord_app/modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx
import util from "../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import SafetySettingsNoticeDefault from "../../../safety_common/native/SafetySettingsNotice.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const SafetySettingsNoticeType = fn(7554).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx",
);

export function SensitiveContentFiltersTeenNotice() {
  const isAgeNoticeSettingsNoticeEnabled =
    require("AgeNoticeSettingsNoticesLazy").useIsAgeNoticeSettingsNoticeEnabled();
  let obj = require("AgeNoticeSettingsNoticesLazy");
  _require = require("SensitiveMediaGoreRedactionSettingsUtils").useSensitiveContentFilterHelpArticle();
  if (isAgeNoticeSettingsNoticeEnabled) {
    let tmp4Result = jsx(tmp(17025).ContentFiltersTeenNotice, {});
  } else {
    const obj3 = {
      label: tmp(1113).t.EUo0yj,
      labelHook: function handleOpenHelpCenterArticle() {
        const obj = LinkingDefault;
        obj.openURL(HelpdeskUtilsDefault.getArticleURL(closure_0));
      },
      noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE,
    };
    tmp4Result = jsx(SafetySettingsNoticeDefault, {
      label: tmp(1113).t.EUo0yj,
      labelHook: function handleOpenHelpCenterArticle() {
        const obj = LinkingDefault;
        obj.openURL(HelpdeskUtilsDefault.getArticleURL(closure_0));
      },
      noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE,
    });
  }
  return tmp4Result;
}
export function SensitiveContentFiltersAgeVerificationNotice() {
  let obj = {
    label: util.t.OX4ybh,
    labelHook: function handleOpenAgeVerificationModal() {
      const obj = AgeVerificationActionCreatorsDefault;
      const result = obj.showAgeVerificationGetStartedModal({
        entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE,
      });
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE,
  };
  return jsx(SafetySettingsNoticeDefault, {
    label: util.t.OX4ybh,
    labelHook: function handleOpenAgeVerificationModal() {
      const obj = AgeVerificationActionCreatorsDefault;
      const result = obj.showAgeVerificationGetStartedModal({
        entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE,
      });
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE,
  });
}
