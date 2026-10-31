// === Module 14721: FireIcon ===

// Module 14721 (FireIcon)
import nativeDefault from "native" /* 575 */;
import BaseIconImage from "BaseIconImage" /* 5716 */;
import _mod14722 from "module_14722" /* 14722 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/FireIcon.tsx");

export function FireIcon(ORANGE_260) {
  let INTERACTIVE_ICON_DEFAULT = ORANGE_260.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(ORANGE_260, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod14722, color: INTERACTIVE_ICON_DEFAULT, style: ORANGE_260.style });
}