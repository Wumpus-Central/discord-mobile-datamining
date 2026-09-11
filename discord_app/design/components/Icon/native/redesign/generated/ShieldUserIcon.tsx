// === Module 9843: ShieldUserIcon ===

// Module 9843 (ShieldUserIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod8208 from "module_8208" /* 8208 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ShieldUserIcon.tsx");

export const ShieldUserIcon = function ShieldUserIcon(tmp2Result) {
  let INTERACTIVE_ICON_DEFAULT = tmp2Result.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(tmp2Result, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod8208, color: INTERACTIVE_ICON_DEFAULT, style: tmp2Result.style });
};