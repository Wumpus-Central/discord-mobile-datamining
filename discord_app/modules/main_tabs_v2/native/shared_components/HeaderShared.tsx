// === Module 9051: HeaderShared ===

// Module 9051 (HeaderShared)
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 558 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import useToken from "useToken" /* 5902 */;
import Text_Text from "Text/Text" /* 5929 */;
import Pressables from "Pressables" /* 7428 */;
import PressableNavigatorBackIcon from "PressableNavigatorBackIcon" /* 9053 */;
import PressableNavigatorModalIconDefault from "PressableNavigatorModalIcon" /* 9058 */;
import ChannelActionsDefault from "ChannelActions" /* 9063 */;
import ChannelHeaderDefault from "ChannelHeader" /* 15638 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
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
    closure_4 = undefined;
    closure_5 = undefined;
    tmp3 = icon;
    merged = Object.assign(global, Object.assign({ title: 0, subtitle: 0, color: 0, subtitleColor: 0, icon: 0, maxFontSizeMultiplier: 0 }));
    tmp2 = title;
    obj = title(icon[6]);
    tmp4 = c1;
    variant = merged.variant;
    if (variant == null) {
      variant = obj.useToken(c1(icon[5]).modules.mobile.HEADER_TITLE_TEXT_STYLE);
    }
    renderTitleContainer = function renderTitleContainer(header) {
      if (null != dependencyMap) {
        const obj2 = { accessible: true, accessibilityRole: header, style: closure_5.titleContainer, children: null };
        items = [tmp, ];
        const obj3 = { lineClamp: 1, variant, color, style: closure_5.headerText, maxFontSizeMultiplier, children };
        items[1] = timestampProducer(Text_Text.Text, obj3);
        obj2.children = items;
        let tmp10 = metroImportDefault(React4, obj2);
      } else {
        const obj = { accessibilityRole: header, lineClamp: 1, variant, color, style: closure_5.headerText, maxFontSizeMultiplier, children };
        tmp10 = timestampProducer(Text_Text.Text, obj);
      }
      return tmp10;
    };
    closure_4 = variant;
    tmp5 = closure_8();
    closure_5 = tmp5;
    tmp6 = tmp4(tmp3[7])("os-drawn");
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
    tmp8 = closure_4;
    items = [, , ];
    items[0] = renderTitleContainer(str2);
    tmp9 = null;
    if (null != subtitle) {
      tmp10 = jsx;
      obj1 = { lineClamp: 1, variant: "body-xs/medium", color: null, style: null, maxFontSizeMultiplier: null, children: null };
      obj1.color = str;
      obj1.style = tmp5.subtitleText;
      obj1.maxFontSizeMultiplier = maxFontSizeMultiplier;
      obj1.children = subtitle;
      tmp9 = jsx(tmp2(tmp3[8]).Text, obj1);
    }
    items[1] = tmp9;
    items[2] = tmp6;
    renderTitleContainerResult = tmp7(tmp8, { accessible: true, accessibilityRole: "header", children: items });
    return;
  }
}
function renderGenericTitle(children) {
  return timestampProducer(GenericHeaderTitle, { title: children.children });
}
class HeaderTextButton {
  constructor(arg0) {
    ({ label, onPress, disabled, accessibilityLabel } = global);
    ({ labelStyle, testID, style } = global);
    tmp = closure_8();
    tmp2 = jsx;
    tmp3 = closure_0;
    tmp4 = closure_2;
    if (accessibilityLabel == null) {
      accessibilityLabel = label;
    }
    obj = { accessibilityRole: "button", accessibilityLabel, accessibilityState: null, disabled: null, testID: null, onPress: null, hitSlop: null, androidRippleConfig: null, style: null, children: null };
    tmp5 = true === disabled;
    obj1 = undefined;
    if (tmp5) {
      obj1 = { disabled: true };
    }
    obj.accessibilityState = obj1;
    obj.disabled = disabled;
    obj.testID = testID;
    obj.onPress = function handlePress() {
      if (null != _require) {
        const _requestAnimationFrame = requestAnimationFrame;
        const animationFrame = requestAnimationFrame(() => closure_1_0());
      }
    };
    tmp3Result = tmp3(tmp4[10]);
    tmp6 = undefined;
    if (tmp3Result.isAndroid()) {
      tmp6 = closure_11;
    }
    obj.hitSlop = tmp6;
    obj.androidRippleConfig = { borderless: false, foreground: true };
    items = [, , , ];
    items[0] = tmp.headerTextButton;
    tmp3Result1 = tmp3(tmp4[10]);
    prop = null;
    if (tmp3Result1.isAndroid()) {
      prop = tmp.headerTextButtonAndroid;
    }
    items[1] = prop;
    prop1 = null;
    if (tmp5) {
      prop1 = tmp.headerTextButtonDisabled;
    }
    items[2] = prop1;
    items[3] = style;
    obj.style = items;
    obj.children = tmp2(tmp3(tmp4[8]).Text, { variant: "body-md/semibold", color: "text-brand", lineClamp: 1, maxFontSizeMultiplier: 1, style: labelStyle, children: label });
    return tmp2(closure_0(closure_2[9]).PressableHighlight, obj);
  }
}
function HeaderChannelActions(arg0) {
  ({ route, screenIndex } = arg0);
  const obj = { containerStyle: closure_8().headerRightContainer };
  const tmp = closure_8();
  const merged = Object.assign(route.params);
  obj.screenIndex = screenIndex;
  return timestampProducer(ChannelActionsDefault, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, Platform } = get_ActivityIndicator);
const MIN_HEADER_HEIGHT = fn(9052).MIN_HEADER_HEIGHT;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5306);
let obj = { headerRightContainer: { marginRight: 16 }, headerWrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "row", alignItems: "center", flexShrink: 0, flexGrow: 1, borderColor: nativeDefault.colors.MOBILE_HEADER_BORDER, borderBottomWidth: 1 }, actionButtonPressable: { padding: 8, zIndex: 100, width: 40, height: 40, borderRadius: 20 }, actionButtonIcon: null, headerText: null, subtitleText: null, headerTextButton: null, headerTextButtonAndroid: null, headerTextButtonDisabled: null, titleContainer: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "row", alignItems: "center", flexShrink: 0, flexGrow: 1, borderColor: nativeDefault.colors.MOBILE_HEADER_BORDER, borderBottomWidth: 1 };
obj.actionButtonIcon = { tintColor: nativeDefault.colors.MOBILE_HEADER_ICON_DEFAULT };
obj.headerText = { textAlign: "center", fontSize: 18 };
obj.subtitleText = { textAlign: "center" };
let obj4 = { tintColor: nativeDefault.colors.MOBILE_HEADER_ICON_DEFAULT };
obj.headerTextButton = { flexDirection: "row", alignItems: "center", justifyContent: "center", flexShrink: 0, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.md, overflow: "hidden" };
obj.headerTextButtonAndroid = { marginVertical: 3, marginHorizontal: 3 };
obj.headerTextButtonDisabled = { opacity: 0.5 };
let obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "center", flexShrink: 0, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.md, overflow: "hidden" };
obj.titleContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const React5 = createStyles.createStyles(obj);
const rect = { top: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, bottom: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16 };
const memoResult = noop.memo(function HeaderInner(style) {
  ({ navigation, options, back, shouldHandleSafeArea } = style);
  if (shouldHandleSafeArea === undefined) {
    shouldHandleSafeArea = true;
  }
  style = style.style;
  let gradientTop;
  const tmp = closure_8();
  importDefault = tmp;
  let num = 0;
  if (shouldHandleSafeArea) {
    num = require("useSafeAreaInsets")().top;
  }
  let fn = options.headerLeft;
  if (undefined === fn) {
    closure_129_0 = navigation;
    fn = (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(str);
      obj.navigation = navigation;
      return timestampProducer(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
    };
  }
  ({ headerTitle, headerRight } = options);
  const text = style(num[14]).useTheme().colors.text;
  const obj = style(num[14]);
  const tmp2 = importDefault;
  gradientTop = style(num[15]).useGradientTop();
  items = [num, gradientTop, tmp, style];
  const memo = gradientTop.useMemo(() => {
    items = [headerWrapper.headerWrapper, gradientTop, { paddingTop: num, minHeight: num + MIN_HEADER_HEIGHT }, style];
    return items;
  }, items);
  if (typeof headerTitle === "string") {
    let tmp6 = renderGenericTitle;
  } else {
    tmp6 = headerTitle;
  }
  const obj3 = { style: memo, children: null };
  let title;
  const obj2 = style(num[15]);
  if (back != null) {
    title = back.title;
  }
  const obj4 = { label: title, canGoBack: null, tintColor: null };
  const tmp7 = tmp2(num[7])("custom-drawn");
  obj4.canGoBack = navigation.isFocused() && navigation.canGoBack();
  obj4.tintColor = text;
  const items1 = [fn(obj4), , , ];
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
    const obj5 = { canGoBack: navigation.isFocused() && navigation.canGoBack(), tintColor: text };
    headerRightResult = headerRight(obj5);
    const tmp13 = navigation.isFocused() && navigation.canGoBack();
  }
  items1[2] = headerRightResult;
  items1[3] = tmp7;
  obj3.children = items1;
  return closure_7(closure_4, obj3);
}, (back, back2) => {
  let tmpResultResult = discord_common_shallowEqualDefault(back, back2, ["back"]);
  if (tmpResultResult) {
    back = back.back;
    if (back == null) {
      back = {};
    }
    let back1 = back2.back;
    if (back1 == null) {
      back1 = {};
    }
    tmpResultResult = discord_common_shallowEqualDefault(back, back1);
    const tmpResult = discord_common_shallowEqualDefault;
  }
  return tmpResultResult;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/HeaderShared.tsx");

export { GenericHeaderTitle };
export { renderGenericTitle };
export { HeaderTextButton };
export function getRenderHeaderTextButton(intl, onPress) {
  const label = intl;
  return function renderHeaderTextButton(arg0) {
    const merged = Object.assign(arg0);
    return timestampProducer(HeaderTextButton, { label, onPress });
  };
}
export function renderHeader(arg0) {
  const merged = Object.assign(arg0);
  return timestampProducer(memoResult, {});
}
export function getRenderBackImage(navigation, arg1) {
  closure_0 = navigation;
  closure_1 = arg1;
  return (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(str);
    obj.navigation = navigation;
    return timestampProducer(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
  };
}
export function getRenderModalBackImage(navigation) {
  _require = navigation;
  return require("PlatformUtils").isAndroid() ? undefined : (() => timestampProducer(PressableNavigatorModalIconDefault, { navigation }));
}
export function getRenderModalCloseImage(navigation) {
  _require = navigation;
  return require("PlatformUtils").isAndroid() ? undefined : (() => timestampProducer(PressableNavigatorModalIconDefault, { navigation, type: "close" }));
}
export const Header = memoResult;
export function getDefaultStackHeaderProps(navigation) {
  closure_0 = navigation;
  return {
    headerLeft: (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(str);
      obj.navigation = navigation;
      return timestampProducer(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
    },
    headerTitle: renderGenericTitle,
    headerBackVisible: false
  };
}
export function getDefaultChannelStackHeaderProps(navigation, route) {
  closure_0 = route;
  const routes = navigation.getState().routes;
  let str = routes.findIndex((key) => key.key === closure_0.key);
  if (str == null) {
    str = "none";
  }
  closure_129_0 = navigation;
  closure_129_1 = undefined;
  return {
    headerLeft: (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(str);
      obj.navigation = navigation;
      return timestampProducer(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
    },
    headerTitle: function renderHeader() {
      const obj = {};
      const merged = Object.assign(closure_0.params);
      obj.isNavigationScreen = true;
      obj.screenIndex = str;
      return timestampProducer(ChannelHeaderDefault, obj);
    },
    headerRight: function renderActions() {
      return timestampProducer(HeaderChannelActions, { route, screenIndex: str });
    },
    headerBackVisible: false
  };
}
export function HeaderIconButton(color) {
  let tintColor = color.color;
  ({ accessibilityLabel, onPress, source, resizeMode } = color);
  const tmp = closure_8();
  const obj = { accessibilityRole: "button", accessibilityLabel, style: tmp.actionButtonPressable, onPress, children: null };
  if (tintColor == null) {
    tintColor = tmp.actionButtonIcon.tintColor;
  }
  obj.children = timestampProducer(native.Icon, { color: tintColor, source, resizeMode });
  return timestampProducer(Pressables.PressableOpacity, obj);
}