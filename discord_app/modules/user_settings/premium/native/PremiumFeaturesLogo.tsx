// === Module 8916: PremiumFeaturesLogo ===

// Module 8916 (PremiumFeaturesLogo)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import PremiumUtils from "PremiumUtils" /* 4534 */;
import AssetRegistryDefault from "AssetRegistry" /* 6954 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8917 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const PremiumTypes = PremiumConstants.PremiumTypes;
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let premiumType;
  let style;
  let tmp5;
  let tmp6;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(6);
  ({ premiumType, style } = arg0);
  if (premiumType === PremiumTypes.TIER_0) {
    tmp5 = AssetRegistryDefault2;
    tmp6 = importDefault;
  } else {
    tmp5 = AssetRegistryDefault;
    tmp6 = importDefault;
  }
  if (cResult[0] !== premiumType) {
    const tmpResult = PremiumUtils;
    const premiumTypeDisplayName = tmpResult.getPremiumTypeDisplayName(premiumType);
    cResult[0] = premiumType;
    cResult[1] = premiumTypeDisplayName;
    tmp8 = premiumTypeDisplayName;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === tmp5) {
    if (cResult[3] === style) {
      let tmp10;
      if (cResult[4] === tmp8) {
        tmp10 = cResult[5];
      }
      return tmp10;
    }
  }
  const tmp11 = jsx(tmp6(5981), { accessible: true, accessibilityLabel: tmp8, accessibilityRole: "header", style, resizeMode: "contain", source: tmp5 });
  cResult[2] = tmp5;
  cResult[3] = style;
  cResult[4] = tmp8;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((premiumType) => {
  let tmp;
  let tmp3;
  premiumType = premiumType.premiumType;
  const style = premiumType.style;
  if (premiumType === PremiumTypes.TIER_0) {
    tmp3 = AssetRegistryDefault2;
    tmp = importDefault;
  } else {
    tmp = importDefault;
    tmp3 = AssetRegistryDefault;
  }
  tmp(5981);
  const obj2 = PremiumUtils;
  return <tmpResult accessible accessibilityLabel={obj2.getPremiumTypeDisplayName(premiumType)} accessibilityRole="header" style={style} resizeMode="contain" source={tmp3} />;
});
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesLogo.tsx");

export default tmp3;