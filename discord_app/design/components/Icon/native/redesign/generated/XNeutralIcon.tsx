// === Module 8309: XNeutralIcon ===

// Module 8309 (XNeutralIcon)
import noopAll from "noop" /* 19 */;
import BaseIconImage from "BaseIconImage" /* 4096 */;
import registerAsset from "registerAsset" /* 8310 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("design/components/Icon/native/redesign/generated/XNeutralIcon.tsx");

export const XNeutralIcon = function XNeutralIcon(color) {
  let str = color.color;
  if (str === undefined) {
    str = "#4E5058";
  }
  const merged = Object.assign(color, Object.create(null));
  const merged1 = Object.assign(merged);
  return jsx(BaseIconImage.BaseIconImage, { source: registerAsset, color: str, style: color.style });
};