// === Module 12626: BetaTag ===

// Module 12626 (BetaTag)
import "noop";
import { View } from "get ActivityIndicator";
import { Gradients } from "items";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { container: null, text: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND, borderRadius: require("Themes").radii.lg, marginLeft: 8, paddingHorizontal: 8, justifyContent: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textTransform: "uppercase" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { SMALL: "small", MEDIUM: "medium" };
const result = require("items").fileFinishedImporting("design/void/BetaTag/native/BetaTag.tsx");

export default function BetaTag(gradient) {
  let size;
  let style;
  let textStyle;
  ({ style, textStyle, size } = gradient);
  if (size === undefined) {
    size = obj1.MEDIUM;
  }
  let flag = gradient.gradient;
  if (flag === undefined) {
    flag = false;
  }
  const tmp2 = createCacheKey();
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
    obj[1] = require(691) /* keys */.HorizontalGradient.START;
    obj[2] = require(691) /* keys */.HorizontalGradient.END;
    obj[3] = Gradients.PREMIUM_TIER_2_TRI_COLOR;
    obj = { variant: null, color: "text-overlay-light", style: null, children: null };
    obj[0] = str;
    const items1 = [tmp2.text, textStyle];
    obj[2] = items1;
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[3] = intl2.string(require(1236) /* getSystemLocale */.t.oW0eUd);
    obj[4] = tmp3(require(4189) /* Text */.Text, obj);
    let tmp3Result = tmp3(importDefault(4615), obj);
    const tmp10 = importDefault(4615);
  } else {
    obj = { style: null, children: null };
    const items2 = [tmp2.container, style];
    obj[0] = items2;
    obj1 = { variant: null, color: "text-overlay-light", style: null, children: null };
    obj1[0] = str;
    const items3 = [tmp2.text, textStyle];
    obj1[2] = items3;
    const intl = require(1236) /* getSystemLocale */.intl;
    obj1[3] = intl.string(require(1236) /* getSystemLocale */.t.oW0eUd);
    obj[1] = tmp3(require(4189) /* Text */.Text, obj1);
    tmp3Result = tmp3(View, obj);
  }
  return tmp3Result;
};
export const BetaSizes = obj1;