// discord_app/design/components/Navigator/native/Navigator.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import SentryInitUtils from "../../../../modules/errors/native/SentryInitUtils.tsx";
import Link from "../../../../../_runtime/01484_Link.js";
import NavigatorHeader from "NavigatorHeader.native.tsx";
import useNavigatorShouldCrossfade from "useNavigatorShouldCrossfade.native.tsx";
import StackNavigator from "../../../../../_runtime/07002_StackNavigator.js";
import NavigatorScreen from "NavigatorScreen.native.tsx";
import useNavigationTheme from "useNavigationTheme.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  closure_18 = tmp;
  let obj = screens(onDidFocus[7]);
  const styles = obj.useStyles();
  const token = screens(onDidFocus[8]).useToken(onWillFocus(onDidFocus[5]).colors.NAVIGATOR_HEADER_TINT);
  const obj2 = screens(onDidFocus[8]);
  const navigatorShouldCrossfade = screens(onDidFocus[6]).useNavigatorShouldCrossfade();
  const first = gestureResponseDistance(
    gestureDirection.useState(() => screens(onDidFocus[9]).createStackNavigator()),
    1,
  )[0];
  const top = onWillFocus(onDidFocus[10])().top;
  let items = [onWillFocus, onDidFocus];
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
      },
    };
  }, items);
  let items1 = [navigatorShouldCrossfade, , , , , , , , , , , , , , , , , , , , ,];
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
  obj = {
    detachInactiveScreens,
    initialRouteName,
    screenOptions: gestureDirection.useCallback((navigation) => {
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
      let obj = {
        headerMode: str,
        headerStyle: null,
        headerTintColor: token,
        headerTitleStyle: styles.headerTitle,
        headerBackTitleStyle: styles.headerBackTitleStyle,
        headerTitleAllowFontScaling: false,
        headerBackImage: NavigatorHeader.renderBackImage,
        headerBackButtonDisplayMode: "minimal",
        headerTitleContainerStyle: null,
        headerLeftContainerStyle: null,
        headerRightContainerStyle: null,
        headerTitle: null,
        gestureDirection: null,
        gestureResponseDistance: null,
        cardOverlayEnabled: null,
        cardShadowEnabled: null,
        cardStyle: null,
        headerBackTitle: null,
        headerTitleAlign: null,
        headerStatusBarHeight: null,
        cardStyleInterpolator: null,
        headerStyleInterpolator: null,
      };
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
        fn = () => {};
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
          let obj = { cardStyle: null };
          obj = { opacity: null };
          const progress = current.current.progress;
          obj.opacity = progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1] });
          obj.cardStyle = obj;
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
    children: null,
  };
  const obj3 = screens(onDidFocus[6]);
  const keys = onWillFocus(onDidFocus[12]).keys(screens);
  obj.children = keys.map((name) => {
    let options = {};
    let merged = Object.assign(options[name]);
    let fullscreen = options.fullscreen;
    if (!fullscreen) {
      fullscreen = null != options.customNavbar;
    }
    if (hideTitle) {
      options.headerTitle = () => {};
    }
    if (fullscreen) {
      options.headerTransparent = true;
      options.headerMode = "float";
      const items = [options.headerStyle, { backgroundColor: "transparent" }];
      options.headerStyle = items;
    }
    options = {
      name,
      initialParams: options.initialParams,
      listeners,
      options,
      children(arg0) {
        screen = { screen };
        const merged = Object.assign(arg0);
        screen.viewStyle = viewStyle;
        return jsx(NavigatorScreen.NavigatorScreen, { screen });
      },
    };
    return cardOverlayEnabled(first.Screen, options, name);
  });
  return cardOverlayEnabled(first.Navigator, obj);
}
function WrappedNavigationStack(arg0) {
  ({ initialRouteStack: require, initialRouteState, navigationTheme } = arg0);
  ({ initialRouteName, onStateChange } = arg0);
  const merged = Object.assign(
    arg0,
    Object.assign({
      initialRouteName: 0,
      initialRouteStack: 0,
      initialRouteState: 0,
      onStateChange: 0,
      navigationTheme: 0,
    }),
  );
  let obj = Link;
  const navigationContainerRef = obj.createNavigationContainerRef();
  const first = _slicedToArray(
    noop.useState(() => {
      let tmp2;
      if (null != require) {
        const obj = { routes: tmp };
        tmp2 = obj;
      }
      return tmp2;
    }),
    1,
  )[0];
  let obj1 = useNavigationTheme;
  navigationTheme = obj1.useNavigationTheme(navigationContainerRef(4495)());
  obj = {
    ref: navigationContainerRef,
    theme: navigationTheme,
    initialState: null,
    onReady: null,
    onStateChange: null,
    children: null,
  };
  if (null == initialRouteState) {
    let tmp7;
    if (null != first) {
      tmp7 = first;
    }
    initialRouteState = tmp7;
  }
  obj = {
    children: null,
    initialState: initialRouteState,
    onReady() {
      const routingInstrumentation = SentryInitUtils.routingInstrumentation;
      const result = routingInstrumentation.registerNavigationContainer(navigationContainerRef);
    },
    onStateChange,
  };
  obj1 = { initialRouteName };
  const merged1 = Object.assign(merged);
  obj.children = <NavigationStack initialRouteName={initialRouteName} />;
  obj.children = jsx(Link.NavigationContainer, {
    children: null,
    initialState: initialRouteState,
    onReady() {
      const routingInstrumentation = SentryInitUtils.routingInstrumentation;
      const result = routingInstrumentation.registerNavigationContainer(navigationContainerRef);
    },
    onStateChange,
  });
  return jsx(Link.NavigationIndependentTree, {
    children: null,
    initialState: initialRouteState,
    onReady() {
      const routingInstrumentation = SentryInitUtils.routingInstrumentation;
      const result = routingInstrumentation.registerNavigationContainer(navigationContainerRef);
    },
    onStateChange,
  });
}
get_ActivityIndicator = fn(17);
({ StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null, navbar: null, headerLeftContainerStyle: null, headerRightContainerStyle: null };
createStyles = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOW;
createStyles.container = createStyles;
createStyles.navbar = {
  borderBottomWidth: StyleSheet.hairlineWidth,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  shadowColor: "transparent",
};
createStyles.headerLeftContainerStyle = { paddingLeft: 16, marginRight: -16 };
createStyles.headerRightContainerStyle = { paddingRight: 16, marginLeft: -16 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Navigator/native/Navigator.native.tsx");

export const useNavigatorScreens = function useNavigatorScreens(arg0, items) {
  return noop.useMemo(arg0, items);
};
export const useAccessibilityNativeStackOptions = function useAccessibilityNativeStackOptions() {
  const navigatorShouldCrossfade = useNavigatorShouldCrossfade.useNavigatorShouldCrossfade();
  const items = [navigatorShouldCrossfade];
  return noop.useMemo(() => {
    let obj;
    if (navigatorShouldCrossfade) {
      obj = { animation: "fade" };
    }
    return obj;
  }, items);
};
export const Navigator = function Navigator(useContainer) {
  let flag = useContainer.useContainer;
  if (flag === undefined) {
    flag = true;
  }
  const merged = Object.assign(useContainer, Object.assign({ useContainer: 0, containerStyle: 0 }));
  let obj = { style: null, children: null };
  const items = [closure_7().container, useContainer.containerStyle];
  obj.style = items;
  obj = {};
  const merged1 = Object.assign(merged);
  obj.children = jsx(flag ? WrappedNavigationStack : NavigationStack, {});
  return <hasOwnProperty />;
};
