// discord_app/modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx
import "noop";
import { SafetySettingsNoticeType } from "SafetyToastType";
import { jsx } from "jsxProd";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { resolveGoreSettingWithDefaults } from "../../../explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx";
import { SafetySettingsNotice } from "../../../safety_common/native/SafetySettingsNotice.tsx";

const require = arg1;
let result = require("jsxProd").fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx");

export const SensitiveContentFiltersTeenNotice = function SensitiveContentFiltersTeenNotice() {
  let obj = _resolveGoreSettingWithDefaults;
  _require = obj.useSensitiveContentFilterHelpArticle();
  obj = { label: null, labelHook: null, noticeType: null };
  obj[0] = _getSystemLocale.t.EUo0yj;
  obj[1] = function labelHook() {
    const obj = outer1_1(outer1_2[6]);
    obj.openURL(outer1_1(outer1_2[7]).getArticleURL(closure_0));
  };
  obj[2] = SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE;
  return jsx(SafetySettingsNotice, { label: null, labelHook: null, noticeType: null });
};
export const SensitiveContentFiltersAgeVerificationNotice = function SensitiveContentFiltersAgeVerificationNotice() {
  let obj = { label: null, labelHook: null, noticeType: null };
  obj[0] = getSystemLocale.t.OX4ybh;
  obj[1] = function labelHook() {
    let obj = callback2(5428);
    obj = { entryPoint: callback(5254).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  };
  obj[2] = SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE;
  return jsx(SafetySettingsNotice, { label: null, labelHook: null, noticeType: null });
};