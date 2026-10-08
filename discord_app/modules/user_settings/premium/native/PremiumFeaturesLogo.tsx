// === Module 9349: PremiumFeaturesLogo ===

// Module 9349 (PremiumFeaturesLogo)
import c from "c" /* 576 */;
import PremiumUtils from "PremiumUtils" /* 4726 */;
import _modDef7143 from "module_7143" /* 7143 */;
import _modDef9350 from "module_9350" /* 9350 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumTypes = fn(1391).PremiumTypes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumFeaturesLogo(arg0) {
  const cResult = c.c(6);
  ({ premiumType, style } = arg0);
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp5 = _modDef9350;
    let tmp6 = importDefault;
  } else {
    tmp5 = _modDef7143;
    tmp6 = importDefault;
  }
  if (cResult[0] !== premiumType) {
    const premiumTypeDisplayName = PremiumUtils.getPremiumTypeDisplayName(premiumType);
    cResult[0] = premiumType;
    cResult[1] = premiumTypeDisplayName;
    let tmp8 = premiumTypeDisplayName;
    const tmpResult = PremiumUtils;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    if (cResult[3] === style) {
      if (cResult[4] === tmp8) {
        let tmp10 = cResult[5];
      }
      return tmp10;
    }
  }
  const tmp11 = jsx(tmp6(6164), { accessible: true, accessibilityLabel: tmp8, accessibilityRole: "header", style, resizeMode: "contain", source: tmp5 });
  cResult[2] = tmp5;
  cResult[3] = style;
  cResult[4] = tmp8;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (function PremiumFeaturesLogo(premiumType) {
  premiumType = premiumType.premiumType;
  if (premiumType === PremiumTypes.TIER_0) {
    let tmp3 = _modDef9350;
    let tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = _modDef7143;
  }
  const obj = { accessible: true, accessibilityLabel: null, accessibilityRole: "header", style: null, resizeMode: "contain", source: null };
  const tmpResult = tmp(6164);
  obj.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
  obj.style = premiumType.style;
  obj.source = tmp3;
  return <tmpResult accessible accessibilityLabel={null} accessibilityRole="header" style={null} resizeMode="contain" source={null} />;
});