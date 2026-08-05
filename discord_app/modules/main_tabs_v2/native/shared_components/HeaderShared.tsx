// discord_app/modules/main_tabs_v2/native/shared_components/HeaderShared.tsx
import importAllResult from "ChannelHeader";
import get_ActivityIndicator from "shallowEqual";
import { MIN_HEADER_HEIGHT } from "MIN_HEADER_HEIGHT";
import jsxProd from "Button";
import createCacheKey from "createCacheKey";

let Platform;
let c4;
let closure_6;
let error;
const require = arg1;
class GenericHeaderTitle {
  constructor(arg0) {
    ({ title, subtitle, color } = global);
    if (color === undefined) {
      color = "mobile-text-heading-primary";
    }
    c1 = color;
    str = global.subtitleColor;
    if (str === undefined) {
      str = "text-default";
    }
    ({ icon, maxFontSizeMultiplier } = global);
    if (maxFontSizeMultiplier === undefined) {
      maxFontSizeMultiplier = 2;
    }
    c3 = maxFontSizeMultiplier;
    variant = undefined;
    c5 = undefined;
    tmp3 = icon;
    merged = Object.assign(global, Object.create(null));
    tmp2 = title;
    obj = require("map");
    tmp4 = c1;
    variant = merged.variant;
    if (variant == null) {
      variant = obj.useToken(require("Themes").modules.mobile.HEADER_TITLE_TEXT_STYLE);
    }
    renderTitleContainer = function renderTitleContainer(header) {
      if (null != closure_2) {
        let obj = { accessible: true, accessibilityRole: null, style: null, children: null };
        obj[1] = header;
        obj[2] = _undefined.titleContainer;
        const items = [tmp, ];
        obj = { lineClamp: 1, variant: null, color: null, style: null, maxFontSizeMultiplier: null, children: null };
        obj[1] = variant;
        obj[2] = color;
        obj[3] = _undefined.headerText;
        obj[4] = maxFontSizeMultiplier;
        obj[5] = closure_0;
        items[1] = outer1_6(outer1_0(outer1_2[6]).Text, obj);
        obj[3] = items;
        let tmp10 = outer1_7(variant, obj);
      } else {
        obj = { accessibilityRole: null, lineClamp: 1, variant: null, color: null, style: null, maxFontSizeMultiplier: null, children: null };
        obj[0] = header;
        obj[2] = variant;
        obj[3] = color;
        obj[4] = _undefined.headerText;
        obj[5] = maxFontSizeMultiplier;
        obj[6] = closure_0;
        tmp10 = outer1_6(outer1_0(outer1_2[6]).Text, obj);
      }
      return tmp10;
    };
    tmp5 = jsxs();
    c5 = tmp5;
    tmp6 = require("useHeaderDebugOverlay")("os-drawn");
    if (null == subtitle) {
      if (null == tmp6) {
        str3 = "header";
        num = 0;
        renderTitleContainerResult = renderTitleContainer("header");
      }
      return renderTitleContainerResult;
    }
    str2 = "header";
    tmp7 = jsxs;
    tmp8 = variant;
    items = [, , ];
    items[0] = renderTitleContainer(str2);
    tmp9 = null;
    if (null != subtitle) {
      tmp10 = jsx;
      obj = { lineClamp: 1, variant: "text-xs/medium", color: null, style: null, maxFontSizeMultiplier: null, children: null };
      obj[2] = str;
      obj[3] = tmp5.subtitleText;
      obj[4] = maxFontSizeMultiplier;
      obj[5] = subtitle;
      tmp9 = jsx(require("Text").Text, obj);
    }
    items[1] = tmp9;
    items[2] = tmp6;
    renderTitleContainerResult = tmp7(tmp8, { accessible: true, accessibilityRole: "header", children: items });
    return;
  }
}
function renderGenericTitle(children) {
  return callback(GenericHeaderTitle, { title: children.children });
}
class HeaderTextButton {
  constructor(arg0) {
    merged = Object.assign(global, Object.create(null));
    tmp2 = jsxs();
    obj = {
      labelStyle: items,
      labelVisible: true,
      backImage() {
            return null;
          },
      truncatedLabel: merged.label,
      accessibilityLabel: merged.label
    };
    items = [, ];
    items[0] = tmp2.backButtonLabel;
    items[1] = global.labelStyle;
    merged1 = Object.assign(merged);
    return jsx(require("Background").HeaderBackButton, obj);
  }
}
function HeaderChannelActions(arg0) {
  let route;
  let screenIndex;
  ({ route, screenIndex } = arg0);
  const obj = { containerStyle: callback2().headerRightContainer };
  const tmp = callback2();
  const merged = Object.assign(route.params);
  obj.screenIndex = screenIndex;
  return callback(importDefault(8205), obj);
}
let c3 = importAllResult;
({ View: c4, Platform } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { headerRightContainer: { marginRight: 16 }, headerWrapper: null, actionButtonPressable: null, actionButtonIcon: null, headerText: null, subtitleText: null, backButtonLabel: null, titleContainer: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flexDirection: "row", alignItems: "center", flexShrink: 0, flexGrow: 1, borderColor: require("Themes").colors.MOBILE_HEADER_BORDER, borderBottomWidth: 1 };
obj[1] = obj;
obj[2] = { padding: 8, zIndex: 100, width: 40, height: 40, borderRadius: 20 };
createCacheKey = { tintColor: require("Themes").colors.MOBILE_HEADER_ICON_DEFAULT };
obj[3] = createCacheKey;
obj[4] = { textAlign: "center", fontSize: 18 };
obj[5] = { textAlign: "center" };
const obj2 = {};
let merged = Object.assign(require("Text").TextStyleSheet["text-md/semibold"]);
obj2.color = require("Themes").colors.TEXT_BRAND;
obj[6] = obj2;
obj[7] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8 };
let closure_8 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function HeaderInner(style) {
  let back;
  let headerRight;
  let headerTitle;
  let navigation;
  let options;
  let shouldHandleSafeArea;
  ({ navigation, options, back, shouldHandleSafeArea } = style);
  if (shouldHandleSafeArea === undefined) {
    shouldHandleSafeArea = true;
  }
  style = style.style;
  navigation = style;
  let importDefault;
  let num;
  let gradientTop;
  const tmp = callback2();
  importDefault = tmp;
  num = 0;
  if (shouldHandleSafeArea) {
    num = importDefault(num[13])().top;
  }
  let fn = options.headerLeft;
  if (undefined === fn) {
    fn = (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.navigation = navigation;
      return outer1_6(navigation(outer1_2[10]).PressableNavigatorBackIcon, obj);
    };
  }
  ({ headerTitle, headerRight } = options);
  let obj = navigation(tmp3[14]);
  const text = obj.useTheme().colors.text;
  let obj1 = navigation(tmp3[15]);
  gradientTop = obj1.useGradientTop();
  let items = [num, gradientTop, tmp, style];
  const memo = gradientTop.useMemo(() => {
    const items = [_undefined.headerWrapper, gradientTop, { paddingTop: num, minHeight: num + outer1_5 }, navigation];
    return items;
  }, items);
  if (typeof headerTitle === "string") {
    let tmp6 = renderGenericTitle;
  } else {
    tmp6 = headerTitle;
  }
  const layoutEffect = gradientTop.useLayoutEffect(() => navigation(num[16]).DeprecatedLayoutAnimation({ duration: 0 }));
  obj = { style: memo, children: null };
  let title;
  if (back != null) {
    title = back.title;
  }
  obj = { label: title, canGoBack: null, tintColor: null };
  const obj3 = gradientTop;
  const tmp10 = closure_4;
  const tmp2 = importDefault;
  const tmp7 = importDefault(num[8])("custom-drawn");
  const tmp9 = closure_7;
  obj[1] = navigation.isFocused() && navigation.canGoBack();
  obj[2] = text;
  const items1 = [fn(obj), , , ];
  if (typeof headerTitle !== "string") {
    let name = options.title;
    if (name == null) {
      name = style.route.name;
    }
    headerTitle = name;
  }
  items1[1] = tmp6({ children: headerTitle, tintColor: text });
  let headerRightResult;
  if (headerRight != null) {
    obj1 = { canGoBack: null, tintColor: null };
    obj1[0] = navigation.isFocused() && navigation.canGoBack();
    obj1[1] = text;
    headerRightResult = headerRight(obj1);
    const tmp14 = navigation.isFocused() && navigation.canGoBack();
  }
  items1[2] = headerRightResult;
  items1[3] = tmp7;
  obj[1] = items1;
  return tmp9(tmp10, obj);
}, (back, back2) => {
  let tmpResultResult = importDefault(643)(back, back2, ["back"]);
  if (tmpResultResult) {
    back = back.back;
    if (back == null) {
      back = {};
    }
    let back1 = back2.back;
    if (back1 == null) {
      back1 = {};
    }
    tmpResultResult = importDefault(643)(back, back1);
    const tmpResult = importDefault(643);
  }
  return tmpResultResult;
});
let obj3 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8 };
const result = require("MIN_HEADER_HEIGHT").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/HeaderShared.tsx");

