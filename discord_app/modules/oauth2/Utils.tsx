// discord_app/modules/oauth2/Utils.tsx
import Constants from "../../Constants.tsx";
import util from "../../intl/index.native.tsx";
import utils from "../content_classification/utils.tsx";
import useIsSocialLayerParentApplication from "../applications/useIsSocialLayerParentApplication.tsx";
import size from "../../../_runtime/metro/00002__.js";

const MarketingURLs = Constants.MarketingURLs;
let result = size.fileFinishedImporting("modules/oauth2/Utils.tsx");

export const getApplicationDetailsText = function getApplicationDetailsText(application) {
  let obj = useIsSocialLayerParentApplication;
  const isSocialLayerParentApplication = obj.getIsSocialLayerParentApplication(application);
  if (null != application.privacy_policy_url) {
    if (null != application.terms_of_service_url) {
      const t4 = util.t;
      const intl4 = util.intl;
      obj = { application: null, privacyPolicyURL: null, termsOfServiceURL: null, discordPrivacyPolicyURL: null };
      ({
        name: obj5.application,
        privacy_policy_url: obj5.privacyPolicyURL,
        terms_of_service_url: obj5.termsOfServiceURL,
      } = application);
      obj.discordPrivacyPolicyURL = MarketingURLs.PRIVACY;
      return intl4.format(isSocialLayerParentApplication ? t4.yVfotv : t4.rxlyKL, obj);
    }
  }
  if (null != application.privacy_policy_url) {
    const t3 = util.t;
    const intl3 = util.intl;
    obj = { application: null, privacyPolicyURL: null, discordPrivacyPolicyURL: null };
    ({ name: obj4.application, privacy_policy_url: obj4.privacyPolicyURL } = application);
    obj.discordPrivacyPolicyURL = MarketingURLs.PRIVACY;
    return intl3.format(isSocialLayerParentApplication ? t3.pYVSah : t3.TBvmM2, obj);
  } else if (null != application.terms_of_service_url) {
    const t2 = util.t;
    const intl2 = util.intl;
    const obj1 = { application: null, termsOfServiceURL: null, discordPrivacyPolicyURL: null };
    ({ name: obj3.application, terms_of_service_url: obj3.termsOfServiceURL } = application);
    obj1.discordPrivacyPolicyURL = MarketingURLs.PRIVACY;
    return intl2.format(isSocialLayerParentApplication ? t2.nBLOp5 : t2["q0T/Q1"], obj1);
  } else {
    const t = util.t;
    const intl = util.intl;
    const obj2 = { application: application.name, discordPrivacyPolicyURL: MarketingURLs.PRIVACY };
    return intl.format(isSocialLayerParentApplication ? t["8LemYv"] : t["3Ywek3"], obj2);
  }
};
export const isContentClassificationRestricted = function isContentClassificationRestricted(
  content_classification,
  nsfwAllowed,
) {
  let result = null != content_classification;
  if (result) {
    result = utils.isAgeRestrictedContentClassification(content_classification);
  }
  if (result) {
    result = false === nsfwAllowed;
  }
  return result;
};
