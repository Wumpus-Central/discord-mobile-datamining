// === Module 10381: BlurBackgroundIcon ===

// Module 10381 (BlurBackgroundIcon)
import nativeDefault from "native" /* 575 */;
import BaseIconImage from "BaseIconImage" /* 5698 */;
import _mod10382 from "module_10382" /* 10382 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/BlurBackgroundIcon.tsx");

export function BlurBackgroundIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10382, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
}