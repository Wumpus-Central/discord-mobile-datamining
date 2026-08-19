// === Module 8400: PremiumFeaturesBackground ===

// Module 8400 (PremiumFeaturesBackground)
import noopAll from "noop" /* 19 */;
import nDefault from "n" /* 689 */;
import ThemesDefault from "Themes" /* 712 */;
import LinearGradientDefault from "LinearGradient" /* 4756 */;
import { Gradients } from "items" /* 7403 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
noopAll;
const createCacheKey = { display: "flex", borderRadius: ThemesDefault.radii.lg, flexDirection: "column", justifyContent: "space-between", overflow: "hidden" };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesBackground.tsx");

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
    mapped = PREMIUM_TIER_0.map((item, index) => {
      const obj = nDefault(item);
      return nDefault(item).alpha(num).hex();
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