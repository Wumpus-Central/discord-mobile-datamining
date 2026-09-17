// === Module 9536: PremiumFeaturesLogo ===

// Module 9536 (PremiumFeaturesLogo)
import PremiumUtils from "PremiumUtils" /* 4297 */;
import _modDef7551 from "module_7551" /* 7551 */;
import _modDef9537 from "module_9537" /* 9537 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumTypes = fn(1374).PremiumTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = _modDef9537;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = _modDef7551;
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(5675);
  obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};