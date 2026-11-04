// === Module 10106: PremiumFeaturesLogo ===

// Module 10106 (PremiumFeaturesLogo)
import PremiumUtils from "PremiumUtils" /* 2176 */;
import _modDef7762 from "module_7762" /* 7762 */;
import _modDef10107 from "module_10107" /* 10107 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumTypes = fn(1387).PremiumTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = _modDef10107;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = _modDef7762;
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(5851);
  obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};