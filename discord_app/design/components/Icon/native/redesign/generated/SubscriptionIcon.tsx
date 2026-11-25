// === Module 16443: SubscriptionIcon ===

// Module 16443 (SubscriptionIcon)
import nativeDefault from "native" /* 575 */;
import BaseIconImage from "BaseIconImage" /* 5698 */;
import _mod16444 from "module_16444" /* 16444 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/SubscriptionIcon.tsx");

export function SubscriptionIcon(color) {
  let ICON_STRONG = color.color;
  if (ICON_STRONG === undefined) {
    ICON_STRONG = nativeDefault.colors.ICON_STRONG;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod16444, color: ICON_STRONG, style: color.style });
}