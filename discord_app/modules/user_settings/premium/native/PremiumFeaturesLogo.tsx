// === Module 9473: PremiumFeaturesLogo ===

// Module 9473 (PremiumFeaturesLogo)
import PremiumUtils from "PremiumUtils" /* 4264 */;
import _modDef7510 from "module_7510" /* 7510 */;
import _modDef9474 from "module_9474" /* 9474 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = _modDef9474;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = _modDef7510;
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(5638);
  obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};