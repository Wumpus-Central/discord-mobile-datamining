// === Module 8859: ShieldUserIcon ===

// Module 8859 (ShieldUserIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import BaseIconImage from "BaseIconImage" /* 4096 */;
import registerAsset from "registerAsset" /* 8337 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("design/components/Icon/native/redesign/generated/ShieldUserIcon.tsx");

export const ShieldUserIcon = function ShieldUserIcon(tmp2Result) {
  let INTERACTIVE_ICON_DEFAULT = tmp2Result.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(tmp2Result, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: registerAsset, color: INTERACTIVE_ICON_DEFAULT, style: tmp2Result.style });
};