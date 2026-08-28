// === Module 8299: PremiumFeaturesLogo ===

// Module 8299 (PremiumFeaturesLogo)
import noopAll from "noop" /* 19 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4108 */;
import registerAssetDefault from "registerAsset" /* 7129 */;
import registerAssetDefault2 from "registerAsset" /* 8300 */;
import { PremiumTypes } from "GuildFeatures" /* 1925 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = registerAssetDefault2;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = registerAssetDefault;
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(5458);
  obj[1] = getPremiumPlanItem.getPremiumTypeDisplayName(premiumType);
  obj[3] = premiumType.style;
  obj[5] = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};