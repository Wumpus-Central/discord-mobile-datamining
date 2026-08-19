// === Module 14658: CircleMinusIcon ===

// Module 14658 (CircleMinusIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import BaseIconImage from "BaseIconImage" /* 4096 */;
import registerAsset from "registerAsset" /* 14659 */;
import registerAsset2 from "registerAsset" /* 14660 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const result = require("obj132").fileFinishedImporting("design/components/Icon/native/redesign/generated/CircleMinusIcon.tsx");

export const CircleMinusIcon = function CircleMinusIcon(color) {
  ({ style, secondaryColor } = color);
  if (secondaryColor === undefined) {
    secondaryColor = "transparent";
  }
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  let obj = { source: registerAsset, color: secondaryColor, style };
  const merged1 = Object.assign(merged);
  const items = [callback(BaseIconImage.BaseIconImage, obj), ];
  obj = { source: registerAsset2, color: INTERACTIVE_ICON_DEFAULT, style: items2 };
  const items1 = [style];
  items2 = [];
  items2[HermesBuiltin.arraySpread(items1.flat(), 0)] = { position: "absolute", top: 0 };
  const merged2 = Object.assign(merged);
  items[1] = callback(BaseIconImage.BaseIconImage, obj);
  obj[0] = items;
  return callback2(View, obj);
};