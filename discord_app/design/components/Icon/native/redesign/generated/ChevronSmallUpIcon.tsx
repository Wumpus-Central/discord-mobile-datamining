// === Module 11025: ChevronSmallUpIcon ===

// Module 11025 (ChevronSmallUpIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import BaseIconImage from "BaseIconImage" /* 4164 */;
import registerAsset from "registerAsset" /* 11026 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Icon/native/redesign/generated/ChevronSmallUpIcon.tsx");

export const ChevronSmallUpIcon = function ChevronSmallUpIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: registerAsset, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};