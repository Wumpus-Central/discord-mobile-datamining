// discord_app/modules/main_tabs_v2/native/MainTabs.tsx
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
  let obj = require("../../client_themes/native/useActiveTheme.tsx") /* useActiveThemeType */;
  const isCustomThemeActive = obj.useIsCustomThemeActive();
  const tmp = require("../../client_themes/native/useColorThemeBackground.tsx")();
  const rect = require("../../safe_area/useSafeAreaInsets.native.tsx")();
  obj = { style: items, children: null };
  items = [callback3().container, { marginLeft: rect.left, marginRight: rect.right }];
  obj = { gradient: tmp, children: null };
  const items1 = [callback(require("../../client_themes/native/ThemedGradient.tsx"), { absolute: true, mix: isCustomThemeActive }), callback(require("panels/MainTabsNavigatorPanel.tsx"), {})];
  obj[1] = items1;
  obj[1] = callback2(require("../../../../discord_common/js/packages/design/native.tsx") /* ManaContext */.ThemeContextProvider, obj);
  return callback(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default memoResult;