// === Module 9373: PremiumUpsellGradientBackground ===

// Module 9373 (PremiumUpsellGradientBackground)
import noopAll from "noop" /* 19 */;
import keys from "keys" /* 691 */;
import LinearGradientDefault from "LinearGradient" /* 4756 */;
import { Gradients } from "items" /* 7403 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
const createCacheKey = { opacity: 0.1 };
const merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx");

export const PremiumUpsellGradientBackground = function PremiumUpsellGradientBackground(useTier0UpsellContent) {
  const obj = { style: callback().gradient, start: null, end: null, colors: null };
  const tmp = callback();
  obj[1] = keys.HorizontalGradient.START;
  obj[2] = keys.HorizontalGradient.END;
  if (true === useTier0UpsellContent.useTier0UpsellContent) {
    let PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
  } else {
    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  obj[3] = PREMIUM_TIER_2_TRI_COLOR;
  return jsx(LinearGradientDefault, { style: callback().gradient, start: null, end: null, colors: null });
};