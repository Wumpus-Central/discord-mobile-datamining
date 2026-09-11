// === Module 15042: SubscriptionIcon ===

// Module 15042 (SubscriptionIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod15043 from "module_15043" /* 15043 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/SubscriptionIcon.tsx");

export const SubscriptionIcon = function SubscriptionIcon(color) {
  let ICON_STRONG = color.color;
  if (ICON_STRONG === undefined) {
    ICON_STRONG = nativeDefault.colors.ICON_STRONG;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15043, color: ICON_STRONG, style: color.style });
};