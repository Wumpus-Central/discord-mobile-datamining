// discord_app/modules/main_tabs_v2/native/shared_components/MaskedBadge.tsx
import noop from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { DEFAULT_BADGE_SIZE } from "Badge.tsx";

const require = arg1;
createCacheKey = { maskStyle: { position: "relative", right: "channel" }, unreadDot: { width: 0, height: 0 }, badgeStyle: { flexGrow: 1, flexShrink: 0 }, unreadBadge: { position: "relative", bottom: -3 }, lowPriorityBadge: null };
createCacheKey = { backgroundColor: require("Themes").unsafe_rawColors.PRIMARY_400 };
createCacheKey[4] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/MaskedBadge.tsx");

export default function MaskedBadge(backgroundColor) {
  let lowPriority;
  let maxValue;
  let size;
  let style;
  let unread;
  backgroundColor = backgroundColor.backgroundColor;
  const value = backgroundColor.value;
  ({ unread, maxValue, lowPriority, size, style } = backgroundColor);
  const tmp = createCacheKey();
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
    const tmp7 = jsx;
  } else {
    tmp7Result = null;
    if (unread) {
      obj = { size: null, maskColor: null, style: null };
      obj[0] = size;
      obj[1] = backgroundColor;
      obj[2] = tmp.unreadBadge;
      tmp7Result = jsx(DEFAULT_BADGE_SIZE, { size: null, maskColor: null, style: null });
    }
  }
  return tmp7Result;
};