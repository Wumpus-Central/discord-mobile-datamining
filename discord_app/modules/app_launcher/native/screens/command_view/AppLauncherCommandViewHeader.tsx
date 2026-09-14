// === Module 12284: AppLauncherCommandViewHeader ===

// Module 12284 (AppLauncherCommandViewHeader)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4373 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 12181 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const AppLauncherNativeConstants = fn(1482);
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const sum = fn(12261).BACK_BUTTON_SIZE + 2 * DEFAULT_CONTENT_PADDING + 36 + 4;
const TOTAL_SCROLL_RANGE = sum - 56;
const createStyles = fn(4636);
let obj2 = { headerContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", position: "absolute", top: -16, left: 0, right: 0, padding: DEFAULT_CONTENT_PADDING, zIndex: 1 }, loadingHeaderContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, appIconMask: null, appIcon: null, loadingIcon: null, appSmallName: null, icon: null, headerBannerOverlay: null };
const rect = { position: "absolute", padding: 4, bottom: -36, left: "50%", backgroundColor: AppLauncherNativeConstants.SCREEN_BACKGROUND_COLOR, borderRadius: nativeDefault.radii.xl + 4 };
obj2.appIconMask = rect;
let size = { width: 72, height: 72, borderRadius: nativeDefault.radii.xl };
obj2.appIcon = size;
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.loadingIcon = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.appSmallName = { textAlign: "center", pointerEvents: "none", flexGrow: 1, marginHorizontal: 8 };
let obj5 = { transform: null };
let items = [{ rotate: "180deg" }];
obj5.transform = items;
obj2.icon = obj5;
obj2.headerBannerOverlay = { backgroundColor: "black", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
const styles = createStyles.createStyles(obj2);
const __initData = { code: "function AppLauncherCommandViewHeaderTsx1(){const{interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,1],'clamp'),transform:[{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[12,0],'clamp')}]};}" };
const __initData2 = { code: "function AppLauncherCommandViewHeaderTsx2(){const{APP_ICON_SIZE,APP_ICON_BORDER_WIDTH,DEFAULT_CONTENT_PADDING,interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{transform:[{translateX:-APP_ICON_SIZE/2-APP_ICON_BORDER_WIDTH+DEFAULT_CONTENT_PADDING},{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,-APP_ICON_SIZE/2],'clamp')},{scale:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],'clamp')};}" };
const __initData3 = { code: "function AppLauncherCommandViewHeaderTsx3(){const{interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,0.5],'clamp')};}" };
size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/AppLauncherCommandViewHeader.tsx");

export const COLLAPSED_HEADER_HEIGHT = 56;
export const EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT = sum + -16;
export const useStyles = styles;
export const AppLauncherCommandViewHeader = function AppLauncherCommandViewHeader(onPress) {
  ({ command, scrollOffsetY } = onPress);
  const section = onPress.section;
  const tmp = styles();
  let items = [section];
  const memo = noop.useMemo(() => {
    let application;
    if (section != null) {
      application = section.application;
    }
    return AppLauncherNativeUtils.getAppLauncherIconSource(application);
  }, items);
  class A {
    constructor() {
      obj = { opacity: null, transform: null };
      obj2 = closure_0(closure_2[8]);
      items = [0];
      items[1] = closure_8;
      obj.opacity = obj2.interpolate(scrollOffsetY.get(), items, [0, 1], "clamp");
      obj1 = { translateY: null };
      obj4 = closure_0(closure_2[8]);
      items1 = [0];
      items1[1] = closure_8;
      obj1.translateY = obj4.interpolate(scrollOffsetY.get(), items1, [12, 0], "clamp");
      items2 = [];
      items2[0] = obj1;
      obj.transform = items2;
      return obj;
    }
  }
  let obj = scrollOffsetY(4373);
  A.__closure = { interpolate: scrollOffsetY(4373).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  A.__workletHash = 15596175827193;
  A.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(A);
  let obj2 = { interpolate: scrollOffsetY(4373).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  class E {
    constructor() {
      obj = { transform: null, opacity: null };
      obj1 = { translateX: -40 + DEFAULT_CONTENT_PADDING };
      items = [, , ];
      items[0] = obj1;
      obj8 = { translateY: null };
      obj4 = closure_0(closure_2[8]);
      items1 = [0];
      items1[1] = closure_8;
      obj8.translateY = obj4.interpolate(scrollOffsetY.get(), items1, [0, -36], "clamp");
      items[1] = obj8;
      obj9 = { scale: null };
      obj6 = closure_0(closure_2[8]);
      items2 = [0];
      items2[1] = closure_8;
      obj9.scale = obj6.interpolate(scrollOffsetY.get(), items2, [1, 0], "clamp");
      items[2] = obj9;
      obj.transform = items;
      obj7 = closure_0(closure_2[8]);
      items3 = [0];
      items3[1] = closure_8;
      obj.opacity = obj7.interpolate(scrollOffsetY.get(), items3, [1, 0], "clamp");
      return obj;
    }
  }
  let obj3 = scrollOffsetY(4373);
  E.__closure = { APP_ICON_SIZE: 72, APP_ICON_BORDER_WIDTH: 4, DEFAULT_CONTENT_PADDING, interpolate: scrollOffsetY(4373).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  E.__workletHash = 13563524587234;
  E.__initData = __initData2;
  const animatedStyle1 = obj3.useAnimatedStyle(E);
  let obj4 = { APP_ICON_SIZE: 72, APP_ICON_BORDER_WIDTH: 4, DEFAULT_CONTENT_PADDING, interpolate: scrollOffsetY(4373).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
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
  let obj5 = scrollOffsetY(4373);
  N.__closure = { interpolate: scrollOffsetY(4373).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  N.__workletHash = 2637023147700;
  N.__initData = __initData3;
  const animatedStyle2 = obj5.useAnimatedStyle(N);
  let obj6 = { interpolate: scrollOffsetY(4373).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE };
  let str = scrollOffsetY(4338).useToken(section(576).colors.BACKGROUND_BASE_LOW);
  const obj7 = scrollOffsetY(4338);
  if (typeof memo !== "number") {
    let uri;
    if (memo != null) {
      uri = memo.uri;
    }
  }
  if (str == null) {
    str = "";
  }
  const tmp9 = section(8249);
  if (null != memo) {
    const obj8 = { style: tmp.appIcon, source: memo };
    let tmp15 = closure_6(tmp8(5668), obj8);
    let tmp16 = closure_6;
  } else {
    const obj9 = { style: null };
    let items1 = [, ];
    ({ appIcon: arr2[0], loadingIcon: arr2[1] } = tmp);
    obj9.style = items1;
    tmp15 = closure_6(View, obj9);
    tmp16 = closure_6;
  }
  let items2 = [tmp.headerContainer, ];
  if (null == command) {
    let prop = tmp.loadingHeaderContainer;
  } else {
    prop = { backgroundColor: tmp9Result };
  }
  const obj10 = { style: items2, children: null };
  items2[1] = prop;
  const obj11 = { style: null };
  let items3 = [tmp.headerBannerOverlay, animatedStyle2];
  obj11.style = items3;
  const items4 = [tmp16(section(4373).View, obj11), tmp16(section(12261), { onPress: onPress.onPressBack }), , , ];
  const obj12 = { lineClamp: 1, animated: true, style: null, variant: "heading-lg/bold", color: "text-overlay-light", children: null };
  const items5 = [tmp.appSmallName, animatedStyle];
  obj12.style = items5;
  let displayName;
  if (command != null) {
    displayName = command.displayName;
  }
  obj12.children = displayName;
  items4[2] = tmp16(scrollOffsetY(4632).Text, obj12);
  items4[3] = tmp16(scrollOffsetY(1176).Spacer, { size: 32 });
  const obj13 = { style: null, children: tmp15 };
  const items6 = [tmp.appIconMask, animatedStyle1];
  obj13.style = items6;
  items4[4] = tmp16(section(4373).View, obj13);
  obj10.children = items4;
  return closure_7(View, obj10);
};