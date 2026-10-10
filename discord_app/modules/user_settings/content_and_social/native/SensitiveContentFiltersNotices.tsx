// discord_app/modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import SafetySettingsNoticeDefault from "../../../safety_common/native/SafetySettingsNotice.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const SafetySettingsNoticeType = fn(7019).SafetySettingsNoticeType;
const jsx = fn(21).jsx;
fn(558);
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SensitiveContentFiltersTeenNotice() {
      let ContentFiltersTeenNotice = sensitiveContentFilterHelpArticle;
      let tmp = dependencyMap;
      const cResult = sensitiveContentFilterHelpArticle(576).c(5);
      let obj = sensitiveContentFilterHelpArticle(576);
      const isTinyBroncoSettingsNoticeEnabled =
        sensitiveContentFilterHelpArticle(15071).useIsTinyBroncoSettingsNoticeEnabled();
      const obj2 = sensitiveContentFilterHelpArticle(15071);
      sensitiveContentFilterHelpArticle =
        sensitiveContentFilterHelpArticle(6999).useSensitiveContentFilterHelpArticle();
      if (cResult[0] !== sensitiveContentFilterHelpArticle) {
        function handleOpenHelpCenterArticle() {
          const obj = LinkingDefault;
          obj.openURL(HelpdeskUtilsDefault.getArticleURL(sensitiveContentFilterHelpArticle));
        }
        cResult[0] = sensitiveContentFilterHelpArticle;
        cResult[1] = handleOpenHelpCenterArticle;
        let tmp5 = handleOpenHelpCenterArticle;
      } else {
        tmp5 = cResult[1];
      }
      if (isTinyBroncoSettingsNoticeEnabled) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          ContentFiltersTeenNotice = ContentFiltersTeenNotice(15071).ContentFiltersTeenNotice;
          tmp = <ContentFiltersTeenNotice />;
          cResult[2] = tmp;
        }
      } else {
        if (cResult[3] !== tmp5) {
          const obj4 = {
            label: ContentFiltersTeenNotice(1126).t.EUo0yj,
            labelHook: tmp5,
            noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE,
          };
          const tmp11 = jsx(SafetySettingsNoticeDefault, {
            label: ContentFiltersTeenNotice(1126).t.EUo0yj,
            labelHook: tmp5,
            noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE,
          });
          cResult[3] = tmp5;
          cResult[4] = tmp11;
          let tmp6 = tmp11;
        } else {
          tmp6 = cResult[4];
        }
        return tmp6;
      }
      const obj3 = sensitiveContentFilterHelpArticle(6999);
    }
  : function SensitiveContentFiltersTeenNotice() {
      const isTinyBroncoSettingsNoticeEnabled =
        require("TinyBroncoSettingsNoticesLazy").useIsTinyBroncoSettingsNoticeEnabled();
      let obj = require("TinyBroncoSettingsNoticesLazy");
      _require = require("SensitiveMediaGoreRedactionSettingsUtils").useSensitiveContentFilterHelpArticle();
      if (isTinyBroncoSettingsNoticeEnabled) {
        let tmp4Result = jsx(tmp(15071).ContentFiltersTeenNotice, {});
      } else {
        const obj3 = {
          label: tmp(1126).t.EUo0yj,
          labelHook: function handleOpenHelpCenterArticle() {
            const obj = LinkingDefault;
            obj.openURL(HelpdeskUtilsDefault.getArticleURL(closure_0));
          },
          noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE,
        };
        tmp4Result = jsx(SafetySettingsNoticeDefault, {
          label: tmp(1126).t.EUo0yj,
          labelHook: function handleOpenHelpCenterArticle() {
            const obj = LinkingDefault;
            obj.openURL(HelpdeskUtilsDefault.getArticleURL(closure_0));
          },
          noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE,
        });
      }
      return tmp4Result;
    };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/content_and_social/native/SensitiveContentFiltersNotices.tsx",
);

export const SensitiveContentFiltersTeenNotice = tmp3;
export const SensitiveContentFiltersAgeVerificationNotice = ReactCompilerGating.isReactCompilerEnabled()
  ? function SensitiveContentFiltersAgeVerificationNotice() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          label: util.t.OX4ybh,
          labelHook: function handleOpenAgeVerificationModal() {
            const obj = AgeVerificationActionCreatorsDefault;
            const result = obj.showAgeVerificationGetStartedModal({
              entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint
                .CONTENT_AND_SOCIAL_NOTICE,
            });
          },
          noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE,
        };
        const tmp9 = jsx(SafetySettingsNoticeDefault, {
          label: util.t.OX4ybh,
          labelHook: function handleOpenAgeVerificationModal() {
            const obj = AgeVerificationActionCreatorsDefault;
            const result = obj.showAgeVerificationGetStartedModal({
              entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint
                .CONTENT_AND_SOCIAL_NOTICE,
            });
          },
          noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE,
        });
        cResult[0] = tmp9;
        let first = tmp9;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function SensitiveContentFiltersAgeVerificationNotice() {
      let obj = {
        label: util.t.OX4ybh,
        labelHook: function handleOpenAgeVerificationModal() {
          const obj = AgeVerificationActionCreatorsDefault;
          const result = obj.showAgeVerificationGetStartedModal({
            entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint
              .CONTENT_AND_SOCIAL_NOTICE,
          });
        },
        noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE,
      };
      return jsx(SafetySettingsNoticeDefault, {
        label: util.t.OX4ybh,
        labelHook: function handleOpenAgeVerificationModal() {
          const obj = AgeVerificationActionCreatorsDefault;
          const result = obj.showAgeVerificationGetStartedModal({
            entryPoint: require("AgeVerificationAnalyticsUtils").AgeVerificationModalEntryPoint
              .CONTENT_AND_SOCIAL_NOTICE,
          });
        },
        noticeType: SafetySettingsNoticeType.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE,
      });
    };
