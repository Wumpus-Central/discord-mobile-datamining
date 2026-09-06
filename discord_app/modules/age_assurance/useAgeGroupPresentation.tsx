// discord_app/modules/age_assurance/useAgeGroupPresentation.tsx
import Constants from "../../Constants.tsx";
import util from "../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../utils/HelpdeskUtils.tsx";
import AgeVerificationUtils from "AgeVerificationUtils.tsx";
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const HelpdeskArticles = Constants.HelpdeskArticles;
const AgeGroupState = { ADULT: "adult", TEEN: "teen", UNVERIFIED: "unverified" };
let result = size.fileFinishedImporting("modules/age_assurance/useAgeGroupPresentation.tsx");

export { AgeGroupState };
export const useAgeGroupState = function useAgeGroupState() {
  const obj = AgeVerificationUtils;
  const isAgeVerified = obj.useIsAgeVerified();
  if (obj2.useIsVerifiedTeen()) {
    let TEEN = tmp2.TEEN;
  } else {
    TEEN = isAgeVerified ? tmp2.ADULT : tmp2.UNVERIFIED;
  }
  return TEEN;
};
export const handleOpenAgeGatedContentArticle = function handleOpenAgeGatedContentArticle() {
  const obj = AgeVerificationActionCreatorsDefault;
  obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_LEARN_MORE));
};
export const handleShowAgeVerification = function handleShowAgeVerification() {
  const obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
  const result = obj.showAgeVerificationGetStartedModal(obj);
};
export const useAgeGroupValueLabel = function useAgeGroupValueLabel() {
  const obj = AgeVerificationUtils;
  const isAgeVerified = obj.useIsAgeVerified();
  if (obj2.useIsVerifiedTeen()) {
    let UNVERIFIED = tmp4.TEEN;
    let tmp5 = tmp4;
  } else if (isAgeVerified) {
    UNVERIFIED = tmp4.ADULT;
    tmp5 = tmp4;
  } else {
    UNVERIFIED = tmp4.UNVERIFIED;
    tmp5 = tmp4;
  }
  if (tmp5.ADULT === UNVERIFIED) {
    const intl3 = util.intl;
    return intl3.string(util.t.XxRj7f);
  } else if (tmp5.TEEN === UNVERIFIED) {
    const intl2 = util.intl;
    return intl2.string(util.t.sK0dmH);
  } else if (tmp5.UNVERIFIED === UNVERIFIED) {
    const intl = util.intl;
    return intl.string(util.t.lKDPGA);
  }
  obj2 = AgeVerificationUtils;
};
