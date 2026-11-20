// === Module 17853: ConnectionFineIcon ===

// Module 17853 (ConnectionFineIcon)
import nativeDefault from "native" /* 575 */;
import BaseIconImage from "BaseIconImage" /* 5480 */;
import _mod17854 from "module_17854" /* 17854 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ConnectionFineIcon.tsx");

export function ConnectionFineIcon(color) {
  let ICON_FEEDBACK_POSITIVE = color.color;
  if (ICON_FEEDBACK_POSITIVE === undefined) {
    ICON_FEEDBACK_POSITIVE = nativeDefault.colors.ICON_FEEDBACK_POSITIVE;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod17854, color: ICON_FEEDBACK_POSITIVE, style: color.style });
}