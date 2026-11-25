// === Module 7460: CheckmarkSmallIcon ===

// Module 7460 (CheckmarkSmallIcon)
import nativeDefault from "native" /* 575 */;
import BaseIconImage from "BaseIconImage" /* 5698 */;
import _mod7461 from "module_7461" /* 7461 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx");

export function CheckmarkSmallIcon(ICON_OVERLAY_LIGHT) {
  let INTERACTIVE_ICON_DEFAULT = ICON_OVERLAY_LIGHT.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(ICON_OVERLAY_LIGHT, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod7461, color: INTERACTIVE_ICON_DEFAULT, style: ICON_OVERLAY_LIGHT.style });
}