// discord_app/modules/main_tabs_v2/native/MainTabs.tsx
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import useColorThemeBackgroundDefault from "../../client_themes/native/useColorThemeBackground.tsx";
import ThemedGradientDefault from "../../client_themes/native/ThemedGradient.tsx";
import useActiveTheme from "../../client_themes/native/useActiveTheme.tsx";
import MainTabsNavigatorPanelDefault from "panels/MainTabsNavigatorPanel.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ container: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default noop.memo(function MainTabs() {
  let obj = useActiveTheme;
  const isCustomThemeActive = obj.useIsCustomThemeActive();
  const tmp = useColorThemeBackgroundDefault();
  const rect = useSafeAreaInsetsDefault();
  obj = { style: null, children: null };
  const items = [closure_6().container, { marginLeft: rect.left, marginRight: rect.right }];
  obj.style = items;
  obj = { gradient: tmp, children: null };
  const items1 = [
    React4(ThemedGradientDefault, { absolute: true, mix: isCustomThemeActive }),
    React4(MainTabsNavigatorPanelDefault, {}),
  ];
  obj.children = items1;
  obj.children = hasOwnProperty(native.ThemeContextProvider, obj);
  return React4(View, obj);
});
