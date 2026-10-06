// === Module 8756: Utils ===

// Module 8756 (Utils)
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import utils from "utils" /* 5904 */;
import useIsSocialLayerParentApplication from "useIsSocialLayerParentApplication" /* 8757 */;
import size from "module_2" /* 2 */;

const MarketingURLs = Constants.MarketingURLs;
let result = size.fileFinishedImporting("modules/oauth2/Utils.tsx");

export const getApplicationDetailsText = function getApplicationDetailsText(application) {
  const obj = useIsSocialLayerParentApplication;
  const isSocialLayerParentApplication = obj.getIsSocialLayerParentApplication(application);
  if (null != application.privacy_policy_url) {
    if (null != application.terms_of_service_url) {
      const t4 = intl5.t;
      const tmp10 = isSocialLayerParentApplication ? t4.yVfotv : t4.rxlyKL;
      const intl4 = intl5.intl;
      const obj2 = { application: null, privacyPolicyURL: null, termsOfServiceURL: null, discordPrivacyPolicyURL: MarketingURLs.PRIVACY };
      ({ name: obj5.application, privacy_policy_url: obj5.privacyPolicyURL, terms_of_service_url: obj5.termsOfServiceURL } = application);
      return intl4.format(tmp10, obj2);
    }
  }
  if (null != application.privacy_policy_url) {
    const t3 = intl5.t;
    const tmp8 = isSocialLayerParentApplication ? t3.pYVSah : t3.TBvmM2;
    const intl3 = intl5.intl;
    const obj9 = { application: null, privacyPolicyURL: null, discordPrivacyPolicyURL: MarketingURLs.PRIVACY };
    ({ name: obj4.application, privacy_policy_url: obj4.privacyPolicyURL } = application);
    return intl3.format(tmp8, obj9);
  } else if (null != application.terms_of_service_url) {
    const t2 = intl5.t;
    const tmp6 = isSocialLayerParentApplication ? t2.nBLOp5 : t2["q0T/Q1"];
    const intl2 = intl5.intl;
    const obj10 = { application: null, termsOfServiceURL: null, discordPrivacyPolicyURL: MarketingURLs.PRIVACY };
    ({ name: obj3.application, terms_of_service_url: obj3.termsOfServiceURL } = application);
    return intl2.format(tmp6, obj10);
  } else {
    const t = intl5.t;
    const tmp4 = isSocialLayerParentApplication ? t["8LemYv"] : t["3Ywek3"];
    const intl = intl5.intl;
    const obj11 = { application: application.name, discordPrivacyPolicyURL: MarketingURLs.PRIVACY };
    return intl.format(tmp4, obj11);
  }
};
export const isContentClassificationRestricted = function isContentClassificationRestricted(content_classification, nsfwAllowed) {
  let result = null != content_classification;
  if (result) {
    const obj = utils;
    result = obj.isAgeRestrictedContentClassification(content_classification);
  }
  if (result) {
    result = false === nsfwAllowed;
  }
  return result;
};