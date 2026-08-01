// === Module 7972: PremiumFeaturesBackground ===

// Module 7972 (PremiumFeaturesBackground)
import "noop";
import { Gradients } from "items";
import { PremiumTypes } from "GuildFeatures";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { cardContainer: null };
createCacheKey = { display: "flex", borderRadius: require("Themes").radii.lg, flexDirection: "column", justifyContent: "space-between", overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("GuildFeatures").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesBackground.tsx");

export default function PremiumFeaturesBackground(opacity) {
  let children;
  let style;
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
      const obj = outer1_1(outer1_2[6])(arg0);
      return outer1_1(outer1_2[6])(arg0).alpha(num).hex();
    });
  }
  let obj = { style: items, colors: mapped, start: null, end: null };
  items = [createCacheKey().cardContainer, style];
  const tmp2 = createCacheKey();
  obj[2] = num(691).HorizontalGradient.START;
  obj[3] = num(691).HorizontalGradient.END;
  const merged1 = Object.assign(merged);
  obj.children = children;
  return jsx(importDefault(4615), { style: items, colors: mapped, start: null, end: null });
};