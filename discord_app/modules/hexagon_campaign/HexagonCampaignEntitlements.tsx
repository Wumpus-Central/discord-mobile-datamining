// === Module 14050: HexagonCampaignEntitlements ===

// Module 14050 (HexagonCampaignEntitlements)
import PremiumUtilsDefault from "PremiumUtils" /* 2053 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 4996 */;
import ProductCatalog from "ProductCatalog" /* 5028 */;
import size from "module_2" /* 2 */;

const HexagonCampaignPerk = HexagonCampaignConstants.HexagonCampaignPerk;
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignEntitlements.tsx");

export const canUseAllAppIcons = function canUseAllAppIcons(currentUser) {
  if (obj.hasPerkOnlyFromHexagonCampaign(currentUser, HexagonCampaignPerk.APP_ICON)) {
    const APP_ICONS = ProductCatalog.APP_ICONS;
    let featureValue = APP_ICONS.getFeatureValue(currentUser);
  } else {
    featureValue = PremiumUtilsDefault.canUsePremiumAppIcons(currentUser);
  }
  return featureValue;
};