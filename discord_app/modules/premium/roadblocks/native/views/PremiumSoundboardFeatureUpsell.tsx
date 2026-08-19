// discord_app/modules/premium/roadblocks/native/views/PremiumSoundboardFeatureUpsell.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import keys from "../../../../../ConstantsIOS.tsx";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import EntitlementFeatureNames from "../../../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";
import PremiumFeatureUpsellPillDefault from "PremiumFeatureUpsell.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

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