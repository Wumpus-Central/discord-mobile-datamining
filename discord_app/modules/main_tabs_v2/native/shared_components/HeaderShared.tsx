// discord_app/modules/main_tabs_v2/native/shared_components/HeaderShared.tsx
import discord_common_shallowEqualDefault from "../../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import _mod5631 from "../../../../../_runtime/metro/05631__.js";
import PressableNavigatorBackIcon from "navigator/PressableNavigatorBackIcon.tsx";
import PressableNavigatorModalIconDefault from "navigator/PressableNavigatorModalIcon.tsx";
import ChannelActionsDefault from "../channel/ChannelActions.tsx";
import ChannelHeaderDefault from "../channel/header/ChannelHeader.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
    merged = Object.assign(
      global,
      Object.assign({ title: 0, subtitle: 0, color: 0, subtitleColor: 0, icon: 0, maxFontSizeMultiplier: 0 }),
    );
    tmp2 = title;
    obj = title(icon[7]);
    tmp4 = c1;
    variant = merged.variant;
    if (variant == null) {
      variant = obj.useToken(c1(icon[5]).modules.mobile.HEADER_TITLE_TEXT_STYLE);
    }
    renderTitleContainer = function renderTitleContainer(header) {
      if (null != dependencyMap) {
        let obj = { accessible: true, accessibilityRole: header, style: closure_5.titleContainer, children: null };
        const items = [tmp];
        obj = { lineClamp: 1, variant, color, style: closure_5.headerText, maxFontSizeMultiplier, children };
        items[1] = timestampProducer(Text_Text.Text, obj);
        obj.children = items;
        let tmp10 = React5(React4, obj);
      } else {
        obj = {
          accessibilityRole: header,
          lineClamp: 1,
          variant,
          color,
          style: closure_5.headerText,
          maxFontSizeMultiplier,
          children,
        };
        tmp10 = timestampProducer(Text_Text.Text, obj);
      }
      return tmp10;
    };
    closure_4 = variant;
    tmp5 = closure_8();
    closure_5 = tmp5;
    tmp6 = tmp4(tmp3[8])("os-drawn");
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
    items = [, ,];
    items[0] = renderTitleContainer(str2);
    tmp9 = null;
    if (null != subtitle) {
      tmp10 = jsx;
      obj = {
        lineClamp: 1,
        variant: "text-xs/medium",
        color: null,
        style: null,
        maxFontSizeMultiplier: null,
        children: null,
      };
      obj.color = str;
      obj.style = tmp5.subtitleText;
      obj.maxFontSizeMultiplier = maxFontSizeMultiplier;
      obj.children = subtitle;
      tmp9 = jsx(tmp2(tmp3[6]).Text, obj);
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
    merged = Object.assign(global, Object.assign({ labelStyle: 0 }));
    tmp2 = closure_8();
    obj = {
      labelStyle: null,
      displayMode: "default",
      backImage() {
        return null;
      },
      truncatedLabel: merged.label,
      accessibilityLabel: merged.label,
    };
    items = [,];
    items[0] = tmp2.backButtonLabel;
    items[1] = global.labelStyle;
    obj.labelStyle = items;
    merged1 = Object.assign(merged);
    return jsx(closure_0(closure_2[9]).HeaderBackButton, obj);
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
const MIN_HEADER_HEIGHT = fn(7864).MIN_HEADER_HEIGHT;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let obj = {
  headerRightContainer: { marginRight: 16 },
  headerWrapper: null,
  actionButtonPressable: null,
  actionButtonIcon: null,
  headerText: null,
  subtitleText: null,
  backButtonLabel: null,
  titleContainer: null,
};
obj = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  flexDirection: "row",
  alignItems: "center",
  flexShrink: 0,
  flexGrow: 1,
  borderColor: nativeDefault.colors.MOBILE_HEADER_BORDER,
  borderBottomWidth: 1,
};
obj.headerWrapper = obj;
obj.actionButtonPressable = { padding: 8, zIndex: 100, width: 40, height: 40, borderRadius: 20 };
const createStyles = { tintColor: nativeDefault.colors.MOBILE_HEADER_ICON_DEFAULT };
obj.actionButtonIcon = createStyles;
obj.headerText = { textAlign: "center", fontSize: 18 };
obj.subtitleText = { textAlign: "center" };
const obj2 = {};
let merged = Object.assign(fn(4556).TextStyleSheet["text-md/semibold"]);
obj2.color = nativeDefault.colors.TEXT_BRAND;
obj.backButtonLabel = obj2;
obj.titleContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const React6 = createStyles.createStyles(obj);
const memoResult = noop.memo(
  function HeaderInner(style) {
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
        obj.navigation = navigation;
        return timestampProducer(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
      };
    }
    ({ headerTitle, headerRight } = options);
    let obj = style(tmp3[14]);
    const text = obj.useTheme().colors.text;
    let obj1 = style(tmp3[15]);
    gradientTop = obj1.useGradientTop();
    let items = [num, gradientTop, tmp, style];
    const memo = gradientTop.useMemo(() => {
      const items = [
        headerWrapper.headerWrapper,
        gradientTop,
        { paddingTop: num, minHeight: num + MIN_HEADER_HEIGHT },
        style,
      ];
      return items;
    }, items);
    if (typeof headerTitle === "string") {
      let tmp6 = renderGenericTitle;
    } else {
      tmp6 = headerTitle;
    }
    const layoutEffect = gradientTop.useLayoutEffect(() => style(num[16]).DeprecatedLayoutAnimation({ duration: 0 }));
    obj = { style: memo, children: null };
    let title;
    if (back != null) {
      title = back.title;
    }
    obj = { label: title, canGoBack: null, tintColor: null };
    const tmp10 = closure_4;
    const tmp7 = require("HeaderDebugOverlay")("custom-drawn");
    const tmp9 = closure_7;
    obj.canGoBack = navigation.isFocused() && navigation.canGoBack();
    obj.tintColor = text;
    const items1 = [fn(obj), , ,];
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
      obj1 = { canGoBack: navigation.isFocused() && navigation.canGoBack(), tintColor: text };
      headerRightResult = headerRight(obj1);
      const tmp14 = navigation.isFocused() && navigation.canGoBack();
    }
    items1[2] = headerRightResult;
    items1[3] = tmp7;
    obj.children = items1;
    return tmp9(tmp10, obj);
  },
  (back, back2) => {
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
  },
);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/HeaderShared.tsx");

