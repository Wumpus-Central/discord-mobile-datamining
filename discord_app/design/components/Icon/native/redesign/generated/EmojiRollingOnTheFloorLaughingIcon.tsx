// === Module 15486: EmojiRollingOnTheFloorLaughingIcon ===

// Module 15486 (EmojiRollingOnTheFloorLaughingIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4337 */;
import _mod15487 from "module_15487" /* 15487 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/EmojiRollingOnTheFloorLaughingIcon.tsx");

export const EmojiRollingOnTheFloorLaughingIcon = function EmojiRollingOnTheFloorLaughingIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15487, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};