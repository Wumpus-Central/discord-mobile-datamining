// discord_app/modules/main_tabs_v2/native/MainTabs.tsx
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import ManaContext from "../../../../discord_common/js/packages/design/native.tsx";
import getGuildThemeNameDefault from "../../client_themes/native/useColorThemeBackground.tsx";
import getMixedGradientColorDefault from "../../client_themes/native/ThemedGradient.tsx";
import useActiveThemeType from "../../client_themes/native/useActiveTheme.tsx";
import _modDef15825 from "panels/MainTabsNavigatorPanel.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";

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
  const items1 = [
    callback(getMixedGradientColorDefault, { absolute: true, mix: isCustomThemeActive }),
    callback(_modDef15825, {}),
  ];
  obj[1] = items1;
  obj[1] = callback2(ManaContext.ThemeContextProvider, obj);
  return callback(View, obj);
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default memoResult;
