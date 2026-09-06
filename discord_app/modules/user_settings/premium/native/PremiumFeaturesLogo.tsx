// === Module 9382: PremiumFeaturesLogo ===

// Module 9382 (PremiumFeaturesLogo)
import PremiumUtils from "PremiumUtils" /* 4218 */;
import _modDef7437 from "module_7437" /* 7437 */;
import _modDef9383 from "module_9383" /* 9383 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = _modDef9383;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = _modDef7437;
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(5587);
  obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
};