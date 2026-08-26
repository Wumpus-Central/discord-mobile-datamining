// === Module 10656: getApplicationDetailsText ===

// Module 10656 (getApplicationDetailsText)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import isAgeRestrictedContentClassification from "isAgeRestrictedContentClassification" /* 5005 */;
import useIsSocialLayerParentApplication from "useIsSocialLayerParentApplication" /* 10657 */;

const MarketingURLs = ME.MarketingURLs;
let result = set.fileFinishedImporting("modules/oauth2/Utils.tsx");

export const getApplicationDetailsText = function getApplicationDetailsText(application) {
  let obj = useIsSocialLayerParentApplication;
  const isSocialLayerParentApplication = obj.getIsSocialLayerParentApplication(application);
  if (null != application.privacy_policy_url) {
    if (null != application.terms_of_service_url) {
      const t4 = tmp(1236).t;
      const intl4 = tmp(1236).intl;
      obj = { application: null, privacyPolicyURL: null, termsOfServiceURL: null, discordPrivacyPolicyURL: null };
      ({ name: obj5[0], privacy_policy_url: obj5[1], terms_of_service_url: obj5[2] } = application);
      obj[3] = MarketingURLs.PRIVACY;
      return intl4.format(isSocialLayerParentApplication ? t4.yVfotv : t4.rxlyKL, obj);
    }
  }
  if (null != application.privacy_policy_url) {
    const t3 = tmp(1236).t;
    const intl3 = tmp(1236).intl;
    obj = { application: null, privacyPolicyURL: null, discordPrivacyPolicyURL: null };
    ({ name: obj4[0], privacy_policy_url: obj4[1] } = application);
    obj[2] = MarketingURLs.PRIVACY;
    return intl3.format(isSocialLayerParentApplication ? t3.pYVSah : t3.TBvmM2, obj);
  } else if (null != application.terms_of_service_url) {
    const t2 = tmp(1236).t;
    const intl2 = tmp(1236).intl;
    obj1 = { application: null, termsOfServiceURL: null, discordPrivacyPolicyURL: null };
    ({ name: obj3[0], terms_of_service_url: obj3[1] } = application);
    obj1[2] = MarketingURLs.PRIVACY;
    return intl2.format(isSocialLayerParentApplication ? t2.nBLOp5 : t2["q0T/Q1"], obj1);
  } else {
    const t = tmp(1236).t;
    const intl = tmp(1236).intl;
    const obj2 = { application: null, discordPrivacyPolicyURL: null };
    obj2[0] = application.name;
    obj2[1] = MarketingURLs.PRIVACY;
    return intl.format(isSocialLayerParentApplication ? t["8LemYv"] : t["3Ywek3"], obj2);
  }
};
export const isContentClassificationRestricted = function isContentClassificationRestricted(content_classification, closure_32) {
  let result = null != content_classification;
  if (result) {
    result = isAgeRestrictedContentClassification.isAgeRestrictedContentClassification(content_classification);
    const obj = isAgeRestrictedContentClassification;
  }
  if (result) {
    result = false === closure_32;
  }
  return result;
};