import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { flex: 1 } });
const memoResult = require("noop").memo(function MainTabs() {
  let obj = require(9012) /* useActiveThemeType */;
  const isCustomThemeActive = obj.useIsCustomThemeActive();
  const tmp = importDefault(4102)();
  const rect = importDefault(1581)();
  obj = { style: items, children: null };
  items = [callback3().container, { marginLeft: rect.left, marginRight: rect.right }];
  obj = { gradient: tmp, children: null };
  const items1 = [callback(importDefault(4785), { absolute: true, mix: isCustomThemeActive }), callback(importDefault(15001), {})];
  obj[1] = items1;
  obj[1] = callback2(require(3967) /* ManaContext */.ThemeContextProvider, obj);
  return callback(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default memoResult;