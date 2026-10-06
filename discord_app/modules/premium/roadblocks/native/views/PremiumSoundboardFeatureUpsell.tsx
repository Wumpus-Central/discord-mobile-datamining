// === Module 17274: PremiumSoundboardFeatureUpsell ===

// Module 17274 (PremiumSoundboardFeatureUpsell)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7494 */;
import PremiumFeatureUpsellDefault from "PremiumFeatureUpsell" /* 9656 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let shouldShow;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((arg0) => {
  let rect;
  const obj = { container: rect };
  rect = { position: "absolute", bottom: arg0 + nativeDefault.space.PX_12, left: 0, right: 0, marginHorizontal: nativeDefault.space.PX_12 };
  return obj;
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((shouldShow) => {
  let tmp6;
  const obj = react2;
  const cResult = obj.c(5);
  shouldShow = shouldShow.shouldShow;
  const tmp5 = closure_5(ConstantsIOS.EXPRESSION_FOOTER_HEIGHT + useSafeAreaInsetsDefault().bottom);
  if (cResult[0] !== shouldShow) {
    PremiumFeatureUpsellDefault;
    const tmp9 = <tmp4Result shouldShow={shouldShow} featureName={EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE} />;
    cResult[0] = shouldShow;
    cResult[1] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp5.container) {
    let tmp10;
    if (cResult[3] === tmp6) {
      tmp10 = cResult[4];
    }
    return tmp10;
  }
  const tmp11 = <View style={tmp5.container}>{tmp6}</View>;
  cResult[2] = tmp5.container;
  cResult[3] = tmp6;
  cResult[4] = tmp11;
  tmp10 = tmp11;
}) : ((shouldShow) => {
  shouldShow = shouldShow.shouldShow;
  ({ shouldShow, featureName: EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE });
  PremiumFeatureUpsellDefault;
  return <View style={closure_5(ConstantsIOS.EXPRESSION_FOOTER_HEIGHT + useSafeAreaInsetsDefault().bottom).container}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumSoundboardFeatureUpsell.tsx");

export default tmp3;