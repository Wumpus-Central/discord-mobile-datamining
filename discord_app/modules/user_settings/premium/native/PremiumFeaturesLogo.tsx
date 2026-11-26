// === Module 9710: PremiumFeaturesLogo ===

// Module 9710 (PremiumFeaturesLogo)
import PremiumUtils from "PremiumUtils" /* 2174 */;
import _modDef9131 from "module_9131" /* 9131 */;
import _modDef9711 from "module_9711" /* 9711 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumTypes = fn(1389).PremiumTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = _modDef9711;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = _modDef9131;
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(5730);
  obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};