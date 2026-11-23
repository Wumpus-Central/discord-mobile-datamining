// === Module 15800: AppContainer ===

// Module 15800 (AppContainer)
import nativeDefault from "native" /* 575 */;
import router_utils from "router_utils" /* 1098 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1107 */;
import SentryUtilsDefault from "SentryUtils" /* 1241 */;
import SentryInitUtils from "SentryInitUtils" /* 1242 */;
import GlobalUtils from "GlobalUtils" /* 1254 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1497 */;
import Link from "Link" /* 1501 */;
import ManaContext from "ManaContext" /* 5030 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5089 */;
import RootNavigationRef from "RootNavigationRef" /* 5090 */;
import getInitialNavigationStateDefault from "getInitialNavigationState" /* 5091 */;
import Portal from "Portal" /* 5105 */;
import useThemeDefault from "useTheme" /* 5122 */;
import BackPressTracking from "BackPressTracking" /* 5927 */;
import ModalDispatchQueueDefault from "ModalDispatchQueue" /* 6431 */;
import getChannelDetailsFromRouteDefault from "getChannelDetailsFromRoute" /* 6654 */;
import useNavigationTheme from "useNavigationTheme" /* 7192 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 8150 */;
import WebViewContext from "WebViewContext" /* 10814 */;
import StartupProfiler from "StartupProfiler" /* 11978 */;
import MemoryRouter from "MemoryRouter" /* 13737 */;
import RouteManagerDefault from "RouteManager" /* 13743 */;
import DiscordGestureHandlerRootViewDefault from "DiscordGestureHandlerRootView" /* 15801 */;
import MainNavigationLoggerDefault from "MainNavigationLogger" /* 15804 */;
import ReanimatedScreenProvider from "ReanimatedScreenProvider" /* 15806 */;
import RootThemeContextProvider from "RootThemeContextProvider" /* 15814 */;
import AccessibilityPreferencesContextProviderDefault from "AccessibilityPreferencesContextProvider" /* 15816 */;
import ErrorBoundaryDefault from "ErrorBoundary" /* 15817 */;
import AnimatedKeyboardProviderDefault from "AnimatedKeyboardProvider" /* 15818 */;
import ThemedStatusBarDefault from "ThemedStatusBar" /* 15820 */;
import SafeAreaProvider from "SafeAreaProvider" /* 15821 */;
import DevToolsLazyDefault from "DevToolsLazy" /* 15822 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4762 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4816 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4946 */;

const StartupProfilerDefault = StartupProfiler;

