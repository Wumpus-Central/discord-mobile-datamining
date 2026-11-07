// === Module 9521: ExperimentalGameControllerLinkIcon ===

// Module 9521 (ExperimentalGameControllerLinkIcon)
import nativeDefault from "native" /* 575 */;
import BaseIconImage from "BaseIconImage" /* 5841 */;
import _mod9522 from "module_9522" /* 9522 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ExperimentalGameControllerLinkIcon.tsx");

export function ExperimentalGameControllerLinkIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod9522, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
}