// === Module 8613: DEFAULT_BADGE_SIZE ===

// Module 8613 (DEFAULT_BADGE_SIZE)
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;
import importAllResult from "noop" /* 19 */;

let obj = { badge: null, badgeClassic: null, mask: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
obj[0] = obj;
createCacheKey = { backgroundColor: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj[1] = createCacheKey;
obj[2] = { alignItems: "center", justifyContent: "center" };
let closure_2 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function Badge(size) {
  let num = size.size;
  if (num === undefined) {
    num = 12;
  }
  let num2 = size.maskSize;
  if (num2 === undefined) {
    num2 = 4;
  }
  let flag = size.classic;
  if (flag === undefined) {
    flag = false;
  }
  const maskColor = size.maskColor;
  ({ style, badgeStyle } = size);
  const tmp = callback();
  const sum = num + 2 * num2;
  let tmp3;
  if (null != maskColor) {
    let obj = { backgroundColor: null, height: null, width: null, borderRadius: null };
    obj[0] = maskColor;
    obj[1] = sum;
    obj[2] = sum;
    obj[3] = sum / 2;
    tmp3 = obj;
  }
  obj = { style: items, children: tmp4(tmp5, { style: items1 }) };
  items = [tmp.mask, tmp3, style];
  items1 = [flag ? tmp.badgeClassic : tmp.badge, { height: num, width: num, borderRadius: num / 2 }, badgeStyle];
  return <View style={items}>{tmp4(tmp5, { style: items1 })}</View>;
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/Badge.tsx");

export default memoResult;
export const DEFAULT_BADGE_SIZE = 12;
export const CHANNEL_BADGE_SIZE = 8;
export const DEFAULT_BADGE_MASK_SIZE = 4;