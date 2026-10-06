// === Module 6503: Navigator ===

// Module 6503 (Navigator)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import SentryInitUtils from "SentryInitUtils" /* 1243 */;
import Link from "Link" /* 1491 */;
import useThemeDefault from "useTheme" /* 4797 */;
import NavigatorHeader from "NavigatorHeader" /* 6017 */;
import _mod6026 from "module_6026" /* 6026 */;
import useNavigatorShouldCrossfade from "useNavigatorShouldCrossfade" /* 6504 */;
import _mod6505 from "module_6505" /* 6505 */;
import NavigatorScreen2 from "NavigatorScreen" /* 6538 */;
import useNavigationTheme from "useNavigationTheme" /* 6545 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, screens;

let StyleSheet;
let metroImportAll;
let obj2;
let obj3;
let closure_3 = ["initialRouteName", "initialRouteStack", "initialRouteState", "onStateChange", "navigationTheme"];
let closure_4 = ["useContainer", "containerStyle"];
({ StyleSheet, View: metroImportAll } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, navbar: obj3, headerLeftContainerStyle: { paddingLeft: 16, marginRight: -16 }, headerRightContainerStyle: { paddingRight: 16, marginLeft: -16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { borderBottomWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, shadowColor: "transparent" };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const obj2 = useNavigatorShouldCrossfade;
  const navigatorShouldCrossfade = obj2.useNavigatorShouldCrossfade();
  if (cResult[0] !== navigatorShouldCrossfade) {
    let obj3;
    if (navigatorShouldCrossfade) {
      obj3 = { animation: "fade" };
    }
    cResult[0] = navigatorShouldCrossfade;
    cResult[1] = obj3;
    tmp3 = obj3;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  let obj = useNavigatorShouldCrossfade;
  const navigatorShouldCrossfade = obj.useNavigatorShouldCrossfade();
  const items = [navigatorShouldCrossfade];
  return react.useMemo(() => {
    let obj;
    if (navigatorShouldCrossfade) {
      obj = { animation: "fade" };
    }
    return obj;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((screens) => {
  let detachInactiveScreens;
  let first;
  let gestureResponseDistance;
  let initialRouteName;
  let onDidFocus;
  const tmp = onDidFocus;
  let obj = screens(onDidFocus[8]);
  const cResult = obj.c(39);
  screens = screens.screens;
  const onWillFocus = screens.onWillFocus;
  onDidFocus = screens.onDidFocus;
  ({ initialRouteName, detachInactiveScreens, gestureResponseDistance } = screens);
  const gestureDirection = screens.gestureDirection;
  const headerTitleAlign = screens.headerTitleAlign;
  const cardOverlayEnabled = screens.cardOverlayEnabled;
  const cardShadowEnabled = screens.cardShadowEnabled;
  const cardStyle = screens.cardStyle;
  const headerStyle = screens.headerStyle;
  const viewStyle = screens.viewStyle;
  const headerLeftContainerStyle = screens.headerLeftContainerStyle;
  const headerTitleContainerStyle = screens.headerTitleContainerStyle;
  const headerRightContainerStyle = screens.headerRightContainerStyle;
  const headerStatusBarHeight = screens.headerStatusBarHeight;
  const headerBackTitle = screens.headerBackTitle;
  const hideTitle = screens.hideTitle;
  const disableHeaderAnimation = screens.disableHeaderAnimation;
  const tmp3 = viewStyle();
  let closure_18 = tmp3;
  let obj2 = screens(onDidFocus[10]);
  const styles = obj2.useStyles();
  let tmp5 = onWillFocus;
  const obj3 = screens(onDidFocus[11]);
  const token = obj3.useToken(onWillFocus(onDidFocus[6]).colors.NAVIGATOR_HEADER_TINT);
  const obj4 = screens(onDidFocus[9]);
  const navigatorShouldCrossfade = obj4.useNavigatorShouldCrossfade();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let fn = function n() {
      const obj = screens(onDidFocus[12]);
      return obj.createStackNavigator();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const first1 = cardOverlayEnabled(cardShadowEnabled.useState(first), 1)[0];
  const top = tmp5(tmp[13])().top;
  if (cResult[1] === onDidFocus) {
    let tmp10;
    if (cResult[2] === onWillFocus) {
      tmp10 = cResult[3];
    }
    const listeners = tmp10;
    if (cResult[4] === cardOverlayEnabled) {
      if (cResult[5] === cardShadowEnabled) {
        if (cResult[6] === cardStyle) {
          if (cResult[7] === disableHeaderAnimation) {
            if (cResult[8] === gestureDirection) {
              if (cResult[9] === gestureResponseDistance) {
                if (cResult[10] === headerBackTitle) {
                  if (cResult[11] === headerLeftContainerStyle) {
                    if (cResult[12] === headerRightContainerStyle) {
                      if (cResult[13] === headerStatusBarHeight) {
                        if (cResult[14] === headerStyle) {
                          if (cResult[15] === styles.headerBackTitleStyle) {
                            if (cResult[16] === styles.headerTitle) {
                              if (cResult[17] === token) {
                                if (cResult[18] === headerTitleAlign) {
                                  if (cResult[19] === headerTitleContainerStyle) {
                                    if (cResult[20] === hideTitle) {
                                      if (cResult[21] === navigatorShouldCrossfade) {
                                        if (cResult[22] === tmp3.headerLeftContainerStyle) {
                                          if (cResult[23] === tmp3.headerRightContainerStyle) {
                                            if (cResult[24] === tmp3.navbar) {
                                              let tmp11;
                                              if (cResult[25] === top) {
                                                tmp11 = cResult[26];
                                              }
                                              if (cResult[27] === first1.Screen) {
                                                if (cResult[28] === hideTitle) {
                                                  if (cResult[29] === tmp10) {
                                                    if (cResult[30] === screens) {
                                                      let tmp13;
                                                      if (cResult[31] === viewStyle) {
                                                        tmp13 = cResult[32];
                                                      }
                                                      if (cResult[33] === first1.Navigator) {
                                                        if (cResult[34] === detachInactiveScreens) {
                                                          if (cResult[35] === initialRouteName) {
                                                            if (cResult[36] === tmp11) {
                                                              let tmp16;
                                                              if (cResult[37] === tmp13) {
                                                                tmp16 = cResult[38];
                                                              }
                                                              return tmp16;
                                                            }
                                                          }
                                                        }
                                                      }
                                                      class G {
                                                        constructor(navigation) {
                                                          let fn;
                                                          let fn2;
                                                          let fn3;
                                                          let items;
                                                          let items1;
                                                          let items2;
                                                          let items3;
                                                          let str2;
                                                          let tmp5;
                                                          let tmp7;
                                                          navigation = navigation.navigation;
                                                          const state = navigation.getState();
                                                          let routes;
                                                          if (state != null) {
                                                            routes = state.routes;
                                                          }
                                                          if (routes == null) {
                                                            routes = [];
                                                          }
                                                          let str;
                                                          if (navigatorShouldCrossfade) {
                                                            str = "screen";
                                                          }
                                                          let obj = { headerMode: str, headerStyle: items, headerTintColor: token, headerTitleStyle: styles.headerTitle, headerBackTitleStyle: styles.headerBackTitleStyle, headerTitleAllowFontScaling: false, headerBackImage: NavigatorHeader.renderBackImage, headerBackButtonDisplayMode: "minimal", headerTitleContainerStyle: items1, headerLeftContainerStyle: items2, headerRightContainerStyle: items3, headerTitle: fn, gestureDirection, gestureResponseDistance, cardOverlayEnabled, cardShadowEnabled, cardStyle, headerBackTitle: tmp5, headerTitleAlign: str2, headerStatusBarHeight: tmp7, cardStyleInterpolator: fn2, headerStyleInterpolator: fn3 };
                                                          items = [closure_18.navbar, headerStyle];
                                                          items1 = [{ maxWidth: "60%", alignItems: "center" }, headerTitleContainerStyle];
                                                          items2 = [closure_18.headerLeftContainerStyle, headerLeftContainerStyle];
                                                          items3 = [closure_18.headerRightContainerStyle, headerRightContainerStyle];
                                                          fn = undefined;
                                                          if (hideTitle) {
                                                            fn = () => {

                                                            };
                                                          }
                                                          tmp5 = headerBackTitle;
                                                          if (headerBackTitle == null) {
                                                            let stringResult;
                                                            if (1 === routes.length) {
                                                              const intl = intl2.intl;
                                                              stringResult = intl.string(intl2.t["13/7kX"]);
                                                            }
                                                            tmp5 = stringResult;
                                                          }
                                                          str2 = headerTitleAlign;
                                                          if (headerTitleAlign == null) {
                                                            str2 = "center";
                                                          }
                                                          tmp7 = headerStatusBarHeight;
                                                          if (null == headerStatusBarHeight) {
                                                            tmp7 = top;
                                                          }
                                                          if (navigatorShouldCrossfade) {
                                                            fn2 = (current) => {
                                                              let obj2;
                                                              let progress;
                                                              const obj = { cardStyle: obj2 };
                                                              obj2 = { opacity: progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }) };
                                                              progress = current.current.progress;
                                                              return obj;
                                                            };
                                                          } else {
                                                            fn2 = _mod6505.CardStyleInterpolators.forHorizontalIOS;
                                                          }
                                                          if (disableHeaderAnimation) {
                                                            fn3 = _mod6505.HeaderStyleInterpolators.forNoAnimation;
                                                          } else if (navigatorShouldCrossfade) {
                                                            fn3 = _mod6505.HeaderStyleInterpolators.forFade;
                                                          } else {
                                                            fn3 = (arg0) => {
                                                              let current;
                                                              let direction;
                                                              let layouts;
                                                              let next;
                                                              ({ current, next, layouts, direction } = arg0);
                                                              const HeaderStyleInterpolators = screens(onDidFocus[12]).HeaderStyleInterpolators;
                                                              const forUIKitResult = HeaderStyleInterpolators.forUIKit({ current, next, layouts, direction });
                                                              forUIKitResult.leftButtonStyle.transform = forUIKitResult.titleStyle.transform;
                                                              forUIKitResult.rightButtonStyle.transform = forUIKitResult.titleStyle.transform;
                                                              return forUIKitResult;
                                                            };
                                                          }
                                                          return obj;
                                                        }
                                                      }
                                                      tmp18[0] = detachInactiveScreens;
                                                      tmp18[1] = initialRouteName;
                                                      tmp18[2] = tmp11;
                                                      tmp18[3] = tmp13;
                                                      const tmp19 = headerStyle(tmp12, tmp18);
                                                      cResult[33] = first1.Navigator;
                                                      cResult[34] = detachInactiveScreens;
                                                      cResult[35] = initialRouteName;
                                                      cResult[36] = tmp11;
                                                      cResult[37] = tmp13;
                                                      cResult[38] = tmp19;
                                                      tmp16 = tmp19;
                                                    }
                                                  }
                                                }
                                              }
                                              tmp5(tmp[15]);
                                              class G {
                                                constructor(navigation) {
                                                  let fn;
                                                  let fn2;
                                                  let fn3;
                                                  let items;
                                                  let items1;
                                                  let items2;
                                                  let items3;
                                                  let str2;
                                                  let tmp5;
                                                  let tmp7;
                                                  navigation = navigation.navigation;
                                                  const state = navigation.getState();
                                                  let routes;
                                                  if (state != null) {
                                                    routes = state.routes;
                                                  }
                                                  if (routes == null) {
                                                    routes = [];
                                                  }
                                                  let str;
                                                  if (navigatorShouldCrossfade) {
                                                    str = "screen";
                                                  }
                                                  let obj = { headerMode: str, headerStyle: items, headerTintColor: token, headerTitleStyle: styles.headerTitle, headerBackTitleStyle: styles.headerBackTitleStyle, headerTitleAllowFontScaling: false, headerBackImage: NavigatorHeader.renderBackImage, headerBackButtonDisplayMode: "minimal", headerTitleContainerStyle: items1, headerLeftContainerStyle: items2, headerRightContainerStyle: items3, headerTitle: fn, gestureDirection, gestureResponseDistance, cardOverlayEnabled, cardShadowEnabled, cardStyle, headerBackTitle: tmp5, headerTitleAlign: str2, headerStatusBarHeight: tmp7, cardStyleInterpolator: fn2, headerStyleInterpolator: fn3 };
                                                  items = [closure_18.navbar, headerStyle];
                                                  items1 = [{ maxWidth: "60%", alignItems: "center" }, headerTitleContainerStyle];
                                                  items2 = [closure_18.headerLeftContainerStyle, headerLeftContainerStyle];
                                                  items3 = [closure_18.headerRightContainerStyle, headerRightContainerStyle];
                                                  fn = undefined;
                                                  if (hideTitle) {
                                                    fn = () => {

                                                    };
                                                  }
                                                  tmp5 = headerBackTitle;
                                                  if (headerBackTitle == null) {
                                                    let stringResult;
                                                    if (1 === routes.length) {
                                                      const intl = intl2.intl;
                                                      stringResult = intl.string(intl2.t["13/7kX"]);
                                                    }
                                                    tmp5 = stringResult;
                                                  }
                                                  str2 = headerTitleAlign;
                                                  if (headerTitleAlign == null) {
                                                    str2 = "center";
                                                  }
                                                  tmp7 = headerStatusBarHeight;
                                                  if (null == headerStatusBarHeight) {
                                                    tmp7 = top;
                                                  }
                                                  if (navigatorShouldCrossfade) {
                                                    fn2 = (current) => {
                                                      let obj2;
                                                      let progress;
                                                      const obj = { cardStyle: obj2 };
                                                      obj2 = { opacity: progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }) };
                                                      progress = current.current.progress;
                                                      return obj;
                                                    };
                                                  } else {
                                                    fn2 = _mod6505.CardStyleInterpolators.forHorizontalIOS;
                                                  }
                                                  if (disableHeaderAnimation) {
                                                    fn3 = _mod6505.HeaderStyleInterpolators.forNoAnimation;
                                                  } else if (navigatorShouldCrossfade) {
                                                    fn3 = _mod6505.HeaderStyleInterpolators.forFade;
                                                  } else {
                                                    fn3 = (arg0) => {
                                                      let current;
                                                      let direction;
                                                      let layouts;
                                                      let next;
                                                      ({ current, next, layouts, direction } = arg0);
                                                      const HeaderStyleInterpolators = screens(onDidFocus[12]).HeaderStyleInterpolators;
                                                      const forUIKitResult = HeaderStyleInterpolators.forUIKit({ current, next, layouts, direction });
                                                      forUIKitResult.leftButtonStyle.transform = forUIKitResult.titleStyle.transform;
                                                      forUIKitResult.rightButtonStyle.transform = forUIKitResult.titleStyle.transform;
                                                      return forUIKitResult;
                                                    };
                                                  }
                                                  return obj;
                                                }
                                              }
                                              const mapped = arr.map((name) => {
                                                let obj;
                                                const options = {};
                                                let merged = Object.assign(options[name]);
                                                const fullscreen = options.fullscreen || null != options.customNavbar;
                                                if (hideTitle) {
                                                  options.headerTitle = () => {

                                                  };
                                                }
                                                if (fullscreen) {
                                                  options.headerTransparent = true;
                                                  options.headerMode = "float";
                                                  const items = [options.headerStyle, { backgroundColor: "transparent" }];
                                                  options.headerStyle = items;
                                                }
                                                const obj2 = {
                                                  name,
                                                  initialParams: options.initialParams,
                                                  listeners,
                                                  options,
                                                  children(arg0) {
                                                    let screen;
                                                    screen = { screen, viewStyle };
                                                    const NavigatorScreen = NavigatorScreen2.NavigatorScreen;
                                                    const merged = Object.assign(arg0);
                                                    return <NavigatorScreen screen={screen} viewStyle={viewStyle} />;
                                                  }
                                                };
                                                return headerStyle(first1.Screen, obj2, name);
                                              });
                                              cResult[27] = first1.Screen;
                                              cResult[28] = hideTitle;
                                              cResult[29] = tmp10;
                                              cResult[30] = screens;
                                              cResult[31] = viewStyle;
                                              cResult[32] = mapped;
                                              tmp13 = mapped;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    class G {
      constructor(navigation) {
        let fn;
        let fn2;
        let fn3;
        let items;
        let items1;
        let items2;
        let items3;
        let str2;
        let tmp5;
        let tmp7;
        navigation = navigation.navigation;
        const state = navigation.getState();
        let routes;
        if (state != null) {
          routes = state.routes;
        }
        if (routes == null) {
          routes = [];
        }
        let str;
        if (navigatorShouldCrossfade) {
          str = "screen";
        }
        let obj = { headerMode: str, headerStyle: items, headerTintColor: token, headerTitleStyle: styles.headerTitle, headerBackTitleStyle: styles.headerBackTitleStyle, headerTitleAllowFontScaling: false, headerBackImage: NavigatorHeader.renderBackImage, headerBackButtonDisplayMode: "minimal", headerTitleContainerStyle: items1, headerLeftContainerStyle: items2, headerRightContainerStyle: items3, headerTitle: fn, gestureDirection, gestureResponseDistance, cardOverlayEnabled, cardShadowEnabled, cardStyle, headerBackTitle: tmp5, headerTitleAlign: str2, headerStatusBarHeight: tmp7, cardStyleInterpolator: fn2, headerStyleInterpolator: fn3 };
        items = [closure_18.navbar, headerStyle];
        items1 = [{ maxWidth: "60%", alignItems: "center" }, headerTitleContainerStyle];
        items2 = [closure_18.headerLeftContainerStyle, headerLeftContainerStyle];
        items3 = [closure_18.headerRightContainerStyle, headerRightContainerStyle];
        fn = undefined;
        if (hideTitle) {
          fn = () => {

          };
        }
        tmp5 = headerBackTitle;
        if (headerBackTitle == null) {
          let stringResult;
          if (1 === routes.length) {
            const intl = intl2.intl;
            stringResult = intl.string(intl2.t["13/7kX"]);
          }
          tmp5 = stringResult;
        }
        str2 = headerTitleAlign;
        if (headerTitleAlign == null) {
          str2 = "center";
        }
        tmp7 = headerStatusBarHeight;
        if (null == headerStatusBarHeight) {
          tmp7 = top;
        }
        if (navigatorShouldCrossfade) {
          fn2 = (current) => {
            let obj2;
            let progress;
            const obj = { cardStyle: obj2 };
            obj2 = { opacity: progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }) };
            progress = current.current.progress;
            return obj;
          };
        } else {
          fn2 = _mod6505.CardStyleInterpolators.forHorizontalIOS;
        }
        if (disableHeaderAnimation) {
          fn3 = _mod6505.HeaderStyleInterpolators.forNoAnimation;
        } else if (navigatorShouldCrossfade) {
          fn3 = _mod6505.HeaderStyleInterpolators.forFade;
        } else {
          fn3 = (arg0) => {
            let current;
            let direction;
            let layouts;
            let next;
            ({ current, next, layouts, direction } = arg0);
            const HeaderStyleInterpolators = screens(onDidFocus[12]).HeaderStyleInterpolators;
            const forUIKitResult = HeaderStyleInterpolators.forUIKit({ current, next, layouts, direction });
            forUIKitResult.leftButtonStyle.transform = forUIKitResult.titleStyle.transform;
            forUIKitResult.rightButtonStyle.transform = forUIKitResult.titleStyle.transform;
            return forUIKitResult;
          };
        }
        return obj;
      }
    }
    cResult[4] = cardOverlayEnabled;
    cResult[5] = cardShadowEnabled;
    cResult[6] = cardStyle;
    cResult[7] = disableHeaderAnimation;
    cResult[8] = gestureDirection;
    cResult[9] = gestureResponseDistance;
    cResult[10] = headerBackTitle;
    cResult[11] = headerLeftContainerStyle;
    cResult[12] = headerRightContainerStyle;
    cResult[13] = headerStatusBarHeight;
    cResult[14] = headerStyle;
    cResult[15] = styles.headerBackTitleStyle;
    cResult[16] = styles.headerTitle;
    cResult[17] = token;
    cResult[18] = headerTitleAlign;
    cResult[19] = headerTitleContainerStyle;
    cResult[20] = hideTitle;
    cResult[21] = navigatorShouldCrossfade;
    cResult[22] = tmp3.headerLeftContainerStyle;
    cResult[23] = tmp3.headerRightContainerStyle;
    cResult[24] = tmp3.navbar;
    cResult[25] = top;
    cResult[26] = G;
    tmp11 = G;
  }
  class M {
    constructor(arg0) {
      let closure_0 = arg0;
      return {
        focus() {
          if (onWillFocus != null) {
            tmp(closure_0);
          }
        },
        transitionEnd(data) {
          if (!data.data.closing) {
            if (onDidFocus != null) {
              tmp(closure_0);
            }
          }
        }
      };
    }
  }
  cResult[1] = onDidFocus;
  cResult[2] = onWillFocus;
  cResult[3] = M;
  tmp10 = M;
}) : ((screens) => {
  let detachInactiveScreens;
  let headerLeftContainerStyle;
  let initialRouteName;
  let keys;
  screens = screens.screens;
  const onWillFocus = screens.onWillFocus;
  const onDidFocus = screens.onDidFocus;
  const gestureResponseDistance = screens.gestureResponseDistance;
  const gestureDirection = screens.gestureDirection;
  const headerTitleAlign = screens.headerTitleAlign;
  const cardOverlayEnabled = screens.cardOverlayEnabled;
  const cardShadowEnabled = screens.cardShadowEnabled;
  const cardStyle = screens.cardStyle;
  const headerStyle = screens.headerStyle;
  ({ viewStyle: closure_10, headerLeftContainerStyle } = screens);
  const headerTitleContainerStyle = screens.headerTitleContainerStyle;
  const headerRightContainerStyle = screens.headerRightContainerStyle;
  const headerStatusBarHeight = screens.headerStatusBarHeight;
  const headerBackTitle = screens.headerBackTitle;
  const hideTitle = screens.hideTitle;
  const disableHeaderAnimation = screens.disableHeaderAnimation;
  ({ initialRouteName, detachInactiveScreens } = screens);
  const tmp = viewStyle();
  let closure_18 = tmp;
  let obj = screens(onDidFocus[10]);
  const styles = obj.useStyles();
  let obj2 = screens(onDidFocus[11]);
  const token = obj2.useToken(onWillFocus(onDidFocus[6]).colors.NAVIGATOR_HEADER_TINT);
  const obj3 = screens(onDidFocus[9]);
  const navigatorShouldCrossfade = obj3.useNavigatorShouldCrossfade();
  const first = cardOverlayEnabled(cardShadowEnabled.useState(() => {
    const obj = screens(onDidFocus[12]);
    return obj.createStackNavigator();
  }), 1)[0];
  const top = onWillFocus(onDidFocus[13])().top;
  let items = [onWillFocus, onDidFocus];
  const listeners = cardShadowEnabled.useCallback((arg0) => {
    let closure_0 = arg0;
    return {
      focus() {
        if (onWillFocus != null) {
          tmp(closure_0);
        }
      },
      transitionEnd(data) {
        if (!data.data.closing) {
          if (onDidFocus != null) {
            tmp(closure_0);
          }
        }
      }
    };
  }, items);
  let items1 = [navigatorShouldCrossfade, , , , , , , , , , , , , , , , , , , , , ];
  ({ navbar: arr2[1], headerLeftContainerStyle: arr2[2], headerRightContainerStyle: arr2[3] } = tmp);
  items1[4] = headerStyle;
  items1[5] = token;
  ({ headerTitle: arr2[6], headerBackTitleStyle: arr2[7] } = styles);
  items1[8] = headerTitleContainerStyle;
  items1[9] = headerLeftContainerStyle;
  items1[10] = headerRightContainerStyle;
  items1[11] = hideTitle;
  items1[12] = gestureDirection;
  items1[13] = gestureResponseDistance;
  items1[14] = cardOverlayEnabled;
  items1[15] = cardShadowEnabled;
  items1[16] = cardStyle;
  items1[17] = headerBackTitle;
  items1[18] = headerTitleAlign;
  items1[19] = headerStatusBarHeight;
  items1[20] = top;
  items1[21] = disableHeaderAnimation;
  const Navigator = first.Navigator;
  const obj4 = {
    detachInactiveScreens,
    initialRouteName,
    screenOptions: cardShadowEnabled.useCallback((navigation) => {
      let fn;
      let fn2;
      let fn3;
      let items;
      let items1;
      let items2;
      let items3;
      let str2;
      let tmp5;
      let tmp7;
      navigation = navigation.navigation;
      const state = navigation.getState();
      let routes;
      if (state != null) {
        routes = state.routes;
      }
      if (routes == null) {
        routes = [];
      }
      let str;
      if (navigatorShouldCrossfade) {
        str = "screen";
      }
      let obj = { headerMode: str, headerStyle: items, headerTintColor: token, headerTitleStyle: styles.headerTitle, headerBackTitleStyle: styles.headerBackTitleStyle, headerTitleAllowFontScaling: false, headerBackImage: NavigatorHeader.renderBackImage, headerBackButtonDisplayMode: "minimal", headerTitleContainerStyle: items1, headerLeftContainerStyle: items2, headerRightContainerStyle: items3, headerTitle: fn, gestureDirection, gestureResponseDistance, cardOverlayEnabled, cardShadowEnabled, cardStyle, headerBackTitle: tmp5, headerTitleAlign: str2, headerStatusBarHeight: tmp7, cardStyleInterpolator: fn2, headerStyleInterpolator: fn3 };
      items = [closure_18.navbar, headerStyle];
      items1 = [{ maxWidth: "60%", alignItems: "center" }, headerTitleContainerStyle];
      items2 = [closure_18.headerLeftContainerStyle, headerLeftContainerStyle];
      items3 = [closure_18.headerRightContainerStyle, headerRightContainerStyle];
      fn = undefined;
      if (hideTitle) {
        fn = () => {

        };
      }
      tmp5 = headerBackTitle;
      if (headerBackTitle == null) {
        let stringResult;
        if (1 === routes.length) {
          const intl = intl2.intl;
          stringResult = intl.string(intl2.t["13/7kX"]);
        }
        tmp5 = stringResult;
      }
      str2 = headerTitleAlign;
      if (headerTitleAlign == null) {
        str2 = "center";
      }
      tmp7 = headerStatusBarHeight;
      if (null == headerStatusBarHeight) {
        tmp7 = top;
      }
      if (navigatorShouldCrossfade) {
        fn2 = (current) => {
          let obj2;
          let progress;
          const obj = { cardStyle: obj2 };
          obj2 = { opacity: progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }) };
          progress = current.current.progress;
          return obj;
        };
      } else {
        fn2 = _mod6505.CardStyleInterpolators.forHorizontalIOS;
      }
      if (disableHeaderAnimation) {
        fn3 = _mod6505.HeaderStyleInterpolators.forNoAnimation;
      } else if (navigatorShouldCrossfade) {
        fn3 = _mod6505.HeaderStyleInterpolators.forFade;
      } else {
        fn3 = (arg0) => {
          let current;
          let direction;
          let layouts;
          let next;
          ({ current, next, layouts, direction } = arg0);
          const HeaderStyleInterpolators = screens(onDidFocus[12]).HeaderStyleInterpolators;
          const forUIKitResult = HeaderStyleInterpolators.forUIKit({ current, next, layouts, direction });
          forUIKitResult.leftButtonStyle.transform = forUIKitResult.titleStyle.transform;
          forUIKitResult.rightButtonStyle.transform = forUIKitResult.titleStyle.transform;
          return forUIKitResult;
        };
      }
      return obj;
    }, items1),
    children: keys.map((name) => {
      let obj;
      const options = {};
      let merged = Object.assign(options[name]);
      const fullscreen = options.fullscreen || null != options.customNavbar;
      if (hideTitle) {
        options.headerTitle = () => {

        };
      }
      if (fullscreen) {
        options.headerTransparent = true;
        options.headerMode = "float";
        const items = [options.headerStyle, { backgroundColor: "transparent" }];
        options.headerStyle = items;
      }
      const obj2 = {
        name,
        initialParams: options.initialParams,
        listeners,
        options,
        children(arg0) {
          let screen;
          screen = { screen, viewStyle };
          const NavigatorScreen = NavigatorScreen2.NavigatorScreen;
          const merged = Object.assign(arg0);
          return <NavigatorScreen screen={screen} viewStyle={viewStyle} />;
        }
      };
      return headerStyle(first.Screen, obj2, name);
    })
  };
  const obj5 = onWillFocus(onDidFocus[15]);
  keys = obj5.keys(screens);
  return headerStyle(Navigator, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let closure_1;
  let initialRouteName;
  let initialRouteStack;
  let initialRouteState;
  let navigationTheme;
  let onStateChange;
  let tmp13;
  let tmp4;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(19);
  if (cResult[0] !== arg0) {
    ({ initialRouteName, initialRouteStack } = arg0);
    _require = initialRouteStack;
    ({ initialRouteState, onStateChange, navigationTheme } = arg0);
    const tmp12 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = initialRouteName;
    cResult[2] = initialRouteStack;
    cResult[3] = initialRouteState;
    cResult[4] = navigationTheme;
    cResult[5] = onStateChange;
    cResult[6] = tmp12;
    tmp9 = tmp12;
    tmp8 = onStateChange;
    tmp7 = navigationTheme;
    tmp6 = initialRouteState;
    tmp4 = initialRouteName;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = tmp(1491);
    const navigationContainerRef = tmpResult.createNavigationContainerRef();
    cResult[7] = navigationContainerRef;
    tmp13 = navigationContainerRef;
  } else {
    tmp13 = cResult[7];
  }
  importDefault = tmp13;
  if (cResult[8] !== initialRouteStack) {
    class R {
      constructor() {
        tmp2 = undefined;
        if (null != closure_0) {
          obj = { routes: null };
          obj.routes = tmp;
          tmp2 = obj;
        }
        return tmp2;
      }
    }
    cResult[8] = initialRouteStack;
    cResult[9] = R;
  } else {
    class R {
      constructor() {
        tmp2 = undefined;
        if (null != closure_0) {
          obj = { routes: null };
          obj.routes = tmp;
          tmp2 = obj;
        }
        return tmp2;
      }
    }
  }
  const first = _slicedToArray(react.useState(R), 1)[0];
  const tmp17 = useThemeDefault();
  const tmpResult2 = tmp(6545);
  const navigationTheme1 = tmpResult2.useNavigationTheme(tmp17);
  if (null != tmp7) {
    class R {
      constructor() {
        tmp2 = undefined;
        if (null != closure_0) {
          obj = { routes: null };
          obj.routes = tmp;
          tmp2 = obj;
        }
        return tmp2;
      }
    }
  }
  if (null == tmp6) {
    class R {
      constructor() {
        tmp2 = undefined;
        if (null != closure_0) {
          obj = { routes: null };
          obj.routes = tmp;
          tmp2 = obj;
        }
        return tmp2;
      }
    }
    if (null != first) {
      class R {
        constructor() {
          tmp2 = undefined;
          if (null != closure_0) {
            obj = { routes: null };
            obj.routes = tmp;
            tmp2 = obj;
          }
          return tmp2;
        }
      }
    }
    tmp6 = tmp19;
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        tmp2 = undefined;
        if (null != closure_0) {
          obj = { routes: null };
          obj.routes = tmp;
          tmp2 = obj;
        }
        return tmp2;
      }
    }
    cResult[10] = tmp21;
  } else {
    class R {
      constructor() {
        tmp2 = undefined;
        if (null != closure_0) {
          obj = { routes: null };
          obj.routes = tmp;
          tmp2 = obj;
        }
        return tmp2;
      }
    }
  }
  if (cResult[11] === tmp4) {
    class R {
      constructor() {
        tmp2 = undefined;
        if (null != closure_0) {
          obj = { routes: null };
          obj.routes = tmp;
          tmp2 = obj;
        }
        return tmp2;
      }
    }
    if (cResult[14] === tmp8) {
      class R {
        constructor() {
          tmp2 = undefined;
          if (null != closure_0) {
            obj = { routes: null };
            obj.routes = tmp;
            tmp2 = obj;
          }
          return tmp2;
        }
      }
    }
    const NavigationIndependentTree = tmp(1491).NavigationIndependentTree;
    const Provider = tmp(6026).HeaderBackContext.Provider;
    const tmp27 = <NavigationIndependentTree>{null}</NavigationIndependentTree>;
    cResult[14] = tmp8;
    cResult[15] = navigationTheme1;
    cResult[16] = tmp6;
    cResult[17] = tmp22;
    cResult[18] = tmp27;
  }
  const merged = Object.assign(tmp9);
  const tmp24 = <closure_11 initialRouteName={tmp4} />;
  cResult[11] = tmp4;
  cResult[12] = tmp9;
  cResult[13] = tmp24;
}) : ((arg0) => {
  let initialRouteName;
  let initialRouteState;
  let navigationTheme;
  let onStateChange;
  let require;
  ({ initialRouteStack: require, initialRouteState, navigationTheme } = arg0);
  ({ initialRouteName, onStateChange } = arg0);
  const merged = Object.assign(arg0, Object.assign({ initialRouteName: 0, initialRouteStack: 0, initialRouteState: 0, onStateChange: 0, navigationTheme: 0 }));
  let obj = Link;
  const navigationContainerRef = obj.createNavigationContainerRef();
  const first = _slicedToArray(react.useState(() => {
    let tmp2;
    if (null != _require) {
      tmp2 = { routes: tmp };
      const obj = { routes: tmp };
    }
    return tmp2;
  }), 1)[0];
  const tmp4 = navigationContainerRef(4797)();
  const obj2 = useNavigationTheme;
  let navigationTheme1 = obj2.useNavigationTheme(tmp4);
  const NavigationIndependentTree = Link.NavigationIndependentTree;
  const Provider = _mod6026.HeaderBackContext.Provider;
  const NavigationContainer = Link.NavigationContainer;
  if (null != navigationTheme) {
    navigationTheme1 = navigationTheme;
  }
  if (null == initialRouteState) {
    let tmp7;
    if (null != first) {
      tmp7 = first;
    }
    initialRouteState = tmp7;
  }
  const merged1 = Object.assign(merged);
  return <NavigationIndependentTree>{null}</NavigationIndependentTree>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let containerStyle;
  let tmp2;
  let tmp3;
  let tmp4;
  let useContainer;
  const obj = react2;
  const cResult = obj.c(13);
  if (cResult[0] !== arg0) {
    ({ useContainer, containerStyle } = arg0);
    const tmp7 = _objectWithoutProperties(arg0, closure_4);
    cResult[0] = arg0;
    cResult[1] = containerStyle;
    cResult[2] = tmp7;
    cResult[3] = useContainer;
    tmp4 = useContainer;
    tmp3 = tmp7;
    tmp2 = containerStyle;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
    tmp4 = cResult[3];
  }
  const tmp9 = closure_10();
  if (cResult[4] === tmp2) {
    let tmp10;
    if (cResult[5] === tmp9.container) {
      tmp10 = cResult[6];
    }
    if (cResult[7] === tmp3) {
      let tmp11;
      if (cResult[8] === (undefined === tmp4 || tmp4)) {
        tmp11 = cResult[9];
      }
      if (cResult[10] === tmp10) {
        let tmp18;
        if (cResult[11] === tmp11) {
          tmp18 = cResult[12];
        }
        return tmp18;
      }
      const tmp21 = <metroImportAll style={tmp10}>{tmp11}</metroImportAll>;
      cResult[10] = tmp10;
      cResult[11] = tmp11;
      cResult[12] = tmp21;
      tmp18 = tmp21;
    }
    const merged = Object.assign(tmp3);
    const tmp12Result = <tmp13 />;
    cResult[7] = tmp3;
    cResult[8] = undefined === tmp4 || tmp4;
    cResult[9] = tmp12Result;
    tmp11 = tmp12Result;
  }
  const items = [tmp9.container, tmp2];
  cResult[4] = tmp2;
  cResult[5] = tmp9.container;
  cResult[6] = items;
  tmp10 = items;
}) : ((useContainer) => {
  let flag = useContainer.useContainer;
  if (flag === undefined) {
    flag = true;
  }
  const containerStyle = useContainer.containerStyle;
  const merged = Object.assign(useContainer, Object.assign({ useContainer: 0, containerStyle: 0 }));
  const items = [closure_10().container, containerStyle];
  const merged1 = Object.assign(merged);
  return <metroImportAll style={items}>{null}</metroImportAll>;
});
let result = size.fileFinishedImporting("design/components/Navigator/native/Navigator.native.tsx");
const Navigator_export = tmp6;

export const useNavigatorScreens = function useNavigatorScreens(fn, items) {
  return react.useMemo(fn, items);
};
export const useAccessibilityNativeStackOptions = tmp5;
export { Navigator_export as Navigator };