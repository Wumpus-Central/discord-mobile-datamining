// === Module 11046: PinIcon ===

// Module 11046 (PinIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod11047 from "module_11047" /* 11047 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/PinIcon.tsx");

export const PinIcon = function PinIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod11047, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};