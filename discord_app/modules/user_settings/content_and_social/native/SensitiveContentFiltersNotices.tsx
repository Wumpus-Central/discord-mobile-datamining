// discord_app/modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx
import util from "../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import SafetySettingsNoticeDefault from "../../../safety_common/native/SafetySettingsNotice.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const SafetySettingsNoticeType = fn(8399).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx",
);

export const SensitiveContentFiltersTeenNotice = function SensitiveContentFiltersTeenNotice() {
  let obj = require("SensitiveMediaGoreRedactionSettingsUtils");
  _require = obj.useSensitiveContentFilterHelpArticle();
  obj = {
    label: require("util").t.EUo0yj,
    labelHook() {
      const obj = LinkingDefault;
      obj.openURL(HelpdeskUtilsDefault.getArticleURL(closure_0));
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE,
  };
  return jsx(SafetySettingsNoticeDefault, {
    label: require("util").t.EUo0yj,
    labelHook() {
      const obj = LinkingDefault;
      obj.openURL(HelpdeskUtilsDefault.getArticleURL(closure_0));
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE,
  });
};
export const SensitiveContentFiltersAgeVerificationNotice = function SensitiveContentFiltersAgeVerificationNotice() {
  let obj = {
    label: util.t.OX4ybh,
    labelHook() {
      const obj = {
        entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE,
      };
      const result = obj.showAgeVerificationGetStartedModal(obj);
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE,
  };
  return jsx(SafetySettingsNoticeDefault, {
    label: util.t.OX4ybh,
    labelHook() {
      const obj = {
        entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE,
      };
      const result = obj.showAgeVerificationGetStartedModal(obj);
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE,
  });
};
