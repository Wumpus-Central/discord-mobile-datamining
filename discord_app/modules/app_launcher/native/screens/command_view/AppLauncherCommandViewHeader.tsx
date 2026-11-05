// discord_app/modules/app_launcher/native/screens/command_view/AppLauncherCommandViewHeader.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef1652 from "../../../../../../_runtime/metro/01652__.js";
import useAvatarColorDefault from "../../../../avatar/useAvatarColor.tsx";
import AppLauncherNativeUtils from "../../AppLauncherNativeUtils.tsx";
import AppLauncherBackButtonDefault from "../../base_components/AppLauncherBackButton.tsx";
import CommandDetailsOverflowMenuDefault from "CommandDetailsOverflowMenu.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const AppLauncherNativeConstants = fn(1498);
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const sum = fn(12686).BACK_BUTTON_SIZE + 2 * DEFAULT_CONTENT_PADDING + 36 + 4;
let closure_8 = sum - 56;
const createStyles = fn(5143);
let obj2 = {
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: -16,
    left: 0,
    right: 0,
    padding: DEFAULT_CONTENT_PADDING,
    zIndex: 1,
  },
  loadingHeaderContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST },
  overflowMenuContainer: null,
  appIconMask: null,
  appIcon: null,
  loadingIcon: null,
  appSmallName: null,
  icon: null,
  headerBannerOverlay: null,
};
let size = { width: fn(12686).BACK_BUTTON_SIZE, height: fn(12686).BACK_BUTTON_SIZE };
obj2.overflowMenuContainer = size;
const rect = {
  position: "absolute",
  padding: 4,
  bottom: -36,
  left: "50%",
  backgroundColor: AppLauncherNativeConstants.SCREEN_BACKGROUND_COLOR,
  borderRadius: nativeDefault.radii.xl + 4,
};
obj2.appIconMask = rect;
const size1 = { width: 72, height: 72, borderRadius: nativeDefault.radii.xl };
obj2.appIcon = size1;
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.loadingIcon = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.appSmallName = { textAlign: "center", pointerEvents: "none", flexGrow: 1, marginHorizontal: 8 };
let obj5 = { transform: null };
let items = [{ rotate: "180deg" }];
obj5.transform = items;
obj2.icon = obj5;
obj2.headerBannerOverlay = { backgroundColor: "black", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
const styles = createStyles.createStyles(obj2);
let closure_10 = {
  code: "(function AppLauncherCommandViewHeaderTsx1(){let[interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE]=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,1],'clamp'),transform:[{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[12,0],'clamp')}]};})",
};
let closure_11 = {
  code: "(function AppLauncherCommandViewHeaderTsx2(){let[APP_ICON_SIZE,APP_ICON_BORDER_WIDTH,DEFAULT_CONTENT_PADDING,interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE]=this.__closure;return{transform:[{translateX:-APP_ICON_SIZE/2-APP_ICON_BORDER_WIDTH+DEFAULT_CONTENT_PADDING},{translateY:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,-APP_ICON_SIZE/2],'clamp')},{scale:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[1,0],'clamp')};})",
};
let closure_12 = {
  code: "(function AppLauncherCommandViewHeaderTsx3(){let[interpolate,scrollOffsetY,TOTAL_SCROLL_RANGE]=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[0,TOTAL_SCROLL_RANGE],[0,0.5],'clamp')};})",
};
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/command_view/AppLauncherCommandViewHeader.tsx",
);

