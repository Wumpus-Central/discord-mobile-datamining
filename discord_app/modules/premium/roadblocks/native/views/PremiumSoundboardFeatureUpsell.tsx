// === Module 17221: PremiumSoundboardFeatureUpsell ===

// Module 17221 (PremiumSoundboardFeatureUpsell)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7483 */;
import PremiumFeatureUpsellDefault from "PremiumFeatureUpsell" /* 9643 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = { container: null };
  const rect = { position: "absolute", bottom: arg0 + nativeDefault.space.PX_12, left: 0, right: 0, marginHorizontal: nativeDefault.space.PX_12 };
  obj.container = rect;
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumSoundboardFeatureUpsell.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((shouldShow) => {
  const cResult = c.c(5);
  shouldShow = shouldShow.shouldShow;
  const tmp5 = closure_5(ConstantsIOS.EXPRESSION_FOOTER_HEIGHT + useSafeAreaInsetsDefault().bottom);
  if (cResult[0] !== shouldShow) {
    const obj2 = { shouldShow, featureName: EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE };
    const tmp9 = jsx(PremiumFeatureUpsellDefault, { shouldShow, featureName: EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE });
    cResult[0] = shouldShow;
    cResult[1] = tmp9;
    let tmp6 = tmp9;
    const tmp4Result = PremiumFeatureUpsellDefault;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp5.container) {
    if (cResult[3] === tmp6) {
      let tmp10 = cResult[4];
    }
    return tmp10;
  }
  const tmp11 = <View style={tmp5.container}>{tmp6}</View>;
  cResult[2] = tmp5.container;
  cResult[3] = tmp6;
  cResult[4] = tmp11;
  tmp10 = tmp11;
  const obj3 = { style: tmp5.container, children: tmp6 };
}) : ((shouldShow) => {
  const obj = { style: closure_5(ConstantsIOS.EXPRESSION_FOOTER_HEIGHT + useSafeAreaInsetsDefault().bottom).container, children: null };
  const obj2 = { shouldShow: shouldShow.shouldShow, featureName: EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE };
  obj.children = jsx(PremiumFeatureUpsellDefault, { shouldShow: shouldShow.shouldShow, featureName: EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE });
  return <View style={closure_5(ConstantsIOS.EXPRESSION_FOOTER_HEIGHT + useSafeAreaInsetsDefault().bottom).container}>{null}</View>;
});