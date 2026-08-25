// discord_app/modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import SafetySettingsNoticeDefault from "../../../safety_common/native/SafetySettingsNotice.tsx";
import { SafetySettingsNoticeType } from "../../../safety_common/Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import { resolveGoreSettingWithDefaults } from "../../../explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx";

require = arg1;
noopAll;
let result = require("set").fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx");

export const SensitiveContentFiltersTeenNotice = function SensitiveContentFiltersTeenNotice() {
  let obj = resolveGoreSettingWithDefaults;
  _require = obj.useSensitiveContentFilterHelpArticle();
  obj = {
    label: require("../../../../intl/index.native.tsx").t.EUo0yj,
    labelHook() {
      const obj = closure_1_1(closure_1_2[6]);
      obj.openURL(closure_1_1(closure_1_2[7]).getArticleURL(closure_0));
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
  };
  return jsx(SafetySettingsNoticeDefault, {
    label: require("../../../../intl/index.native.tsx").t.EUo0yj,
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
      let obj = callback2(7942);
      obj = { entryPoint: callback(7944).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
      const result = obj.showAgeVerificationGetStartedModal(obj);
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  };
  return jsx(SafetySettingsNoticeDefault, {
    label: getSystemLocale.t.OX4ybh,
    labelHook() {
      let obj = callback2(7942);
      obj = { entryPoint: callback(7944).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
      const result = obj.showAgeVerificationGetStartedModal(obj);
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE
  });
};