// === Module 9326: PremiumFeaturesCards ===

// Module 9326 (PremiumFeaturesCards)
import noopAll from "noop" /* 19 */;
import PremiumTypesDefault from "PremiumTypes" /* 9327 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

noopAll;
let closure_5 = createCacheKey.createStyles({ container: { width: "100%", gap: 12 } });
createCacheKey = { TIER_0_LEADING: 0, [0]: "TIER_0_LEADING", TIER_2_LEADING: 1, [1]: "TIER_2_LEADING" };
const result = require("obj132").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCards.tsx");

export default function PremiumFeaturesCards(onFirstCardLayout) {
  ({ applicationId: importDefault, onPaymentSuccess: dependencyMap, onPaymentDismiss: View, order } = onFirstCardLayout);
  if (order === undefined) {
    order = createCacheKey.TIER_0_LEADING;
  }
  onFirstCardLayout = onFirstCardLayout.onFirstCardLayout;
  if (createCacheKey.TIER_2_LEADING === order) {
    const items = [, ];
    ({ TIER_2: arr2[0], TIER_0: arr2[1] } = onFirstCardLayout);
    let items1 = items;
  } else {
    const TIER_0_LEADING = tmp3.TIER_0_LEADING;
    items1 = [, ];
    ({ TIER_0: arr[0], TIER_2: arr[1] } = onFirstCardLayout);
  }
  const tmp2 = callback();
  const items2 = [tmp2.container, onFirstCardLayout.style];
  return <View style={items2} onLayout={onFirstCardLayout.onLayout}>{items1.map((item, index) => {
    let tmp3;
    if (0 === index) {
      tmp3 = onFirstCardLayout;
    }
    return jsx(PremiumTypesDefault, { onLayout: tmp3, premiumType: item, applicationId: closure_0, onPaymentSuccess: closure_1, onPaymentDismiss: closure_2 }, item);
  })}</View>;
};
export const PremiumFeatureCardOrder = createCacheKey;