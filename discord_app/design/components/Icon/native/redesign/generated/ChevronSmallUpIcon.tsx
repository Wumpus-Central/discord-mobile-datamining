// === Module 13006: ChevronSmallUpIcon ===

// Module 13006 (ChevronSmallUpIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import BaseIconImage from "BaseIconImage" /* 4096 */;
import registerAsset from "registerAsset" /* 11817 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("design/components/Icon/native/redesign/generated/ChevronSmallUpIcon.tsx");

export const ChevronSmallUpIcon = function ChevronSmallUpIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: registerAsset, color: INTERACTIVE_ICON_DEFAULT, style: color.style });
};