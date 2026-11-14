// === Module 17036: AppContainer ===

// Module 17036 (AppContainer)
import nativeDefault from "native" /* 575 */;
import router_utils from "router_utils" /* 1099 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import SentryInitUtils from "SentryInitUtils" /* 1243 */;
import GlobalUtils from "GlobalUtils" /* 1255 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import AppEntryKeyContext from "AppEntryKeyContext" /* 1499 */;
import Link from "Link" /* 1503 */;
import ManaContext from "ManaContext" /* 5433 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5492 */;
import RootNavigationRef from "RootNavigationRef" /* 5493 */;
import getInitialNavigationStateDefault from "getInitialNavigationState" /* 5494 */;
import Portal from "Portal" /* 5508 */;
import useThemeDefault from "useTheme" /* 5547 */;
import BackPressTracking from "BackPressTracking" /* 6335 */;
import ModalDispatchQueueDefault from "ModalDispatchQueue" /* 6850 */;
import getChannelDetailsFromRouteDefault from "getChannelDetailsFromRoute" /* 7050 */;
import useNavigationTheme from "useNavigationTheme" /* 7590 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 8560 */;
import StartupProfiler from "StartupProfiler" /* 12447 */;
import WebViewContext from "WebViewContext" /* 12879 */;
import MemoryRouter from "MemoryRouter" /* 13115 */;
import RouteManagerDefault from "RouteManager" /* 13121 */;
import AnimatedKeyboardProviderDefault from "AnimatedKeyboardProvider" /* 13130 */;
import DiscordGestureHandlerRootViewDefault from "DiscordGestureHandlerRootView" /* 17037 */;
import MainNavigationLoggerDefault from "MainNavigationLogger" /* 17040 */;
import ReanimatedScreenProvider from "ReanimatedScreenProvider" /* 17042 */;
import RootThemeContextProvider from "RootThemeContextProvider" /* 17050 */;
import AccessibilityPreferencesContextProviderDefault from "AccessibilityPreferencesContextProvider" /* 17052 */;
import ErrorBoundaryDefault from "ErrorBoundary" /* 17053 */;
import ThemedStatusBarDefault from "ThemedStatusBar" /* 17054 */;
import SafeAreaProvider from "SafeAreaProvider" /* 17055 */;
import DevToolsLazyDefault from "DevToolsLazy" /* 17056 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5209 */;

const StartupProfilerDefault = StartupProfiler;

