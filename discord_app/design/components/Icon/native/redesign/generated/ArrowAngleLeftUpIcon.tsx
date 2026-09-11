// === Module 11827: ArrowAngleLeftUpIcon ===

// Module 11827 (ArrowAngleLeftUpIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod11828 from "module_11828" /* 11828 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ArrowAngleLeftUpIcon.tsx");

export const ArrowAngleLeftUpIcon = function ArrowAngleLeftUpIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod11828, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};