// === Module 15452: EmojiSmilingFaceWithHornsIcon ===

// Module 15452 (EmojiSmilingFaceWithHornsIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod15453 from "module_15453" /* 15453 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/EmojiSmilingFaceWithHornsIcon.tsx");

export const EmojiSmilingFaceWithHornsIcon = function EmojiSmilingFaceWithHornsIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15453, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};