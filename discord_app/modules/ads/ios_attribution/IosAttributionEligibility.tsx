// === Module 11582: IosAttributionEligibility ===

// Module 11582 (IosAttributionEligibility)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import QuestDataUtils from "QuestDataUtils" /* 7771 */;
import apexExperiment from "apexExperiment" /* 11583 */;
import IosAttributionNativeModule from "IosAttributionNativeModule" /* 11585 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/ads/ios_attribution/IosAttributionEligibility.tsx");

export const isIosAttributionEligible = function isIosAttributionEligible() {
  const IosAttributionFeatureGate = apexExperiment.IosAttributionFeatureGate;
  let enabled = IosAttributionFeatureGate.getConfig({ location: "quest_ios_attribution" }).enabled;
  if (enabled) {
    enabled = PlatformUtils.isIOS();
    const tmpResult = PlatformUtils;
  }
  return enabled;
};
export const isCampaignIosAttributionEnabled = function isCampaignIosAttributionEnabled(sourceQuestContent, item) {
  const adContext = QuestDataUtils.getAdContext(sourceQuestContent, item);
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
    let tmpResult = PlatformUtils;
    enabled = tmpResult.isIOS();
  }
  let activeIosAttributionFramework = null;
  if (enabled) {
    activeIosAttributionFramework = null;
    if (arg0) {
      tmpResult = QuestDataUtils;
      const adContext = tmpResult.getAdContext(sourceQuestContent, adContentId);
      let prop;
      if (adContext != null) {
        prop = adContext.is_campaign_ios_attribution_enabled;
      }
      activeIosAttributionFramework = null;
      if (true === prop) {
        activeIosAttributionFramework = IosAttributionNativeModule.getActiveIosAttributionFramework();
        const tmpResult1 = IosAttributionNativeModule;
      }
    }
  }
  return activeIosAttributionFramework;
};