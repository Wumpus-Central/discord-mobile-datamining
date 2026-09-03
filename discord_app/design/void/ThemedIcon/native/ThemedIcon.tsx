// === Module 13980: ThemedIcon ===

// Module 13980 (ThemedIcon)
import noopAll from "noop" /* 19 */;
import map from "map" /* 4197 */;
import IconSizesDefault from "IconSizes" /* 4931 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/void/ThemedIcon/native/ThemedIcon.tsx");

export default function ThemedIcon(themedColor) {
  const merged = Object.assign(themedColor, Object.create(null));
  let obj = map;
  const token = obj.useToken(themedColor.themedColor);
  obj = { color: token };
  const merged1 = Object.assign(merged);
  return jsx(IconSizesDefault, { color: token });
};