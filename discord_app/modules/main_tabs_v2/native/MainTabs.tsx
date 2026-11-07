// === Module 18374: MainTabs ===

// Module 18374 (MainTabs)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 5199 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5310 */;
import useToken from "useToken" /* 5724 */;
import useActiveTheme from "useActiveTheme" /* 9913 */;
import ThemedGradientDefault from "ThemedGradient" /* 10855 */;
import useAppFrameDefault from "useAppFrame" /* 18375 */;
import MainTabsNavigatorPanelDefault from "MainTabsNavigatorPanel" /* 18376 */;
import AccountSwitcherRailDefault from "AccountSwitcherRail" /* 19166 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5140);
let closure_7 = createStyles.createStyles((paddingLeft, paddingRight, top) => {
  const obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingLeft, paddingRight }, content: { flex: 1 }, frameBorderClip: null, frameBorderOffset: null };
  const obj3 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj3.top = top;
  obj3.left = undefined;
  obj3.width = nativeDefault.radii.md;
  obj3.overflow = "hidden";
  obj.frameBorderClip = obj3;
  obj.frameBorderOffset = { top: -top };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default noop.memo(function MainTabs() {
  const tmp3 = useColorThemeBackgroundDefault();
  const isCustomThemeActive = useActiveTheme.useIsCustomThemeActive();
  const tmp5 = useAppFrameDefault();
  ({ left, right } = tmp5.insets);
  const styles = tmp5.styles;
  const tmp6 = closure_7(left, right, useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH));
  const obj3 = { style: null, children: null };
  items = [tmp6.container, styles.container];
  obj3.style = items;
  const obj4 = { gradient: tmp3, children: null };
  if (left > 0) {
    let tmp10 = null;
    if (!tmp7) {
      tmp10 = hasOwnProperty(ThemedGradientDefault, { absolute: true, mix: true });
    }
  } else {
    tmp10 = null;
  }
  const items1 = [tmp10, ];
  const obj5 = { style: null, children: null };
  const items2 = [tmp6.content, styles.content];
  obj5.style = items2;
  const items3 = [hasOwnProperty(ThemedGradientDefault, { absolute: true, mix: isCustomThemeActive }), , ];
  const obj6 = { style: null, children: hasOwnProperty(MainTabsNavigatorPanelDefault, { showHeaderGradient: null == styles.container }) };
  const items4 = [tmp6.content, styles.body];
  obj6.style = items4;
  items3[1] = hasOwnProperty(React4, obj6);
  let tmp12Result = null;
  if (null != styles.container) {
    const obj8 = { style: tmp6.frameBorderClip, pointerEvents: "none", children: null };
    const obj9 = { style: null };
    const items5 = [styles.border, tmp6.frameBorderOffset];
    obj9.style = items5;
    obj8.children = hasOwnProperty(React4, obj9);
    tmp12Result = hasOwnProperty(React4, obj8);
  }
  items3[2] = tmp12Result;
  obj5.children = items3;
  items1[1] = timestampProducer(React4, obj5);
  obj4.children = items1;
  const items6 = [timestampProducer(native.ThemeContextProvider, obj4), ];
  let tmp12Result2 = null;
  if (null != styles.container) {
    tmp12Result2 = hasOwnProperty(AccountSwitcherRailDefault, {});
  }
  items6[1] = tmp12Result2;
  obj3.children = items6;
  return timestampProducer(React4, obj3);
});