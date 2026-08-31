// === Module 8063: PremiumFeaturesBackground ===

// Module 8063 (PremiumFeaturesBackground)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import LinearGradientDefault from "LinearGradient" /* 4908 */;
import { Gradients } from "items" /* 7145 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
noopAll;
createCacheKey = { cardContainer: null };
createCacheKey = { display: "flex", borderRadius: ThemesDefault.radii.lg, flexDirection: "column", justifyContent: "space-between", overflow: "hidden" };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesBackground.tsx");

export default function PremiumFeaturesBackground(opacity) {
  let num = opacity.opacity;
  if (num === undefined) {
    num = 1;
  }
  ({ children, style } = opacity);
  const merged = Object.assign(opacity, Object.create(null));
  if (opacity.premiumType === PremiumTypes.TIER_0) {
    let PREMIUM_TIER_0 = Gradients.PREMIUM_TIER_0;
  } else {
    PREMIUM_TIER_0 = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  let mapped = PREMIUM_TIER_0;
  if (num < 1) {
    mapped = PREMIUM_TIER_0.map((arg0) => {
      const obj = closure_1_1(closure_1_2[6])(arg0);
      return closure_1_1(closure_1_2[6])(arg0).alpha(num).hex();
    });
  }
  let obj = { style: items, colors: mapped, start: null, end: null };
  items = [callback().cardContainer, style];
  const tmp2 = callback();
  obj[2] = num(691).HorizontalGradient.START;
  obj[3] = num(691).HorizontalGradient.END;
  const merged1 = Object.assign(merged);
  obj.children = children;
  return jsx(LinearGradientDefault, { style: items, colors: mapped, start: null, end: null });
};