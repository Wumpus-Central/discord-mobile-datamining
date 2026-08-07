// discord_app/modules/app_launcher/native/screens/command_view/AppLauncherCommandViewHeader.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
const DEFAULT_CONTENT_PADDING = APP_LAUNCHER_BUILT_IN_SECTION_ICON.DEFAULT_CONTENT_PADDING;
({ jsx: closure_6, jsxs: error } = jsxProd);
const sum = require("AppLauncherBackButton").BACK_BUTTON_SIZE + 2 * DEFAULT_CONTENT_PADDING + 36 + 4;
let closure_8 = sum - 56;
createCacheKey = { headerContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", position: "absolute", top: -16, left: 0, right: 0, padding: DEFAULT_CONTENT_PADDING }, loadingHeaderContainer: null, appIconMask: null, appIcon: null, loadingIcon: null, appSmallName: null, icon: null, headerBannerOverlay: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { position: "absolute", padding: 4, bottom: -36, left: "50%", backgroundColor: APP_LAUNCHER_BUILT_IN_SECTION_ICON.SCREEN_BACKGROUND_COLOR, borderRadius: require("Themes").radii.xl + 4 };
let obj1 = { position: "absolute", padding: 4, bottom: -36, left: "50%", backgroundColor: APP_LAUNCHER_BUILT_IN_SECTION_ICON.SCREEN_BACKGROUND_COLOR, borderRadius: require("Themes").radii.xl + 4 };
createCacheKey[3] = { width: 72, height: 72, borderRadius: require("Themes").radii.xl };
let obj2 = { width: 72, height: 72, borderRadius: require("Themes").radii.xl };
createCacheKey[4] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
createCacheKey[5] = { textAlign: "center", pointerEvents: "none", flexGrow: 1, marginHorizontal: 8 };
let items = [{ rotate: "180deg" }];
createCacheKey[6] = { transform: items };
createCacheKey[7] = { backgroundColor: "black", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_10 = { code: "function AppLauncherCommandViewHeaderTsx1(){const{interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,1],'clamp'),transform:[{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[12,0],'clamp')}]};}" };
let closure_11 = { code: "function AppLauncherCommandViewHeaderTsx2(){const{APP_ICON_SIZE,APP_ICON_BORDER_WIDTH,DEFAULT_CONTENT_PADDING,interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{transform:[{translateX:-APP_ICON_SIZE/2-APP_ICON_BORDER_WIDTH+DEFAULT_CONTENT_PADDING},{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,-APP_ICON_SIZE/2],'clamp')},{scale:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],'clamp')};}" };
let closure_12 = { code: "function AppLauncherCommandViewHeaderTsx3(){const{interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,0.5],'clamp')};}" };
let obj3 = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
const result = require("APP_LAUNCHER_BUILT_IN_SECTION_ICON").fileFinishedImporting("modules/app_launcher/native/screens/command_view/AppLauncherCommandViewHeader.tsx");

export const COLLAPSED_HEADER_HEIGHT = 56;
export const EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT = sum + -16;
export const useStyles = createCacheKey;
export const AppLauncherCommandViewHeader = function AppLauncherCommandViewHeader(onPress) {
  let command;
  let scrollOffsetY;
  ({ command, scrollOffsetY } = onPress);
  const section = onPress.section;
  const tmp = createCacheKey();
  let items = [section];
  const memo = React.useMemo(() => {
    let application;
    if (section != null) {
      application = section.application;
    }
    return scrollOffsetY(outer1_2[7]).getAppLauncherIconSource(application);
  }, items);
  let obj = scrollOffsetY(4162);
  class A {
    constructor() {
      obj = { opacity: null, transform: null };
      obj2 = scrollOffsetY(outer1_2[8]);
      items = [0];
      items[1] = outer1_8;
      obj[0] = obj2.interpolate(scrollOffsetY.get(), items, [0, 1], "clamp");
      obj = { translateY: null };
      obj4 = scrollOffsetY(outer1_2[8]);
      items1 = [0];
      items1[1] = outer1_8;
      obj[0] = obj4.interpolate(scrollOffsetY.get(), items1, [12, 0], "clamp");
      items2 = [];
      items2[0] = obj;
      obj[1] = items2;
      return obj;
    }
  }
  obj = { interpolate: scrollOffsetY(4162).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE: closure_8 };
  A.__closure = obj;
  A.__workletHash = 15596175827193;
  A.__initData = closure_10;
  const animatedStyle = obj.useAnimatedStyle(A);
  let obj2 = scrollOffsetY(4162);
  class E {
    constructor() {
      obj = { transform: null, opacity: null };
      obj = { translateX: -40 + outer1_5 };
      items = [, , ];
      items[0] = obj;
      obj1 = { translateY: null };
      obj4 = scrollOffsetY(outer1_2[8]);
      items1 = [0];
      items1[1] = outer1_8;
      obj1[0] = obj4.interpolate(scrollOffsetY.get(), items1, [0, -36], "clamp");
      items[1] = obj1;
      obj2 = { scale: null };
      obj6 = scrollOffsetY(outer1_2[8]);
      items2 = [0];
      items2[1] = outer1_8;
      obj2[0] = obj6.interpolate(scrollOffsetY.get(), items2, [1, 0], "clamp");
      items[2] = obj2;
      obj[0] = items;
      obj7 = scrollOffsetY(outer1_2[8]);
      items3 = [0];
      items3[1] = outer1_8;
      obj[1] = obj7.interpolate(scrollOffsetY.get(), items3, [1, 0], "clamp");
      return obj;
    }
  }
  obj = { APP_ICON_SIZE: 72, APP_ICON_BORDER_WIDTH: 4, DEFAULT_CONTENT_PADDING, interpolate: scrollOffsetY(4162).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE: closure_8 };
  E.__closure = obj;
  E.__workletHash = 13563524587234;
  E.__initData = closure_11;
  const animatedStyle1 = obj2.useAnimatedStyle(E);
  let obj4 = scrollOffsetY(4162);
  class N {
    constructor() {
      obj = { opacity: null };
      obj2 = scrollOffsetY(outer1_2[8]);
      items = [0];
      items[1] = outer1_8;
      obj[0] = obj2.interpolate(scrollOffsetY.get(), items, [0, 0.5], "clamp");
      return obj;
    }
  }
  N.__closure = { interpolate: scrollOffsetY(4162).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE: closure_8 };
  N.__workletHash = 2637023147700;
  N.__initData = closure_12;
  const animatedStyle2 = obj4.useAnimatedStyle(N);
  let obj1 = { interpolate: scrollOffsetY(4162).interpolate, scrollOffsetY, TOTAL_SCROLL_RANGE: closure_8 };
  let str = scrollOffsetY(4005).useToken(section(712).colors.BACKGROUND_BASE_LOW);
  let tmp10 = memo;
  const obj7 = scrollOffsetY(4005);
  if (typeof memo !== "number") {
    let uri;
    if (memo != null) {
      uri = memo.uri;
    }
    tmp10 = uri;
  }
  if (str == null) {
    str = "";
  }
  const tmp9 = section(8175);
  if (null != memo) {
    obj2 = { style: null, source: null };
    obj2[0] = tmp.appIcon;
    obj2[1] = memo;
    let tmp15 = callback(tmp8(5267), obj2);
    let tmp16 = callback;
  } else {
    const obj3 = { style: null };
    let items1 = [, ];
    ({ appIcon: arr2[0], loadingIcon: arr2[1] } = tmp);
    obj3[0] = items1;
    tmp15 = callback(View, obj3);
    tmp16 = callback;
  }
  let items2 = [tmp.headerContainer, ];
  if (null == command) {
    let prop = tmp.loadingHeaderContainer;
  } else {
    prop = { backgroundColor: null };
    prop[0] = tmp9Result;
  }
  obj4 = { style: items2, children: null };
  items2[1] = prop;
  let items3 = [tmp.headerBannerOverlay, animatedStyle2];
  const items4 = [tmp16(section(4162).View, { style: items3 }), tmp16(section(11452), { onPress: onPress.onPressBack }), , , ];
  const obj5 = { lineClamp: 1, animated: true, style: items5, variant: "heading-lg/bold", color: "text-overlay-light", children: null };
  items5 = [tmp.appSmallName, animatedStyle];
  let displayName;
  if (command != null) {
    displayName = command.displayName;
  }
  obj5[5] = displayName;
  items4[2] = tmp16(scrollOffsetY(4298).Text, obj5);
  items4[3] = tmp16(scrollOffsetY(1297).Spacer, { size: 32 });
  const items6 = [tmp.appIconMask, animatedStyle1];
  items4[4] = tmp16(section(4162).View, { style: items6, children: tmp15 });
  obj4[1] = items4;
  return closure_7(View, obj4);
};