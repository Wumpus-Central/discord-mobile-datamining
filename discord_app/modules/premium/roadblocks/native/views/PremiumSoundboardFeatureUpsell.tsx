// === Module 17078: PremiumSoundboardFeatureUpsell ===

// Module 17078 (PremiumSoundboardFeatureUpsell)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import keys from "keys" /* 1093 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7853 */;
import PremiumFeatureUpsellPillDefault from "PremiumFeatureUpsellPill" /* 9964 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
let closure_5 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null };
  obj = { position: "absolute", bottom: arg0 + ThemesDefault.space.PX_12, left: 0, right: 0, marginHorizontal: ThemesDefault.space.PX_12 };
  obj[0] = obj;
  return obj;
});
const result = require("set").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumSoundboardFeatureUpsell.tsx");

export default function PremiumSoundboardFeatureUpsell(shouldShow) {
  let obj = { style: callback(keys.EXPRESSION_FOOTER_HEIGHT + useSafeAreaInsetsDefault().bottom).container, children: null };
  obj = { shouldShow: shouldShow.shouldShow, featureName: EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE };
  obj[1] = jsx(PremiumFeatureUpsellPillDefault, { shouldShow: shouldShow.shouldShow, featureName: EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE });
  return <View shouldShow={arg0.shouldShow} featureName={EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE} />;
};