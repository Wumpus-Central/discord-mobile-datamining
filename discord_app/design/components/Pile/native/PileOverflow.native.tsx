// === Module 11789: map ===

// Module 11789 (map)
import noopAll from "noop" /* 19 */;
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import ThemesDefault from "Themes" /* 712 */;
import shortenAndLocalizeNumber from "shortenAndLocalizeNumber" /* 1898 */;
import Text from "Text" /* 4734 */;
import { View } from "get ActivityIndicator" /* 17 */;
import _getSystemLocale from "_getSystemLocale" /* 1994 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsxs: c4, jsx: c5 } = jsxProd);
const createCacheKey = { alignItems: "center", justifyContent: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, flexShrink: 0 };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
let items = [[64, "text-lg/semibold"], [48, "text-md/semibold"], [40, "text-md/semibold"], [30, "text-sm/semibold"], [24, "text-xs/semibold"], [16, "text-xxs/semibold"]];
const map = new Map(items);
const result = require("obj132").fileFinishedImporting("design/components/Pile/native/PileOverflow.native.tsx");

export const PileOverflow = function PileOverflow(size) {
  size = size.size;
  ({ borderRadius, value } = size);
  let obj = defaultAreStatesEqual;
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [callback().container, ];
  obj = { borderRadius, minWidth: size, height: size, paddingHorizontal: null };
  let num = 4;
  if (size >= 32) {
    num = 8;
  }
  obj = { style: items1, children: null };
  obj[3] = num;
  items1[1] = obj;
  let str = map.get(size);
  if (str == null) {
    str = "text-md/semibold";
  }
  obj1 = { lineClamp: 1, maxFontSizeMultiplier: 2, variant: str, children: null };
  const items2 = ["+", shortenAndLocalizeNumber.humanizeValue(value, stateFromStores)];
  obj1[3] = items2;
  obj[1] = callback(Text.Text, obj1);
  return callback2(View, obj);
};