// === Module 6496: Navigator ===

// Module 6496 (Navigator)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import SentryInitUtils from "SentryInitUtils" /* 1243 */;
import Link from "Link" /* 1491 */;
import useThemeDefault from "useTheme" /* 4791 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import _mod6019 from "module_6019" /* 6019 */;
import useNavigatorShouldCrossfade from "useNavigatorShouldCrossfade" /* 6497 */;
import StackNavigator from "StackNavigator" /* 6498 */;
import NavigatorScreen from "NavigatorScreen" /* 6531 */;
import useNavigationTheme from "useNavigationTheme" /* 6538 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["initialRouteName", "initialRouteStack", "initialRouteState", "onStateChange", "navigationTheme"];
let closure_4 = ["useContainer", "containerStyle"];
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_8 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { container: null, navbar: null, headerLeftContainerStyle: null, headerRightContainerStyle: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOW;
obj2.container = obj3;
obj2.navbar = { borderBottomWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, shadowColor: "transparent" };
obj2.headerLeftContainerStyle = { paddingLeft: 16, marginRight: -16 };
obj2.headerRightContainerStyle = { paddingRight: 16, marginLeft: -16 };
let closure_10 = createStyles.createStyles(obj2);
fn(558);
let obj4 = { borderBottomWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, shadowColor: "transparent" };
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((screens) => {
  const cResult = screens(onDidFocus[8]).c(39);
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
  closure_18 = tmp3;
  let obj = screens(onDidFocus[8]);
  const styles = screens(onDidFocus[10]).useStyles();
  let obj2 = screens(onDidFocus[10]);
  const token = screens(onDidFocus[11]).useToken(onWillFocus(onDidFocus[6]).colors.NAVIGATOR_HEADER_TINT);
  const obj3 = screens(onDidFocus[11]);
  const navigatorShouldCrossfade = screens(onDidFocus[9]).useNavigatorShouldCrossfade();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let fn = function n() {
      return screens(onDidFocus[12]).createStackNavigator();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const first1 = cardOverlayEnabled(cardShadowEnabled.useState(first), 1)[0];
  const top = tmp5(tmp[13])().top;
  if (cResult[1] === onDidFocus) {
    if (cResult[2] === onWillFocus) {
      let tmp10 = cResult[3];
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
                                              if (cResult[25] === top) {
                                                let tmp11 = cResult[26];
                                              }
                                              if (cResult[27] === first1.Screen) {
                                                if (cResult[28] === hideTitle) {
                                                  if (cResult[29] === tmp10) {
                                                    if (cResult[30] === screens) {
                                                      if (cResult[31] === viewStyle) {
                                                        let tmp13 = cResult[32];
                                                      }
                                                      if (cResult[33] === first1.Navigator) {
                                                        if (cResult[34] === detachInactiveScreens) {
                                                          if (cResult[35] === initialRouteName) {
                                                            if (cResult[36] === tmp11) {
                                                              if (cResult[37] === tmp13) {
                                                                let tmp16 = cResult[38];
                                                              }
                                                              return tmp16;
                                                            }
                                                          }
                                                        }
                                                      }
                                                      class G {
                                                        constructor(arg0) {
                                                          navigation = screens.navigation;
                                                          state = navigation.getState();
                                                          routes = undefined;
                                                          if (state != null) {
                                                            routes = state.routes;
                                                          }
                                                          if (routes == null) {
                                                            routes = [];
                                                          }
                                                          tmp2 = closure_21;
                                                          str = undefined;
                                                          if (closure_21) {
                                                            str = "screen";
                                                          }
                                                          obj = { headerMode: str, headerStyle: null, headerTintColor: closure_20, headerTitleStyle: closure_19.headerTitle, headerBackTitleStyle: closure_19.headerBackTitleStyle, headerTitleAllowFontScaling: false, headerBackImage: closure_0(closure_2[10]).renderBackImage, headerBackButtonDisplayMode: "minimal", headerTitleContainerStyle: null, headerLeftContainerStyle: null, headerRightContainerStyle: null, headerTitle: null, gestureDirection: null, gestureResponseDistance: null, cardOverlayEnabled: null, cardShadowEnabled: null, cardStyle: null, headerBackTitle: null, headerTitleAlign: null, headerStatusBarHeight: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
                                                          items = [, ];
                                                          items[0] = closure_18.navbar;
                                                          items[1] = headerStyle;
                                                          obj.headerStyle = items;
                                                          tmp3 = closure_0;
                                                          tmp4 = closure_2;
                                                          items1 = [, ];
                                                          items1[0] = { maxWidth: "60%", alignItems: "center" };
                                                          items1[1] = headerTitleContainerStyle;
                                                          obj.headerTitleContainerStyle = items1;
                                                          items2 = [, ];
                                                          items2[0] = closure_18.headerLeftContainerStyle;
                                                          items2[1] = headerLeftContainerStyle;
                                                          obj.headerLeftContainerStyle = items2;
                                                          items3 = [, ];
                                                          items3[0] = closure_18.headerRightContainerStyle;
                                                          items3[1] = headerRightContainerStyle;
                                                          obj.headerRightContainerStyle = items3;
                                                          fn = undefined;
                                                          if (hideTitle) {
                                                            fn = () => {

                                                            };
                                                          }
                                                          obj.headerTitle = fn;
                                                          obj.gestureDirection = gestureDirection;
                                                          obj.gestureResponseDistance = gestureResponseDistance;
                                                          obj.cardOverlayEnabled = cardOverlayEnabled;
                                                          obj.cardShadowEnabled = cardShadowEnabled;
                                                          obj.cardStyle = cardStyle;
                                                          tmp5 = headerBackTitle;
                                                          if (headerBackTitle == null) {
                                                            num = 1;
                                                            stringResult = undefined;
                                                            if (1 === routes.length) {
                                                              intl = tmp3(tmp4[14]).intl;
                                                              stringResult = intl.string(tmp3(tmp4[14]).t["13/7kX"]);
                                                            }
                                                            tmp5 = stringResult;
                                                          }
                                                          obj.headerBackTitle = tmp5;
                                                          str2 = headerTitleAlign;
                                                          if (headerTitleAlign == null) {
                                                            str2 = "center";
                                                          }
                                                          obj.headerTitleAlign = str2;
                                                          tmp7 = headerStatusBarHeight;
                                                          if (null == headerStatusBarHeight) {
                                                            tmp7 = top;
                                                          }
                                                          obj.headerStatusBarHeight = tmp7;
                                                          if (tmp2) {
                                                            fn2 = (current) => {
                                                              const obj = { cardStyle: null };
                                                              const obj2 = { opacity: null };
                                                              const progress = current.current.progress;
                                                              obj2.opacity = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1] });
                                                              obj.cardStyle = obj2;
                                                              return obj;
                                                            };
                                                          } else {
                                                            fn2 = tmp3(tmp4[12]).CardStyleInterpolators.forHorizontalIOS;
                                                          }
                                                          obj.cardStyleInterpolator = fn2;
                                                          if (disableHeaderAnimation) {
                                                            fn3 = tmp3(tmp4[12]).HeaderStyleInterpolators.forNoAnimation;
                                                          } else if (tmp2) {
                                                            fn3 = tmp3(tmp4[12]).HeaderStyleInterpolators.forFade;
                                                          } else {
                                                            fn3 = (arg0) => {
                                                              ({ current, next, layouts, direction } = arg0);
                                                              const HeaderStyleInterpolators = screens(onDidFocus[12]).HeaderStyleInterpolators;
                                                              const forUIKitResult = HeaderStyleInterpolators.forUIKit({ current, next, layouts, direction });
                                                              forUIKitResult.leftButtonStyle.transform = forUIKitResult.titleStyle.transform;
                                                              forUIKitResult.rightButtonStyle.transform = forUIKitResult.titleStyle.transform;
                                                              return forUIKitResult;
                                                            };
                                                          }
                                                          obj.headerStyleInterpolator = fn3;
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
                                                constructor(arg0) {
                                                  navigation = screens.navigation;
                                                  state = navigation.getState();
                                                  routes = undefined;
                                                  if (state != null) {
                                                    routes = state.routes;
                                                  }
                                                  if (routes == null) {
                                                    routes = [];
                                                  }
                                                  tmp2 = closure_21;
                                                  str = undefined;
                                                  if (closure_21) {
                                                    str = "screen";
                                                  }
                                                  obj = { headerMode: str, headerStyle: null, headerTintColor: closure_20, headerTitleStyle: closure_19.headerTitle, headerBackTitleStyle: closure_19.headerBackTitleStyle, headerTitleAllowFontScaling: false, headerBackImage: closure_0(closure_2[10]).renderBackImage, headerBackButtonDisplayMode: "minimal", headerTitleContainerStyle: null, headerLeftContainerStyle: null, headerRightContainerStyle: null, headerTitle: null, gestureDirection: null, gestureResponseDistance: null, cardOverlayEnabled: null, cardShadowEnabled: null, cardStyle: null, headerBackTitle: null, headerTitleAlign: null, headerStatusBarHeight: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
                                                  items = [, ];
                                                  items[0] = closure_18.navbar;
                                                  items[1] = headerStyle;
                                                  obj.headerStyle = items;
                                                  tmp3 = closure_0;
                                                  tmp4 = closure_2;
                                                  items1 = [, ];
                                                  items1[0] = { maxWidth: "60%", alignItems: "center" };
                                                  items1[1] = headerTitleContainerStyle;
                                                  obj.headerTitleContainerStyle = items1;
                                                  items2 = [, ];
                                                  items2[0] = closure_18.headerLeftContainerStyle;
                                                  items2[1] = headerLeftContainerStyle;
                                                  obj.headerLeftContainerStyle = items2;
                                                  items3 = [, ];
                                                  items3[0] = closure_18.headerRightContainerStyle;
                                                  items3[1] = headerRightContainerStyle;
                                                  obj.headerRightContainerStyle = items3;
                                                  fn = undefined;
                                                  if (hideTitle) {
                                                    fn = () => {

                                                    };
                                                  }
                                                  obj.headerTitle = fn;
                                                  obj.gestureDirection = gestureDirection;
                                                  obj.gestureResponseDistance = gestureResponseDistance;
                                                  obj.cardOverlayEnabled = cardOverlayEnabled;
                                                  obj.cardShadowEnabled = cardShadowEnabled;
                                                  obj.cardStyle = cardStyle;
                                                  tmp5 = headerBackTitle;
                                                  if (headerBackTitle == null) {
                                                    num = 1;
                                                    stringResult = undefined;
                                                    if (1 === routes.length) {
                                                      intl = tmp3(tmp4[14]).intl;
                                                      stringResult = intl.string(tmp3(tmp4[14]).t["13/7kX"]);
                                                    }
                                                    tmp5 = stringResult;
                                                  }
                                                  obj.headerBackTitle = tmp5;
                                                  str2 = headerTitleAlign;
                                                  if (headerTitleAlign == null) {
                                                    str2 = "center";
                                                  }
                                                  obj.headerTitleAlign = str2;
                                                  tmp7 = headerStatusBarHeight;
                                                  if (null == headerStatusBarHeight) {
                                                    tmp7 = top;
                                                  }
                                                  obj.headerStatusBarHeight = tmp7;
                                                  if (tmp2) {
                                                    fn2 = (current) => {
                                                      const obj = { cardStyle: null };
                                                      const obj2 = { opacity: null };
                                                      const progress = current.current.progress;
                                                      obj2.opacity = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1] });
                                                      obj.cardStyle = obj2;
                                                      return obj;
                                                    };
                                                  } else {
                                                    fn2 = tmp3(tmp4[12]).CardStyleInterpolators.forHorizontalIOS;
                                                  }
                                                  obj.cardStyleInterpolator = fn2;
                                                  if (disableHeaderAnimation) {
                                                    fn3 = tmp3(tmp4[12]).HeaderStyleInterpolators.forNoAnimation;
                                                  } else if (tmp2) {
                                                    fn3 = tmp3(tmp4[12]).HeaderStyleInterpolators.forFade;
                                                  } else {
                                                    fn3 = (arg0) => {
                                                      ({ current, next, layouts, direction } = arg0);
                                                      const HeaderStyleInterpolators = screens(onDidFocus[12]).HeaderStyleInterpolators;
                                                      const forUIKitResult = HeaderStyleInterpolators.forUIKit({ current, next, layouts, direction });
                                                      forUIKitResult.leftButtonStyle.transform = forUIKitResult.titleStyle.transform;
                                                      forUIKitResult.rightButtonStyle.transform = forUIKitResult.titleStyle.transform;
                                                      return forUIKitResult;
                                                    };
                                                  }
                                                  obj.headerStyleInterpolator = fn3;
                                                  return obj;
                                                }
                                              }
                                              const mapped = arr.map((name) => {
                                                options = {};
                                                let merged = Object.assign(options[name]);
                                                let fullscreen = options.fullscreen;
                                                if (!fullscreen) {
                                                  fullscreen = null != options.customNavbar;
                                                }
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
                                                return headerStyle(first1.Screen, {
                                                  name,
                                                  initialParams: options.initialParams,
                                                  listeners,
                                                  options,
                                                  children(arg0) {
                                                    screen = { screen };
                                                    const merged = Object.assign(arg0);
                                                    screen.viewStyle = viewStyle;
                                                    return jsx(NavigatorScreen.NavigatorScreen, { screen });
                                                  }
                                                }, name);
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
      constructor(arg0) {
        navigation = screens.navigation;
        state = navigation.getState();
        routes = undefined;
        if (state != null) {
          routes = state.routes;
        }
        if (routes == null) {
          routes = [];
        }
        tmp2 = closure_21;
        str = undefined;
        if (closure_21) {
          str = "screen";
        }
        obj = { headerMode: str, headerStyle: null, headerTintColor: closure_20, headerTitleStyle: closure_19.headerTitle, headerBackTitleStyle: closure_19.headerBackTitleStyle, headerTitleAllowFontScaling: false, headerBackImage: closure_0(closure_2[10]).renderBackImage, headerBackButtonDisplayMode: "minimal", headerTitleContainerStyle: null, headerLeftContainerStyle: null, headerRightContainerStyle: null, headerTitle: null, gestureDirection: null, gestureResponseDistance: null, cardOverlayEnabled: null, cardShadowEnabled: null, cardStyle: null, headerBackTitle: null, headerTitleAlign: null, headerStatusBarHeight: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
        items = [, ];
        items[0] = closure_18.navbar;
        items[1] = headerStyle;
        obj.headerStyle = items;
        tmp3 = closure_0;
        tmp4 = closure_2;
        items1 = [, ];
        items1[0] = { maxWidth: "60%", alignItems: "center" };
        items1[1] = headerTitleContainerStyle;
        obj.headerTitleContainerStyle = items1;
        items2 = [, ];
        items2[0] = closure_18.headerLeftContainerStyle;
        items2[1] = headerLeftContainerStyle;
        obj.headerLeftContainerStyle = items2;
        items3 = [, ];
        items3[0] = closure_18.headerRightContainerStyle;
        items3[1] = headerRightContainerStyle;
        obj.headerRightContainerStyle = items3;
        fn = undefined;
        if (hideTitle) {
          fn = () => {

          };
        }
        obj.headerTitle = fn;
        obj.gestureDirection = gestureDirection;
        obj.gestureResponseDistance = gestureResponseDistance;
        obj.cardOverlayEnabled = cardOverlayEnabled;
        obj.cardShadowEnabled = cardShadowEnabled;
        obj.cardStyle = cardStyle;
        tmp5 = headerBackTitle;
        if (headerBackTitle == null) {
          num = 1;
          stringResult = undefined;
          if (1 === routes.length) {
            intl = tmp3(tmp4[14]).intl;
            stringResult = intl.string(tmp3(tmp4[14]).t["13/7kX"]);
          }
          tmp5 = stringResult;
        }
        obj.headerBackTitle = tmp5;
        str2 = headerTitleAlign;
        if (headerTitleAlign == null) {
          str2 = "center";
        }
        obj.headerTitleAlign = str2;
        tmp7 = headerStatusBarHeight;
        if (null == headerStatusBarHeight) {
          tmp7 = top;
        }
        obj.headerStatusBarHeight = tmp7;
        if (tmp2) {
          fn2 = (current) => {
            const obj = { cardStyle: null };
            const obj2 = { opacity: null };
            const progress = current.current.progress;
            obj2.opacity = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1] });
            obj.cardStyle = obj2;
            return obj;
          };
        } else {
          fn2 = tmp3(tmp4[12]).CardStyleInterpolators.forHorizontalIOS;
        }
        obj.cardStyleInterpolator = fn2;
        if (disableHeaderAnimation) {
          fn3 = tmp3(tmp4[12]).HeaderStyleInterpolators.forNoAnimation;
        } else if (tmp2) {
          fn3 = tmp3(tmp4[12]).HeaderStyleInterpolators.forFade;
        } else {
          fn3 = (arg0) => {
            ({ current, next, layouts, direction } = arg0);
            const HeaderStyleInterpolators = screens(onDidFocus[12]).HeaderStyleInterpolators;
            const forUIKitResult = HeaderStyleInterpolators.forUIKit({ current, next, layouts, direction });
            forUIKitResult.leftButtonStyle.transform = forUIKitResult.titleStyle.transform;
            forUIKitResult.rightButtonStyle.transform = forUIKitResult.titleStyle.transform;
            return forUIKitResult;
          };
        }
        obj.headerStyleInterpolator = fn3;
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
      closure_0 = screens;
      obj = {
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
      return obj;
    }
  }
  cResult[1] = onDidFocus;
  cResult[2] = onWillFocus;
  cResult[3] = M;
  tmp10 = M;
}) : ((screens) => {
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
  closure_18 = tmp;
  const styles = screens(onDidFocus[10]).useStyles();
  let obj = screens(onDidFocus[10]);
  const token = screens(onDidFocus[11]).useToken(onWillFocus(onDidFocus[6]).colors.NAVIGATOR_HEADER_TINT);
  let obj2 = screens(onDidFocus[11]);
  const navigatorShouldCrossfade = screens(onDidFocus[9]).useNavigatorShouldCrossfade();
  const first = cardOverlayEnabled(cardShadowEnabled.useState(() => screens(onDidFocus[12]).createStackNavigator()), 1)[0];
  const top = onWillFocus(onDidFocus[13])().top;
  let items = [onWillFocus, onDidFocus];
  const listeners = cardShadowEnabled.useCallback((arg0) => {
    closure_0 = arg0;
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
  const obj4 = {
    detachInactiveScreens,
    initialRouteName,
    screenOptions: cardShadowEnabled.useCallback((navigation) => {
      navigation = navigation.navigation;
      state = navigation.getState();
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
      let obj = { headerMode: str, headerStyle: null, headerTintColor: token, headerTitleStyle: styles.headerTitle, headerBackTitleStyle: styles.headerBackTitleStyle, headerTitleAllowFontScaling: false, headerBackImage: NavigatorHeader.renderBackImage, headerBackButtonDisplayMode: "minimal", headerTitleContainerStyle: null, headerLeftContainerStyle: null, headerRightContainerStyle: null, headerTitle: null, gestureDirection: null, gestureResponseDistance: null, cardOverlayEnabled: null, cardShadowEnabled: null, cardStyle: null, headerBackTitle: null, headerTitleAlign: null, headerStatusBarHeight: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
      const items = [closure_18.navbar, headerStyle];
      obj.headerStyle = items;
      const items1 = [{ maxWidth: "60%", alignItems: "center" }, headerTitleContainerStyle];
      obj.headerTitleContainerStyle = items1;
      const items2 = [closure_18.headerLeftContainerStyle, headerLeftContainerStyle];
      obj.headerLeftContainerStyle = items2;
      const items3 = [closure_18.headerRightContainerStyle, headerRightContainerStyle];
      obj.headerRightContainerStyle = items3;
      let fn;
      if (hideTitle) {
        fn = () => {

        };
      }
      obj.headerTitle = fn;
      obj.gestureDirection = gestureDirection;
      obj.gestureResponseDistance = gestureResponseDistance;
      obj.cardOverlayEnabled = cardOverlayEnabled;
      obj.cardShadowEnabled = cardShadowEnabled;
      obj.cardStyle = cardStyle;
      let tmp5 = headerBackTitle;
      if (headerBackTitle == null) {
        let stringResult;
        if (1 === routes.length) {
          const intl = util.intl;
          stringResult = intl.string(util.t["13/7kX"]);
        }
        tmp5 = stringResult;
      }
      obj.headerBackTitle = tmp5;
      let str2 = headerTitleAlign;
      if (headerTitleAlign == null) {
        str2 = "center";
      }
      obj.headerTitleAlign = str2;
      let tmp7 = headerStatusBarHeight;
      if (null == headerStatusBarHeight) {
        tmp7 = top;
      }
      obj.headerStatusBarHeight = tmp7;
      if (navigatorShouldCrossfade) {
        let fn2 = (current) => {
          const obj = { cardStyle: null };
          const obj2 = { opacity: null };
          const progress = current.current.progress;
          obj2.opacity = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1] });
          obj.cardStyle = obj2;
          return obj;
        };
      } else {
        fn2 = StackNavigator.CardStyleInterpolators.forHorizontalIOS;
      }
      obj.cardStyleInterpolator = fn2;
      if (disableHeaderAnimation) {
        let fn3 = StackNavigator.HeaderStyleInterpolators.forNoAnimation;
      } else if (navigatorShouldCrossfade) {
        fn3 = StackNavigator.HeaderStyleInterpolators.forFade;
      } else {
        fn3 = (arg0) => {
          ({ current, next, layouts, direction } = arg0);
          const HeaderStyleInterpolators = screens(onDidFocus[12]).HeaderStyleInterpolators;
          const forUIKitResult = HeaderStyleInterpolators.forUIKit({ current, next, layouts, direction });
          forUIKitResult.leftButtonStyle.transform = forUIKitResult.titleStyle.transform;
          forUIKitResult.rightButtonStyle.transform = forUIKitResult.titleStyle.transform;
          return forUIKitResult;
        };
      }
      obj.headerStyleInterpolator = fn3;
      return obj;
    }, items1),
    children: null
  };
  const obj3 = screens(onDidFocus[9]);
  const keys = onWillFocus(onDidFocus[15]).keys(screens);
  obj4.children = keys.map((name) => {
    options = {};
    let merged = Object.assign(options[name]);
    let fullscreen = options.fullscreen;
    if (!fullscreen) {
      fullscreen = null != options.customNavbar;
    }
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
    return headerStyle(first.Screen, {
      name,
      initialParams: options.initialParams,
      listeners,
      options,
      children(arg0) {
        screen = { screen };
        const merged = Object.assign(arg0);
        screen.viewStyle = viewStyle;
        return jsx(NavigatorScreen.NavigatorScreen, { screen });
      }
    }, name);
  });
  return headerStyle(first.Navigator, obj4);
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(19);
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
    let tmp9 = tmp12;
    let tmp8 = onStateChange;
    let tmp7 = navigationTheme;
    let tmp6 = initialRouteState;
    let tmp4 = initialRouteName;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const navigationContainerRef = tmp(1491).createNavigationContainerRef();
    cResult[7] = navigationContainerRef;
    let tmp13 = navigationContainerRef;
    const tmpResult = tmp(1491);
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
  let obj = require("c");
  const tmp16 = useThemeDefault();
  const navigationTheme1 = require("useNavigationTheme").useNavigationTheme(tmp16);
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
    if (null != _slicedToArray(noop.useState(R), 1)[0]) {
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
    tmp6 = tmp18;
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
    cResult[10] = tmp20;
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
    const obj2 = { children: null };
    const obj3 = { value: "Array", children: 0 };
    const obj4 = { ref: tmp13, theme: navigationTheme1, initialState: tmp6, onReady: tmp20, onStateChange: tmp8, children: tmp21 };
    obj3.children = jsx(tmp(1491).NavigationContainer, { ref: tmp13, theme: navigationTheme1, initialState: tmp6, onReady: tmp20, onStateChange: tmp8, children: tmp21 });
    obj2.children = jsx(tmp(6019).HeaderBackContext.Provider, { value: "Array", children: 0 });
    const tmp26 = jsx(tmp(1491).NavigationIndependentTree, { children: null });
    cResult[14] = tmp8;
    cResult[15] = navigationTheme1;
    cResult[16] = tmp6;
    cResult[17] = tmp21;
    cResult[18] = tmp26;
  }
  const merged = Object.assign(tmp9);
  const tmp23 = <closure_11 initialRouteName={tmp4} />;
  cResult[11] = tmp4;
  cResult[12] = tmp9;
  cResult[13] = tmp23;
  const obj5 = { initialRouteName: tmp4 };
  const tmpResult2 = require("useNavigationTheme");
}) : ((arg0) => {
  ({ initialRouteStack: require, initialRouteState, navigationTheme } = arg0);
  ({ initialRouteName, onStateChange } = arg0);
  const merged = Object.assign(arg0, Object.assign({ initialRouteName: 0, initialRouteStack: 0, initialRouteState: 0, onStateChange: 0, navigationTheme: 0 }));
  const navigationContainerRef = Link.createNavigationContainerRef();
  const first = _slicedToArray(noop.useState(() => {
    let tmp2;
    if (null != _require) {
      const obj = { routes: tmp };
      tmp2 = obj;
    }
    return tmp2;
  }), 1)[0];
  const tmp4 = navigationContainerRef(4791)();
  let navigationTheme1 = useNavigationTheme.useNavigationTheme(tmp4);
  const obj3 = { ref: navigationContainerRef, theme: null, initialState: null, onReady: null, onStateChange: null, children: null };
  if (null != navigationTheme) {
    navigationTheme1 = navigationTheme;
  }
  obj3.theme = navigationTheme1;
  if (null == initialRouteState) {
    let tmp7;
    if (null != first) {
      tmp7 = first;
    }
    initialRouteState = tmp7;
  }
  const obj4 = { children: null };
  const obj5 = { value: "Array", children: 0 };
  obj3.initialState = initialRouteState;
  obj3.onReady = function onReady() {
    const routingInstrumentation = SentryInitUtils.routingInstrumentation;
    const result = routingInstrumentation.registerNavigationContainer(navigationContainerRef);
  };
  obj3.onStateChange = onStateChange;
  const merged1 = Object.assign(merged);
  obj3.children = <closure_11 initialRouteName={initialRouteName} />;
  obj5.children = jsx(Link.NavigationContainer, { ref: navigationContainerRef, theme: null, initialState: null, onReady: null, onStateChange: null, children: null });
  obj4.children = jsx(_mod6019.HeaderBackContext.Provider, { value: "Array", children: 0 });
  return jsx(Link.NavigationIndependentTree, { children: null });
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const navigatorShouldCrossfade = useNavigatorShouldCrossfade.useNavigatorShouldCrossfade();
  if (cResult[0] !== navigatorShouldCrossfade) {
    let obj3;
    if (navigatorShouldCrossfade) {
      obj3 = { animation: "fade" };
    }
    cResult[0] = navigatorShouldCrossfade;
    cResult[1] = obj3;
    let tmp3 = obj3;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  const navigatorShouldCrossfade = useNavigatorShouldCrossfade.useNavigatorShouldCrossfade();
  const items = [navigatorShouldCrossfade];
  return noop.useMemo(() => {
    let obj;
    if (navigatorShouldCrossfade) {
      obj = { animation: "fade" };
    }
    return obj;
  }, items);
});
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Navigator/native/Navigator.native.tsx");

export const useNavigatorScreens = function useNavigatorScreens(fn, items) {
  return noop.useMemo(fn, items);
};
export const useAccessibilityNativeStackOptions = tmp4;
export const Navigator = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(13);
  if (cResult[0] !== arg0) {
    ({ useContainer, containerStyle } = arg0);
    const tmp7 = _objectWithoutProperties(arg0, closure_4);
    cResult[0] = arg0;
    cResult[1] = containerStyle;
    cResult[2] = tmp7;
    cResult[3] = useContainer;
    let tmp3 = tmp7;
    let tmp2 = containerStyle;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const tmp9 = closure_10();
  if (cResult[4] === tmp2) {
    if (cResult[5] === tmp9.container) {
      let tmp10 = cResult[6];
    }
    if (cResult[7] === tmp3) {
      if (cResult[8] === tmp8) {
        if (cResult[10] === tmp10) {
          if (cResult[11] === tmp11) {
            let tmp19 = cResult[12];
          }
          return tmp19;
        }
        const obj2 = { style: tmp10, children: cResult[9] };
        const tmp22 = <closure_1_8 style={tmp10}>{cResult[9]}</closure_1_8>;
        cResult[10] = tmp10;
        cResult[11] = cResult[9];
        cResult[12] = tmp22;
        tmp19 = tmp22;
      }
    }
    const obj3 = {};
    const merged = Object.assign(tmp3);
    const tmp12Result = jsx(tmp8 ? closure_12 : closure_11, {});
    cResult[7] = tmp3;
    cResult[8] = tmp8;
    cResult[9] = tmp12Result;
    const tmp13 = tmp8 ? closure_12 : closure_11;
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
  const merged = Object.assign(useContainer, Object.assign({ useContainer: 0, containerStyle: 0 }));
  const obj = { style: null, children: null };
  const items = [closure_10().container, useContainer.containerStyle];
  obj.style = items;
  const merged1 = Object.assign(merged);
  obj.children = jsx(flag ? closure_12 : closure_11, {});
  return <closure_1_8 style={null}>{null}</closure_1_8>;
});