// === Module 7256: Navigator ===

// Module 7256 (Navigator)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import SentryInitUtils from "SentryInitUtils" /* 1243 */;
import Link from "Link" /* 1500 */;
import Text_Text from "Text/Text" /* 5781 */;
import BackPressTracking from "BackPressTracking" /* 6183 */;
import NavigatorHeader from "NavigatorHeader" /* 7089 */;
import _mod7096 from "module_7096" /* 7096 */;
import useNavigatorShouldCrossfade from "useNavigatorShouldCrossfade" /* 7257 */;
import StackNavigator from "StackNavigator" /* 7258 */;
import NavigatorScreen from "NavigatorScreen" /* 7291 */;
import useNavigationTheme from "useNavigationTheme" /* 7296 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function NavigationStack(screens) {
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
  const tmp = cardShadowEnabled();
  const navbar = tmp;
  const styles = screens(onDidFocus[7]).useStyles();
  let obj = screens(onDidFocus[7]);
  const navigatorHeaderSize = screens(onDidFocus[7]).useNavigatorHeaderSize();
  let obj2 = screens(onDidFocus[7]);
  const token = screens(onDidFocus[8]).useToken(onWillFocus(onDidFocus[5]).colors.ICON_DEFAULT);
  const obj3 = screens(onDidFocus[8]);
  const navigatorShouldCrossfade = screens(onDidFocus[6]).useNavigatorShouldCrossfade();
  const first = gestureResponseDistance(gestureDirection.useState(() => screens(onDidFocus[9]).createStackNavigator()), 1)[0];
  const top = onWillFocus(onDidFocus[10])().top;
  items = [onWillFocus, onDidFocus];
  const listeners = gestureDirection.useCallback((arg0) => {
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
  let items1 = [navigatorShouldCrossfade, , , , , , , , , , , , , , , , , , , , , , ];
  ({ navbar: arr2[1], headerLeftContainerStyle: arr2[2], headerRightContainerStyle: arr2[3] } = tmp);
  items1[4] = headerStyle;
  items1[5] = navigatorHeaderSize;
  items1[6] = token;
  ({ headerTitle: arr2[7], headerBackTitleStyle: arr2[8] } = styles);
  items1[9] = headerTitleContainerStyle;
  items1[10] = headerLeftContainerStyle;
  items1[11] = headerRightContainerStyle;
  items1[12] = hideTitle;
  items1[13] = gestureDirection;
  items1[14] = gestureResponseDistance;
  items1[15] = cardOverlayEnabled;
  items1[16] = cardShadowEnabled;
  items1[17] = cardStyle;
  items1[18] = headerBackTitle;
  items1[19] = headerTitleAlign;
  items1[20] = headerStatusBarHeight;
  items1[21] = top;
  items1[22] = disableHeaderAnimation;
  const obj5 = {
    detachInactiveScreens,
    initialRouteName,
    screenOptions: gestureDirection.useCallback((navigation) => {
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
      let obj = { headerMode: str, headerStyle: null, headerTintColor: null, headerTitleStyle: null, headerBackTitleStyle: null, headerTitleAllowFontScaling: false, headerBackImage: null, headerBackButtonDisplayMode: "minimal", headerTitleContainerStyle: null, headerLeftContainerStyle: null, headerRightContainerStyle: null, headerTitle: null, gestureDirection: null, gestureResponseDistance: null, cardOverlayEnabled: null, cardShadowEnabled: null, cardStyle: null, headerBackTitle: null, headerTitleAlign: null, headerStatusBarHeight: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
      items = [navbar.navbar, , ];
      let tmp5 = headerStatusBarHeight;
      let tmp6 = headerStatusBarHeight;
      if (null == headerStatusBarHeight) {
        tmp6 = top;
      }
      items[1] = { height: navigatorHeaderSize.height + tmp6 };
      items[2] = headerStyle;
      obj.headerStyle = items;
      obj.headerTintColor = token;
      const items1 = [styles.headerTitle, Text_Text.TextStyleSheet[navigatorHeaderSize.titleVariant]];
      obj.headerTitleStyle = items1;
      obj.headerBackTitleStyle = styles.headerBackTitleStyle;
      obj.headerBackImage = NavigatorHeader.renderBackImage;
      const items2 = [{ maxWidth: "60%", alignItems: "center" }, headerTitleContainerStyle];
      obj.headerTitleContainerStyle = items2;
      const items3 = [navbar.headerLeftContainerStyle, headerLeftContainerStyle];
      obj.headerLeftContainerStyle = items3;
      const items4 = [navbar.headerRightContainerStyle, headerRightContainerStyle];
      obj.headerRightContainerStyle = items4;
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
      let tmp9 = headerBackTitle;
      if (headerBackTitle == null) {
        let stringResult;
        if (1 === routes.length) {
          const intl = util.intl;
          stringResult = intl.string(util.t["13/7kX"]);
        }
        tmp9 = stringResult;
      }
      obj.headerBackTitle = tmp9;
      let str2 = headerTitleAlign;
      if (headerTitleAlign == null) {
        str2 = "center";
      }
      obj.headerTitleAlign = str2;
      if (null == tmp5) {
        tmp5 = top;
      }
      obj.headerStatusBarHeight = tmp5;
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
          const HeaderStyleInterpolators = screens(onDidFocus[9]).HeaderStyleInterpolators;
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
  const obj4 = screens(onDidFocus[6]);
  const keys = onWillFocus(onDidFocus[13]).keys(screens);
  obj5.children = keys.map((name) => {
    const options = {};
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
      items = [options.headerStyle, { backgroundColor: "transparent" }];
      options.headerStyle = items;
    }
    return cardOverlayEnabled(first.Screen, {
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
  return cardOverlayEnabled(first.Navigator, obj5);
}
function WrappedNavigationStack(arg0) {
  ({ initialRouteStack: require, initialRouteState, navigationTheme } = arg0);
  ({ initialRouteName, onStateChange } = arg0);
  const merged = Object.assign(arg0, Object.assign({ initialRouteName: 0, initialRouteStack: 0, initialRouteState: 0, onStateChange: 0, navigationTheme: 0 }));
  const navigationContainerRef = Link.useNavigationContainerRef();
  const trackNavigationBackPress = BackPressTracking.useTrackNavigationBackPress(navigationContainerRef);
  const first = _slicedToArray(noop.useState(() => {
    let tmp2;
    if (null != require) {
      const obj = { routes: tmp };
      tmp2 = obj;
    }
    return tmp2;
  }), 1)[0];
  const tmp5 = navigationContainerRef(5399)();
  let navigationTheme1 = useNavigationTheme.useNavigationTheme(tmp5);
  const obj4 = { ref: navigationContainerRef, theme: null, initialState: null, onReady: null, onStateChange: null, children: null };
  if (null != navigationTheme) {
    navigationTheme1 = navigationTheme;
  }
  obj4.theme = navigationTheme1;
  if (null == initialRouteState) {
    let tmp8;
    if (null != first) {
      tmp8 = first;
    }
    initialRouteState = tmp8;
  }
  const obj5 = { children: null };
  const obj6 = { value: "Array", children: 0 };
  obj4.initialState = initialRouteState;
  obj4.onReady = function onReady() {
    const routingInstrumentation = SentryInitUtils.routingInstrumentation;
    const result = routingInstrumentation.registerNavigationContainer(navigationContainerRef);
  };
  obj4.onStateChange = onStateChange;
  const merged1 = Object.assign(merged);
  obj4.children = <NavigationStack initialRouteName={initialRouteName} />;
  obj6.children = jsx(Link.NavigationContainer, { ref: navigationContainerRef, theme: null, initialState: null, onReady: null, onStateChange: null, children: null });
  obj5.children = jsx(_mod7096.HeaderBackContext.Provider, { value: "Array", children: 0 });
  return jsx(Link.NavigationIndependentTree, { children: null });
}
get_ActivityIndicator = fn(17);
({ StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5170);
let obj2 = { container: null, navbar: null, headerLeftContainerStyle: null, headerRightContainerStyle: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOW;
obj2.container = obj3;
obj2.navbar = { borderBottomWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, shadowColor: "transparent" };
obj2.headerLeftContainerStyle = { paddingLeft: 16, marginRight: -16 };
obj2.headerRightContainerStyle = { paddingRight: 16, marginLeft: -16 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Navigator/native/Navigator.native.tsx");

export function useNavigatorScreens(arg0, items) {
  return noop.useMemo(arg0, items);
}
export function useAccessibilityNativeStackOptions() {
  const navigatorShouldCrossfade = useNavigatorShouldCrossfade.useNavigatorShouldCrossfade();
  items = [navigatorShouldCrossfade];
  return noop.useMemo(() => {
    let obj;
    if (navigatorShouldCrossfade) {
      obj = { animation: "fade" };
    }
    return obj;
  }, items);
}
export function Navigator(useContainer) {
  let flag = useContainer.useContainer;
  if (flag === undefined) {
    flag = true;
  }
  const merged = Object.assign(useContainer, Object.assign({ useContainer: 0, containerStyle: 0 }));
  const obj = { style: null, children: null };
  items = [closure_7().container, useContainer.containerStyle];
  obj.style = items;
  const merged1 = Object.assign(merged);
  obj.children = jsx(flag ? WrappedNavigationStack : NavigationStack, {});
  return <hasOwnProperty style={null}>{null}</hasOwnProperty>;
}