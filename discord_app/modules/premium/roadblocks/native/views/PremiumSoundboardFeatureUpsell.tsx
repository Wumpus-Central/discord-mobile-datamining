// === Module 17078: PremiumSoundboardFeatureUpsell ===

// Module 17078 (PremiumSoundboardFeatureUpsell)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7853 */;
import PremiumFeatureUpsellDefault from "PremiumFeatureUpsell" /* 9964 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = { container: null };
  const rect = { position: "absolute", bottom: arg0 + nativeDefault.space.PX_12, left: 0, right: 0, marginHorizontal: nativeDefault.space.PX_12 };
  obj.container = rect;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumSoundboardFeatureUpsell.tsx");

export default function PremiumSoundboardFeatureUpsell(shouldShow) {
  let obj = { style: closure_5(ConstantsIOS.EXPRESSION_FOOTER_HEIGHT + useSafeAreaInsetsDefault().bottom).container, children: null };
  obj = { shouldShow: shouldShow.shouldShow, featureName: EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE };
  obj.children = jsx(PremiumFeatureUpsellDefault, { shouldShow: shouldShow.shouldShow, featureName: EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE });
  return <View shouldShow={arg0.shouldShow} featureName={EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE} />;
};