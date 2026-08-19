// === Module 16297: PremiumSoundboardFeatureUpsell ===

// Module 16297 (PremiumSoundboardFeatureUpsell)
import noopAll from "noop" /* 19 */;
import keys from "keys" /* 691 */;
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8482 */;
import PremiumFeatureUpsellPillDefault from "PremiumFeatureUpsellPill" /* 9394 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
let closure_5 = createCacheKey.createStyles((arg0) => {
  const obj = { position: "absolute", bottom: arg0 + ThemesDefault.space.PX_12, left: 0, right: 0, marginHorizontal: ThemesDefault.space.PX_12 };
  obj[0] = obj;
  return obj;
});
const result = require("obj132").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumSoundboardFeatureUpsell.tsx");

export default function PremiumSoundboardFeatureUpsell(shouldShow) {
  { style: callback(keys.EXPRESSION_FOOTER_HEIGHT + useSafeAreaInsetsDefault().bottom).container, children: null };
  const obj = { shouldShow: shouldShow.shouldShow, featureName: EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE };
  obj[1] = jsx(PremiumFeatureUpsellPillDefault, { shouldShow: shouldShow.shouldShow, featureName: EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE });
  return <View shouldShow={shouldShow.shouldShow} featureName={EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE} />;
};