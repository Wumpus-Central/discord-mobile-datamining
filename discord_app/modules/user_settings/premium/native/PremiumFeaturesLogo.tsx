// === Module 9495: PremiumFeaturesLogo ===

// Module 9495 (PremiumFeaturesLogo)
import PremiumUtils from "PremiumUtils" /* 4414 */;
import _modDef7677 from "module_7677" /* 7677 */;
import _modDef9496 from "module_9496" /* 9496 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumTypes = fn(1374).PremiumTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = _modDef9496;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = _modDef7677;
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(5799);
  obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};