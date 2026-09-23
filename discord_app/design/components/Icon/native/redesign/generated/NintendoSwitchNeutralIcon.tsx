// === Module 9241: NintendoSwitchNeutralIcon ===

// Module 9241 (NintendoSwitchNeutralIcon)
import nativeDefault from "native" /* 576 */;
import BaseIconImage from "BaseIconImage" /* 4523 */;
import _mod9242 from "module_9242" /* 9242 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/NintendoSwitchNeutralIcon.tsx");

export const NintendoSwitchNeutralIcon = function NintendoSwitchNeutralIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, color: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: _mod9242, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};