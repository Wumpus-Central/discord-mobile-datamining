// === Module 9526: FireIcon ===

// Module 9526 (FireIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import BaseIconImage from "BaseIconImage" /* 4096 */;
import registerAsset from "registerAsset" /* 9527 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("design/components/Icon/native/redesign/generated/FireIcon.tsx");

export const FireIcon = function FireIcon(ORANGE_260) {
  let INTERACTIVE_ICON_DEFAULT = ORANGE_260.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(ORANGE_260, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: registerAsset, color: INTERACTIVE_ICON_DEFAULT, style: ORANGE_260.style });
};