// === Module 9502: PremiumFeaturesLogo ===

// Module 9502 (PremiumFeaturesLogo)
import PremiumUtils from "PremiumUtils" /* 2173 */;
import _modDef9124 from "module_9124" /* 9124 */;
import _modDef9503 from "module_9503" /* 9503 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumTypes = fn(1388).PremiumTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = _modDef9503;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = _modDef9124;
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(5600);
  obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};