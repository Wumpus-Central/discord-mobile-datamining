// discord_app/modules/main_tabs_v2/native/shared_components/HeaderShared.tsx
import discord_common_shallowEqualDefault from "../../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import HeaderDebugOverlayDefault from "../../../devtools/design_toggles/HeaderDebugOverlay.native.tsx";
import _mod6209 from "../../../../../_runtime/metro/06209__.js";
import PressableNavigatorBackIcon from "navigator/PressableNavigatorBackIcon.tsx";
import PressableNavigatorModalIconDefault from "navigator/PressableNavigatorModalIcon.tsx";
import ChannelActionsDefault from "../channel/ChannelActions.tsx";
import ChannelHeaderDefault from "../channel/header/ChannelHeader.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function renderGenericTitle(children) {
  return options(closure_12, { title: children.children });
}
let closure_3 = ["title", "subtitle", "color", "subtitleColor", "icon", "maxFontSizeMultiplier"];
let closure_4 = ["labelStyle"];
get_ActivityIndicator = fn(17);
({ View: closure_7, Platform } = get_ActivityIndicator);
const MIN_HEADER_HEIGHT = fn(9298).MIN_HEADER_HEIGHT;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5092);
let obj = {
  headerRightContainer: { marginRight: 16 },
  headerWrapper: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 0,
    flexGrow: 1,
    borderColor: nativeDefault.colors.MOBILE_HEADER_BORDER,
    borderBottomWidth: 1,
  },
  actionButtonPressable: { padding: 8, zIndex: 100, width: 40, height: 40, borderRadius: 20 },
  actionButtonIcon: null,
  headerText: null,
  subtitleText: null,
  backButtonLabel: null,
  titleContainer: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  flexDirection: "row",
  alignItems: "center",
  flexShrink: 0,
  flexGrow: 1,
  borderColor: nativeDefault.colors.MOBILE_HEADER_BORDER,
  borderBottomWidth: 1,
};
obj.actionButtonIcon = { tintColor: nativeDefault.colors.MOBILE_HEADER_ICON_DEFAULT };
obj.headerText = { textAlign: "center", fontSize: 18 };
obj.subtitleText = { textAlign: "center" };
let obj5 = {};
let merged = Object.assign(fn(5088).TextStyleSheet["text-md/semibold"]);
obj5.color = nativeDefault.colors.TEXT_BRAND;
obj.backButtonLabel = obj5;
let obj4 = { tintColor: nativeDefault.colors.MOBILE_HEADER_ICON_DEFAULT };
obj.titleContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GenericHeaderTitle(title) {
      const cResult = require("c").c(30);
      if (cResult[0] !== title) {
        title = title.title;
        importDefault = title;
        ({ subtitle, color, subtitleColor, icon } = title);
        _require = icon;
        const maxFontSizeMultiplier = title.maxFontSizeMultiplier;
        const tmp13 = _objectWithoutProperties(title, num9);
        cResult[0] = title;
        cResult[1] = icon;
        cResult[2] = tmp13;
        cResult[3] = subtitle;
        cResult[4] = color;
        cResult[5] = subtitleColor;
        cResult[6] = maxFontSizeMultiplier;
        cResult[7] = title;
        let tmp9 = maxFontSizeMultiplier;
        let tmp8 = subtitleColor;
        let tmp7 = color;
        let tmp6 = subtitle;
        let tmp5 = tmp13;
      } else {
        _require = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
        tmp9 = cResult[6];
        importDefault = cResult[7];
      }
      str = "mobile-text-heading-primary";
      if (undefined !== tmp7) {
        str = tmp7;
      }
      let str2 = "text-default";
      if (undefined !== tmp8) {
        str2 = tmp8;
      }
      num9 = 2;
      if (undefined !== tmp9) {
        num9 = tmp9;
      }
      let obj = require("c");
      let variant = tmp5.variant;
      if (variant == null) {
        variant = tmpResult.useToken(require("native").modules.mobile.HEADER_TITLE_TEXT_STYLE);
      }
      const tmp15 = closure_11();
      _objectWithoutProperties = tmp15;
      const tmp16 = require("HeaderDebugOverlay")("os-drawn");
      if (cResult[8] === str) {
        if (cResult[9] === icon) {
          if (cResult[10] === num9) {
            if (cResult[11] === tmp15.headerText) {
              if (cResult[12] === tmp15.titleContainer) {
                if (cResult[13] === tmp10) {
                  if (cResult[14] === variant) {
                    let tmp17 = cResult[15];
                  }
                  if (null == tmp6) {
                    if (null == tmp16) {
                      if (cResult[16] !== tmp17) {
                        const tmp17Result = tmp17("header");
                        cResult[16] = tmp17;
                        cResult[17] = tmp17Result;
                        let tmp27 = tmp17Result;
                      } else {
                        tmp27 = cResult[17];
                      }
                      return tmp27;
                    }
                  }
                  if (cResult[18] === tmp17) {
                    if (cResult[19] === str3) {
                      let tmp18 = cResult[20];
                    }
                    if (cResult[21] === num9) {
                      if (cResult[22] === tmp15.subtitleText) {
                        if (cResult[23] === tmp6) {
                          if (cResult[24] === str2) {
                            let tmp20 = cResult[25];
                          }
                          if (cResult[26] === tmp16) {
                            if (cResult[27] === tmp18) {
                              if (cResult[28] === tmp20) {
                                let tmp23 = cResult[29];
                              }
                              return tmp23;
                            }
                          }
                          let obj2 = { accessible: true, accessibilityRole: "header", children: null };
                          let items = [tmp18, tmp20, tmp16];
                          obj2.children = items;
                          const tmp26 = closure_10(closure_7, obj2);
                          cResult[26] = tmp16;
                          cResult[27] = tmp18;
                          cResult[28] = tmp20;
                          cResult[29] = tmp26;
                          tmp23 = tmp26;
                        }
                      }
                    }
                    let tmp21 = null;
                    if (null != tmp6) {
                      let obj3 = {
                        lineClamp: 1,
                        variant: "text-xs/medium",
                        color: str2,
                        style: tmp15.subtitleText,
                        maxFontSizeMultiplier: num9,
                        children: tmp6,
                      };
                      tmp21 = closure_9(tmp(tmp2[7]).Text, obj3);
                    }
                    cResult[21] = num9;
                    cResult[22] = tmp15.subtitleText;
                    cResult[23] = tmp6;
                    cResult[24] = str2;
                    cResult[25] = tmp21;
                    tmp20 = tmp21;
                  }
                  const tmp17Result2 = tmp17("header");
                  cResult[18] = tmp17;
                  cResult[19] = "header";
                  cResult[20] = tmp17Result2;
                  tmp18 = tmp17Result2;
                }
              }
            }
          }
        }
      }
      function renderTitleContainer(accessibilityRole) {
        if (null != closure_0) {
          const obj2 = { accessible: true, accessibilityRole, style: closure_5.titleContainer, children: null };
          const items = [tmp];
          const obj3 = {
            lineClamp: 1,
            variant,
            color: str,
            style: closure_5.headerText,
            maxFontSizeMultiplier: num9,
            children,
          };
          items[1] = options(Text_Text.Text, obj3);
          obj2.children = items;
          let tmp10 = collapsed(React5, obj2);
        } else {
          const obj = {
            accessibilityRole,
            lineClamp: 1,
            variant,
            color: str,
            style: closure_5.headerText,
            maxFontSizeMultiplier: num9,
            children,
          };
          tmp10 = options(Text_Text.Text, obj);
        }
        return tmp10;
      }
      cResult[8] = str;
      cResult[9] = icon;
      cResult[10] = num9;
      cResult[11] = tmp15.headerText;
      cResult[12] = tmp15.titleContainer;
      cResult[13] = tmp10;
      cResult[14] = variant;
      cResult[15] = renderTitleContainer;
      tmp17 = renderTitleContainer;
      tmpResult = require("useToken");
    }
  : function GenericHeaderTitle(subtitleColor) {
      ({ title: require, subtitle, color } = subtitleColor);
      if (color === undefined) {
        color = "mobile-text-heading-primary";
      }
      let str = subtitleColor.subtitleColor;
      if (str === undefined) {
        str = "text-default";
      }
      ({ icon: dependencyMap, maxFontSizeMultiplier } = subtitleColor);
      if (maxFontSizeMultiplier === undefined) {
        maxFontSizeMultiplier = 2;
      }
      closure_5 = undefined;
      const merged = Object.assign(
        subtitleColor,
        Object.assign({ title: 0, subtitle: 0, color: 0, subtitleColor: 0, icon: 0, maxFontSizeMultiplier: 0 }),
      );
      let variant = merged.variant;
      if (variant == null) {
        variant = obj.useToken(color(587).modules.mobile.HEADER_TITLE_TEXT_STYLE);
      }
      function renderTitleContainer(header) {
        if (null != dependencyMap) {
          const obj2 = { accessible: true, accessibilityRole: header, style: closure_5.titleContainer, children: null };
          const items = [tmp];
          const obj3 = { lineClamp: 1, variant, color, style: closure_5.headerText, maxFontSizeMultiplier, children };
          items[1] = options(Text_Text.Text, obj3);
          obj2.children = items;
          let tmp10 = collapsed(React5, obj2);
        } else {
          const obj = {
            accessibilityRole: header,
            lineClamp: 1,
            variant,
            color,
            style: closure_5.headerText,
            maxFontSizeMultiplier,
            children,
          };
          tmp10 = options(Text_Text.Text, obj);
        }
        return tmp10;
      }
      const tmp5 = closure_11();
      closure_5 = tmp5;
      const tmp6 = color(6201)("os-drawn");
      if (null == subtitle) {
        if (null == tmp6) {
          let renderTitleContainerResult = renderTitleContainer("header");
        }
        return renderTitleContainerResult;
      }
      let items = [renderTitleContainer("header"), ,];
      let tmp9 = null;
      if (null != subtitle) {
        let obj2 = {
          lineClamp: 1,
          variant: "text-xs/medium",
          color: str,
          style: tmp5.subtitleText,
          maxFontSizeMultiplier,
          children: subtitle,
        };
        tmp9 = closure_9(Text_Text.Text, obj2);
      }
      items[1] = tmp9;
      items[2] = tmp6;
      renderTitleContainerResult = closure_10(closure_7, {
        accessible: true,
        accessibilityRole: "header",
        children: items,
      });
      obj = useToken;
    };
