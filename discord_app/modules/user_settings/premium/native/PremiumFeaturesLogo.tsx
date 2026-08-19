// === Module 9330: PremiumFeaturesLogo ===

// Module 9330 (PremiumFeaturesLogo)
import noopAll from "noop" /* 19 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4039 */;
import registerAssetDefault from "registerAsset" /* 7408 */;
import registerAssetDefault2 from "registerAsset" /* 9331 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

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
  const tmpResult = tmp(5449);
  obj[1] = getPremiumPlanItem.getPremiumTypeDisplayName(premiumType);
  obj[3] = premiumType.style;
  obj[5] = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};