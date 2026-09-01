// === Module 15593: ? ===

// Module 15593
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import ManaContext from "ManaContext" /* 4204 */;
import getGuildThemeNameDefault from "getGuildThemeName" /* 4328 */;
import getMixedGradientColorDefault from "getMixedGradientColor" /* 5070 */;
import useActiveThemeType from "useActiveThemeType" /* 7618 */;
import _modDef15594 from "module_15594" /* 15594 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { flex: 1 } });
const memoResult = importAllResult.memo(function MainTabs() {
  let obj = useActiveThemeType;
  const isCustomThemeActive = obj.useIsCustomThemeActive();
  const tmp = getGuildThemeNameDefault();
  const rect = useSafeAreaInsetsDefault();
  obj = { style: items, children: null };
  items = [callback3().container, { marginLeft: rect.left, marginRight: rect.right }];
  obj = { gradient: tmp, children: null };
  const items1 = [callback(getMixedGradientColorDefault, { absolute: true, mix: isCustomThemeActive }), callback(_modDef15594, {})];
  obj[1] = items1;
  obj[1] = callback2(ManaContext.ThemeContextProvider, obj);
  return callback(View, obj);
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default memoResult;