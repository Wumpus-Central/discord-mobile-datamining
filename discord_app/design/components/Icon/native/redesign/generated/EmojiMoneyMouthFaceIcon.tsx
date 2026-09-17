// === Module 15496: EmojiMoneyMouthFaceIcon ===

// Module 15496 (EmojiMoneyMouthFaceIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4340 */;
import _mod15497 from "module_15497" /* 15497 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/EmojiMoneyMouthFaceIcon.tsx");

export const EmojiMoneyMouthFaceIcon = function EmojiMoneyMouthFaceIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15497, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};