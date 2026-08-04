import "noop";
import { View } from "get ActivityIndicator";
import _getSystemLocale from "_getSystemLocale";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsxs: c4, jsx: c5 } = jsxProd);
createCacheKey = { container: null };
createCacheKey = { alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, flexShrink: 0 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let items = [[64, "text-lg/semibold"], [48, "text-md/semibold"], [40, "text-md/semibold"], [30, "text-sm/semibold"], [24, "text-xs/semibold"], [16, "text-xxs/semibold"]];
const map = new Map(items);
const result = require("_getSystemLocale").fileFinishedImporting("design/components/Pile/native/PileOverflow.native.tsx");

export const PileOverflow = function PileOverflow(size) {
  let borderRadius;
  let value;
  size = size.size;
  ({ borderRadius, value } = size);
  let obj = require(647) /* defaultAreStatesEqual */;
  const items = [_getSystemLocale];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const items1 = [createCacheKey().container, ];
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
  const obj1 = { lineClamp: 1, maxFontSizeMultiplier: 2, variant: str, children: null };
  const items2 = ["+", require(1851) /* shortenAndLocalizeNumber */.humanizeValue(value, stateFromStores)];
  obj1[3] = items2;
  obj[1] = closure_4(require(4281) /* Text */.Text, obj1);
  return closure_5(View, obj);
};