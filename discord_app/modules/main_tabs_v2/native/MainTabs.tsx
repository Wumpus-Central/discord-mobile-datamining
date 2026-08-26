// === Module 15441: ? ===

// Module 15441
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import ManaContext from "ManaContext" /* 4172 */;
import getGuildThemeNameDefault from "getGuildThemeName" /* 4294 */;
import getMixedGradientColorDefault from "getMixedGradientColor" /* 5017 */;
import useActiveThemeType from "useActiveThemeType" /* 8618 */;
import _modDef15442 from "module_15442" /* 15442 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;
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
  const items1 = [callback(getMixedGradientColorDefault, { absolute: true, mix: isCustomThemeActive }), callback(_modDef15442, {})];
  obj[1] = items1;
  obj[1] = callback2(ManaContext.ThemeContextProvider, obj);
  return callback(View, obj);
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default memoResult;