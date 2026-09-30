// === Module 8884: PremiumFeaturesLogo ===

// Module 8884 (PremiumFeaturesLogo)
import PremiumUtils from "PremiumUtils" /* 4518 */;
import _modDef7053 from "module_7053" /* 7053 */;
import _modDef8885 from "module_8885" /* 8885 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumTypes = fn(1374).PremiumTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = _modDef8885;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = _modDef7053;
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(6095);
  obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};