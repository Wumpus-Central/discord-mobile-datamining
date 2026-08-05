// discord_app/modules/premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx
import "noop";
import { Gradients } from "items";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { LinearGradient } from "../../../../../../_runtime/04706_LinearGradient.js";
import { keys } from "../../../../../ConstantsIOS.tsx";

const require = arg1;
createCacheKey = { gradient: null };
createCacheKey = { opacity: 0.1 };
const merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("items").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx");

export const PremiumUpsellGradientBackground = function PremiumUpsellGradientBackground(useTier0UpsellContent) {
  const obj = { style: createCacheKey().gradient, start: null, end: null, colors: null };
  const tmp = createCacheKey();
  const tmp2 = jsx;
  obj[1] = keys /* keys */.HorizontalGradient.START;
  obj[2] = keys /* keys */.HorizontalGradient.END;
  if (true === useTier0UpsellContent.useTier0UpsellContent) {
    let PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
  } else {
    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  obj[3] = PREMIUM_TIER_2_TRI_COLOR;
  return tmp2(LinearGradient, obj);
};