export { GenericHeaderTitle };
export { renderGenericTitle };
export { HeaderTextButton };
export function getRenderHeaderTextButton(intl, onPress) {
  const label = intl;
  return (arg0) => {
    const merged = Object.assign(arg0);
    return timestampProducer(HeaderTextButton, { label, onPress });
  };
}
export const renderHeader = function renderHeader(arg0) {
  const merged = Object.assign(arg0);
  return timestampProducer(memoResult, {});
};
export function getRenderBackImage(navigation) {
  closure_0 = navigation;
  return (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.navigation = navigation;
    return timestampProducer(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
  };
}
export const getRenderModalBackImage = function getRenderModalBackImage(navigation) {
  _require = navigation;
  return require("PlatformUtils").isAndroid()
    ? undefined
    : () => timestampProducer(PressableNavigatorModalIconDefault, { navigation });
};
export const getRenderModalCloseImage = function getRenderModalCloseImage(navigation) {
  _require = navigation;
  return require("PlatformUtils").isAndroid()
    ? undefined
    : () => timestampProducer(PressableNavigatorModalIconDefault, { navigation, type: "close" });
};
export const Header = memoResult;
export function getDefaultStackHeaderProps(navigation) {
  closure_0 = navigation;
  return {
    headerLeft: (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.navigation = navigation;
      return timestampProducer(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
    },
    headerTitle: renderGenericTitle,
    headerBackVisible: false,
  };
}
export const getDefaultChannelStackHeaderProps = function getDefaultChannelStackHeaderProps(navigation, route) {
  closure_0 = route;
  const routes = navigation.getState().routes;
  let str = routes.findIndex((key) => key.key === closure_0.key);
  if (str == null) {
    str = "none";
  }
  closure_129_0 = navigation;
  return {
    headerLeft: (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.navigation = navigation;
      return timestampProducer(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
    },
    headerTitle() {
      const obj = {};
      const merged = Object.assign(closure_0.params);
      obj.isNavigationScreen = true;
      obj.screenIndex = str;
      return timestampProducer(ChannelHeaderDefault, obj);
    },
    headerRight() {
      return timestampProducer(HeaderChannelActions, { route, screenIndex: str });
    },
    headerBackVisible: false,
  };
};
export const HeaderIconButton = function HeaderIconButton(color) {
  let tintColor = color.color;
  ({ accessibilityLabel, onPress, source, resizeMode } = color);
  const tmp = closure_8();
  const obj = {
    accessibilityRole: "button",
    accessibilityLabel,
    style: tmp.actionButtonPressable,
    onPress,
    children: null,
  };
  if (tintColor == null) {
    tintColor = tmp.actionButtonIcon.tintColor;
  }
  obj.children = timestampProducer(native.Icon, { color: tintColor, source, resizeMode });
  return timestampProducer(Pressables.PressableOpacity, obj);
};
