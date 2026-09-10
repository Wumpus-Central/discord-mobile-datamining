// === Module 10305: StarIcon ===

// Module 10305 (StarIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4305 */;
import _mod10306 from "module_10306" /* 10306 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/StarIcon.tsx");

export const StarIcon = function StarIcon(YELLOW_300) {
  let INTERACTIVE_ICON_DEFAULT = YELLOW_300.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(YELLOW_300, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10306, color: INTERACTIVE_ICON_DEFAULT, style: YELLOW_300.style });
};