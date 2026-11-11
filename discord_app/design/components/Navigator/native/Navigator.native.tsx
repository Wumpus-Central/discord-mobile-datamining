// discord_app/design/components/Navigator/native/Navigator.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import SentryInitUtils from "../../../../modules/errors/native/SentryInitUtils.tsx";
import Link from "../../../../../_runtime/01500_Link.js";
import Text_Text from "../../Text/native/Text.tsx";
import BackPressTracking from "../../../../modules/routing/native/BackPressTracking.android.tsx";
import useNavigatorShouldCrossfade from "useNavigatorShouldCrossfade.native.tsx";
import NavigatorBackgroundContext from "NavigatorBackgroundContext.native.tsx";
import NavigatorHeader from "NavigatorHeader.native.tsx";
import _mod7434 from "../../../../../_runtime/metro/07434__.js";
import StackNavigator from "../../../../../_runtime/07485_StackNavigator.js";
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
  let headerStyle = screens.headerStyle;
  ({ viewStyle: closure_10, headerLeftContainerStyle } = screens);
  const headerTitleContainerStyle = screens.headerTitleContainerStyle;
  const headerRightContainerStyle = screens.headerRightContainerStyle;
  const headerStatusBarHeight = screens.headerStatusBarHeight;
  const headerBackTitle = screens.headerBackTitle;
  const hideTitle = screens.hideTitle;
  const disableHeaderAnimation = screens.disableHeaderAnimation;
  let gradientColor = screens.gradientColor;
  ({ initialRouteName, detachInactiveScreens } = screens);
  let tmp = cardShadowEnabled();
  closure_19 = tmp;
  const tmp2 = "modal" === gestureDirection.useContext(screens(onDidFocus[7]).NavigatorBackgroundContext);
  closure_20 = tmp2;
  const styles = screens(onDidFocus[8]).useStyles();
  let obj = screens(onDidFocus[8]);
  const navigatorHeaderSize = screens(onDidFocus[8]).useNavigatorHeaderSize();
  let obj2 = screens(onDidFocus[8]);
  const token = screens(onDidFocus[9]).useToken(onWillFocus(onDidFocus[5]).colors.ICON_DEFAULT);
  const obj3 = screens(onDidFocus[9]);
  const navigatorShouldCrossfade = screens(onDidFocus[6]).useNavigatorShouldCrossfade();
  const first = gestureResponseDistance(
    gestureDirection.useState(() => screens(onDidFocus[10]).createStackNavigator()),
    1,
  )[0];
  const top = onWillFocus(onDidFocus[11])().top;
  items = [navigatorHeaderSize.height, headerStatusBarHeight, top];
  const memo = gestureDirection.useMemo(() => {
    let tmp = headerStatusBarHeight;
    if (null == headerStatusBarHeight) {
      tmp = top;
    }
    return { height: navigatorHeaderSize.height + tmp };
  }, items);
  let items1 = [onWillFocus, onDidFocus];
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
  }, items1);
  let items2 = [navigatorShouldCrossfade, memo, tmp2, , , , , , , , , , , , , , , , , , , , , , ,];
  ({
    navbar: arr3[3],
    modalBackground: arr3[4],
    headerLeftContainerStyle: arr3[5],
    headerRightContainerStyle: arr3[6],
  } = tmp);
  items2[7] = headerStyle;
  items2[8] = navigatorHeaderSize;
  items2[9] = token;
  ({ headerTitle: arr3[10], headerBackTitleStyle: arr3[11] } = styles);
  items2[12] = headerTitleContainerStyle;
  items2[13] = headerLeftContainerStyle;
  items2[14] = headerRightContainerStyle;
  items2[15] = hideTitle;
  items2[16] = gestureDirection;
  items2[17] = gestureResponseDistance;
  items2[18] = cardOverlayEnabled;
  items2[19] = cardShadowEnabled;
  items2[20] = cardStyle;
  items2[21] = headerBackTitle;
  items2[22] = headerTitleAlign;
  items2[23] = headerStatusBarHeight;
  items2[24] = top;
  items2[25] = disableHeaderAnimation;
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
      let obj = {
        headerMode: str,
        headerStyle: null,
        headerTintColor: null,
        headerTitleStyle: null,
        headerBackTitleStyle: null,
        headerTitleAllowFontScaling: false,
        headerBackImage: null,
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
      items = [closure_19.navbar, , ,];
      let modalBackground = closure_20;
      if (closure_20) {
        modalBackground = closure_19.modalBackground;
      }
      items[1] = modalBackground;
      items[2] = memo;
      items[3] = headerStyle;
      obj.headerStyle = items;
      obj.headerTintColor = token;
      const items1 = [styles.headerTitle, Text_Text.TextStyleSheet[navigatorHeaderSize.titleVariant]];
      obj.headerTitleStyle = items1;
      obj.headerBackTitleStyle = styles.headerBackTitleStyle;
      obj.headerBackImage = NavigatorHeader.renderBackImage;
      const items2 = [{ maxWidth: "60%", alignItems: "center" }, headerTitleContainerStyle];
      obj.headerTitleContainerStyle = items2;
      const items3 = [closure_19.headerLeftContainerStyle, headerLeftContainerStyle];
      obj.headerLeftContainerStyle = items3;
      const items4 = [closure_19.headerRightContainerStyle, headerRightContainerStyle];
      obj.headerRightContainerStyle = items4;
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
      let tmp6 = headerBackTitle;
      if (headerBackTitle == null) {
        let stringResult;
        if (1 === routes.length) {
          const intl = util.intl;
          stringResult = intl.string(util.t["13/7kX"]);
        }
        tmp6 = stringResult;
      }
      obj.headerBackTitle = tmp6;
      let str2 = headerTitleAlign;
      if (headerTitleAlign == null) {
        str2 = "center";
      }
      obj.headerTitleAlign = str2;
      let tmp8 = headerStatusBarHeight;
      if (null == headerStatusBarHeight) {
        tmp8 = top;
      }
      obj.headerStatusBarHeight = tmp8;
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
          const HeaderStyleInterpolators = screens(onDidFocus[10]).HeaderStyleInterpolators;
          const forUIKitResult = HeaderStyleInterpolators.forUIKit({ current, next, layouts, direction });
          forUIKitResult.leftButtonStyle.transform = forUIKitResult.titleStyle.transform;
          forUIKitResult.rightButtonStyle.transform = forUIKitResult.titleStyle.transform;
          return forUIKitResult;
        };
      }
      obj.headerStyleInterpolator = fn3;
      return obj;
    }, items2),
    children: null,
  };
  const obj4 = screens(onDidFocus[6]);
  const keys = onWillFocus(onDidFocus[14]).keys(screens);
  obj5.children = keys.map((name) => {
    const options = {};
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
      items = [options.headerStyle, { backgroundColor: "transparent" }];
      options.headerStyle = items;
    }
    let tmp3;
    if (!fullscreen) {
      tmp3 = gradientColor;
    }
    gradientColor = tmp3;
    if (null != tmp3) {
      options.headerTransparent = true;
      const items1 = [closure_19.navbar, memo, ,];
      headerStyle = options.headerStyle;
      items1[2] = headerStyle;
      items1[3] = closure_19.gradientNavbar;
      options.headerStyle = items1;
    }
    return cardOverlayEnabled(
      first.Screen,
      {
        name,
        initialParams: options.initialParams,
        listeners,
        options,
        children(arg0) {
          screen = { screen };
          const merged = Object.assign(arg0);
          screen.viewStyle = viewStyle;
          screen.gradientColor = gradientColor;
          return jsx(NavigatorScreen.NavigatorScreen, { screen });
        },
      },
      name,
    );
  });
  return cardOverlayEnabled(first.Navigator, obj5);
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
  const navigationContainerRef = Link.useNavigationContainerRef();
  const trackNavigationBackPress = BackPressTracking.useTrackNavigationBackPress(navigationContainerRef);
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
  const tmp5 = navigationContainerRef(5484)();
  let navigationTheme1 = useNavigationTheme.useNavigationTheme(tmp5);
  const obj4 = {
    ref: navigationContainerRef,
    theme: null,
    initialState: null,
    onReady: null,
    onStateChange: null,
    children: null,
  };
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
  obj6.children = jsx(Link.NavigationContainer, {
    ref: navigationContainerRef,
    theme: null,
    initialState: null,
    onReady: null,
    onStateChange: null,
    children: null,
  });
  obj5.children = jsx(_mod7434.HeaderBackContext.Provider, { value: "Array", children: 0 });
  return jsx(Link.NavigationIndependentTree, { children: null });
}
get_ActivityIndicator = fn(17);
({ StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5243);
let obj2 = {
  container: null,
  navbar: null,
  modalBackground: null,
  headerLeftContainerStyle: null,
  headerRightContainerStyle: null,
  gradientNavbar: null,
};
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOW;
obj2.container = obj3;
obj2.navbar = {
  borderBottomWidth: StyleSheet.hairlineWidth,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  shadowColor: "transparent",
};
let obj4 = {
  borderBottomWidth: StyleSheet.hairlineWidth,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  shadowColor: "transparent",
};
obj2.modalBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.headerLeftContainerStyle = { paddingLeft: 16, marginRight: -16 };
obj2.headerRightContainerStyle = { paddingRight: 16, marginLeft: -16 };
obj2.gradientNavbar = { backgroundColor: "transparent", borderBottomWidth: 0 };
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
  const tmp2 = closure_7();
  let modalBackground = "modal" === noop.useContext(NavigatorBackgroundContext.NavigatorBackgroundContext);
  items = [tmp2.container, ,];
  if (modalBackground) {
    modalBackground = tmp2.modalBackground;
  }
  const obj = { style: items, children: null };
  items[1] = modalBackground;
  items[2] = useContainer.containerStyle;
  const merged1 = Object.assign(merged);
  obj.children = jsx(flag ? WrappedNavigationStack : NavigationStack, {});
  return <hasOwnProperty style={items}>{null}</hasOwnProperty>;
}
