// === Module 10123: PremiumFeaturesLogo ===

// Module 10123 (PremiumFeaturesLogo)
import PremiumUtils from "PremiumUtils" /* 2174 */;
import _modDef9616 from "module_9616" /* 9616 */;
import _modDef10124 from "module_10124" /* 10124 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumTypes = fn(1390).PremiumTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = _modDef10124;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = _modDef9616;
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(6014);
  obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};