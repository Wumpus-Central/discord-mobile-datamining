// === Module 16829: ThemeLightIcon ===

// Module 16829 (ThemeLightIcon)
import nativeDefault from "native" /* 575 */;
import BaseIconImage from "BaseIconImage" /* 5698 */;
import _mod16830 from "module_16830" /* 16830 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ThemeLightIcon.tsx");

export function ThemeLightIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod16830, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
}