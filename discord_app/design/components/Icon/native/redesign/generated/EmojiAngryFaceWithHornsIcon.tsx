// === Module 15424: EmojiAngryFaceWithHornsIcon ===

// Module 15424 (EmojiAngryFaceWithHornsIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod15425 from "module_15425" /* 15425 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/EmojiAngryFaceWithHornsIcon.tsx");

export const EmojiAngryFaceWithHornsIcon = function EmojiAngryFaceWithHornsIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15425, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};