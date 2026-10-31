// === Module 18039: MainTabs ===

// Module 18039 (MainTabs)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import native from "native" /* 5080 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5194 */;
import useChatLayoutDefault from "useChatLayout" /* 5201 */;
import useToken from "useToken" /* 5596 */;
import useActiveTheme from "useActiveTheme" /* 9823 */;
import ThemedGradientDefault from "ThemedGradient" /* 10736 */;
import MainTabsNavigatorPanelDefault from "MainTabsNavigatorPanel" /* 18040 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5014);
let closure_7 = createStyles.createStyles((paddingLeft, paddingRight, marginTop, top) => {
  const obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingLeft, paddingRight }, content: { flex: 1 }, frameContainer: null, frameContent: null, framePanels: null, frameBorderClip: null, frameBorder: null };
  const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingTop: null };
  let num = 0;
  if (marginTop <= 0) {
    num = nativeDefault.space.PX_16;
  }
  obj3.paddingTop = num;
  obj.frameContainer = obj3;
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, paddingLeft, paddingRight };
  obj.frameContent = { marginTop, borderTopRightRadius: nativeDefault.radii.md, overflow: "hidden" };
  obj.framePanels = { marginTop: -marginTop };
  const obj5 = {};
  const merged = Object.assign(React3.absoluteFillObject);
  obj5.top = top;
  obj5.left = undefined;
  obj5.width = nativeDefault.radii.md;
  obj5.overflow = "hidden";
  obj.frameBorderClip = obj5;
  const obj6 = {};
  const merged1 = Object.assign(React3.absoluteFillObject);
  obj6.top = -top;
  obj6.borderTopRightRadius = nativeDefault.radii.md;
  obj6.borderTopWidth = nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH;
  obj6.borderRightWidth = nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH;
  obj6.borderColor = nativeDefault.colors.APP_FRAME_BORDER;
  obj.frameBorder = obj6;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/MainTabs.tsx");

export default noop.memo(function MainTabs() {
  const tmp3 = useColorThemeBackgroundDefault();
  const isCustomThemeActive = useActiveTheme.useIsCustomThemeActive();
  ({ left, right, top } = useSafeAreaInsetsDefault());
  let isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const tmp6 = useSafeAreaInsetsDefault();
  const tmp7 = closure_7(left, right, top, useToken.useToken(nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH));
  if (isChatLockedOpen) {
    isChatLockedOpen = right > 0;
  }
  const items = [tmp7.container, ];
  let frameContainer = isChatLockedOpen;
  if (isChatLockedOpen) {
    frameContainer = tmp7.frameContainer;
  }
  const obj3 = { style: items, children: null };
  items[1] = frameContainer;
  const obj4 = { gradient: tmp3, children: null };
  if (left > 0) {
    let tmp8Result = null;
    if (!isChatLockedOpen) {
      tmp8Result = hasOwnProperty(ThemedGradientDefault, { absolute: true, mix: true });
    }
  } else {
    tmp8Result = null;
  }
  const items1 = [tmp8Result, ];
  const items2 = [tmp7.content, ];
  let frameContent = isChatLockedOpen;
  if (isChatLockedOpen) {
    frameContent = tmp7.frameContent;
  }
  const obj5 = { style: items2, children: null };
  items2[1] = frameContent;
  const items3 = [hasOwnProperty(ThemedGradientDefault, { absolute: true, mix: isCustomThemeActive }), , ];
  const items4 = [tmp7.content, ];
  let framePanels = isChatLockedOpen;
  if (isChatLockedOpen) {
    framePanels = tmp7.framePanels;
  }
  const obj6 = { style: items4, children: hasOwnProperty(MainTabsNavigatorPanelDefault, { showHeaderGradient: !isChatLockedOpen }) };
  items4[1] = framePanels;
  items3[1] = hasOwnProperty(React4, obj6);
  let tmp8Result2 = null;
  if (isChatLockedOpen) {
    const obj8 = { style: tmp7.frameBorderClip, pointerEvents: "none", children: null };
    const obj9 = { style: tmp7.frameBorder };
    obj8.children = hasOwnProperty(React4, obj9);
    tmp8Result2 = hasOwnProperty(React4, obj8);
  }
  items3[2] = tmp8Result2;
  obj5.children = items3;
  items1[1] = timestampProducer(React4, obj5);
  obj4.children = items1;
  obj3.children = timestampProducer(native.ThemeContextProvider, obj4);
  return hasOwnProperty(React4, obj3);
});