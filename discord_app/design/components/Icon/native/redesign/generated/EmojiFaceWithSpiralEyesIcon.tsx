// === Module 15728: EmojiFaceWithSpiralEyesIcon ===

// Module 15728 (EmojiFaceWithSpiralEyesIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4525 */;
import _mod15729 from "module_15729" /* 15729 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/EmojiFaceWithSpiralEyesIcon.tsx");

export const EmojiFaceWithSpiralEyesIcon = function EmojiFaceWithSpiralEyesIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod15729, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};