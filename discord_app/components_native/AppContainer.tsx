// === Module 14554: AppContainer ===

// Module 14554 (AppContainer)
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1100 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import SentryInitUtils from "SentryInitUtils" /* 1233 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1480 */;
import Link from "Link" /* 1484 */;
import ManaContext from "ManaContext" /* 4341 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4417 */;
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import getInitialNavigationStateDefault from "getInitialNavigationState" /* 4419 */;
import Portal from "Portal" /* 4432 */;
import useThemeDefault from "useTheme" /* 4495 */;
import ModalDispatchQueueDefault from "ModalDispatchQueue" /* 4766 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 5126 */;
import useNavigationTheme from "useNavigationTheme" /* 7041 */;
import WebViewContext from "WebViewContext" /* 9643 */;
import StartupProfiler from "StartupProfiler" /* 11533 */;
import MemoryRouter from "MemoryRouter" /* 12783 */;
import RouteManagerDefault from "RouteManager" /* 12789 */;
import DiscordGestureHandlerRootViewDefault from "DiscordGestureHandlerRootView" /* 14555 */;
import getChannelDetailsFromRouteDefault from "getChannelDetailsFromRoute" /* 14558 */;
import MainNavigationLoggerDefault from "MainNavigationLogger" /* 14559 */;
import ReanimatedScreenProvider from "ReanimatedScreenProvider" /* 14561 */;
import RootThemeContextProvider from "RootThemeContextProvider" /* 14569 */;
import AccessibilityPreferencesContextProviderDefault from "AccessibilityPreferencesContextProvider" /* 14571 */;
import ErrorBoundaryDefault from "ErrorBoundary" /* 14572 */;
import AnimatedKeyboardProviderDefault from "AnimatedKeyboardProvider" /* 14573 */;
import KeyCommandsViewDefault from "KeyCommandsView" /* 14575 */;
import ThemedStatusBarDefault from "ThemedStatusBar" /* 14577 */;
import SafeAreaProvider from "SafeAreaProvider" /* 14578 */;
import DevToolsLazyDefault from "DevToolsLazy" /* 14579 */;
import ScreenRecordingPipDefault from "ScreenRecordingPip" /* 15931 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

const StartupProfilerDefault = StartupProfiler;

require = fn;
function GestureWrapper(children) {
  const tmp = closure_16();
  const styles = tmp;
  const isScreenLandscape = useIsScreenLandscape.useIsScreenLandscape();
  let items = [isScreenLandscape, tmp];
  const style = noop.useMemo(() => {
    const items = [styles.flex, ];
    let rootBackgroundColor;
    if (isScreenLandscape) {
      rootBackgroundColor = styles.rootBackgroundColor;
    }
    items[1] = rootBackgroundColor;
    return items;
  }, items);
  return closure_1_14(DiscordGestureHandlerRootViewDefault, { style, children: children.children });
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
  noop.useRef(undefined);
  const callback = noop.useCallback(() => {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        const currentRoute = rootNavigationRef.getCurrentRoute();
        const tmpResult = NavigationRouteUtils;
        const tmp4 = null != tmpResult.coerceGuildsRoute(currentRoute);
        if (tmp6) {
          AnalyticsUtilsDefault.track(constants.NAV_DRAWER_OPENED);
        }
        ref.current = currentRoute;
        tmp6 = null != tmpResult.coerceChannelRoute(ref.current) && null != tmpResult.coerceGuildsRoute(currentRoute);
        const tmp14 = _slicedToArray(getChannelDetailsFromRouteDefault(currentRoute, true), 2)[1];
        if (null != tmp14) {
          if (isStaticChannelRoute(tmp14)) {
            if (tmp14 !== SelectedChannelStore.getChannelId()) {
              const coerceChannelRouteResult = NavigationRouteUtils.coerceChannelRoute(currentRoute);
              if (!tmp18) {
                router_utils.transitionTo(closure_2_12.CHANNEL(tmp13, tmp14), { openChannel: true, navigationReplace: false });
                const tmpResult2 = router_utils;
              }
              tmp18 = null != coerceChannelRouteResult && coerceChannelRouteResult.params.showCreateThread;
              const tmpResult1 = NavigationRouteUtils;
            }
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
        const rootNavigationRef = ref2(dependencyMap[17]).getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            const routes = rootNavigationRef.getState().routes;
            const found = routes.filter((name) => "modal" === name.name);
            rootNavigationRef.reset(closure_1_2(dependencyMap[26])(found));
          }
        }
        const obj = ref2(dependencyMap[17]);
      }, 0);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, []);
  let obj = require("useNavigationTheme");
  const navigationTheme = obj.useNavigationTheme(useThemeDefault());
  obj = { theme: navigationTheme, ref: null, onReady: null, onStateChange: null, initialState: null, navigationInChildEnabled: true, children: null };
  let tmp = useThemeDefault();
  obj.ref = require("RootNavigationRef").getRootNavigationRef();
  obj.onReady = handleNavigationOnReady;
  obj.onStateChange = callback;
  obj.initialState = memo;
  obj.children = children.children;
  return closure_14(require("Link").NavigationContainer, obj);
}
function ShareNavigationContainer(children) {
  const tmp = useThemeDefault();
  const theme = useNavigationTheme.useNavigationTheme(tmp);
  return closure_1_14(Link.NavigationContainer, { theme, navigationInChildEnabled: true, children: children.children });
}
function AppNavigationContainerOrEmpty(arg0) {
  ({ children, appEntryKey } = arg0);
  if ("main" === appEntryKey) {
    let obj = { children };
    return closure_1_14(AppNavigationContainer, obj);
  } else if ("share" === appEntryKey) {
    obj = { children };
    return closure_1_14(ShareNavigationContainer, obj);
  } else {
    obj = GlobalUtils;
    return obj.assertNever(appEntryKey);
  }
}
const NativeModules = fn(17).NativeModules;
let closure_7 = fn(7328).handleHistoryStoreNavigationChange;
const Constants = fn(1074);
({ AnalyticEvents: c10, ComponentActions: closure_11, Routes: closure_12 } = Constants);
const isStaticChannelRoute = fn(1964).isStaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let createStyles = { flex: { flex: 1 }, rootBackgroundColor: null };
createStyles = { backgroundColor: nativeDefault.colors.ANDROID_NAVIGATION_BAR_BACKGROUND };
createStyles.rootBackgroundColor = createStyles;
let closure_16 = createStyles.createStyles(createStyles);
const ReanimatedRexport = fn(4296);
let result = ReanimatedRexport.configureReanimatedLogger({ level: fn(4296).ReanimatedLogLevel.error, strict: false });
try {
  fn(4912).enableFreeze();
  let obj6 = fn(4912);
  let obj2 = { useTrackNavigatorScreenImpression: fn(14557).useTrackNavigatorScreenImpression };
  fn(7036).setDesignConfig(obj2);
  let c22 = false;
  let closure_23 = { code: "function AppContainerTsx1(){const{RNScreensTurboModule}=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;}" };
  let obj7 = fn(7036);
  const result1 = SentryUtilsDefault.profiledRootComponent(function AppContainer(children) {
    children = children.children;
    const appEntryKey = children.appEntryKey;
    const requestGatewaySocket = appEntryKey(14560).useRequestGatewaySocket("AppContainer:" + appEntryKey);
    const effect = noop.useEffect(() => {
      if (!c22) {
        RNScreensTurboModule = RNScreensTurboModule.RNScreensTurboModule;
        appEntryKey(4296);
        const fn = function e() {
          children.RNScreensTurboModule = RNScreensTurboModule;
        };
        const obj = { RNScreensTurboModule };
        fn.__closure = obj;
        fn.__workletHash = 8891274578898;
        fn.__initData = __initData;
        obj.runOnUI(fn)();
        c22 = true;
      }
    }, []);
    const effect1 = noop.useEffect(() => {
      let SplashScreenManager = appEntryKey(1115).isIOS();
      if (SplashScreenManager) {
        SplashScreenManager = NativeModules.SplashScreenManager;
      }
      if (SplashScreenManager) {
        const SplashScreenManager2 = NativeModules.SplashScreenManager;
        SplashScreenManager2.hideSplashScreen();
      }
      const obj = appEntryKey(1115);
    }, []);
    let obj = appEntryKey(14560);
    const riveAppStatePlaybackExperiment = appEntryKey(15939).useRiveAppStatePlaybackExperiment("AppContainer");
    closure_129_0 = riveAppStatePlaybackExperiment;
    let items = [riveAppStatePlaybackExperiment];
    const memo = noop.useMemo(() => {
      const items = [];
      if (children) {
        items.push("rive-app-state-playback");
      }
      return items;
    }, items);
    closure_129_1 = memo;
    let items1 = [memo];
    const memo1 = noop.useMemo(() => {
      let obj = {
        experiments: null,
        captureException(arg0, tags) {
          memo1(dependencyMap[51]);
          const obj = { tags };
          return obj.captureException(arg0, obj);
        }
      };
      obj = { enabledExperiments: appEntryKey };
      obj.experiments = obj;
      return obj;
    }, items1);
    const items2 = [appEntryKey, children, memo1];
    return noop.useMemo(() => {
      let obj = { profile: StartupProfiler.Profiles.AppContainer, children: null };
      obj = { children: null };
      obj = { children: null };
      const obj1 = { value: memo1, children: null };
      const obj2 = { children: null };
      const tmp = StartupProfilerDefault;
      const obj3 = { value: appEntryKey, children: null };
      const obj4 = { appEntryKey, children: null };
      const obj5 = { children: null };
      const obj6 = { history: null, children: null };
      let obj9 = RouteManagerDefault;
      obj6.history = obj9.getHistory();
      const obj7 = { children: null };
      const obj8 = { children: null };
      const tmp2 = AccessibilityPreferencesContextProviderDefault;
      obj9 = { children: null };
      const obj10 = { children: null };
      const obj11 = { children: null };
      const tmp3 = ErrorBoundaryDefault;
      const items = [closure_2_14(ThemedStatusBarDefault, {}), ];
      const obj12 = { children: null };
      const items1 = [children, closure_2_14(SafeAreaProvider.SafeAreaReporter, {}), closure_2_14(DevToolsLazyDefault, {}), closure_2_14(ScreenRecordingPipDefault, {})];
      obj12.children = items1;
      items[1] = __initData(SafeAreaProvider.SafeAreaProvider, obj12);
      obj11.children = items;
      obj10.children = __initData(KeyCommandsViewDefault, obj11);
      obj9.children = closure_2_14(AnimatedKeyboardProviderDefault.Component, obj10);
      obj8.children = closure_2_14(Portal.PortalProvider, obj9);
      obj7.children = closure_2_14(tmp3, obj8);
      obj6.children = closure_2_14(GestureWrapper, obj7);
      obj5.children = closure_2_14(MemoryRouter.Router, obj6);
      obj4.children = closure_2_14(WebViewContext.WebViewContextProvider, obj5);
      obj3.children = closure_2_14(AppNavigationContainerOrEmpty, obj4);
      obj2.children = closure_2_14(AppEntryKeyContext.AppEntryKeyContext.Provider, obj3);
      obj1.children = closure_2_14(tmp2, obj2);
      obj.children = closure_2_14(ManaContext.ManaContextProvider, obj1);
      obj.children = closure_2_14(RootThemeContextProvider.RootThemeContextProvider, obj);
      obj.children = closure_2_14(ReanimatedScreenProvider.ReanimatedScreenProvider, obj);
      return closure_2_14(tmp, obj);
    }, items2);
  });
  const importDefaultResult = SentryUtilsDefault;
  const result2 = fn(2).fileFinishedImporting("components_native/AppContainer.tsx");
  exports.default = result1;
} catch (err) {
}