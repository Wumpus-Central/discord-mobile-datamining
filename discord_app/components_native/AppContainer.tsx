// === Module 14642: AppContainer ===

// Module 14642 (AppContainer)
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1100 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import SentryInitUtils from "SentryInitUtils" /* 1233 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1480 */;
import Link from "Link" /* 1484 */;
import ManaContext from "ManaContext" /* 4418 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4494 */;
import RootNavigationRef from "RootNavigationRef" /* 4495 */;
import getInitialNavigationStateDefault from "getInitialNavigationState" /* 4496 */;
import Portal from "Portal" /* 4509 */;
import useThemeDefault from "useTheme" /* 4571 */;
import ModalDispatchQueueDefault from "ModalDispatchQueue" /* 4842 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 5207 */;
import useNavigationTheme from "useNavigationTheme" /* 7144 */;
import WebViewContext from "WebViewContext" /* 9773 */;
import StartupProfiler from "StartupProfiler" /* 11662 */;
import MemoryRouter from "MemoryRouter" /* 12912 */;
import RouteManagerDefault from "RouteManager" /* 12918 */;
import DiscordGestureHandlerRootViewDefault from "DiscordGestureHandlerRootView" /* 14643 */;
import getChannelDetailsFromRouteDefault from "getChannelDetailsFromRoute" /* 14646 */;
import MainNavigationLoggerDefault from "MainNavigationLogger" /* 14647 */;
import ReanimatedScreenProvider from "ReanimatedScreenProvider" /* 14649 */;
import RootThemeContextProvider from "RootThemeContextProvider" /* 14657 */;
import AccessibilityPreferencesContextProviderDefault from "AccessibilityPreferencesContextProvider" /* 14659 */;
import ErrorBoundaryDefault from "ErrorBoundary" /* 14660 */;
import AnimatedKeyboardProviderDefault from "AnimatedKeyboardProvider" /* 14661 */;
import ThemedStatusBarDefault from "ThemedStatusBar" /* 14663 */;
import SafeAreaProvider from "SafeAreaProvider" /* 14664 */;
import DevToolsLazyDefault from "DevToolsLazy" /* 14665 */;
import ScreenRecordingPipDefault from "ScreenRecordingPip" /* 16026 */;
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
let closure_7 = fn(7431).handleHistoryStoreNavigationChange;
const Constants = fn(1074);
({ AnalyticEvents: c10, ComponentActions: closure_11, Routes: closure_12 } = Constants);
const isStaticChannelRoute = fn(1964).isStaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
fn(4636);
let createStyles = { flex: { flex: 1 }, rootBackgroundColor: null };
createStyles = { backgroundColor: nativeDefault.colors.ANDROID_NAVIGATION_BAR_BACKGROUND };
createStyles.rootBackgroundColor = createStyles;
let closure_16 = createStyles.createStyles(createStyles);
const ReanimatedRexport = fn(4373);
let result = ReanimatedRexport.configureReanimatedLogger({ level: fn(4373).ReanimatedLogLevel.error, strict: false });
try {
  fn(4988).enableFreeze();
  let obj6 = fn(4988);
  let obj2 = { useTrackNavigatorScreenImpression: fn(14645).useTrackNavigatorScreenImpression };
  fn(7139).setDesignConfig(obj2);
  let c22 = false;
  let closure_23 = { code: "function AppContainerTsx1(){const{RNScreensTurboModule}=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;}" };
  let obj7 = fn(7139);
  const result1 = SentryUtilsDefault.profiledRootComponent(function AppContainer(children) {
    children = children.children;
    const appEntryKey = children.appEntryKey;
    const requestGatewaySocket = appEntryKey(14648).useRequestGatewaySocket("AppContainer:" + appEntryKey);
    const effect = noop.useEffect(() => {
      if (!c22) {
        RNScreensTurboModule = RNScreensTurboModule.RNScreensTurboModule;
        appEntryKey(4373);
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
      let SplashScreenManager = appEntryKey(1150).isIOS();
      if (SplashScreenManager) {
        SplashScreenManager = NativeModules.SplashScreenManager;
      }
      if (SplashScreenManager) {
        const SplashScreenManager2 = NativeModules.SplashScreenManager;
        SplashScreenManager2.hideSplashScreen();
      }
      const obj = appEntryKey(1150);
    }, []);
    let obj = appEntryKey(14648);
    const riveAppStatePlaybackExperiment = appEntryKey(16034).useRiveAppStatePlaybackExperiment("AppContainer");
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
          memo1(dependencyMap[50]);
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
      const items = [closure_2_14(ThemedStatusBarDefault, {}), ];
      const obj11 = { children: null };
      const items1 = [children, closure_2_14(SafeAreaProvider.SafeAreaReporter, {}), closure_2_14(DevToolsLazyDefault, {}), closure_2_14(ScreenRecordingPipDefault, {})];
      obj11.children = items1;
      items[1] = __initData(SafeAreaProvider.SafeAreaProvider, obj11);
      obj10.children = items;
      obj9.children = __initData(AnimatedKeyboardProviderDefault.Component, obj10);
      obj8.children = closure_2_14(Portal.PortalProvider, obj9);
      obj7.children = closure_2_14(ErrorBoundaryDefault, obj8);
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