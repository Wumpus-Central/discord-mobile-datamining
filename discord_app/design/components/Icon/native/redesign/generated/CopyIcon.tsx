// === Module 4322: CopyIcon ===

// Module 4322 (CopyIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import BaseIconImage from "BaseIconImage" /* 4096 */;
import registerAsset from "registerAsset" /* 4323 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("design/components/Icon/native/redesign/generated/CopyIcon.tsx");

export const CopyIcon = function CopyIcon(tmp6Result) {
  let INTERACTIVE_ICON_DEFAULT = tmp6Result.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(tmp6Result, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: registerAsset, color: INTERACTIVE_ICON_DEFAULT, style: tmp6Result.style });
};