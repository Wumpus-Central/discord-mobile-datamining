// discord_app/modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import combinedDefault from "../../../../utils/HelpdeskUtils.tsx";
import _modDef4090 from "../../../../lib/native/Linking.tsx";
import SafetySettingsNoticeDefault from "../../../safety_common/native/SafetySettingsNotice.tsx";
import { SafetySettingsNoticeType } from "../../../safety_common/Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import { resolveGoreSettingWithDefaults } from "../../../explicit_media_redaction/SensitiveMediaGoreRedactionSettingsUtils.tsx";

require = fn;
noopAll;
let result = require("obj132").fileFinishedImporting("modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx");

export const SensitiveContentFiltersTeenNotice = function SensitiveContentFiltersTeenNotice() {
  let obj = resolveGoreSettingWithDefaults;
  _require = obj.useSensitiveContentFilterHelpArticle();
  obj = {
    label: require("../../../../intl/index.native.tsx").t.EUo0yj,
    labelHook() {
      const obj = _modDef4090;
      obj.openURL(combinedDefault.getArticleURL(closure_0));
    },
    noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE
  };
  return jsx(SafetySettingsNoticeDefault, {
    label: require("../../../../intl/index.native.tsx").t.EUo0yj,
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