// discord_app/modules/age_assurance/useAgeGroupPresentation.tsx
import react from "../../../_runtime/00576_react.js";
import Constants from "../../Constants.tsx";
import intl4 from "../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../utils/HelpdeskUtils.tsx";
import AgeVerificationUtils from "AgeVerificationUtils.tsx";
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const HelpdeskArticles = Constants.HelpdeskArticles;
const AgeGroupState = { ADULT: "adult", TEEN: "teen", UNVERIFIED: "unverified" };
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let TEEN;
      const obj = AgeVerificationUtils;
      const isAgeVerified = obj.useIsAgeVerified();
      const obj2 = AgeVerificationUtils;
      if (obj2.useIsVerifiedTeen()) {
        TEEN = tmp2.TEEN;
      } else {
        TEEN = isAgeVerified ? tmp2.ADULT : tmp2.UNVERIFIED;
      }
      return TEEN;
    }
  : () => {
      let TEEN;
      const obj = AgeVerificationUtils;
      const isAgeVerified = obj.useIsAgeVerified();
      const obj2 = AgeVerificationUtils;
      if (obj2.useIsVerifiedTeen()) {
        TEEN = tmp2.TEEN;
      } else {
        TEEN = isAgeVerified ? tmp2.ADULT : tmp2.UNVERIFIED;
      }
      return TEEN;
    };
let closure_5 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = react;
      const cResult = obj.c(3);
      const tmp4 = closure_5();
      if (obj.ADULT === tmp4) {
        let first;
        const _Symbol3 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = intl4.intl;
          const stringResult = intl3.string(intl4.t.XxRj7f);
          cResult[0] = stringResult;
          first = stringResult;
        } else {
          first = cResult[0];
        }
        return first;
      } else if (obj.TEEN === tmp4) {
        let tmp10;
        const _Symbol2 = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = intl4.intl;
          const stringResult1 = intl2.string(intl4.t.sK0dmH);
          cResult[1] = stringResult1;
          tmp10 = stringResult1;
        } else {
          tmp10 = cResult[1];
        }
        return tmp10;
      } else if (obj.UNVERIFIED === tmp4) {
        let tmp7;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl4.intl;
          const stringResult2 = intl.string(intl4.t.lKDPGA);
          cResult[2] = stringResult2;
          tmp7 = stringResult2;
        } else {
          tmp7 = cResult[2];
        }
        return tmp7;
      }
    }
  : () => {
      const tmp = closure_5();
      if (obj.ADULT === tmp) {
        const intl3 = intl4.intl;
        return intl3.string(intl4.t.XxRj7f);
      } else if (obj.TEEN === tmp) {
        const intl2 = intl4.intl;
        return intl2.string(intl4.t.sK0dmH);
      } else if (obj.UNVERIFIED === tmp) {
        const intl = intl4.intl;
        return intl.string(intl4.t.lKDPGA);
      }
    };
let result = size.fileFinishedImporting("modules/age_assurance/useAgeGroupPresentation.tsx");

export { AgeGroupState };
export const useAgeGroupState = tmp2;
export const handleOpenAgeGatedContentArticle = function handleOpenAgeGatedContentArticle() {
  const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
  AgeVerificationActionCreatorsDefault;
  const obj = HelpdeskUtilsDefault;
  openUrl(obj.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
};
export const handleShowAgeVerification = function handleShowAgeVerification() {
  const obj = AgeVerificationActionCreatorsDefault;
  const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
  const result = obj.showAgeVerificationGetStartedModal(obj2);
};
export const useAgeGroupValueLabel = tmp3;