export { GenericHeaderTitle };
export { renderGenericTitle };
export { HeaderTextButton };
export function getRenderHeaderTextButton(intl, closure_3) {
  let closure_0 = intl;
  let closure_1 = closure_3;
  return (arg0) => {
    const merged = Object.assign(arg0);
    return outer1_6(outer1_11, { label: closure_0, onPress: closure_1 });
  };
}
export const renderHeader = function renderHeader(arg0) {
  const merged = Object.assign(arg0);
  return callback(closure_12, {});
};
export function getRenderBackImage(navigation) {
  let closure_0 = navigation;
  return (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.navigation = navigation;
    return outer1_6(navigation(outer1_2[10]).PressableNavigatorBackIcon, obj);
  };
}
export const getRenderModalBackImage = function getRenderModalBackImage(navigation) {
  const _require = navigation;
  return _require(500).isAndroid() ? undefined : (() => outer1_6(outer1_1(outer1_2[12]), { navigation: closure_0 }));
};
export const getRenderModalCloseImage = function getRenderModalCloseImage(navigation) {
  const _require = navigation;
  return _require(500).isAndroid() ? undefined : (() => outer1_6(outer1_1(outer1_2[12]), { navigation: closure_0, type: "close" }));
};
export const Header = memoResult;
export function getDefaultStackHeaderProps(navigation) {
  let closure_0 = navigation;
  return {
    headerLeft: (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.navigation = navigation;
      return outer1_6(navigation(outer1_2[10]).PressableNavigatorBackIcon, obj);
    },
    headerTitle: renderGenericTitle,
    headerBackVisible: false
  };
}
export const getDefaultChannelStackHeaderProps = function getDefaultChannelStackHeaderProps(navigation, closure_2) {
  let closure_0 = closure_2;
  const routes = navigation.getState().routes;
  let str = routes.findIndex((key) => key.key === navigation.key);
  if (str == null) {
    str = "none";
  }
  closure_0 = navigation;
  return {
    headerLeft: (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.navigation = navigation;
      return outer1_6(navigation(outer1_2[10]).PressableNavigatorBackIcon, obj);
    },
    headerTitle() {
      const obj = {};
      const merged = Object.assign(navigation.params);
      obj.isNavigationScreen = true;
      obj.screenIndex = str;
      return outer1_6(str(outer1_2[19]), obj);
    },
    headerRight() {
      return outer1_6(outer1_13, { route: closure_0, screenIndex: str });
    },
    headerBackVisible: false
  };
};
export const HeaderIconButton = function HeaderIconButton(color) {
  let accessibilityLabel;
  let onPress;
  let resizeMode;
  let source;
  let tintColor = color.color;
  ({ accessibilityLabel, onPress, source, resizeMode } = color);
  const tmp = callback2();
  const obj = { accessibilityRole: "button", accessibilityLabel, style: tmp.actionButtonPressable, onPress, children: null };
  if (tintColor == null) {
    tintColor = tmp.actionButtonIcon.tintColor;
  }
  obj[4] = closure_6(require(1297) /* Button */.Icon, { color: tintColor, source, resizeMode });
  return closure_6(require(4812) /* PressableBase */.PressableOpacity, obj);
};