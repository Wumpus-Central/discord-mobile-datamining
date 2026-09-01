// discord_app/modules/ads/ios_attribution/IosAttributionEligibility.tsx
import set from "../../../../_runtime/00002_set.js";
import set2 from "../../../utils/PlatformUtils.tsx";
import getQuestDeliveryDataForPlacement from "../../quests/utils/QuestDataUtils.tsx";
import apexExperiment from "../../quests/experiments/index.tsx";

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
export const isCampaignIosAttributionEnabled = function isCampaignIosAttributionEnabled(
  sourceQuestContent,
  adContentId,
) {
  const adContext = getQuestDeliveryDataForPlacement.getAdContext(sourceQuestContent, adContentId);
  let prop;
  if (adContext != null) {
    prop = adContext.is_campaign_ios_attribution_enabled;
  }
  return true === prop;
};
export const getIosAttributionClickFramework = function getIosAttributionClickFramework(
  arg0,
  sourceQuestContent,
  adContentId,
) {
  const IosAttributionFeatureGate = apexExperiment.IosAttributionFeatureGate;
  let enabled = IosAttributionFeatureGate.getConfig({ location: "quest_ios_attribution" }).enabled;
  if (enabled) {
    let tmpResult = tmp(500);
    enabled = tmpResult.isIOS();
  }
  let activeIosAttributionFramework = null;
  if (enabled) {
    activeIosAttributionFramework = null;
    if (arg0) {
      tmpResult = tmp(7443);
      const adContext = tmpResult.getAdContext(sourceQuestContent, adContentId);
      let prop;
      if (adContext != null) {
        prop = adContext.is_campaign_ios_attribution_enabled;
      }
      activeIosAttributionFramework = null;
      if (true === prop) {
        activeIosAttributionFramework = tmp(11091).getActiveIosAttributionFramework();
        const tmpResult1 = tmp(11091);
      }
    }
  }
  return activeIosAttributionFramework;
};
