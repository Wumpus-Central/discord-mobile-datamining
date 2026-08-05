// discord_app/modules/premium/roadblocks/native/views/PremiumSoundboardFeatureUpsell.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_5 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null };
  obj = { position: "absolute", bottom: arg0 + require("../../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_12, left: 0, right: 0, marginHorizontal: require("../../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_12 };
  obj[0] = obj;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumSoundboardFeatureUpsell.tsx");

export default function PremiumSoundboardFeatureUpsell(shouldShow) {
  let obj = { style: callback(require("../../../../../ConstantsIOS.tsx") /* keys */.EXPRESSION_FOOTER_HEIGHT + require("../../../../safe_area/useSafeAreaInsets.native.tsx")().bottom).container, children: null };
  obj = { shouldShow: shouldShow.shouldShow, featureName: null };
  obj[1] = require("../../../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx") /* EntitlementFeatureNames */.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
  obj[1] = jsx(require("PremiumFeatureUpsell.tsx"), { shouldShow: shouldShow.shouldShow, featureName: null });
  return <View shouldShow={arg0.shouldShow} featureName={null} />;
};