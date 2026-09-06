// === Module 16002: MainTabs ===

// Module 16002 (MainTabs)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import native from "native" /* 4271 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4413 */;
import ThemedGradientDefault from "ThemedGradient" /* 5125 */;
import useActiveTheme from "useActiveTheme" /* 7874 */;
import MainTabsNavigatorPanelDefault from "MainTabsNavigatorPanel" /* 16003 */;
import noop from "module_19" /* 19 */;

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
  const items1 = [React4(ThemedGradientDefault, { absolute: true, mix: isCustomThemeActive }), React4(MainTabsNavigatorPanelDefault, {})];
  obj.children = items1;
  obj.children = hasOwnProperty(native.ThemeContextProvider, obj);
  return React4(View, obj);
});