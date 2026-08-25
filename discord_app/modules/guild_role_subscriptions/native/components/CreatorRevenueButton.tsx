// === Module 8833: CreatorRevenueButton ===

// Module 8833 (CreatorRevenueButton)
import noopAll from "noop" /* 19 */;
import ShinyButtonDefault from "ShinyButton" /* 8834 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

noopAll;
let closure_3 = createCacheKey.createStyles({ container: { borderRadius: 3 } });
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/CreatorRevenueButton.tsx");

export const CreatorRevenueButton = function CreatorRevenueButton(arg0) {
  ({ disabled, text, onPress, style, loading } = arg0);
  style = [callback().container, ];
  style[1] = style;
  return jsx(ShinyButtonDefault, { style, loading, disabled, onPress, text });
};