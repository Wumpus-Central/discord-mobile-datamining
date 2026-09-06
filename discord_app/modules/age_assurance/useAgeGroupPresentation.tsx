// === Module 14716: useAgeGroupPresentation ===

// Module 14716 (useAgeGroupPresentation)
import Constants from "Constants" /* 1074 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4773 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8411 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8413 */;
import size from "module_2" /* 2 */;

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
    const intl3 = tmp(1114).intl;
    return intl3.string(tmp(1114).t.XxRj7f);
  } else if (tmp5.TEEN === UNVERIFIED) {
    const intl2 = tmp(1114).intl;
    return intl2.string(tmp(1114).t.sK0dmH);
  } else if (tmp5.UNVERIFIED === UNVERIFIED) {
    const intl = tmp(1114).intl;
    return intl.string(tmp(1114).t.lKDPGA);
  }
  obj2 = AgeVerificationUtils;
};