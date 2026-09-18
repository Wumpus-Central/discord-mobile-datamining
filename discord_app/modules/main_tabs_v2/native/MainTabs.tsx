// === Module 16251: MainTabs ===

// Module 16251 (MainTabs)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import native from "native" /* 4432 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4575 */;
import ThemedGradientDefault from "ThemedGradient" /* 5294 */;
import useActiveTheme from "useActiveTheme" /* 8078 */;
import MainTabsNavigatorPanelDefault from "MainTabsNavigatorPanel" /* 16252 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4722);
let closure_6 = createStyles.createStyles({ container: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default noop.memo(function MainTabs() {
  const tmp = useColorThemeBackgroundDefault();
  const isCustomThemeActive = useActiveTheme.useIsCustomThemeActive();
  const rect = useSafeAreaInsetsDefault();
  const obj2 = { style: null, children: null };
  const items = [closure_6().container, { marginLeft: rect.left, marginRight: rect.right }];
  obj2.style = items;
  const obj3 = { gradient: tmp, children: null };
  const items1 = [React4(ThemedGradientDefault, { absolute: true, mix: isCustomThemeActive }), React4(MainTabsNavigatorPanelDefault, {})];
  obj3.children = items1;
  obj2.children = hasOwnProperty(native.ThemeContextProvider, obj3);
  return React4(View, obj2);
});