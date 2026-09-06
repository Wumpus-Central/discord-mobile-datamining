// === Module 12154: AppLauncherCommandViewHeader ===

// Module 12154 (AppLauncherCommandViewHeader)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 12051 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AppLauncherNativeConstants = fn(1482);
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const sum = fn(12131).BACK_BUTTON_SIZE + 2 * DEFAULT_CONTENT_PADDING + 36 + 4;
const TOTAL_SCROLL_RANGE = sum - 56;
fn(4560);
let createStyles = { headerContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", position: "absolute", top: -16, left: 0, right: 0, padding: DEFAULT_CONTENT_PADDING, zIndex: 1 }, loadingHeaderContainer: null, appIconMask: null, appIcon: null, loadingIcon: null, appSmallName: null, icon: null, headerBannerOverlay: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.loadingHeaderContainer = createStyles;
const rect = { position: "absolute", padding: 4, bottom: -36, left: "50%", backgroundColor: AppLauncherNativeConstants.SCREEN_BACKGROUND_COLOR, borderRadius: nativeDefault.radii.xl + 4 };
createStyles.appIconMask = rect;
let size = { width: 72, height: 72, borderRadius: nativeDefault.radii.xl };
createStyles.appIcon = size;
createStyles.loadingIcon = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles.appSmallName = { textAlign: "center", pointerEvents: "none", flexGrow: 1, marginHorizontal: 8 };
let obj2 = { transform: null };
let items = [{ rotate: "180deg" }];
obj2.transform = items;
createStyles.icon = obj2;
createStyles.headerBannerOverlay = { backgroundColor: "black", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
createStyles = createStyles.createStyles(createStyles);
const __initData = { code: "function AppLauncherCommandViewHeaderTsx1(){const{interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,1],'clamp'),transform:[{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[12,0],'clamp')}]};}" };
const __initData2 = { code: "function AppLauncherCommandViewHeaderTsx2(){const{APP_ICON_SIZE,APP_ICON_BORDER_WIDTH,DEFAULT_CONTENT_PADDING,interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{transform:[{translateX:-APP_ICON_SIZE/2-APP_ICON_BORDER_WIDTH+DEFAULT_CONTENT_PADDING},{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,-APP_ICON_SIZE/2],'clamp')},{scale:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],'clamp')};}" };
const __initData3 = { code: "function AppLauncherCommandViewHeaderTsx3(){const{interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,0.5],'clamp')};}" };
size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/AppLauncherCommandViewHeader.tsx");

export const COLLAPSED_HEADER_HEIGHT = 56;
export const EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT = sum + -16;
export const useStyles = createStyles;
export const AppLauncherCommandViewHeader = function AppLauncherCommandViewHeader(onPress) {
  ({ command, scrollOffsetY } = onPress);
  const section = onPress.section;
  const tmp = createStyles();
  let items = [section];
  const memo = noop.useMemo(() => {
    let application;
    if (section != null) {
      application = section.application;
    }
    return AppLauncherNativeUtils.getAppLauncherIconSource(application);
  }, items);
  let obj = scrollOffsetY(4296);
  class A {
    constructor() {
      obj = { opacity: null, transform: null };
      obj2 = closure_0(closure_2[8]);
      items = [0];
      items[1] = closure_8;
      obj.opacity = obj2.interpolate(scrollOffsetY.get(), items, [0, 1], "clamp");
      obj = { translateY: null };
      obj4 = closure_0(closure_2[8]);
      items1 = [0];
      items1[1] = closure_8;
      obj.translateY = obj4.interpolate(scrollOffsetY.get(), items1, [12, 0], "clamp");
      items2 = [];
      items2[0] = obj;
      obj.transform = items2;
      return obj;
    }
  }
  obj = { interpolate: scrollOffsetY(4296).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  A.__closure = obj;
  A.__workletHash = 15596175827193;
  A.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(A);
  let obj2 = scrollOffsetY(4296);
  class E {
    constructor() {
      obj = { transform: null, opacity: null };
      obj = { translateX: -40 + DEFAULT_CONTENT_PADDING };
      items = [, , ];
      items[0] = obj;
      obj1 = { translateY: null };
      obj4 = closure_0(closure_2[8]);
      items1 = [0];
      items1[1] = closure_8;
      obj1.translateY = obj4.interpolate(scrollOffsetY.get(), items1, [0, -36], "clamp");
      items[1] = obj1;
      obj2 = { scale: null };
      obj6 = closure_0(closure_2[8]);
      items2 = [0];
      items2[1] = closure_8;
      obj2.scale = obj6.interpolate(scrollOffsetY.get(), items2, [1, 0], "clamp");
      items[2] = obj2;
      obj.transform = items;
      obj7 = closure_0(closure_2[8]);
      items3 = [0];
      items3[1] = closure_8;
      obj.opacity = obj7.interpolate(scrollOffsetY.get(), items3, [1, 0], "clamp");
      return obj;
    }
  }
  obj = { APP_ICON_SIZE: 72, APP_ICON_BORDER_WIDTH: 4, DEFAULT_CONTENT_PADDING, interpolate: scrollOffsetY(4296).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  E.__closure = obj;
  E.__workletHash = 13563524587234;
  E.__initData = __initData2;
  const animatedStyle1 = obj2.useAnimatedStyle(E);
  let obj4 = scrollOffsetY(4296);
  class N {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[8]);
      items = [0];
      items[1] = closure_8;
      obj.opacity = obj2.interpolate(scrollOffsetY.get(), items, [0, 0.5], "clamp");
      return obj;
    }
  }
  N.__closure = { interpolate: scrollOffsetY(4296).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  N.__workletHash = 2637023147700;
  N.__initData = __initData3;
  const animatedStyle2 = obj4.useAnimatedStyle(N);
  let obj6 = scrollOffsetY(4262);
  let str = obj6.useToken(section(576).colors.BACKGROUND_BASE_LOW);
  let obj1 = { interpolate: scrollOffsetY(4296).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  if (typeof memo !== "number") {
    let uri;
    if (memo != null) {
      uri = memo.uri;
    }
  }
  if (str == null) {
    str = "";
  }
  const tmp9 = section(8132);
  if (null != memo) {
    obj2 = { style: tmp.appIcon, source: memo };
    let tmp15 = closure_6(tmp8(5587), obj2);
    let tmp16 = closure_6;
  } else {
    const obj3 = { style: null };
    let items1 = [, ];
    ({ appIcon: arr2[0], loadingIcon: arr2[1] } = tmp);
    obj3.style = items1;
    tmp15 = closure_6(View, obj3);
    tmp16 = closure_6;
  }
  let items2 = [tmp.headerContainer, ];
  if (null == command) {
    let prop = tmp.loadingHeaderContainer;
  } else {
    prop = { backgroundColor: tmp9Result };
  }
  obj4 = { style: items2, children: null };
  items2[1] = prop;
  const obj5 = { style: null };
  let items3 = [tmp.headerBannerOverlay, animatedStyle2];
  obj5.style = items3;
  const items4 = [tmp16(section(4296).View, obj5), tmp16(section(12131), { onPress: onPress.onPressBack }), , , ];
  obj6 = { lineClamp: 1, animated: true, style: null, variant: "heading-lg/bold", color: "text-overlay-light", children: null };
  const items5 = [tmp.appSmallName, animatedStyle];
  obj6.style = items5;
  let displayName;
  if (command != null) {
    displayName = command.displayName;
  }
  obj6.children = displayName;
  items4[2] = tmp16(scrollOffsetY(4556).Text, obj6);
  items4[3] = tmp16(scrollOffsetY(1178).Spacer, { size: 32 });
  const obj7 = { style: null, children: tmp15 };
  const items6 = [tmp.appIconMask, animatedStyle1];
  obj7.style = items6;
  items4[4] = tmp16(section(4296).View, obj7);
  obj4.children = items4;
  return closure_7(View, obj4);
};