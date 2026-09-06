// === Module 5092: AnnouncementsSpoilerIcon ===

// Module 5092 (AnnouncementsSpoilerIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4261 */;
import _mod5047 from "module_5047" /* 5047 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/AnnouncementsSpoilerIcon.tsx");

export const AnnouncementsSpoilerIcon = function AnnouncementsSpoilerIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod5047, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};