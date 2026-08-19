// discord_app/modules/user_settings/premium/native/PremiumFeaturesBackground.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import nDefault from "../../../../../_runtime/00689_n.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import LinearGradientDefault from "../../../../../_runtime/04756_LinearGradient.js";
import { Gradients } from "../../../colors/native/ColorConstants.tsx";
import { PremiumTypes } from "../../../premium/PremiumConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
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