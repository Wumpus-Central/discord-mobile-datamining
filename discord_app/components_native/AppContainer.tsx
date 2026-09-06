// === Module 14554: GestureWrapper ===

// Module 14554 (GestureWrapper)
import ThemesDefault from "Themes" /* 576 */;
import ComponentDispatcher from "ComponentDispatcher" /* 1109 */;
import _modDef1232 from "module_1232" /* 1232 */;
import _maybeBackfillMissingBreadcrumbsFromTelemetryRing from "_maybeBackfillMissingBreadcrumbsFromTelemetryRing" /* 1233 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1369 */;
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1484 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4418 */;
import useThemeDefault from "useTheme" /* 4495 */;
import enqueueDefault from "enqueue" /* 4766 */;
import useNavigationTheme from "useNavigationTheme" /* 7041 */;
import DiscordGestureHandlerRootViewDefault from "DiscordGestureHandlerRootView" /* 14555 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import { handleHistoryStoreNavigationChange as closure_7 } from "getIdFromHistoryItem" /* 7328 */;
import closure_8 from "ensureGuildLoaded" /* 1957 */;
import closure_9 from "handleConnectionOpen" /* 2011 */;
import ME from "ME" /* 1074 */;
import { isStaticChannelRoute } from "set" /* 1964 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import module_4296 from "module_4296" /* 4296 */;

