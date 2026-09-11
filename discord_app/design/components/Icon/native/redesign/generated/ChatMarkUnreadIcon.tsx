// === Module 10333: ChatMarkUnreadIcon ===

// Module 10333 (ChatMarkUnreadIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod10334 from "module_10334" /* 10334 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ChatMarkUnreadIcon.tsx");

export const ChatMarkUnreadIcon = function ChatMarkUnreadIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod10334, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};