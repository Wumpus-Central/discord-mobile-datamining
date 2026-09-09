// === Module 9414: PremiumFeaturesLogo ===

// Module 9414 (PremiumFeaturesLogo)
import PremiumUtils from "PremiumUtils" /* 4231 */;
import _modDef7451 from "module_7451" /* 7451 */;
import _modDef9415 from "module_9415" /* 9415 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = _modDef9415;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = _modDef7451;
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(5601);
  obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};