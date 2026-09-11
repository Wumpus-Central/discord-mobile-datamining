// === Module 10441: FoodIcon ===

// Module 10441 (FoodIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod10442 from "module_10442" /* 10442 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/FoodIcon.tsx");

export const FoodIcon = function FoodIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10442, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};