require = fn;
function GestureWrapper(children) {
  const tmp = closure_16();
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
  return gesture(DiscordGestureHandlerRootViewDefault, { style, children: children.children });
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
        const tmp14 = _slicedToArray(getChannelDetailsFromRouteDefault(currentRoute, true), 2)[1];
        if (null != tmp14) {
          if (isStaticChannelRoute(tmp14)) {
            if (tmp14 !== SelectedChannelStore.getChannelId()) {
              const coerceChannelRouteResult = NavigationRouteUtils.coerceChannelRoute(currentRoute);
              if (!tmp18) {
                router_utils.transitionTo(application_id.CHANNEL(tmp13, tmp14), { openChannel: true, navigationReplace: false });
                const tmpResult6 = router_utils;
              }
              tmp18 = null != coerceChannelRouteResult && coerceChannelRouteResult.params.showCreateThread;
              const tmpResult5 = NavigationRouteUtils;
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
            const tmpResult = ref2(dependencyMap[22]);
            rootNavigationRef.reset(closure_1_2(dependencyMap[27])(ref2(dependencyMap[22]).modalRoutesAboveMain(rootNavigationRef.getState().routes)));
            const modalRoutesAboveMainResult = ref2(dependencyMap[22]).modalRoutesAboveMain(rootNavigationRef.getState().routes);
          }
        }
        const obj = ref2(dependencyMap[17]);
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
  return closure_14(require("Link").NavigationContainer, obj4);
}
function ShareNavigationContainer(children) {
  const tmp = useThemeDefault();
  const theme = useNavigationTheme.useNavigationTheme(tmp);
  const ref = Link.useNavigationContainerRef();
  const trackNavigationBackPress = BackPressTracking.useTrackNavigationBackPress(ref);
  return gesture(Link.NavigationContainer, { ref, theme, navigationInChildEnabled: true, children: children.children });
}
function AppNavigationContainerOrEmpty(arg0) {
  ({ children, appEntryKey } = arg0);
  if ("main" === appEntryKey) {
    const obj2 = { children };
    return gesture(AppNavigationContainer, obj2);
  } else if ("share" === appEntryKey) {
    const obj3 = { children };
    return gesture(ShareNavigationContainer, obj3);
  } else {
    return GlobalUtils.assertNever(appEntryKey);
  }
}
const NativeModules = fn(17).NativeModules;
let closure_7 = fn(7049).handleHistoryStoreNavigationChange;
const Constants = fn(1072);
({ AnalyticEvents: closure_10, ComponentActions: closure_11, Routes: closure_12 } = Constants);
const isStaticChannelRoute = fn(5162).isStaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(5306);
let obj2 = { flex: { flex: 1 }, rootBackgroundColor: { backgroundColor: nativeDefault.colors.ANDROID_NAVIGATION_BAR_BACKGROUND } };
let closure_16 = createStyles.createStyles(obj2);
const module_1655 = fn(1655);
let obj3 = { backgroundColor: nativeDefault.colors.ANDROID_NAVIGATION_BAR_BACKGROUND };
let result = module_1655.configureReanimatedLogger({ level: fn(1655).ReanimatedLogLevel.error, strict: false });
try {
  fn(6276).enableFreeze();
  let obj6 = fn(6276);
  let obj8 = { useTrackNavigatorScreenImpression: fn(17039).useTrackNavigatorScreenImpression };
  fn(7585).setDesignConfig(obj8);
  let c22 = false;
  let closure_23 = { code: "(function AppContainerTsx1(){let[RNScreensTurboModule]=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;})" };
  let obj7 = fn(7585);
  const result1 = SentryUtilsDefault.profiledRootComponent(function AppContainer(children) {
    children = children.children;
    const appEntryKey = children.appEntryKey;
    const requestGatewaySocket = appEntryKey(17041).useRequestGatewaySocket("AppContainer:" + appEntryKey);
    const effect = noop.useEffect(() => {
      if (!c22) {
        items = [closure_23, RNScreensTurboModule.RNScreensTurboModule];
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
        appEntryKey(1708).scheduleOnUI(AppContainerTsx1);
        c22 = true;
        const obj = appEntryKey(1708);
      }
    }, []);
    const effect1 = noop.useEffect(() => {
      let SplashScreenManager = appEntryKey(1380).isIOS();
      if (SplashScreenManager) {
        SplashScreenManager = NativeModules.SplashScreenManager;
      }
      if (SplashScreenManager) {
        const SplashScreenManager2 = NativeModules.SplashScreenManager;
        SplashScreenManager2.hideSplashScreen();
      }
      const obj = appEntryKey(1380);
    }, []);
    let obj = appEntryKey(17041);
    const riveAppStatePlaybackExperiment = appEntryKey(18641).useRiveAppStatePlaybackExperiment("AppContainer");
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
          return memo1(dependencyMap[51]).captureException(arg0, { tags });
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
      items = [gesture(ThemedStatusBarDefault, {}), ];
      const obj15 = { children: null };
      const items1 = [children, gesture(SafeAreaProvider.SafeAreaReporter, {}), gesture(DevToolsLazyDefault, {})];
      obj15.children = items1;
      items[1] = colors(SafeAreaProvider.SafeAreaProvider, obj15);
      obj14.children = items;
      obj13.children = colors(AnimatedKeyboardProviderDefault.Component, obj14);
      obj12.children = gesture(Portal.PortalProvider, obj13);
      obj11.children = gesture(ErrorBoundaryDefault, obj12);
      obj9.children = gesture(GestureWrapper, obj11);
      obj8.children = gesture(MemoryRouter.Router, obj9);
      obj7.children = gesture(WebViewContext.WebViewContextProvider, obj8);
      obj6.children = gesture(AppNavigationContainerOrEmpty, obj7);
      obj5.children = gesture(AppEntryKeyContext.AppEntryKeyContext.Provider, obj6);
      obj4.children = gesture(tmp2, obj5);
      obj3.children = gesture(ManaContext.ManaContextProvider, obj4);
      obj2.children = gesture(RootThemeContextProvider.RootThemeContextProvider, obj3);
      obj.children = gesture(ReanimatedScreenProvider.ReanimatedScreenProvider, obj2);
      return gesture(tmp, obj);
    }, items2);
  });
  const importDefaultResult = SentryUtilsDefault;
  const result2 = fn(2).fileFinishedImporting("components_native/AppContainer.tsx");
  exports.default = result1;
} catch (err) {
}