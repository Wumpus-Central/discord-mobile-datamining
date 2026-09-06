// === Module 5095: LockIcon ===

// Module 5095 (LockIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4261 */;
import _mod5068 from "module_5068" /* 5068 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/LockIcon.tsx");

export const LockIcon = function LockIcon(WHITE) {
  let INTERACTIVE_ICON_DEFAULT = WHITE.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(WHITE, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod5068, color: INTERACTIVE_ICON_DEFAULT, style: WHITE.style });
};