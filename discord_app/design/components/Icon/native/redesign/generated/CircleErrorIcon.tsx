// === Module 7655: CircleErrorIcon ===

// Module 7655 (CircleErrorIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import BaseIconImage from "BaseIconImage" /* 4165 */;
import registerAsset from "registerAsset" /* 7656 */;
import registerAsset2 from "registerAsset" /* 7657 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const result = require("set").fileFinishedImporting("design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx");

export const CircleErrorIcon = function CircleErrorIcon(color) {
  ({ style, secondaryColor } = color);
  if (secondaryColor === undefined) {
    secondaryColor = "transparent";
  }
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.create(null));
  let obj = { children: null };
  obj = { source: registerAsset, color: secondaryColor, style };
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