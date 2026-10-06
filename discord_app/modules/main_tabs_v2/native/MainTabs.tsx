// === Module 15963: MainTabs ===

// Module 15963 (MainTabs)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import native from "native" /* 4595 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4738 */;
import ThemedGradientDefault from "ThemedGradient" /* 5918 */;
import useActiveTheme from "useActiveTheme" /* 7520 */;
import MainTabsNavigatorPanelDefault from "MainTabsNavigatorPanel" /* 15964 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { flex: 1 } });
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items;
  let left;
  let right;
  const obj = react2;
  const cResult = obj.c(15);
  const tmp5 = useColorThemeBackgroundDefault();
  const obj2 = useActiveTheme;
  const isCustomThemeActive = obj2.useIsCustomThemeActive();
  const tmp7 = closure_6();
  ({ left, right } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  if (cResult[0] === left) {
    let tmp9;
    if (cResult[1] === right) {
      tmp9 = cResult[2];
    }
    if (cResult[3] === tmp7.container) {
      let tmp10;
      let tmp11;
      let tmp15;
      if (cResult[4] === tmp9) {
        tmp10 = cResult[5];
      }
      if (cResult[6] !== isCustomThemeActive) {
        const obj3 = { absolute: true, mix: isCustomThemeActive };
        const tmp13 = React3(ThemedGradientDefault, obj3);
        cResult[6] = isCustomThemeActive;
        cResult[7] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[7];
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp17 = React3(MainTabsNavigatorPanelDefault, {});
        cResult[8] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[8];
      }
      if (cResult[9] === tmp5) {
        let tmp18;
        if (cResult[10] === tmp11) {
          tmp18 = cResult[11];
        }
        if (cResult[12] === tmp10) {
          let tmp21;
          if (cResult[13] === tmp18) {
            tmp21 = cResult[14];
          }
          return tmp21;
        }
        const obj4 = { style: tmp10, children: tmp18 };
        const tmp24 = React3(View, obj4);
        cResult[12] = tmp10;
        cResult[13] = tmp18;
        cResult[14] = tmp24;
        tmp21 = tmp24;
      }
      const obj5 = { gradient: tmp5, children: items };
      items = [tmp11, tmp15];
      const tmp20 = hasOwnProperty(native.ThemeContextProvider, obj5);
      cResult[9] = tmp5;
      cResult[10] = tmp11;
      cResult[11] = tmp20;
      tmp18 = tmp20;
    }
    const items1 = [tmp7.container, tmp9];
    cResult[3] = tmp7.container;
    cResult[4] = tmp9;
    cResult[5] = items1;
    tmp10 = items1;
  }
  const obj6 = { marginLeft: left, marginRight: right };
  cResult[0] = left;
  cResult[1] = right;
  cResult[2] = obj6;
  tmp9 = obj6;
}) : (() => {
  let ThemeContextProvider;
  let items;
  let items1;
  let obj3;
  const tmp = useColorThemeBackgroundDefault();
  const obj = useActiveTheme;
  const isCustomThemeActive = obj.useIsCustomThemeActive();
  const tmp3 = closure_6();
  const rect = useSafeAreaInsetsDefault();
  const obj2 = { style: items, children: hasOwnProperty(ThemeContextProvider, obj3) };
  items = [tmp3.container, { marginLeft: rect.left, marginRight: rect.right }];
  obj3 = { gradient: tmp, children: items1 };
  ThemeContextProvider = native.ThemeContextProvider;
  items1 = [React3(ThemedGradientDefault, { absolute: true, mix: isCustomThemeActive }), React3(MainTabsNavigatorPanelDefault, {})];
  return React3(View, obj2);
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default memoResult;