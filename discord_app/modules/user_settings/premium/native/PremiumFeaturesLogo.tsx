// === Module 9668: PremiumFeaturesLogo ===

// Module 9668 (PremiumFeaturesLogo)
import PremiumUtils from "PremiumUtils" /* 2173 */;
import _modDef9089 from "module_9089" /* 9089 */;
import _modDef9669 from "module_9669" /* 9669 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumTypes = fn(1388).PremiumTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = _modDef9669;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = _modDef9089;
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(5699);
  obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};