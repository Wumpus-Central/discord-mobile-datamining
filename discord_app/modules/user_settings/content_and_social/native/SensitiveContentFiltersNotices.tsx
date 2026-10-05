// discord_app/modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl from "../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import Constants from "../../../safety_common/Constants.tsx";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import SafetySettingsNoticeDefault from "../../../safety_common/native/SafetySettingsNotice.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const SafetySettingsNoticeType = Constants.SafetySettingsNoticeType;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let sensitiveContentFilterHelpArticle;
      let tmp6;
      let tmp7;
      const tmp = sensitiveContentFilterHelpArticle;
      let obj = sensitiveContentFilterHelpArticle(576);
      const cResult = obj.c(5);
      const obj2 = sensitiveContentFilterHelpArticle(14623);
      const isTinyBroncoSettingsNoticeEnabled = obj2.useIsTinyBroncoSettingsNoticeEnabled();
      const obj3 = sensitiveContentFilterHelpArticle(6804);
      sensitiveContentFilterHelpArticle = obj3.useSensitiveContentFilterHelpArticle();
      if (cResult[0] !== sensitiveContentFilterHelpArticle) {
        const fn = function o() {
          const openURL = LinkingDefault.openURL;
          LinkingDefault;
          const obj = HelpdeskUtilsDefault;
          openURL(obj.getArticleURL(sensitiveContentFilterHelpArticle));
        };
        cResult[0] = sensitiveContentFilterHelpArticle;
        cResult[1] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      if (isTinyBroncoSettingsNoticeEnabled) {
        let tmp14;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp16 = jsx(tmp(14623).ContentFiltersTeenNotice, {});
          cResult[2] = tmp16;
          tmp14 = tmp16;
        } else {
          tmp14 = cResult[2];
        }
        tmp7 = tmp14;
      } else if (cResult[3] !== tmp6) {
        SafetySettingsNoticeDefault;
        const tmp12 = (
          <tmp10
            label={tmp(1126).t.EUo0yj}
            labelHook={tmp6}
            noticeType={SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE}
          />
        );
        cResult[3] = tmp6;
        cResult[4] = tmp12;
        tmp7 = tmp12;
      } else {
        tmp7 = cResult[4];
      }
      return tmp7;
    }
  : () => {
      let closure_0;
      let tmp4Result;
      const tmp = _require;
      let obj = require("TinyBroncoSettingsNoticesLazy");
      const isTinyBroncoSettingsNoticeEnabled = obj.useIsTinyBroncoSettingsNoticeEnabled();
      const obj2 = require("SensitiveMediaGoreRedactionSettingsUtils");
      _require = obj2.useSensitiveContentFilterHelpArticle();
      if (isTinyBroncoSettingsNoticeEnabled) {
        tmp4Result = jsx(tmp(14623).ContentFiltersTeenNotice, {});
      } else {
        SafetySettingsNoticeDefault;
        tmp4Result = (
          <tmp6
            label={tmp(1126).t.EUo0yj}
            labelHook={function labelHook() {
              const openURL = LinkingDefault.openURL;
              LinkingDefault;
              const obj = HelpdeskUtilsDefault;
              openURL(obj.getArticleURL(closure_0));
            }}
            noticeType={SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE}
          />
        );
      }
      return tmp4Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        SafetySettingsNoticeDefault;
        const tmp9 = (
          <tmp7
            label={intl.t.OX4ybh}
            labelHook={function labelHook() {
              const obj = AgeVerificationActionCreatorsDefault;
              const obj2 = {
                entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint
                  .CONTENT_AND_SOCIAL_NOTICE,
              };
              const result = obj.showAgeVerificationGetStartedModal(obj2);
            }}
            noticeType={SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE}
          />
        );
        cResult[0] = tmp9;
        first = tmp9;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      SafetySettingsNoticeDefault;
      return (
        <tmp
          label={intl.t.OX4ybh}
          labelHook={function labelHook() {
            const obj = AgeVerificationActionCreatorsDefault;
            const obj2 = {
              entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint
                .CONTENT_AND_SOCIAL_NOTICE,
            };
            const result = obj.showAgeVerificationGetStartedModal(obj2);
          }}
          noticeType={SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE}
        />
      );
    };
let result = size.fileFinishedImporting(
  "modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx",
);

export const SensitiveContentFiltersTeenNotice = tmp3;
export const SensitiveContentFiltersAgeVerificationNotice = tmp4;
