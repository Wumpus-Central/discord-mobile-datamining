// === Module 11312: isIosAttributionEligible ===

// Module 11312 (isIosAttributionEligible)
import set from "set" /* 2 */;
import set2 from "set" /* 1234 */;
import getQuestDeliveryDataForPlacement from "getQuestDeliveryDataForPlacement" /* 7454 */;
import apexExperiment from "apexExperiment" /* 11313 */;

const result = set.fileFinishedImporting("modules/ads/ios_attribution/IosAttributionEligibility.tsx");

export const isIosAttributionEligible = function isIosAttributionEligible() {
  const IosAttributionFeatureGate = apexExperiment.IosAttributionFeatureGate;
  let enabled = IosAttributionFeatureGate.getConfig({ location: "quest_ios_attribution" }).enabled;
  if (enabled) {
    enabled = set2.isIOS();
    const tmpResult = set2;
  }
  return enabled;
};
export const isCampaignIosAttributionEnabled = function isCampaignIosAttributionEnabled(sourceQuestContent, adContentId) {
  const adContext = getQuestDeliveryDataForPlacement.getAdContext(sourceQuestContent, adContentId);
  let prop;
  if (adContext != null) {
    prop = adContext.is_campaign_ios_attribution_enabled;
  }
  return true === prop;
};
export const getIosAttributionClickFramework = function getIosAttributionClickFramework(arg0, sourceQuestContent, adContentId) {
  const IosAttributionFeatureGate = apexExperiment.IosAttributionFeatureGate;
  let enabled = IosAttributionFeatureGate.getConfig({ location: "quest_ios_attribution" }).enabled;
  if (enabled) {
    let tmpResult = tmp(1234);
    enabled = tmpResult.isIOS();
  }
  let activeIosAttributionFramework = null;
  if (enabled) {
    activeIosAttributionFramework = null;
    if (arg0) {
      tmpResult = tmp(7454);
      const adContext = tmpResult.getAdContext(sourceQuestContent, adContentId);
      let prop;
      if (adContext != null) {
        prop = adContext.is_campaign_ios_attribution_enabled;
      }
      activeIosAttributionFramework = null;
      if (true === prop) {
        activeIosAttributionFramework = tmp(11315).getActiveIosAttributionFramework();
        const tmpResult1 = tmp(11315);
      }
    }
  }
  return activeIosAttributionFramework;
};