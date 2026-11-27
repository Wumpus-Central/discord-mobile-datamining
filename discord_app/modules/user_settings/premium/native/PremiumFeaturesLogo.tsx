// === Module 9711: PremiumFeaturesLogo ===

// Module 9711 (PremiumFeaturesLogo)
import PremiumUtils from "PremiumUtils" /* 2174 */;
import _modDef9132 from "module_9132" /* 9132 */;
import _modDef9712 from "module_9712" /* 9712 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumTypes = fn(1389).PremiumTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = _modDef9712;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = _modDef9132;
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(5730);
  obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};