// === Module 7498: HeaderShared ===

// Module 7498 (HeaderShared)
import shallowEqualDefault from "shallowEqual" /* 568 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import useToken2 from "useToken" /* 4580 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import HeaderDebugOverlayDefault from "HeaderDebugOverlay" /* 6011 */;
import _mod6019 from "module_6019" /* 6019 */;
import react_native from "react-native" /* 7499 */;
import PressableNavigatorModalIconDefault from "PressableNavigatorModalIcon" /* 7505 */;
import ChannelActionsDefault from "ChannelActions" /* 7510 */;
import ChannelHeaderDefault from "ChannelHeader" /* 13104 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, labelStyle;

let Platform;
let c10;
let c9;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
function renderGenericTitle(children) {
  const obj = { title: children.children };
  return React4(closure_12, obj);
}
let closure_3 = ["title", "subtitle", "color", "subtitleColor", "icon", "maxFontSizeMultiplier"];
let closure_4 = ["labelStyle"];
let _objectWithoutProperties = _objectWithoutProperties_mod;
({ View: metroImportDefault, Platform } = react_native2);
const MIN_HEADER_HEIGHT = react_native.MIN_HEADER_HEIGHT;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerRightContainer: { marginRight: 16 }, headerWrapper: obj2, actionButtonPressable: { padding: 8, zIndex: 100, width: 40, height: 40, borderRadius: 20 }, actionButtonIcon: obj3, headerText: { textAlign: "center", fontSize: 18 }, subtitleText: { textAlign: "center" }, backButtonLabel: obj4, titleContainer: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "row", alignItems: "center", flexShrink: 0, flexGrow: 1, borderColor: nativeDefault.colors.MOBILE_HEADER_BORDER, borderBottomWidth: 1 };
createStyles = createStyles.createStyles;
obj3 = { tintColor: nativeDefault.colors.MOBILE_HEADER_ICON_DEFAULT };
obj4 = { color: nativeDefault.colors.TEXT_BRAND };
let merged = Object.assign(Text_Text.TextStyleSheet["text-md/semibold"]);
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((title) => {
  let children;
  let closure_0;
  let closure_5;
  let color;
  let icon;
  let items;
  let num9;
  let str;
  let subtitle;
  let subtitleColor;
  let tmp10;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(30);
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
    tmp10 = title;
    tmp9 = maxFontSizeMultiplier;
    tmp8 = subtitleColor;
    tmp7 = color;
    tmp6 = subtitle;
    tmp5 = tmp13;
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
  const useToken = tmp(str[10]).useToken;
  let variant = tmp5.variant;
  tmp(str[10]);
  const tmp15 = importDefault;
  if (variant == null) {
    variant = useToken(require("native").modules.mobile.HEADER_TITLE_TEXT_STYLE);
  }
  const tmp16 = closure_11();
  _objectWithoutProperties = tmp16;
  const tmp17 = tmp15(str[11])("os-drawn");
  if (cResult[8] === str) {
    if (cResult[9] === icon) {
      if (cResult[10] === num9) {
        if (cResult[11] === tmp16.headerText) {
          if (cResult[12] === tmp16.titleContainer) {
            if (cResult[13] === tmp10) {
              let tmp18;
              if (cResult[14] === variant) {
                tmp18 = cResult[15];
              }
              if (null == tmp6) {
                if (null == tmp17) {
                  let tmp28;
                  if (cResult[16] !== tmp18) {
                    const tmp18Result = tmp18("header");
                    cResult[16] = tmp18;
                    cResult[17] = tmp18Result;
                    tmp28 = tmp18Result;
                  } else {
                    tmp28 = cResult[17];
                  }
                  return tmp28;
                }
              }
              if (cResult[18] === tmp18) {
                let tmp19;
                if (cResult[19] === "header") {
                  tmp19 = cResult[20];
                }
                if (cResult[21] === num9) {
                  if (cResult[22] === tmp16.subtitleText) {
                    if (cResult[23] === tmp6) {
                      let tmp21;
                      if (cResult[24] === str2) {
                        tmp21 = cResult[25];
                      }
                      if (cResult[26] === tmp17) {
                        if (cResult[27] === tmp19) {
                          let tmp24;
                          if (cResult[28] === tmp21) {
                            tmp24 = cResult[29];
                          }
                          return tmp24;
                        }
                      }
                      let obj2 = { accessible: true, accessibilityRole: "header", children: items };
                      items = [tmp19, tmp21, tmp17];
                      const tmp27 = closure_10(closure_7, obj2);
                      cResult[26] = tmp17;
                      cResult[27] = tmp19;
                      cResult[28] = tmp21;
                      cResult[29] = tmp27;
                      tmp24 = tmp27;
                    }
                  }
                }
                let tmp22 = null;
                if (null != tmp6) {
                  let obj3 = { lineClamp: 1, variant: "text-xs/medium", color: str2, style: tmp16.subtitleText, maxFontSizeMultiplier: num9, children: tmp6 };
                  tmp22 = closure_9(tmp(tmp2[7]).Text, obj3);
                }
                cResult[21] = num9;
                cResult[22] = tmp16.subtitleText;
                cResult[23] = tmp6;
                cResult[24] = str2;
                cResult[25] = tmp22;
                tmp21 = tmp22;
              }
              const tmp18Result2 = tmp18("header");
              cResult[18] = tmp18;
              cResult[19] = "header";
              cResult[20] = tmp18Result2;
              tmp19 = tmp18Result2;
            }
          }
        }
      }
    }
  }
  const fn = function v(accessibilityRole) {
    let items;
    let tmp10;
    if (null != closure_0) {
      const obj2 = { accessible: true, accessibilityRole, style: closure_5.titleContainer, children: items };
      items = [tmp, ];
      const obj3 = { lineClamp: 1, variant, color: str, style: closure_5.headerText, maxFontSizeMultiplier: num9, children };
      items[1] = React4(Text_Text.Text, obj3);
      tmp10 = authStore(metroImportDefault, obj2);
    } else {
      const obj = { accessibilityRole, lineClamp: 1, variant, color: str, style: closure_5.headerText, maxFontSizeMultiplier: num9, children };
      tmp10 = React4(Text_Text.Text, obj);
    }
    return tmp10;
  };
  cResult[8] = str;
  cResult[9] = icon;
  cResult[10] = num9;
  cResult[11] = tmp16.headerText;
  cResult[12] = tmp16.titleContainer;
  cResult[13] = tmp10;
  cResult[14] = variant;
  cResult[15] = fn;
  tmp18 = fn;
}) : ((subtitleColor) => {
  let children;
  let color;
  let maxFontSizeMultiplier;
  let require;
  let subtitle;
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
  let closure_5;
  const merged = Object.assign(subtitleColor, Object.assign({ title: 0, subtitle: 0, color: 0, subtitleColor: 0, icon: 0, maxFontSizeMultiplier: 0 }));
  const useToken = useToken2.useToken;
  let variant = merged.variant;
  useToken2;
  const tmp5 = color;
  if (variant == null) {
    variant = useToken(color(587).modules.mobile.HEADER_TITLE_TEXT_STYLE);
  }
  function renderTitleContainer(header) {
    let items;
    let tmp10;
    if (null != dependencyMap) {
      const obj2 = { accessible: true, accessibilityRole: header, style: closure_5.titleContainer, children: items };
      items = [tmp, ];
      const obj3 = { lineClamp: 1, variant, color, style: closure_5.headerText, maxFontSizeMultiplier, children: require };
      items[1] = React4(Text_Text.Text, obj3);
      tmp10 = authStore(metroImportDefault, obj2);
    } else {
      const obj = { accessibilityRole: header, lineClamp: 1, variant, color, style: closure_5.headerText, maxFontSizeMultiplier, children: require };
      tmp10 = React4(Text_Text.Text, obj);
    }
    return tmp10;
  }
  const tmp6 = closure_11();
  closure_5 = tmp6;
  const tmp7 = tmp5(6011)("os-drawn");
  if (null == subtitle) {
    let renderTitleContainerResult;
    if (null == tmp7) {
      renderTitleContainerResult = renderTitleContainer("header");
    }
    return renderTitleContainerResult;
  }
  let items = [renderTitleContainer("header"), , ];
  let tmp10 = null;
  if (null != subtitle) {
    let obj = { lineClamp: 1, variant: "text-xs/medium", color: str, style: tmp6.subtitleText, maxFontSizeMultiplier, children: subtitle };
    tmp10 = closure_9(Text_Text.Text, obj);
  }
  items[1] = tmp10;
  items[2] = tmp7;
  renderTitleContainerResult = closure_10(closure_7, { accessible: true, accessibilityRole: "header", children: items });
});
let closure_12 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((labelStyle) => {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(10);
  if (cResult[0] !== labelStyle) {
    labelStyle = labelStyle.labelStyle;
    const tmp8 = _objectWithoutProperties(labelStyle, closure_4);
    cResult[0] = labelStyle;
    cResult[1] = labelStyle;
    cResult[2] = tmp8;
    tmp5 = tmp8;
    tmp4 = labelStyle;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = closure_11();
  if (cResult[3] === tmp4) {
    let tmp10;
    let tmp12;
    if (cResult[4] === tmp9.backButtonLabel) {
      tmp10 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function u() {
        return null;
      };
      cResult[6] = fn;
      tmp12 = fn;
    } else {
      tmp12 = cResult[6];
    }
    if (cResult[7] === tmp5) {
      let tmp13;
      if (cResult[8] === tmp10) {
        tmp13 = cResult[9];
      }
      return tmp13;
    }
    const obj3 = { labelStyle: tmp10, displayMode: "default", backImage: tmp12, truncatedLabel: null, accessibilityLabel: null };
    ({ label: obj2.truncatedLabel, label: obj2.accessibilityLabel } = tmp5);
    const HeaderBackButton = _mod6019.HeaderBackButton;
    const merged = Object.assign(tmp5);
    const tmp18 = React4(HeaderBackButton, obj3);
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
}) : ((labelStyle) => {
  let items;
  labelStyle = labelStyle.labelStyle;
  const merged = Object.assign(labelStyle, Object.assign({ labelStyle: 0 }));
  const obj = {
    labelStyle: items,
    displayMode: "default",
    backImage() {
      return null;
    },
    truncatedLabel: merged.label,
    accessibilityLabel: merged.label
  };
  items = [closure_11().backButtonLabel, labelStyle];
  closure_11();
  const HeaderBackButton = _mod6019.HeaderBackButton;
  const merged1 = Object.assign(merged);
  return React4(HeaderBackButton, obj);
});
let closure_14 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let back;
  let headerLeft;
  let headerRight;
  let headerTitle;
  let items;
  let options;
  let shouldHandleSafeArea;
  let style;
  let obj = navigation(576);
  const cResult = obj.c(16);
  ({ navigation, options, back, shouldHandleSafeArea, style } = arg0);
  const tmp4 = undefined === shouldHandleSafeArea || shouldHandleSafeArea;
  const tmp5 = closure_11();
  let num = 0;
  if (tmp4) {
    num = useSafeAreaInsetsDefault().top;
  }
  ({ headerLeft, headerTitle, headerRight } = options);
  if (undefined === headerLeft) {
    headerLeft = (arg0) => {
      const obj = { navigation };
      const PressableNavigatorBackIcon = navigation(dependencyMap[13]).PressableNavigatorBackIcon;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(c1);
      return closure_2_9(PressableNavigatorBackIcon, obj);
    };
  }
  const tmpResult = navigation(1491);
  const text = tmpResult.useTheme().colors.text;
  const tmpResult2 = navigation(7507);
  const gradientTop = tmpResult2.useGradientTop();
  const sum = num + MIN_HEADER_HEIGHT;
  if (cResult[0] === num) {
    let tmp9;
    if (cResult[1] === sum) {
      tmp9 = cResult[2];
    }
    if (cResult[3] === gradientTop) {
      if (cResult[4] === style) {
        if (cResult[5] === tmp5.headerWrapper) {
          let tmp10;
          let tmp11;
          if (cResult[6] === tmp9) {
            tmp10 = cResult[7];
          }
          if (typeof headerTitle === "string") {
            tmp11 = renderGenericTitle;
          } else {
            tmp11 = headerTitle;
          }
          const tmp12 = HeaderDebugOverlayDefault("custom-drawn");
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor() {
                const obj = navigation(dependencyMap[19]);
                return obj.DeprecatedLayoutAnimation({ duration: 0 });
              }
            }
            cResult[8] = M;
          } else {
            class M {
              constructor() {
                const obj = navigation(dependencyMap[19]);
                return obj.DeprecatedLayoutAnimation({ duration: 0 });
              }
            }
          }
          const layoutEffect = react.useLayoutEffect(M);
          if (back != null) {
            class M {
              constructor() {
                const obj = navigation(dependencyMap[19]);
                return obj.DeprecatedLayoutAnimation({ duration: 0 });
              }
            }
          }
          const obj2 = { label: undefined, canGoBack: navigation.isFocused() && navigation.canGoBack(), tintColor: text };
          navigation.isFocused() && navigation.canGoBack();
          const headerLeftResult = headerLeft(obj2);
          if (typeof headerTitle !== "string") {
            class M {
              constructor() {
                const obj = navigation(dependencyMap[19]);
                return obj.DeprecatedLayoutAnimation({ duration: 0 });
              }
            }
            if (tmp22 == null) {
              class M {
                constructor() {
                  const obj = navigation(dependencyMap[19]);
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
                const obj = navigation(dependencyMap[19]);
                return obj.DeprecatedLayoutAnimation({ duration: 0 });
              }
            }
            const obj4 = { canGoBack: tmp25, tintColor: text };
            headerRightResult = headerRight(obj4);
          }
          if (cResult[9] === closure_7) {
            class M {
              constructor() {
                const obj = navigation(dependencyMap[19]);
                return obj.DeprecatedLayoutAnimation({ duration: 0 });
              }
            }
          }
          const obj5 = { style: tmp10, children: items };
          items = [headerLeftResult, tmp11Result, headerRightResult, tmp12];
          cResult[9] = closure_7;
          cResult[10] = tmp12;
          cResult[11] = headerLeftResult;
          cResult[12] = tmp11Result;
          cResult[13] = headerRightResult;
          cResult[14] = tmp10;
          cResult[15] = closure_10(closure_7, obj5);
          const tmp28 = closure_10(closure_7, obj5);
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
}) : ((route) => {
  let back;
  let headerRight;
  let headerTitle;
  let headerWrapper;
  let items1;
  let options;
  let shouldHandleSafeArea;
  let tmp6;
  ({ navigation, options, back, shouldHandleSafeArea } = route);
  route = route.route;
  if (shouldHandleSafeArea === undefined) {
    shouldHandleSafeArea = true;
  }
  const style = route.style;
  let gradientTop;
  const tmp = closure_11();
  importDefault = tmp;
  let num = 0;
  const tmp2 = importDefault;
  if (shouldHandleSafeArea) {
    num = require("useSafeAreaInsets")().top;
  }
  let fn = options.headerLeft;
  if (undefined === fn) {
    fn = (arg0) => {
      const obj = { navigation };
      const PressableNavigatorBackIcon = navigation(dependencyMap[13]).PressableNavigatorBackIcon;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(c1);
      return closure_2_9(PressableNavigatorBackIcon, obj);
    };
  }
  ({ headerTitle, headerRight } = options);
  let obj = style(tmp3[17]);
  const text = obj.useTheme().colors.text;
  const obj2 = style(num[18]);
  gradientTop = obj2.useGradientTop();
  let items = [num, gradientTop, tmp, style];
  const memo = react.useMemo(() => {
    const items = [headerWrapper.headerWrapper, gradientTop, , ];
    const obj = { paddingTop: num, minHeight: num + MIN_HEADER_HEIGHT };
    items[2] = obj;
    items[3] = style;
    return items;
  }, items);
  if (typeof headerTitle === "string") {
    tmp6 = renderGenericTitle;
  } else {
    tmp6 = headerTitle;
  }
  const tmp7 = tmp2(num[11])("custom-drawn");
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = style(num[19]);
    return obj.DeprecatedLayoutAnimation({ duration: 0 });
  });
  let title;
  const obj4 = { style: memo, children: items1 };
  if (back != null) {
    title = back.title;
  }
  items1 = [, , , ];
  const obj5 = { label: title, canGoBack: navigation.isFocused() && navigation.canGoBack(), tintColor: text };
  navigation.isFocused() && navigation.canGoBack();
  items1[0] = fn(obj5);
  if (typeof headerTitle !== "string") {
    let name = options.title;
    if (name == null) {
      name = route.name;
    }
    headerTitle = name;
  }
  items1[1] = tmp6({ children: headerTitle, tintColor: text });
  let headerRightResult;
  if (headerRight != null) {
    const obj6 = { canGoBack: navigation.isFocused() && navigation.canGoBack(), tintColor: text };
    navigation.isFocused() && navigation.canGoBack();
    headerRightResult = headerRight(obj6);
  }
  items1[2] = headerRightResult;
  items1[3] = tmp7;
  return closure_10(closure_7, obj4);
}), (back, back2) => {
  let tmpResultResult = shallowEqualDefault(back, back2, ["back"]);
  if (tmpResultResult) {
    back = back.back;
    const tmpResult = shallowEqualDefault;
    if (back == null) {
      back = {};
    }
    let back1 = back2.back;
    if (back1 == null) {
      back1 = {};
    }
    tmpResultResult = tmpResult(back, back1);
  }
  return tmpResultResult;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let route;
  let screenIndex;
  const obj = react2;
  const cResult = obj.c(4);
  ({ route, screenIndex } = arg0);
  const tmp3 = closure_11();
  if (cResult[0] === route.params) {
    if (cResult[1] === screenIndex) {
      let tmp4;
      if (cResult[2] === tmp3.headerRightContainer) {
        tmp4 = cResult[3];
      }
      return tmp4;
    }
  }
  const obj2 = { containerStyle: tmp3.headerRightContainer, screenIndex };
  const tmp5 = ChannelActionsDefault;
  const merged = Object.assign(route.params);
  const tmp7 = React4(tmp5, obj2);
  cResult[0] = route.params;
  cResult[1] = screenIndex;
  cResult[2] = tmp3.headerRightContainer;
  cResult[3] = tmp7;
  tmp4 = tmp7;
}) : ((arg0) => {
  let route;
  let screenIndex;
  ({ route, screenIndex } = arg0);
  const obj = { containerStyle: closure_11().headerRightContainer, screenIndex };
  const tmp2 = ChannelActionsDefault;
  const merged = Object.assign(route.params);
  return React4(tmp2, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let color;
  let onPress;
  let resizeMode;
  let source;
  const obj = react2;
  const cResult = obj.c(9);
  ({ accessibilityLabel, onPress, source, resizeMode, color } = arg0);
  const tmp4 = closure_11();
  if (color == null) {
    color = tmp4.actionButtonIcon.tintColor;
  }
  if (cResult[0] === resizeMode) {
    if (cResult[1] === source) {
      let tmp5;
      if (cResult[2] === color) {
        tmp5 = cResult[3];
      }
      if (cResult[4] === accessibilityLabel) {
        if (cResult[5] === onPress) {
          if (cResult[6] === tmp4.actionButtonPressable) {
            let tmp7;
            if (cResult[7] === tmp5) {
              tmp7 = cResult[8];
            }
            return tmp7;
          }
        }
      }
      const obj2 = { accessibilityRole: "button", accessibilityLabel, style: tmp4.actionButtonPressable, onPress, children: tmp5 };
      const tmp9 = React4(Pressables.PressableOpacity, obj2);
      cResult[4] = accessibilityLabel;
      cResult[5] = onPress;
      cResult[6] = tmp4.actionButtonPressable;
      cResult[7] = tmp5;
      cResult[8] = tmp9;
      tmp7 = tmp9;
    }
  }
  const tmp6 = React4(native.Icon, { color, source, resizeMode });
  cResult[0] = resizeMode;
  cResult[1] = source;
  cResult[2] = color;
  cResult[3] = tmp6;
  tmp5 = tmp6;
}) : ((color) => {
  let Icon;
  let accessibilityLabel;
  let onPress;
  let resizeMode;
  let source;
  let tintColor = color.color;
  ({ accessibilityLabel, onPress, source, resizeMode } = color);
  const tmp = closure_11();
  const obj = { accessibilityRole: "button", accessibilityLabel, style: tmp.actionButtonPressable, onPress, children: React4(Icon, { color: tintColor, source, resizeMode }) };
  const PressableOpacity = Pressables.PressableOpacity;
  Icon = native.Icon;
  if (tintColor == null) {
    tintColor = tmp.actionButtonIcon.tintColor;
  }
  return React4(PressableOpacity, obj);
});
function getRenderBackImage(navigation, arg1) {
  let closure_0 = navigation;
  let closure_1 = arg1;
  return (arg0) => {
    const obj = { navigation };
    const PressableNavigatorBackIcon = navigation(dependencyMap[13]).PressableNavigatorBackIcon;
    const merged = Object.assign(arg0);
    const merged1 = Object.assign(c1);
    return closure_2_9(PressableNavigatorBackIcon, obj);
  };
}
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/HeaderShared.tsx");

export const GenericHeaderTitle = tmp6;
export { renderGenericTitle };
export const HeaderTextButton = tmp7;
export function getRenderHeaderTextButton(intl, onPress) {
  const label = intl;
  return (arg0) => {
    const obj = { label, onPress };
    const merged = Object.assign(arg0);
    return React4(closure_14, obj);
  };
}
export const renderHeader = function renderHeader(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  return React4(memoResult, obj);
};
export { getRenderBackImage };
export const getRenderModalBackImage = function getRenderModalBackImage(navigation) {
  _require = navigation;
  let obj = require("PlatformUtils");
  return obj.isAndroid() ? undefined : (() => {
    const obj = { navigation };
    return React4(PressableNavigatorModalIconDefault, obj);
  });
};
export const getRenderModalCloseImage = function getRenderModalCloseImage(navigation) {
  _require = navigation;
  let obj = require("PlatformUtils");
  return obj.isAndroid() ? undefined : (() => {
    const obj = { navigation, type: "close" };
    return React4(PressableNavigatorModalIconDefault, obj);
  });
};
export const Header = memoResult;
export function getDefaultStackHeaderProps(navigation) {
  let closure_0 = navigation;
  return {
    headerLeft: (arg0) => {
      const obj = { navigation };
      const PressableNavigatorBackIcon = navigation(dependencyMap[13]).PressableNavigatorBackIcon;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(c1);
      return closure_2_9(PressableNavigatorBackIcon, obj);
    },
    headerTitle: renderGenericTitle,
    headerBackVisible: false
  };
}
export const getDefaultChannelStackHeaderProps = function getDefaultChannelStackHeaderProps(navigation, route) {
  const routes = navigation.getState().routes;
  let str = routes.findIndex((key) => key.key === route.key);
  if (str == null) {
    str = "none";
  }
  let obj = {
    headerLeft: (arg0) => {
      const obj = { navigation };
      const PressableNavigatorBackIcon = navigation(dependencyMap[13]).PressableNavigatorBackIcon;
      const merged = Object.assign(arg0);
      const merged1 = Object.assign(c1);
      return closure_2_9(PressableNavigatorBackIcon, obj);
    },
    headerTitle() {
      const obj = { isNavigationScreen: true, screenIndex: str };
      const tmp = ChannelHeaderDefault;
      const merged = Object.assign(route.params);
      return React4(tmp, obj);
    },
    headerRight() {
      const obj = { route, screenIndex: str };
      return React4(closure_16, obj);
    },
    headerBackVisible: false
  };
  route = navigation;
  let c1;
  return obj;
};
export const HeaderIconButton = tmp9;