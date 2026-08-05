// discord_app/modules/user_settings/premium/native/PremiumFeaturesLogo.tsx
import "noop";
import { PremiumTypes } from "GuildFeatures";
import { jsx } from "jsxProd";
import { registerAsset } from "../../../../../_runtime/06810_registerAsset.js";
import { registerAsset } from "../../../../../_runtime/08550_registerAsset.js";
import { getPremiumPlanItem } from "../../../../utils/PremiumUtils.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = registerAsset;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = registerAsset;
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(5236);
  obj[1] = getPremiumPlanItem /* getPremiumPlanItem */.getPremiumTypeDisplayName(premiumType);
  obj[3] = premiumType.style;
  obj[5] = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};