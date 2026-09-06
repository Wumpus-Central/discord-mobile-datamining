// === Module 7868: MaskedBadge ===

// Module 7868 (MaskedBadge)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import BadgeDefault from "Badge" /* 7869 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { maskStyle: { position: "relative", right: "HermesInternal" }, unreadDot: { width: 0, height: 0 }, badgeStyle: { flexGrow: 1, flexShrink: 0 }, unreadBadge: { position: "relative", bottom: -3 }, lowPriorityBadge: null };
createStyles = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_400 };
createStyles.lowPriorityBadge = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/MaskedBadge.tsx");

export default function MaskedBadge(backgroundColor) {
  backgroundColor = backgroundColor.backgroundColor;
  value = backgroundColor.value;
  ({ unread, maxValue, lowPriority, size, style } = backgroundColor);
  const tmp = closure_5();
  [][0] = backgroundColor;
  if (value > 0) {
    let obj = { maskStyle: null, dotStyle: null, style: null, value: null, maxValue: null };
    const items = [tmp2, tmp.maskStyle];
    obj.maskStyle = items;
    obj.dotStyle = tmp.unreadDot;
    const items1 = [tmp.badgeStyle, , ];
    let lowPriorityBadge = null;
    if (lowPriority) {
      lowPriorityBadge = tmp.lowPriorityBadge;
    }
    items1[1] = lowPriorityBadge;
    items1[2] = style;
    obj.style = items1;
    obj.value = value;
    obj.maxValue = maxValue;
    let tmp7Result = jsx(native.MaskedBadge, { maskStyle: null, dotStyle: null, style: null, value: null, maxValue: null });
  } else {
    tmp7Result = null;
    if (unread) {
      obj = { size, maskColor: backgroundColor, style: tmp.unreadBadge };
      tmp7Result = jsx(BadgeDefault, { size, maskColor: backgroundColor, style: tmp.unreadBadge });
    }
  }
  return tmp7Result;
};