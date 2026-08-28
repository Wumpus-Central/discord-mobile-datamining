// === Module 12890: BetaTag ===

// Module 12890 (BetaTag)
import noopAll from "noop" /* 19 */;
import keys from "keys" /* 691 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4442 */;
import LinearGradientDefault from "LinearGradient" /* 4905 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { Gradients } from "items" /* 7124 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
noopAll;
createCacheKey = { container: null, text: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: ThemesDefault.radii.lg, marginLeft: 8, paddingHorizontal: 8, justifyContent: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textTransform: "uppercase" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj1 = { SMALL: "small", MEDIUM: "medium" };
const result = require("set").fileFinishedImporting("design/void/BetaTag/native/BetaTag.tsx");

export default function BetaTag(gradient) {
  ({ style, textStyle, size } = gradient);
  if (size === undefined) {
    size = obj1.MEDIUM;
  }
  let flag = gradient.gradient;
  if (flag === undefined) {
    flag = false;
  }
  const tmp2 = callback();
  let str = "text-xs/bold";
  if (obj1.SMALL !== size) {
    if (obj1.MEDIUM === size) {
      str = "text-sm/bold";
    }
  }
  if (flag) {
    let obj = { style: null, start: null, end: null, colors: null, children: null };
    const items = [tmp2.container, style];
    obj[0] = items;
    obj[1] = keys.HorizontalGradient.START;
    obj[2] = keys.HorizontalGradient.END;
    obj[3] = Gradients.PREMIUM_TIER_2_TRI_COLOR;
    obj = { variant: null, color: "text-overlay-light", style: null, children: null };
    obj[0] = str;
    const items1 = [tmp2.text, textStyle];
    obj[2] = items1;
    const intl2 = getSystemLocale.intl;
    obj[3] = intl2.string(getSystemLocale.t.oW0eUd);
    obj[4] = tmp3(Text.Text, obj);
    let tmp3Result = tmp3(LinearGradientDefault, obj);
    const tmp10 = LinearGradientDefault;
  } else {
    obj = { style: null, children: null };
    const items2 = [tmp2.container, style];
    obj[0] = items2;
    obj1 = { variant: null, color: "text-overlay-light", style: null, children: null };
    obj1[0] = str;
    const items3 = [tmp2.text, textStyle];
    obj1[2] = items3;
    const intl = getSystemLocale.intl;
    obj1[3] = intl.string(getSystemLocale.t.oW0eUd);
    obj[1] = tmp3(Text.Text, obj1);
    tmp3Result = tmp3(View, obj);
  }
  return tmp3Result;
};
export const BetaSizes = obj1;