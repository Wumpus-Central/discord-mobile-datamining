// discord_app/modules/main_tabs_v2/native/shared_components/MaskedBadge.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import DEFAULT_BADGE_SIZEDefault from "Badge.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
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