// discord_app/modules/main_tabs_v2/native/shared_components/MaskedBadge.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import BadgeDefault from "Badge.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let obj2 = {
  maskStyle: { position: "relative", right: "HermesInternal" },
  unreadDot: { width: 0, height: 0 },
  badgeStyle: { flexGrow: 1, flexShrink: 0 },
  unreadBadge: { position: "relative", bottom: -3 },
  lowPriorityBadge: { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_400 },
};
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/MaskedBadge.tsx");

export default function MaskedBadge(backgroundColor) {
  backgroundColor = backgroundColor.backgroundColor;
  value = backgroundColor.value;
  ({ unread, maxValue, lowPriority, size, style } = backgroundColor);
  const tmp = closure_5();
  [][0] = backgroundColor;
  if (value > 0) {
    const obj2 = { maskStyle: null, dotStyle: null, style: null, value: null, maxValue: null };
    const items = [tmp2, tmp.maskStyle];
    obj2.maskStyle = items;
    obj2.dotStyle = tmp.unreadDot;
    const items1 = [tmp.badgeStyle, ,];
    let lowPriorityBadge = null;
    if (lowPriority) {
      lowPriorityBadge = tmp.lowPriorityBadge;
    }
    items1[1] = lowPriorityBadge;
    items1[2] = style;
    obj2.style = items1;
    obj2.value = value;
    obj2.maxValue = maxValue;
    let tmp7Result = jsx(native.MaskedBadge, {
      maskStyle: null,
      dotStyle: null,
      style: null,
      value: null,
      maxValue: null,
    });
  } else {
    tmp7Result = null;
    if (unread) {
      const obj = { size, maskColor: backgroundColor, style: tmp.unreadBadge };
      tmp7Result = jsx(BadgeDefault, { size, maskColor: backgroundColor, style: tmp.unreadBadge });
    }
  }
  return tmp7Result;
}
