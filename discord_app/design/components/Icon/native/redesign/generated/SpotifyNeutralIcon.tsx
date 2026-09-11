// === Module 16151: SpotifyNeutralIcon ===

// Module 16151 (SpotifyNeutralIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4307 */;
import _mod16152 from "module_16152" /* 16152 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/SpotifyNeutralIcon.tsx");

export const SpotifyNeutralIcon = function SpotifyNeutralIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod16152, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};