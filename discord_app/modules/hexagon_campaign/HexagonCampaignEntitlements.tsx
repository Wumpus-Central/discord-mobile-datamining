// discord_app/modules/hexagon_campaign/HexagonCampaignEntitlements.tsx
import PremiumUtilsDefault from "../../utils/PremiumUtils.tsx";
import HexagonCampaignConstants from "HexagonCampaignConstants.tsx";
import ProductCatalog from "../premium/ProductCatalog.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
