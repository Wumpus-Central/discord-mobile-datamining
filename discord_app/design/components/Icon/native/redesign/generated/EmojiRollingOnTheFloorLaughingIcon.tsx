// === Module 17539: EmojiRollingOnTheFloorLaughingIcon ===

// Module 17539 (EmojiRollingOnTheFloorLaughingIcon)
import nativeDefault from "native" /* 575 */;
import BaseIconImage from "BaseIconImage" /* 5836 */;
import _mod17540 from "module_17540" /* 17540 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/EmojiRollingOnTheFloorLaughingIcon.tsx");

export function EmojiRollingOnTheFloorLaughingIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod17540, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
}