export const COLLAPSED_HEADER_HEIGHT = 56;
export const EXPANDED_HEADER_TOTAL_CONSUMED_SPACE_IN_PARENT = sum + -16;
export const useStyles = styles;
export function AppLauncherCommandViewHeader(onPress) {
  ({ command, scrollOffsetY, section } = onPress);
  _require = section;
  const tmp = styles();
  items = [section];
  const memo = noop.useMemo(() => {
    let application;
    if (_undefined != null) {
      application = _undefined.application;
    }
    return AppLauncherNativeUtils.getAppLauncherIconSource(application);
  }, items);
  let items1 = [
    closure_10,
    require("../../../../../../_runtime/metro/01652__.js").interpolate,
    scrollOffsetY,
    closure_8,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp6, tmp7, tmp8, tmp9] = items1;
  class AppLauncherCommandViewHeaderTsx1 {
    constructor() {
      obj = { opacity: null, transform: null };
      items = [0];
      items[1] = closure_2;
      obj.opacity = closure_0(closure_1.get(), items, [0, 1], "clamp");
      obj1 = { translateY: null };
      items1 = [0];
      items1[1] = closure_2;
      obj1.translateY = closure_0(closure_1.get(), items1, [12, 0], "clamp");
      items2 = [];
      items2[0] = obj1;
      obj.transform = items2;
      return obj;
    }
  }
  let items2 = [tmp7, tmp8, tmp9];
  AppLauncherCommandViewHeaderTsx1.__closure = items2;
  AppLauncherCommandViewHeaderTsx1.__workletHash = 372054850912;
  AppLauncherCommandViewHeaderTsx1.__initData = tmp6;
  const animatedStyle = require("../../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    AppLauncherCommandViewHeaderTsx1,
  );
  let obj = require("../../../../../../_runtime/metro/01652__.js");
  let items3 = [
    closure_11,
    72,
    4,
    c5,
    require("../../../../../../_runtime/metro/01652__.js").interpolate,
    scrollOffsetY,
    closure_8,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items3;
  class AppLauncherCommandViewHeaderTsx2 {
    constructor() {
      obj = { transform: null, opacity: null };
      obj1 = { translateX: -closure_0 / 2 - closure_1 + closure_2 };
      items = [, ,];
      items[0] = obj1;
      obj5 = { translateY: null };
      items1 = [0];
      items1[1] = closure_5;
      items2 = [0];
      items2[1] = -closure_0 / 2;
      obj5.translateY = closure_3(closure_4.get(), items1, items2, "clamp");
      items[1] = obj5;
      obj6 = { scale: null };
      items3 = [0];
      items3[1] = closure_5;
      obj6.scale = closure_3(closure_4.get(), items3, [1, 0], "clamp");
      items[2] = obj6;
      obj.transform = items;
      items4 = [0];
      items4[1] = closure_5;
      obj.opacity = closure_3(closure_4.get(), items4, [1, 0], "clamp");
      return obj;
    }
  }
  let items4 = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
  AppLauncherCommandViewHeaderTsx2.__closure = items4;
  AppLauncherCommandViewHeaderTsx2.__workletHash = 16894585624155;
  AppLauncherCommandViewHeaderTsx2.__initData = tmp11;
  const animatedStyle1 = require("../../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    AppLauncherCommandViewHeaderTsx2,
  );
  const tmp3Result = require("../../../../../../_runtime/metro/01652__.js");
  const items5 = [
    closure_12,
    require("../../../../../../_runtime/metro/01652__.js").interpolate,
    scrollOffsetY,
    closure_8,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp19, tmp20, tmp21, tmp22] = items5;
  class AppLauncherCommandViewHeaderTsx3 {
    constructor() {
      obj = { opacity: null };
      items = [0];
      items[1] = closure_2;
      obj.opacity = closure_0(closure_1.get(), items, [0, 0.5], "clamp");
      return obj;
    }
  }
  const items6 = [tmp20, tmp21, tmp22];
  AppLauncherCommandViewHeaderTsx3.__closure = items6;
  AppLauncherCommandViewHeaderTsx3.__workletHash = 3726184428877;
  AppLauncherCommandViewHeaderTsx3.__initData = tmp19;
  const animatedStyle2 = require("../../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    AppLauncherCommandViewHeaderTsx3,
  );
  const tmp3Result3 = require("../../../../../../_runtime/metro/01652__.js");
  let str = require("useToken").useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let tmp26 = memo;
  const tmp3Result4 = require("useToken");
  if (typeof memo !== "number") {
    let uri;
    if (memo != null) {
      uri = memo.uri;
    }
    tmp26 = uri;
  }
  if (str == null) {
    str = "";
  }
  if (null != memo) {
    let obj2 = { style: tmp.appIcon, source: memo };
    let tmp31 = closure_6(tmp24(5854), obj2);
    let tmp32 = closure_6;
  } else {
    let obj3 = { style: null };
    const items7 = [,];
    ({ appIcon: arr8[0], loadingIcon: arr8[1] } = tmp);
    obj3.style = items7;
    tmp31 = closure_6(c4, obj3);
    tmp32 = closure_6;
  }
  const items8 = [tmp.headerContainer];
  if (null == command) {
    let prop = tmp.loadingHeaderContainer;
  } else {
    prop = { backgroundColor: tmp25Result };
  }
  let obj4 = { style: items8, children: null };
  items8[1] = prop;
  const obj5 = { style: null };
  const items9 = [tmp.headerBannerOverlay, animatedStyle2];
  obj5.style = items9;
  const items10 = [
    tmp32(_modDef1652.View, obj5),
    tmp32(AppLauncherBackButtonDefault, { onPress: onPress.onPressBack }),
    ,
    ,
  ];
  const obj6 = {
    lineClamp: 1,
    animated: true,
    style: null,
    variant: "heading-lg/semibold",
    color: "text-overlay-light",
    children: null,
  };
  const items11 = [tmp.appSmallName, animatedStyle];
  obj6.style = items11;
  let displayName;
  if (command != null) {
    displayName = command.displayName;
  }
  obj6.children = displayName;
  items10[2] = tmp32(require("Text/Text").Text, obj6);
  const obj7 = { style: tmp.overflowMenuContainer, children: null };
  let id;
  tmp25Result = useAvatarColorDefault(tmp26, str);
  if (command != null) {
    const rootCommand = command.rootCommand;
    if (rootCommand != null) {
      id = rootCommand.id;
    }
  }
  obj7.children = tmp32(CommandDetailsOverflowMenuDefault, { commandId: id });
  items10[3] = tmp32(c4, obj7);
  const obj8 = { style: null, children: tmp31 };
  const items12 = [tmp.appIconMask, animatedStyle1];
  obj8.style = items12;
  items10[4] = tmp32(_modDef1652.View, obj8);
  obj4.children = items10;
  return closure_7(c4, obj4);
}
