// === Module 8921: PremiumUpsellGradientBackground ===

// Module 8921 (PremiumUpsellGradientBackground)
import noopAll from "noop" /* 19 */;
import keys from "keys" /* 691 */;
import LinearGradientDefault from "LinearGradient" /* 4891 */;
import { Gradients } from "items" /* 7105 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
createCacheKey = { gradient: null };
createCacheKey = { opacity: 0.1 };
const merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx");

export const PremiumUpsellGradientBackground = function PremiumUpsellGradientBackground(useTier0UpsellContent) {
  const obj = { style: callback().gradient, start: null, end: null, colors: null };
  const tmp = callback();
  const tmp2 = jsx;
  obj[1] = keys.HorizontalGradient.START;
  obj[2] = keys.HorizontalGradient.END;
  if (true === useTier0UpsellContent.useTier0UpsellContent) {
    let PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
  } else {
    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  obj[3] = PREMIUM_TIER_2_TRI_COLOR;
  return tmp2(LinearGradientDefault, obj);
};