// discord_app/design/components/Navigator/native/Navigator.native.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "_maybeBackfillMissingBreadcrumbsFromTelemetryRing";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { createStandardNavigationFactories } from "../../../../../_runtime/01500_createStandardNavigationFactories.js";
import { useNavigationTheme } from "useNavigationTheme.native.tsx";

let StyleSheet;
let c5;
const require = arg1;
function NavigationStack(screens) {
  let closure_10;
  let detachInactiveScreens;
  let headerLeftContainerStyle;
  let initialRouteName;
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
  let c18;
  let styles;
  let token;
  let navigatorShouldCrossfade;
  let first;
  let top;
  let closure_24;
  ({ initialRouteName, detachInactiveScreens } = screens);
  const tmp = cardShadowEnabled();
  c18 = tmp;
  let obj = screens(onDidFocus[7]);
  styles = obj.useStyles();
  token = screens(onDidFocus[8]).useToken(onWillFocus(onDidFocus[5]).colors.NAVIGATOR_HEADER_TINT);
  const obj2 = screens(onDidFocus[8]);
  navigatorShouldCrossfade = screens(onDidFocus[6]).useNavigatorShouldCrossfade();
  first = gestureResponseDistance(gestureDirection.useState(() => screens(onDidFocus[9]).createStackNavigator()), 1)[0];
  top = onWillFocus(onDidFocus[10])().top;
  let items = [onWillFocus, onDidFocus];
  closure_24 = gestureDirection.useCallback((arg0) => {
    let closure_0 = arg0;
    return {
      focus() {
        if (outer1_1 != null) {
          tmp(closure_0);
        }
      },
      transitionEnd(data) {
        if (!data.data.closing) {
          if (outer1_2 != null) {
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
      let obj = { headerMode: str, headerStyle: items, headerTintColor: token, headerTitleStyle: styles.headerTitle, headerBackTitleStyle: styles.headerBackTitleStyle, headerTitleAllowFontScaling: false, headerBackImage: screens(onDidFocus[7]).renderBackImage, headerBackButtonDisplayMode: "minimal", headerTitleContainerStyle: items1, headerLeftContainerStyle: items2, headerRightContainerStyle: items3, headerTitle: null, gestureDirection: null, gestureResponseDistance: null, cardOverlayEnabled: null, cardShadowEnabled: null, cardStyle: null, headerBackTitle: null, headerTitleAlign: null, headerStatusBarHeight: null, cardStyleInterpolator: null, headerStyleInterpolator: null };
      items = [_undefined.navbar, headerStyle];
      items1 = [{ maxWidth: "60%", alignItems: "center" }, headerTitleContainerStyle];
      items2 = [_undefined.headerLeftContainerStyle, headerLeftContainerStyle];
      items3 = [_undefined.headerRightContainerStyle, headerRightContainerStyle];
      let fn;
      if (hideTitle) {
        fn = () => {

        };
      }
      obj[11] = fn;
      obj[12] = gestureDirection;
      obj[13] = gestureResponseDistance;
      obj[14] = cardOverlayEnabled;
      obj[15] = cardShadowEnabled;
      obj[16] = cardStyle;
      let tmp5 = headerBackTitle;
      if (headerBackTitle == null) {
        let stringResult;
        if (1 === routes.length) {
          const intl = tmp3(tmp4[11]).intl;
          stringResult = intl.string(tmp3(tmp4[11]).t["13/7kX"]);
        }
        tmp5 = stringResult;
      }
      obj[17] = tmp5;
      let str2 = headerTitleAlign;
      if (headerTitleAlign == null) {
        str2 = "center";
      }
      obj[18] = str2;
      let tmp7 = headerStatusBarHeight;
      if (null == headerStatusBarHeight) {
        tmp7 = top;
      }
      obj[19] = tmp7;
      if (navigatorShouldCrossfade) {
        let fn2 = (current) => {
          let obj = { cardStyle: null };
          obj = { opacity: progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }) };
          progress = current.current.progress;
          obj[0] = obj;
          return obj;
        };
      } else {
        fn2 = tmp3(tmp4[9]).CardStyleInterpolators.forHorizontalIOS;
      }
      obj[20] = fn2;
      if (disableHeaderAnimation) {
        let fn3 = tmp3(tmp4[9]).HeaderStyleInterpolators.forNoAnimation;
      } else if (tmp2) {
        fn3 = tmp3(tmp4[9]).HeaderStyleInterpolators.forFade;
      } else {
        fn3 = (arg0) => {
          let current;
          let direction;
          let layouts;
          let next;
          ({ current, next, layouts, direction } = arg0);
          const HeaderStyleInterpolators = callback(table[9]).HeaderStyleInterpolators;
          const forUIKitResult = HeaderStyleInterpolators.forUIKit({ current, next, layouts, direction });
          forUIKitResult.leftButtonStyle.transform = forUIKitResult.titleStyle.transform;
          forUIKitResult.rightButtonStyle.transform = forUIKitResult.titleStyle.transform;
          return forUIKitResult;
        };
      }
      obj[21] = fn3;
      return obj;
    }, items1),
    children: null
  };
  const obj3 = screens(onDidFocus[6]);
  const keys = onWillFocus(onDidFocus[12]).keys(screens);
  obj[3] = keys.map((name) => {
    let obj = {};
    let merged = Object.assign(obj[name]);
    let fullscreen = obj.fullscreen;
    if (!fullscreen) {
      fullscreen = null != obj.customNavbar;
    }
    if (hideTitle) {
      obj.headerTitle = () => {

      };
    }
    if (fullscreen) {
      obj.headerTransparent = true;
      obj.headerMode = "float";
      const items = [obj.headerStyle, { backgroundColor: "transparent" }];
      obj.headerStyle = items;
    }
    obj = {
      name,
      initialParams: obj.initialParams,
      listeners: closure_24,
      options: obj,
      children(arg0) {
        obj = { screen: obj };
        const merged = Object.assign(arg0);
        obj.viewStyle = outer1_10;
        return cardOverlayEnabled(screens(onDidFocus[13]).NavigatorScreen, obj);
      }
    };
    return cardOverlayEnabled(first.Screen, obj, name);
  });
  return cardOverlayEnabled(first.Navigator, obj);
}
function WrappedNavigationStack(arg0) {
  let initialRouteName;
  let initialRouteState;
  let navigationTheme;
  let onStateChange;
  let require;
  ({ initialRouteStack: require, initialRouteState, navigationTheme } = arg0);
  ({ initialRouteName, onStateChange } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let navigationContainerRef;
  let obj = createStandardNavigationFactories;
  navigationContainerRef = obj.createNavigationContainerRef();
  const first = callback(React.useState(() => {
    let tmp2;
    if (null != closure_0) {
      const obj = { routes: null };
      obj[0] = tmp;
      tmp2 = obj;
    }
    return tmp2;
  }), 1)[0];
  let obj1 = useNavigationTheme;
  navigationTheme = obj1.useNavigationTheme(navigationContainerRef(4239)());
  obj = { ref: navigationContainerRef, theme: null, initialState: null, onReady: null, onStateChange: null, children: null };
  obj[1] = navigationTheme;
  if (null == initialRouteState) {
    let tmp7;
    if (null != first) {
      tmp7 = first;
    }
    initialRouteState = tmp7;
  }
  obj = { children: null };
  obj[2] = initialRouteState;
  obj[3] = function onReady() {
    const routingInstrumentation = outer1_0(outer1_2[17]).routingInstrumentation;
    const result = routingInstrumentation.registerNavigationContainer(navigationContainerRef);
  };
  obj[4] = onStateChange;
  obj1 = { initialRouteName };
  const merged1 = Object.assign(merged);
  obj[5] = <NavigationStack initialRouteName={initialRouteName} />;
  obj[0] = jsx(createStandardNavigationFactories.NavigationContainer, { children: null });
  return jsx(createStandardNavigationFactories.NavigationIndependentTree, { children: null });
}
({ StyleSheet, View: c5 } = get_ActivityIndicator);
createCacheKey = { container: null, navbar: null, headerLeftContainerStyle: null, headerRightContainerStyle: null };
createCacheKey = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.backgroundColor = require("Themes").colors.BACKGROUND_BASE_LOW;
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderBottomWidth: StyleSheet.hairlineWidth, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderBottomColor: require("Themes").colors.BORDER_SUBTLE, shadowColor: "transparent" };
createCacheKey[2] = { paddingLeft: 16, marginRight: -16 };
createCacheKey[3] = { paddingRight: 16, marginLeft: -16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderBottomWidth: StyleSheet.hairlineWidth, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderBottomColor: require("Themes").colors.BORDER_SUBTLE, shadowColor: "transparent" };
let result = require("get ActivityIndicator").fileFinishedImporting("design/components/Navigator/native/Navigator.native.tsx");

export const useNavigatorScreens = function useNavigatorScreens(getNextRenewalDateLabel, items) {
  return React.useMemo(getNextRenewalDateLabel, items);
};
export const useAccessibilityNativeStackOptions = function useAccessibilityNativeStackOptions() {
  navigatorShouldCrossfade = navigatorShouldCrossfade(5784).useNavigatorShouldCrossfade();
  const items = [navigatorShouldCrossfade];
  return React.useMemo(() => {
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
  const merged = Object.assign(useContainer, Object.create(null));
  let obj = { style: null, children: null };
  const items = [createCacheKey().container, useContainer.containerStyle];
  obj[0] = items;
  obj = {};
  const merged1 = Object.assign(merged);
  obj[1] = jsx(flag ? WrappedNavigationStack : NavigationStack, {});
  return <closure_5 />;
};