require = arg1;
function GestureWrapper(children) {
  closure_0 = undefined;
  let isScreenLandscape;
  const tmp = callback3();
  closure_0 = tmp;
  isScreenLandscape = isScreenLandscape(5126).useIsScreenLandscape();
  let items = [isScreenLandscape, tmp];
  const style = React.useMemo(() => {
    const items = [styles.flex, ];
    let rootBackgroundColor;
    if (isScreenLandscape) {
      rootBackgroundColor = styles.rootBackgroundColor;
    }
    items[1] = rootBackgroundColor;
    return items;
  }, items);
  return callback2(DiscordGestureHandlerRootViewDefault, { style, children: children.children });
}
function handleNavigationOnReady() {
  enqueueDefault.flush();
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(constants.NAVIGATOR_READY);
  const routingInstrumentation = _maybeBackfillMissingBreadcrumbsFromTelemetryRing.routingInstrumentation;
  const obj = enqueueDefault;
  const result = routingInstrumentation.registerNavigationContainer(getRootNavigationRef.getRootNavigationRef());
  callback();
}
function AppNavigationContainer(children) {
  closure_0 = undefined;
  let _require;
  closure_0 = React.useRef(undefined);
  const callback = React.useCallback(() => {
    const rootNavigationRef = ref2(closure_1_3[17]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        const currentRoute = rootNavigationRef.getCurrentRoute();
        let tmpResult = tmp(tmp2[22]);
        tmpResult = tmp(tmp2[22]);
        const tmp4 = null != tmpResult.coerceGuildsRoute(currentRoute);
        const tmp5 = ref;
        if (tmp6) {
          closure_1_2(tmp2[25]).track(closure_1_10.NAV_DRAWER_OPENED);
          const obj5 = closure_1_2(tmp2[25]);
        }
        tmp5.current = currentRoute;
        tmp6 = null != tmpResult.coerceChannelRoute(ref.current) && null != tmpResult.coerceGuildsRoute(currentRoute);
        const tmp14 = closure_1_4(closure_1_2(tmp2[21])(currentRoute, true), 2)[1];
        if (null != tmp14) {
          if (closure_1_13(tmp14)) {
            if (tmp14 !== closure_1_9.getChannelId()) {
              const coerceChannelRouteResult = tmp(tmp2[22]).coerceChannelRoute(currentRoute);
              if (!tmp18) {
                tmp(tmp2[23]).transitionTo(closure_1_12.CHANNEL(tmp13, tmp14), { openChannel: true, navigationReplace: false });
                const tmpResult2 = tmp(tmp2[23]);
              }
              tmp18 = null != coerceChannelRouteResult && coerceChannelRouteResult.params.showCreateThread;
              const tmpResult1 = tmp(tmp2[22]);
            }
          }
        }
        const tmp12 = closure_1_4(closure_1_2(tmp2[21])(currentRoute, true), 2);
      }
    }
    closure_1_7();
  }, []);
  const memo = React.useMemo(() => {
    const tmp = callback(4419)();
    let name;
    if (tmp != null) {
      const first = tmp.routes[0];
      if (first != null) {
        name = first.name;
      }
    }
    callback(14559).log("Initial Screen: " + name);
    return tmp;
  }, []);
  _require = React.useRef(true);
  const effect = React.useEffect(() => {
    if (ref2.current) {
      tmp.current = false;
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        const rootNavigationRef = callback(table[17]).getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            const routes = rootNavigationRef.getState().routes;
            const found = routes.filter((name) => "modal" === name.name);
            rootNavigationRef.reset(callback2(table[26])(found));
          }
        }
      }, 0);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, []);
  let obj = _require(7041);
  const navigationTheme = obj.useNavigationTheme(useThemeDefault());
  obj = { theme: navigationTheme, ref: null, onReady: null, onStateChange: null, initialState: null, navigationInChildEnabled: true, children: null };
  let tmp = useThemeDefault();
  obj[1] = _require(4418).getRootNavigationRef();
  obj[2] = handleNavigationOnReady;
  obj[3] = callback;
  obj[4] = memo;
  obj[6] = children.children;
  return callback2(_require(1484).NavigationContainer, obj);
}
function ShareNavigationContainer(children) {
  const tmp = useThemeDefault();
  const theme = useNavigationTheme.useNavigationTheme(tmp);
  return callback2(createStandardNavigationFactories.NavigationContainer, { theme, navigationInChildEnabled: true, children: children.children });
}
function AppNavigationContainerOrEmpty(arg0) {
  ({ children, appEntryKey } = arg0);
  if ("main" === appEntryKey) {
    let obj = { children: null };
    obj[0] = children;
    return callback2(AppNavigationContainer, obj);
  } else if ("share" === appEntryKey) {
    obj = { children: null };
    obj[0] = children;
    return callback2(ShareNavigationContainer, obj);
  } else {
    obj = isDiscordFrontendDevelopment;
    return obj.assertNever(appEntryKey);
  }
}
({ AnalyticEvents: c10, ComponentActions: unpackModuleId, Routes: closure_12 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = { flex: { flex: 1 }, rootBackgroundColor: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.ANDROID_NAVIGATION_BAR_BACKGROUND };
createCacheKey[1] = createCacheKey;
let closure_16 = createCacheKey.createStyles(createCacheKey);
let result = module_4296.configureReanimatedLogger({ level: require("module_4296").ReanimatedLogLevel.error, strict: false });
try {
  require("enableScreens").enableFreeze();
  let obj6 = require("enableScreens");
  let obj2 = { useTrackNavigatorScreenImpression: null };
  obj2[0] = require("useTrackNavigatorScreenImpression").useTrackNavigatorScreenImpression;
  require("designConfig").setDesignConfig(obj2);
  let c22 = false;
  let closure_23 = { code: "function AppContainerTsx1(){const{RNScreensTurboModule}=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;}" };
  let obj7 = require("designConfig");
  const result1 = _modDef1232.profiledRootComponent(function AppContainer(children) {
    children = children.children;
    let riveAppStatePlaybackExperiment = children;
    const appEntryKey = children.appEntryKey;
    let memo = appEntryKey;
    let memo1;
    const requestGatewaySocket = memo(14560).useRequestGatewaySocket("AppContainer:" + appEntryKey);
    const effect = React.useEffect(() => {
      if (!c22) {
        RNScreensTurboModule = RNScreensTurboModule.RNScreensTurboModule;
        let obj = memo(4296);
        const fn = function e() {
          RNScreensTurboModule.RNScreensTurboModule = RNScreensTurboModule;
        };
        obj = { RNScreensTurboModule: null };
        obj[0] = RNScreensTurboModule;
        fn.__closure = obj;
        fn.__workletHash = 8891274578898;
        fn.__initData = closure_23;
        obj.runOnUI(fn)();
        c22 = true;
      }
    }, []);
    const effect1 = React.useEffect(() => {
      let SplashScreenManager = memo(1115).isIOS();
      if (SplashScreenManager) {
        SplashScreenManager = closure_6.SplashScreenManager;
      }
      if (SplashScreenManager) {
        const SplashScreenManager2 = closure_6.SplashScreenManager;
        SplashScreenManager2.hideSplashScreen();
      }
    }, []);
    riveAppStatePlaybackExperiment = undefined;
    memo = undefined;
    let obj = memo(14560);
    riveAppStatePlaybackExperiment = memo(15939).useRiveAppStatePlaybackExperiment("AppContainer");
    let items = [riveAppStatePlaybackExperiment];
    memo = React.useMemo(() => {
      const items = [];
      if (riveAppStatePlaybackExperiment) {
        items.push("rive-app-state-playback");
      }
      return items;
    }, items);
    let items1 = [memo];
    memo1 = React.useMemo(() => {
      obj = {
        experiments: obj,
        captureException(arg0, tags) {
          let obj = callback(table[51]);
          obj = { tags };
          return obj.captureException(arg0, obj);
        }
      };
      obj = { enabledExperiments: memo };
      return obj;
    }, items1);
    const items2 = [appEntryKey, children, memo1];
    return React.useMemo(() => {
      let obj = { profile: memo(closure_1_3[33]).Profiles.AppContainer, children: null };
      obj = { children: null };
      obj = { children: null };
      obj1 = { value: memo1, children: null };
      const obj2 = { children: null };
      const tmp = memo1(closure_1_3[33]);
      const obj3 = { value: memo, children: null };
      const obj4 = { appEntryKey: memo, children: null };
      const obj5 = { children: null };
      const obj6 = { history: null, children: null };
      let obj9 = memo1(closure_1_3[41]);
      obj6[0] = obj9.getHistory();
      const obj7 = { children: null };
      const obj8 = { children: null };
      const tmp2 = memo1(closure_1_3[37]);
      obj9 = { children: null };
      const obj10 = { children: null };
      const obj11 = { children: null };
      const tmp3 = memo1(closure_1_3[42]);
      const items = [closure_1_14(memo1(closure_1_3[46]), {}), ];
      const obj12 = { children: null };
      const items1 = [riveAppStatePlaybackExperiment, closure_1_14(memo(closure_1_3[47]).SafeAreaReporter, {}), closure_1_14(memo1(closure_1_3[48]), {}), closure_1_14(memo1(closure_1_3[49]), {})];
      obj12[0] = items1;
      items[1] = closure_1_15(memo(closure_1_3[47]).SafeAreaProvider, obj12);
      obj11[0] = items;
      obj10[0] = closure_1_15(memo1(closure_1_3[45]), obj11);
      obj9[0] = closure_1_14(memo1(closure_1_3[44]).Component, obj10);
      obj8[0] = closure_1_14(memo(closure_1_3[43]).PortalProvider, obj9);
      obj7[0] = closure_1_14(tmp3, obj8);
      obj6[1] = closure_1_14(closure_1_17, obj7);
      obj5[0] = closure_1_14(memo(closure_1_3[40]).Router, obj6);
      obj4[1] = closure_1_14(memo(closure_1_3[39]).WebViewContextProvider, obj5);
      obj3[1] = closure_1_14(closure_1_21, obj4);
      obj2[0] = closure_1_14(memo(closure_1_3[38]).AppEntryKeyContext.Provider, obj3);
      obj1[1] = closure_1_14(tmp2, obj2);
      obj[0] = closure_1_14(memo(closure_1_3[36]).ManaContextProvider, obj1);
      obj[0] = closure_1_14(memo(closure_1_3[35]).RootThemeContextProvider, obj);
      obj[1] = closure_1_14(memo(closure_1_3[34]).ReanimatedScreenProvider, obj);
      return closure_1_14(tmp, obj);
    }, items2);
  });
  const importDefaultResult = _modDef1232;
  const result2 = require("set").fileFinishedImporting("components_native/AppContainer.tsx");
  exports.default = result1;
} catch (err) {
}