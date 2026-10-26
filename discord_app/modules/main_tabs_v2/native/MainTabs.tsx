// === Module 17422: MainTabs ===

// Module 17422 (MainTabs)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import native from "native" /* 5037 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5146 */;
import useActiveTheme from "useActiveTheme" /* 9710 */;
import ThemedGradientDefault from "ThemedGradient" /* 10625 */;
import MainTabsNavigatorPanelDefault from "MainTabsNavigatorPanel" /* 17423 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4971);
let closure_6 = createStyles.createStyles((paddingLeft, paddingRight) => {
  const obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingLeft, paddingRight }, contentGradient: { left: paddingLeft, right: paddingRight } };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MainTabs() {
  const cResult = c.c(14);
  const tmp5 = useColorThemeBackgroundDefault();
  const isCustomThemeActive = useActiveTheme.useIsCustomThemeActive();
  ({ left, right } = useSafeAreaInsetsDefault());
  const tmp8 = closure_6(left, right);
  if (cResult[0] === left) {
    if (cResult[1] === right) {
      let tmp9 = cResult[2];
    }
    if (cResult[3] === isCustomThemeActive) {
      if (cResult[4] === tmp8.contentGradient) {
        let tmp12 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp18 = React4(MainTabsNavigatorPanelDefault, {});
        cResult[6] = tmp18;
        let tmp16 = tmp18;
      } else {
        tmp16 = cResult[6];
      }
      if (cResult[7] === tmp5) {
        if (cResult[8] === tmp9) {
          if (cResult[9] === tmp12) {
            let tmp19 = cResult[10];
          }
          if (cResult[11] === tmp8.container) {
            if (cResult[12] === tmp19) {
              let tmp22 = cResult[13];
            }
            return tmp22;
          }
          const obj3 = { style: tmp8.container, children: tmp19 };
          const tmp25 = React4(View, obj3);
          cResult[11] = tmp8.container;
          cResult[12] = tmp19;
          cResult[13] = tmp25;
          tmp22 = tmp25;
        }
      }
      const obj4 = { gradient: tmp5, children: null };
      const items = [tmp9, tmp12, tmp16];
      obj4.children = items;
      const tmp21 = hasOwnProperty(native.ThemeContextProvider, obj4);
      cResult[7] = tmp5;
      cResult[8] = tmp9;
      cResult[9] = tmp12;
      cResult[10] = tmp21;
      tmp19 = tmp21;
    }
    const obj5 = { absolute: true, mix: isCustomThemeActive, componentStyles: tmp8.contentGradient };
    const tmp14 = React4(ThemedGradientDefault, obj5);
    cResult[3] = isCustomThemeActive;
    cResult[4] = tmp8.contentGradient;
    cResult[5] = tmp14;
    tmp12 = tmp14;
  }
  if (left > 0) {
    let tmp10 = React4(ThemedGradientDefault, { absolute: true, mix: true });
  } else {
    tmp10 = null;
  }
  cResult[0] = left;
  cResult[1] = right;
  cResult[2] = tmp10;
  tmp9 = tmp10;
  const tmp7 = useSafeAreaInsetsDefault();
}) : (function MainTabs() {
  const tmp3 = useColorThemeBackgroundDefault();
  const isCustomThemeActive = useActiveTheme.useIsCustomThemeActive();
  ({ left, right } = useSafeAreaInsetsDefault());
  const tmp6 = closure_6(left, right);
  const obj2 = { style: tmp6.container, children: null };
  const obj3 = { gradient: tmp3, children: null };
  if (left > 0) {
    let tmp7Result = React4(ThemedGradientDefault, { absolute: true, mix: true });
  } else {
    tmp7Result = null;
  }
  const items = [tmp7Result, React4(ThemedGradientDefault, { absolute: true, mix: isCustomThemeActive, componentStyles: tmp6.contentGradient }), React4(MainTabsNavigatorPanelDefault, {})];
  obj3.children = items;
  obj2.children = hasOwnProperty(native.ThemeContextProvider, obj3);
  return React4(View, obj2);
}));