// === Module 15362: ? ===

// Module 15362
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import ManaContext from "ManaContext" /* 4108 */;
import getGuildThemeNameDefault from "getGuildThemeName" /* 4230 */;
import getMixedGradientColorDefault from "getMixedGradientColor" /* 4951 */;
import useActiveThemeType from "useActiveThemeType" /* 8550 */;
import _modDef15363 from "module_15363" /* 15363 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;
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
  const items1 = [callback(getMixedGradientColorDefault, { absolute: true, mix: isCustomThemeActive }), callback(_modDef15363, {})];
  obj[1] = items1;
  obj[1] = callback2(ManaContext.ThemeContextProvider, obj);
  return callback(View, obj);
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default memoResult;