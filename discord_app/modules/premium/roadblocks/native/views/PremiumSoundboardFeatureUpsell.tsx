// discord_app/modules/premium/roadblocks/native/views/PremiumSoundboardFeatureUpsell.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { EntitlementFeatureNames } from "../../../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";
import { keys } from "../../../../../ConstantsIOS.tsx";
import { useSafeAreaInsets } from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import { PremiumFeatureUpsellPill } from "PremiumFeatureUpsell.tsx";

const require = arg1;
let closure_5 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null };
  obj = { position: "absolute", bottom: arg0 + Themes.space.PX_12, left: 0, right: 0, marginHorizontal: Themes.space.PX_12 };
  obj[0] = obj;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumSoundboardFeatureUpsell.tsx");

export default function PremiumSoundboardFeatureUpsell(shouldShow) {
  let obj = { style: callback(keys.EXPRESSION_FOOTER_HEIGHT + useSafeAreaInsets().bottom).container, children: null };
  obj = { shouldShow: shouldShow.shouldShow, featureName: null };
  obj[1] = EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
  obj[1] = jsx(PremiumFeatureUpsellPill, { shouldShow: shouldShow.shouldShow, featureName: null });
  return <View shouldShow={arg0.shouldShow} featureName={null} />;
};