let closure_12 = tmp5;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function HeaderTextButton(labelStyle) {
      const cResult = c.c(10);
      if (cResult[0] !== labelStyle) {
        labelStyle = labelStyle.labelStyle;
        const tmp8 = _objectWithoutProperties(labelStyle, closure_4);
        cResult[0] = labelStyle;
        cResult[1] = labelStyle;
        cResult[2] = tmp8;
        let tmp5 = tmp8;
        let tmp4 = labelStyle;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const tmp9 = closure_11();
      if (cResult[3] === tmp4) {
        if (cResult[4] === tmp9.backButtonLabel) {
          let tmp10 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function u() {
            return null;
          };
          cResult[6] = fn;
          let tmp12 = fn;
        } else {
          tmp12 = cResult[6];
        }
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp10) {
            let tmp13 = cResult[9];
          }
          return tmp13;
        }
        const obj3 = {
          labelStyle: tmp10,
          displayMode: "default",
          backImage: tmp12,
          truncatedLabel: null,
          accessibilityLabel: null,
        };
        ({ label: obj2.truncatedLabel, label: obj2.accessibilityLabel } = tmp5);
        const merged = Object.assign(tmp5);
        const tmp18 = options(_mod6209.HeaderBackButton, obj3);
        cResult[7] = tmp5;
        cResult[8] = tmp10;
        cResult[9] = tmp18;
        tmp13 = tmp18;
      }
      const items = [tmp9.backButtonLabel, tmp4];
      cResult[3] = tmp4;
      cResult[4] = tmp9.backButtonLabel;
      cResult[5] = items;
      tmp10 = items;
    }
  : function HeaderTextButton(labelStyle) {
      const merged = Object.assign(labelStyle, Object.assign({ labelStyle: 0 }));
      const obj = {
        labelStyle: null,
        displayMode: "default",
        backImage() {
          return null;
        },
        truncatedLabel: merged.label,
        accessibilityLabel: merged.label,
      };
      const items = [closure_11().backButtonLabel, labelStyle.labelStyle];
      obj.labelStyle = items;
      const merged1 = Object.assign(merged);
      return options(_mod6209.HeaderBackButton, obj);
    };
