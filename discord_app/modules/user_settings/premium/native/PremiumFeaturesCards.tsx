// === Module 8192: PremiumFeaturesCards ===

// Module 8192 (PremiumFeaturesCards)
import "noop";
import { View } from "get ActivityIndicator";
import { PremiumTypes } from "GuildFeatures";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_5 = createCacheKey.createStyles({ container: { width: "100%", gap: 12 } });
createCacheKey = { TIER_0_LEADING: 0, [0]: "TIER_0_LEADING", TIER_2_LEADING: 1, [1]: "TIER_2_LEADING" };
const result = require("GuildFeatures").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCards.tsx");

export default function PremiumFeaturesCards(onFirstCardLayout) {
  let View;
  let dependencyMap;
  let importDefault;
  let order;
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
  return <View style={items2} onLayout={arg0.onLayout}>{items1.map((premiumType) => {
    let tmp3;
    if (0 === arg1) {
      tmp3 = onFirstCardLayout;
    }
    return outer1_4(outer1_0(outer1_1[5]), { onLayout: tmp3, premiumType, applicationId: closure_0, onPaymentSuccess: closure_1, onPaymentDismiss: closure_2 }, premiumType);
  })}</View>;
};
export const PremiumFeatureCardOrder = createCacheKey;