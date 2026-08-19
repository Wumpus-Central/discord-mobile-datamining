// === Module 8497: MaskedBadge ===

// Module 8497 (MaskedBadge)
import ThemesDefault from "Themes" /* 712 */;
import DEFAULT_BADGE_SIZEDefault from "DEFAULT_BADGE_SIZE" /* 8498 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
const createCacheKey = { backgroundColor: ThemesDefault.unsafe_rawColors.PRIMARY_400 };
createCacheKey[4] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/MaskedBadge.tsx");

export default function MaskedBadge(backgroundColor) {
  backgroundColor = backgroundColor.backgroundColor;
  const value = backgroundColor.value;
  ({ unread, maxValue, lowPriority, size, style } = backgroundColor);
  const tmp = callback();
  [][0] = backgroundColor;
  if (value > 0) {
    let obj = { maskStyle: null, dotStyle: null, style: null, value: null, maxValue: null };
    const items = [tmp2, tmp.maskStyle];
    obj[0] = items;
    obj[1] = tmp.unreadDot;
    const items1 = [tmp.badgeStyle, , ];
    let lowPriorityBadge = null;
    if (lowPriority) {
      lowPriorityBadge = tmp.lowPriorityBadge;
    }
    items1[1] = lowPriorityBadge;
    items1[2] = style;
    obj[2] = items1;
    obj[3] = value;
    obj[4] = maxValue;
    let tmp7Result = jsx(backgroundColor(1297).MaskedBadge, { maskStyle: null, dotStyle: null, style: null, value: null, maxValue: null });
  } else {
    tmp7Result = null;
    if (unread) {
      obj = { size: null, maskColor: null, style: null };
      obj[0] = size;
      obj[1] = backgroundColor;
      obj[2] = tmp.unreadBadge;
      tmp7Result = jsx(DEFAULT_BADGE_SIZEDefault, { size: null, maskColor: null, style: null });
    }
  }
  return tmp7Result;
};