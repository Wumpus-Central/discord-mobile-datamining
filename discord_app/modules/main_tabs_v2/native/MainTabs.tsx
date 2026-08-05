// discord_app/modules/main_tabs_v2/native/MainTabs.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import { ManaContext } from "../../../../discord_common/js/packages/design/native.tsx";
import { getMixedGradientColor } from "../../client_themes/native/ThemedGradient.tsx";
import { useActiveThemeType } from "../../client_themes/native/useActiveTheme.tsx";
import { getGuildThemeName } from "../../client_themes/native/useColorThemeBackground.tsx";
import { useSafeAreaInsets } from "../../safe_area/useSafeAreaInsets.native.tsx";
import { MainTabsNavigatorPanel } from "panels/MainTabsNavigatorPanel.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { flex: 1 } });
const memoResult = require("noop").memo(function MainTabs() {
  let obj = useActiveThemeType;
  const isCustomThemeActive = obj.useIsCustomThemeActive();
  const tmp = getGuildThemeName();
  const rect = useSafeAreaInsets();
  obj = { style: items, children: null };
  items = [callback3().container, { marginLeft: rect.left, marginRight: rect.right }];
  obj = { gradient: tmp, children: null };
  const items1 = [callback(getMixedGradientColor, { absolute: true, mix: isCustomThemeActive }), callback(MainTabsNavigatorPanel, {})];
  obj[1] = items1;
  obj[1] = callback2(ManaContext.ThemeContextProvider, obj);
  return callback(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default memoResult;