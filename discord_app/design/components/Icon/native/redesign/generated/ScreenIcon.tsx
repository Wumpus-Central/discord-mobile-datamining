// === Module 13304: ScreenIcon ===

// Module 13304 (ScreenIcon)
import nativeDefault from "native" /* 575 */;
import BaseIconImage from "BaseIconImage" /* 5698 */;
import _mod13305 from "module_13305" /* 13305 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ScreenIcon.tsx");

export function ScreenIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod13305, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
}