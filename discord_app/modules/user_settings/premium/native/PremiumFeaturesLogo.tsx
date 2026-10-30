// === Module 9906: PremiumFeaturesLogo ===

// Module 9906 (PremiumFeaturesLogo)
import PremiumUtils from "PremiumUtils" /* 2048 */;
import _modDef7615 from "module_7615" /* 7615 */;
import _modDef9907 from "module_9907" /* 9907 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumTypes = fn(1386).PremiumTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = _modDef9907;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = _modDef7615;
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(5712);
  obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};