let closure_14 = tmp6;
ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function HeaderInner(arg0) {
        const cResult = navigation(576).c(16);
        ({ navigation, options, back, shouldHandleSafeArea, style } = arg0);
        let tmp4 = undefined === shouldHandleSafeArea;
        if (!tmp4) {
          tmp4 = shouldHandleSafeArea;
        }
        const tmp5 = closure_11();
        let num = 0;
        if (tmp4) {
          num = useSafeAreaInsetsDefault().top;
        }
        ({ headerLeft, headerTitle, headerRight } = options);
        if (undefined === headerLeft) {
          headerLeft = (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            const merged1 = Object.assign(str);
            obj.navigation = navigation;
            return options(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
          };
        }
        const obj = navigation(576);
        const text = navigation(1504).useTheme().colors.text;
        const tmpResult = navigation(1504);
        const gradientTop = navigation(9306).useGradientTop();
        const sum = num + MIN_HEADER_HEIGHT;
        if (cResult[0] === num) {
          if (cResult[1] === sum) {
            let tmp9 = cResult[2];
          }
          if (cResult[3] === gradientTop) {
            if (cResult[4] === style) {
              if (cResult[5] === tmp5.headerWrapper) {
                if (cResult[6] === tmp9) {
                  let tmp10 = cResult[7];
                }
                if (typeof headerTitle === "string") {
                  let tmp11 = renderGenericTitle;
                } else {
                  tmp11 = headerTitle;
                }
                const tmp12 = HeaderDebugOverlayDefault("custom-drawn");
                const _Symbol = Symbol;
                if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
                  class M {
                    constructor() {
                      obj = navigation(closure_1_2[19]);
                      return obj.DeprecatedLayoutAnimation({ duration: 0 });
                    }
                  }
                  cResult[8] = M;
                } else {
                  class M {
                    constructor() {
                      obj = navigation(closure_1_2[19]);
                      return obj.DeprecatedLayoutAnimation({ duration: 0 });
                    }
                  }
                }
                const layoutEffect = noop.useLayoutEffect(M);
                if (back != null) {
                  class M {
                    constructor() {
                      obj = navigation(closure_1_2[19]);
                      return obj.DeprecatedLayoutAnimation({ duration: 0 });
                    }
                  }
                }
                const obj2 = {
                  label: undefined,
                  canGoBack: navigation.isFocused() && navigation.canGoBack(),
                  tintColor: text,
                };
                const headerLeftResult = headerLeft(obj2);
                if (typeof headerTitle !== "string") {
                  class M {
                    constructor() {
                      obj = navigation(closure_1_2[19]);
                      return obj.DeprecatedLayoutAnimation({ duration: 0 });
                    }
                  }
                  if (tmp22 == null) {
                    class M {
                      constructor() {
                        obj = navigation(closure_1_2[19]);
                        return obj.DeprecatedLayoutAnimation({ duration: 0 });
                      }
                    }
                  }
                  headerTitle = tmp22;
                }
                const obj3 = { children: headerTitle, tintColor: text };
                const tmp11Result = tmp11(obj3);
                let headerRightResult;
                if (headerRight != null) {
                  class M {
                    constructor() {
                      obj = navigation(closure_1_2[19]);
                      return obj.DeprecatedLayoutAnimation({ duration: 0 });
                    }
                  }
                  const obj4 = { canGoBack: tmp25, tintColor: text };
                  headerRightResult = headerRight(obj4);
                }
                if (cResult[9] === closure_7) {
                  class M {
                    constructor() {
                      obj = navigation(closure_1_2[19]);
                      return obj.DeprecatedLayoutAnimation({ duration: 0 });
                    }
                  }
                }
                const obj5 = { style: tmp10, children: null };
                const items = [headerLeftResult, tmp11Result, headerRightResult, tmp12];
                obj5.children = items;
                const tmp28 = closure_10(closure_7, obj5);
                cResult[9] = closure_7;
                cResult[10] = tmp12;
                cResult[11] = headerLeftResult;
                cResult[12] = tmp11Result;
                cResult[13] = headerRightResult;
                cResult[14] = tmp10;
                cResult[15] = tmp28;
                const tmp20 = navigation.isFocused() && navigation.canGoBack();
              }
            }
          }
          const items1 = [tmp5.headerWrapper, gradientTop, tmp9, style];
          cResult[3] = gradientTop;
          cResult[4] = style;
          cResult[5] = tmp5.headerWrapper;
          cResult[6] = tmp9;
          cResult[7] = items1;
          tmp10 = items1;
        }
        const obj6 = { paddingTop: num, minHeight: sum };
        cResult[0] = num;
        cResult[1] = sum;
        cResult[2] = obj6;
        tmp9 = obj6;
        const tmpResult2 = navigation(9306);
      }
    : function HeaderInner(style) {
        ({ navigation, options, back, shouldHandleSafeArea } = style);
        if (shouldHandleSafeArea === undefined) {
          shouldHandleSafeArea = true;
        }
        style = style.style;
        let gradientTop;
        const tmp = closure_11();
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
            return options(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
          };
        }
        ({ headerTitle, headerRight } = options);
        const text = style(num[17]).useTheme().colors.text;
        const obj = style(num[17]);
        const tmp2 = importDefault;
        gradientTop = style(num[18]).useGradientTop();
        let items = [num, gradientTop, tmp, style];
        const memo = noop.useMemo(() => {
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
        const obj2 = style(num[18]);
        const layoutEffect = noop.useLayoutEffect(() => style(num[19]).DeprecatedLayoutAnimation({ duration: 0 }));
        const obj4 = { style: memo, children: null };
        let title;
        if (back != null) {
          title = back.title;
        }
        const obj5 = { label: title, canGoBack: null, tintColor: null };
        const tmp7 = tmp2(num[11])("custom-drawn");
        obj5.canGoBack = navigation.isFocused() && navigation.canGoBack();
        obj5.tintColor = text;
        const items1 = [fn(obj5), , ,];
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
          const obj6 = { canGoBack: navigation.isFocused() && navigation.canGoBack(), tintColor: text };
          headerRightResult = headerRight(obj6);
          const tmp14 = navigation.isFocused() && navigation.canGoBack();
        }
        items1[2] = headerRightResult;
        items1[3] = tmp7;
        obj4.children = items1;
        return closure_10(closure_7, obj4);
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
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function HeaderChannelActions(arg0) {
      const cResult = c.c(4);
      ({ route, screenIndex } = arg0);
      const tmp3 = closure_11();
      if (cResult[0] === route.params) {
        if (cResult[1] === screenIndex) {
          if (cResult[2] === tmp3.headerRightContainer) {
            let tmp4 = cResult[3];
          }
          return tmp4;
        }
      }
      const obj2 = { containerStyle: tmp3.headerRightContainer };
      const merged = Object.assign(route.params);
      obj2.screenIndex = screenIndex;
      const tmp7 = options(ChannelActionsDefault, obj2);
      cResult[0] = route.params;
      cResult[1] = screenIndex;
      cResult[2] = tmp3.headerRightContainer;
      cResult[3] = tmp7;
      tmp4 = tmp7;
    }
  : function HeaderChannelActions(arg0) {
      ({ route, screenIndex } = arg0);
      const obj = { containerStyle: closure_11().headerRightContainer };
      const tmp = closure_11();
      const merged = Object.assign(route.params);
      obj.screenIndex = screenIndex;
      return options(ChannelActionsDefault, obj);
    };
ReactCompilerGating = fn(558);
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
function getRenderBackImage(navigation, arg1) {
  closure_0 = navigation;
  closure_1 = arg1;
  return (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(str);
    obj.navigation = navigation;
    return options(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
  };
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/HeaderShared.tsx");

export const GenericHeaderTitle = tmp5;
export { renderGenericTitle };
export const HeaderTextButton = tmp6;
export function getRenderHeaderTextButton(intl, onPress) {
  const label = intl;
  return function renderHeaderTextButton(arg0) {
    const merged = Object.assign(arg0);
    return options(closure_14, { label, onPress });
  };
}
export const renderHeader = function renderHeader(arg0) {
  const merged = Object.assign(arg0);
  return options(memoResult, {});
};
export { getRenderBackImage };
export const getRenderModalBackImage = function getRenderModalBackImage(navigation) {
  _require = navigation;
  return require("PlatformUtils").isAndroid()
    ? undefined
    : () => options(PressableNavigatorModalIconDefault, { navigation });
};
export const getRenderModalCloseImage = function getRenderModalCloseImage(navigation) {
  _require = navigation;
  return require("PlatformUtils").isAndroid()
    ? undefined
    : () => options(PressableNavigatorModalIconDefault, { navigation, type: "close" });
};
export const Header = memoResult;
export function getDefaultStackHeaderProps(navigation) {
  closure_0 = navigation;
  return {
    headerLeft: (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(str);
      obj.navigation = navigation;
      return options(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
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
  closure_129_1 = undefined;
  return {
    headerLeft: (arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(str);
      obj.navigation = navigation;
      return options(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
    },
    headerTitle: function renderHeader() {
      const obj = {};
      const merged = Object.assign(closure_0.params);
      obj.isNavigationScreen = true;
      obj.screenIndex = str;
      return options(ChannelHeaderDefault, obj);
    },
    headerRight: function renderActions() {
      return options(closure_16, { route, screenIndex: str });
    },
    headerBackVisible: false,
  };
};
export const HeaderIconButton = ReactCompilerGating.isReactCompilerEnabled()
  ? function HeaderIconButton(arg0) {
      const cResult = c.c(9);
      ({ accessibilityLabel, onPress, source, resizeMode, color } = arg0);
      const tmp4 = closure_11();
      if (color == null) {
        color = tmp4.actionButtonIcon.tintColor;
      }
      if (cResult[0] === resizeMode) {
        if (cResult[1] === source) {
          if (cResult[2] === color) {
            let tmp5 = cResult[3];
          }
          if (cResult[4] === accessibilityLabel) {
            if (cResult[5] === onPress) {
              if (cResult[6] === tmp4.actionButtonPressable) {
                if (cResult[7] === tmp5) {
                  let tmp7 = cResult[8];
                }
                return tmp7;
              }
            }
          }
          const obj2 = {
            accessibilityRole: "button",
            accessibilityLabel,
            style: tmp4.actionButtonPressable,
            onPress,
            children: tmp5,
          };
          const tmp9 = options(Pressables.PressableOpacity, obj2);
          cResult[4] = accessibilityLabel;
          cResult[5] = onPress;
          cResult[6] = tmp4.actionButtonPressable;
          cResult[7] = tmp5;
          cResult[8] = tmp9;
          tmp7 = tmp9;
        }
      }
      const tmp6 = options(native.Icon, { color, source, resizeMode });
      cResult[0] = resizeMode;
      cResult[1] = source;
      cResult[2] = color;
      cResult[3] = tmp6;
      tmp5 = tmp6;
    }
  : function HeaderIconButton(color) {
      let tintColor = color.color;
      ({ accessibilityLabel, onPress, source, resizeMode } = color);
      const tmp = closure_11();
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
      obj.children = options(native.Icon, { color: tintColor, source, resizeMode });
      return options(Pressables.PressableOpacity, obj);
    };