require = fn;
function GestureWrapper(children) {
  const tmp = closure_17();
  const styles = tmp;
  const isScreenLandscape = useIsScreenLandscape.useIsScreenLandscape();
  items = [isScreenLandscape, tmp];
  const style = noop.useMemo(() => {
    items = [styles.flex, ];
    let rootBackgroundColor;
    if (isScreenLandscape) {
      rootBackgroundColor = styles.rootBackgroundColor;
    }
    items[1] = rootBackgroundColor;
    return items;
  }, items);
  return colors(DiscordGestureHandlerRootViewDefault, { style, children: children.children });
}
function handleNavigationOnReady() {
  ModalDispatchQueueDefault.flush();
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(constants2.NAVIGATOR_READY);
  const routingInstrumentation = SentryInitUtils.routingInstrumentation;
  const result = routingInstrumentation.registerNavigationContainer(RootNavigationRef.getRootNavigationRef());
  closure_7();
}
function AppNavigationContainer(children) {
  _require = undefined;
  let tmp = useThemeDefault();
  let obj = require("BackPressTracking");
  const trackNavigationBackPress = obj.useTrackNavigationBackPress(require("RootNavigationRef").getRootNavigationRef());
  noop.useRef(undefined);
  const callback = noop.useCallback(() => {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        const currentRoute = rootNavigationRef.getCurrentRoute();
        const tmpResult = NavigationRouteUtils;
        const tmp4 = null != NavigationRouteUtils.coerceGuildsRoute(currentRoute);
        const tmpResult4 = NavigationRouteUtils;
        if (tmp6) {
          AnalyticsUtilsDefault.track(constants.NAV_DRAWER_OPENED);
        }
        ref.current = currentRoute;
        tmp6 = null != NavigationRouteUtils.coerceChannelRoute(ref.current) && tmp4;
        [tmp13, tmp14] = getChannelDetailsFromRouteDefault(currentRoute, true);
        if (null != tmp14) {
          if (isStaticChannelRoute(tmp14)) {
            const channelId = SelectedChannelStore.getChannelId();
            const coerceChannelRouteResult = NavigationRouteUtils.coerceChannelRoute(currentRoute);
            if (coerceChannelRouteResult != null) {
              const subRouteId = coerceChannelRouteResult.params.subRouteId;
            }
            let tmp19 = tmp14 !== channelId;
            if (!tmp19) {
              let tmp20 = null != subRouteId;
              if (tmp20) {
                tmp20 = tmp13 !== SelectedGuildStore.getGuildId();
              }
              tmp19 = tmp20;
            }
            if (tmp19) {
              if (!tmp22) {
                router_utils.transitionTo(state.CHANNEL(tmp13, tmp14, subRouteId), { openChannel: true, navigationReplace: false });
                const tmpResult6 = router_utils;
              }
              tmp22 = null != coerceChannelRouteResult && coerceChannelRouteResult.params.showCreateThread;
            }
            const tmpResult5 = NavigationRouteUtils;
          }
        }
        const tmp12 = _slicedToArray(getChannelDetailsFromRouteDefault(currentRoute, true), 2);
      }
    }
    closure_7();
  }, []);
  const memo = noop.useMemo(() => {
    const tmp = getInitialNavigationStateDefault();
    let name;
    if (tmp != null) {
      const first = tmp.routes[0];
      if (first != null) {
        name = first.name;
      }
    }
    MainNavigationLoggerDefault.log("Initial Screen: " + name);
    return tmp;
  }, []);
  _require = noop.useRef(true);
  const effect = noop.useEffect(() => {
    if (ref2.current) {
      tmp.current = false;
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        const rootNavigationRef = ref2(dependencyMap[18]).getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            const tmpResult = ref2(dependencyMap[23]);
            rootNavigationRef.reset(closure_1_2(dependencyMap[28])(ref2(dependencyMap[23]).modalRoutesAboveMain(rootNavigationRef.getState().routes)));
            const modalRoutesAboveMainResult = ref2(dependencyMap[23]).modalRoutesAboveMain(rootNavigationRef.getState().routes);
          }
        }
        const obj = ref2(dependencyMap[18]);
      }, 0);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, []);
  const obj2 = require("RootNavigationRef");
  const navigationTheme = require("useNavigationTheme").useNavigationTheme(tmp);
  const obj4 = { theme: navigationTheme, ref: null, onReady: null, onStateChange: null, initialState: null, navigationInChildEnabled: true, children: null };
  const obj3 = require("useNavigationTheme");
  obj4.ref = require("RootNavigationRef").getRootNavigationRef();
  obj4.onReady = handleNavigationOnReady;
  obj4.onStateChange = callback;
  obj4.initialState = memo;
  obj4.children = children.children;
  return closure_15(require("Link").NavigationContainer, obj4);
}
function ShareNavigationContainer(children) {
  const tmp = useThemeDefault();
  const theme = useNavigationTheme.useNavigationTheme(tmp);
  const ref = Link.useNavigationContainerRef();
  const trackNavigationBackPress = BackPressTracking.useTrackNavigationBackPress(ref);
  return colors(Link.NavigationContainer, { ref, theme, navigationInChildEnabled: true, children: children.children });
}
function AppNavigationContainerOrEmpty(arg0) {
  ({ children, appEntryKey } = arg0);
  if ("main" === appEntryKey) {
    const obj2 = { children };
    return colors(AppNavigationContainer, obj2);
  } else if ("share" === appEntryKey) {
    const obj3 = { children };
    return colors(ShareNavigationContainer, obj3);
  } else {
    return GlobalUtils.assertNever(appEntryKey);
  }
}
const NativeModules = fn(17).NativeModules;
let closure_7 = fn(6653).handleHistoryStoreNavigationChange;
const Constants = fn(1071);
({ AnalyticEvents: closure_11, ComponentActions: closure_12, Routes: map1 } = Constants);
const isStaticChannelRoute = fn(4769).isStaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4913);
let obj2 = { flex: { flex: 1 }, rootBackgroundColor: { backgroundColor: nativeDefault.colors.ANDROID_NAVIGATION_BAR_BACKGROUND } };
let closure_17 = createStyles.createStyles(obj2);
const module_1653 = fn(1653);
let obj3 = { backgroundColor: nativeDefault.colors.ANDROID_NAVIGATION_BAR_BACKGROUND };
let result = module_1653.configureReanimatedLogger({ level: fn(1653).ReanimatedLogLevel.error, strict: false });
try {
  fn(5868).enableFreeze();
  let obj6 = fn(5868);
  let obj8 = { useTrackNavigatorScreenImpression: fn(15803).useTrackNavigatorScreenImpression };
  fn(7187).setDesignConfig(obj8);
  let c23 = false;
  let closure_24 = { code: "(function AppContainerTsx1(){let[RNScreensTurboModule]=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;})" };
  let obj7 = fn(7187);
  const result1 = SentryUtilsDefault.profiledRootComponent(function AppContainer(children) {
    children = children.children;
    const appEntryKey = children.appEntryKey;
    const requestGatewaySocket = appEntryKey(15805).useRequestGatewaySocket("AppContainer:" + appEntryKey);
    const effect = noop.useEffect(() => {
      if (!c23) {
        items = [closure_24, RNScreensTurboModule.RNScreensTurboModule];
        RNScreensTurboModule = undefined;
        [tmp6, tmp7] = items;
        class AppContainerTsx1 {
          constructor() {
            children.RNScreensTurboModule = closure_0;
            return;
          }
        }
        const items1 = [tmp7];
        AppContainerTsx1.__closure = items1;
        AppContainerTsx1.__workletHash = 16271393189451;
        AppContainerTsx1.__initData = tmp6;
        appEntryKey(1706).scheduleOnUI(AppContainerTsx1);
        c23 = true;
        const obj = appEntryKey(1706);
      }
    }, []);
    const effect1 = noop.useEffect(() => {
      let SplashScreenManager = appEntryKey(1378).isIOS();
      if (SplashScreenManager) {
        SplashScreenManager = NativeModules.SplashScreenManager;
      }
      if (SplashScreenManager) {
        const SplashScreenManager2 = NativeModules.SplashScreenManager;
        SplashScreenManager2.hideSplashScreen();
      }
      const obj = appEntryKey(1378);
    }, []);
    let obj = appEntryKey(15805);
    const riveAppStatePlaybackExperiment = appEntryKey(17443).useRiveAppStatePlaybackExperiment("AppContainer");
    closure_129_0 = riveAppStatePlaybackExperiment;
    items = [riveAppStatePlaybackExperiment];
    const memo = noop.useMemo(() => {
      items = [];
      if (children) {
        items.push("rive-app-state-playback");
      }
      return items;
    }, items);
    closure_129_1 = memo;
    let items1 = [memo];
    const memo1 = noop.useMemo(() => {
      const obj = {
        experiments: { enabledExperiments: appEntryKey },
        captureException(arg0, tags) {
          return memo1(dependencyMap[52]).captureException(arg0, { tags });
        }
      };
      return obj;
    }, items1);
    const items2 = [appEntryKey, children, memo1];
    return noop.useMemo(() => {
      const obj = { profile: StartupProfiler.Profiles.AppContainer, children: null };
      const obj2 = { children: null };
      const obj3 = { children: null };
      const obj4 = { value: memo1, children: null };
      const obj5 = { children: null };
      const tmp = StartupProfilerDefault;
      const obj6 = { value: appEntryKey, children: null };
      const obj7 = { appEntryKey, children: null };
      const obj8 = { children: null };
      const obj9 = { history: null, children: null };
      const tmp2 = AccessibilityPreferencesContextProviderDefault;
      obj9.history = RouteManagerDefault.getHistory();
      const obj11 = { children: null };
      const obj12 = { children: null };
      const obj13 = { children: null };
      const obj14 = { children: null };
      items = [colors(ThemedStatusBarDefault, {}), ];
      const obj15 = { children: null };
      const items1 = [children, colors(SafeAreaProvider.SafeAreaReporter, {}), colors(DevToolsLazyDefault, {})];
      obj15.children = items1;
      items[1] = closure_2_16(SafeAreaProvider.SafeAreaProvider, obj15);
      obj14.children = items;
      obj13.children = closure_2_16(AnimatedKeyboardProviderDefault.Component, obj14);
      obj12.children = colors(Portal.PortalProvider, obj13);
      obj11.children = colors(ErrorBoundaryDefault, obj12);
      obj9.children = colors(GestureWrapper, obj11);
      obj8.children = colors(MemoryRouter.Router, obj9);
      obj7.children = colors(WebViewContext.WebViewContextProvider, obj8);
      obj6.children = colors(AppNavigationContainerOrEmpty, obj7);
      obj5.children = colors(AppEntryKeyContext.AppEntryKeyContext.Provider, obj6);
      obj4.children = colors(tmp2, obj5);
      obj3.children = colors(ManaContext.ManaContextProvider, obj4);
      obj2.children = colors(RootThemeContextProvider.RootThemeContextProvider, obj3);
      obj.children = colors(ReanimatedScreenProvider.ReanimatedScreenProvider, obj2);
      return colors(tmp, obj);
    }, items2);
  });
  const importDefaultResult = SentryUtilsDefault;
  const result2 = fn(2).fileFinishedImporting("components_native/AppContainer.tsx");
  exports.default = result1;
} catch (err) {
}