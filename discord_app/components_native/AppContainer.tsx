// discord_app/components_native/AppContainer.tsx
import set from "set";
import designConfig from "designConfig";
import { NativeModules } from "getRootNavigationRef";
import { handleHistoryStoreNavigationChange as closure_7 } from "getIdFromHistoryItem";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import ME from "ME";
import { isStaticChannelRoute } from "set";
import jsxProd from "getChannelDetailsFromRoute";
import createCacheKey from "createCacheKey";
import ReanimatedRexport from "../modules/reanimated/ReanimatedRexport.tsx";

let c10;
let closure_12;
let closure_14;
let closure_15;
let unpackModuleId;
const require = arg1;
function GestureWrapper(children) {
  let c0;
  let isScreenLandscape;
  const tmp = createCacheKey();
  c0 = tmp;
  isScreenLandscape = isScreenLandscape(4815).useIsScreenLandscape();
  let items = [isScreenLandscape, tmp];
  const style = React.useMemo(() => {
    const items = [_undefined.flex, ];
    let rootBackgroundColor;
    if (isScreenLandscape) {
      rootBackgroundColor = _undefined.rootBackgroundColor;
    }
    items[1] = rootBackgroundColor;
    return items;
  }, items);
  return callback2(require("../modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx"), { style, children: children.children });
}
function handleNavigationOnReady() {
  require("../modules/main_tabs_v2/native/modal/ModalDispatchQueue.tsx").flush();
  const ComponentDispatch = require("../utils/ComponentDispatchUtils.tsx") /* ComponentDispatcher */.ComponentDispatch;
  ComponentDispatch.dispatch(constants.NAVIGATOR_READY);
  const routingInstrumentation = require("../modules/errors/native/SentryInitUtils.tsx") /* _maybeBackfillMissingBreadcrumbsFromTelemetryRing */.routingInstrumentation;
  const obj = require("../modules/main_tabs_v2/native/modal/ModalDispatchQueue.tsx");
  const result = routingInstrumentation.registerNavigationContainer(require("../modules/main_tabs_v2/RootNavigationRef.native.tsx") /* getRootNavigationRef */.getRootNavigationRef());
  callback();
}
function AppNavigationContainer(children) {
  let closure_0;
  let _require;
  closure_0 = React.useRef(undefined);
  const callback = React.useCallback(() => {
    const rootNavigationRef = ref2(outer1_3[17]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        const currentRoute = rootNavigationRef.getCurrentRoute();
        let tmpResult = tmp(tmp2[22]);
        tmpResult = tmp(tmp2[22]);
        const tmp4 = null != tmpResult.coerceGuildsRoute(currentRoute);
        const tmp5 = ref;
        if (tmp6) {
          outer1_2(tmp2[25]).track(outer1_10.NAV_DRAWER_OPENED);
          const obj5 = outer1_2(tmp2[25]);
        }
        tmp5.current = currentRoute;
        tmp6 = null != tmpResult.coerceChannelRoute(ref.current) && null != tmpResult.coerceGuildsRoute(currentRoute);
        const tmp14 = outer1_4(outer1_2(tmp2[21])(currentRoute, true), 2)[1];
        if (null != tmp14) {
          if (outer1_13(tmp14)) {
            if (tmp14 !== outer1_9.getChannelId()) {
              const coerceChannelRouteResult = tmp(tmp2[22]).coerceChannelRoute(currentRoute);
              if (!tmp18) {
                tmp(tmp2[23]).transitionTo(outer1_12.CHANNEL(tmp13, tmp14), { openChannel: true, navigationReplace: false });
                const tmpResult2 = tmp(tmp2[23]);
              }
              tmp18 = null != coerceChannelRouteResult && coerceChannelRouteResult.params.showCreateThread;
              const tmpResult1 = tmp(tmp2[22]);
            }
          }
        }
        const tmp12 = outer1_4(outer1_2(tmp2[21])(currentRoute, true), 2);
      }
    }
    outer1_7();
  }, []);
  const memo = React.useMemo(() => {
    const tmp = callback(4138)();
    let name;
    if (tmp != null) {
      const first = tmp.routes[0];
      if (first != null) {
        name = first.name;
      }
    }
    callback(13728).log("Initial Screen: " + name);
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
  let obj = _require("../design/components/Navigator/native/useNavigationTheme.native.tsx");
  const navigationTheme = obj.useNavigationTheme(require("../hooks/useTheme.tsx")());
  obj = { theme: navigationTheme, ref: null, onReady: null, onStateChange: null, initialState: null, children: null };
  let tmp = require("../hooks/useTheme.tsx")();
  obj[1] = _require("../modules/main_tabs_v2/RootNavigationRef.native.tsx").getRootNavigationRef();
  obj[2] = handleNavigationOnReady;
  obj[3] = callback;
  obj[4] = memo;
  obj[5] = children.children;
  return callback2(_require("../../_runtime/01481_Link.js").NavigationContainer, obj);
}
function ShareNavigationContainer(children) {
  const tmp = require("../hooks/useTheme.tsx")();
  const theme = require("../design/components/Navigator/native/useNavigationTheme.native.tsx") /* useNavigationTheme */.useNavigationTheme(tmp);
  return callback2(require("../../_runtime/01481_Link.js") /* Link */.NavigationContainer, { theme, children: children.children });
}
function AppNavigationContainerOrEmpty(arg0) {
  let appEntryKey;
  let children;
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
    obj = require("../utils/GlobalUtils.tsx") /* isDiscordFrontendDevelopment */;
    return obj.assertNever(appEntryKey);
  }
}
({ AnalyticEvents: c10, ComponentActions: unpackModuleId, Routes: closure_12 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = { flex: { flex: 1 }, rootBackgroundColor: null };
createCacheKey = { backgroundColor: require("Themes").colors.ANDROID_NAVIGATION_BAR_BACKGROUND };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = module_4146.configureReanimatedLogger({ level: require("module_4146").ReanimatedLogLevel.error, strict: false });
try {
  require("enableScreens").enableFreeze();
  let obj6 = require("enableScreens");
  let obj2 = { useTrackNavigatorScreenImpression: null };
  obj2[0] = require("useTrackNavigatorScreenImpression").useTrackNavigatorScreenImpression;
  require("designConfig").setDesignConfig(obj2);
  let c22 = false;
  let closure_23 = { code: "function AppContainerTsx1(){const{RNScreensTurboModule}=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;}" };
  let obj7 = require("designConfig");
  const result1 = require("module_1208").profiledRootComponent(function AppContainer(children) {
    children = children.children;
    let riveRendererExperiment = children;
    const appEntryKey = children.appEntryKey;
    let riveAppStatePlaybackExperiment = appEntryKey;
    let memo1;
    const requestGatewaySocket = riveAppStatePlaybackExperiment(13729).useRequestGatewaySocket("AppContainer:" + appEntryKey);
    const effect = React.useEffect(() => {
      if (!c22) {
        RNScreensTurboModule = RNScreensTurboModule.RNScreensTurboModule;
        let obj = riveAppStatePlaybackExperiment(4146);
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
      let SplashScreenManager = riveAppStatePlaybackExperiment(500).isIOS();
      if (SplashScreenManager) {
        SplashScreenManager = closure_6.SplashScreenManager;
      }
      if (SplashScreenManager) {
        const SplashScreenManager2 = closure_6.SplashScreenManager;
        SplashScreenManager2.hideSplashScreen();
      }
    }, []);
    riveRendererExperiment = undefined;
    riveAppStatePlaybackExperiment = undefined;
    memo1 = undefined;
    let obj = riveAppStatePlaybackExperiment(13729);
    riveRendererExperiment = riveAppStatePlaybackExperiment(14970).useRiveRendererExperiment("AppContainer");
    let obj2 = riveAppStatePlaybackExperiment(14970);
    riveAppStatePlaybackExperiment = riveAppStatePlaybackExperiment(14971).useRiveAppStatePlaybackExperiment("AppContainer");
    let items = [riveRendererExperiment, riveAppStatePlaybackExperiment];
    const memo = React.useMemo(() => {
      const items = [];
      if (riveRendererExperiment) {
        items.push("rive-mobile-renderer");
      }
      if (riveAppStatePlaybackExperiment) {
        items.push("rive-app-state-playback");
      }
      return items;
    }, items);
    memo1 = memo;
    let items1 = [memo];
    memo1 = React.useMemo(() => {
      obj = {
        experiments: obj,
        captureException(arg0, tags) {
          let obj = callback(table[52]);
          obj = { tags };
          return obj.captureException(arg0, obj);
        }
      };
      obj = { enabledExperiments: memo1 };
      return obj;
    }, items1);
    const items2 = [appEntryKey, children, memo1];
    return React.useMemo(() => {
      let obj = { profile: null, children: null };
      obj[0] = riveAppStatePlaybackExperiment(outer1_3[33]).Profiles.AppContainer;
      obj = { children: null };
      obj = { children: null };
      const obj1 = { value: memo1, children: null };
      const obj2 = { children: null };
      const tmp = memo1(outer1_3[33]);
      const obj3 = { value: riveAppStatePlaybackExperiment, children: null };
      const obj4 = { appEntryKey: riveAppStatePlaybackExperiment, children: null };
      const obj5 = { children: null };
      const obj6 = { history: null, children: null };
      let obj9 = memo1(outer1_3[41]);
      obj6[0] = obj9.getHistory();
      const obj7 = { children: null };
      const obj8 = { children: null };
      const tmp2 = memo1(outer1_3[37]);
      obj9 = { children: null };
      const obj10 = { children: null };
      const obj11 = { children: null };
      const tmp3 = memo1(outer1_3[42]);
      const items = [outer1_14(memo1(outer1_3[46]), {}), ];
      const obj12 = { children: null };
      const items1 = [riveRendererExperiment, outer1_14(riveAppStatePlaybackExperiment(outer1_3[47]).SafeAreaReporter, {}), outer1_14(memo1(outer1_3[48]), {}), outer1_14(memo1(outer1_3[49]), {})];
      obj12[0] = items1;
      items[1] = outer1_15(riveAppStatePlaybackExperiment(outer1_3[47]).SafeAreaProvider, obj12);
      obj11[0] = items;
      obj10[0] = outer1_15(memo1(outer1_3[45]), obj11);
      obj9[0] = outer1_14(memo1(outer1_3[44]).Component, obj10);
      obj8[0] = outer1_14(riveAppStatePlaybackExperiment(outer1_3[43]).PortalProvider, obj9);
      obj7[0] = outer1_14(tmp3, obj8);
      obj6[1] = outer1_14(outer1_17, obj7);
      obj5[0] = outer1_14(riveAppStatePlaybackExperiment(outer1_3[40]).Router, obj6);
      obj4[1] = outer1_14(riveAppStatePlaybackExperiment(outer1_3[39]).WebViewContextProvider, obj5);
      obj3[1] = outer1_14(outer1_21, obj4);
      obj2[0] = outer1_14(riveAppStatePlaybackExperiment(outer1_3[38]).AppEntryKeyContext.Provider, obj3);
      obj1[1] = outer1_14(tmp2, obj2);
      obj[0] = outer1_14(riveAppStatePlaybackExperiment(outer1_3[36]).ManaContextProvider, obj1);
      obj[0] = outer1_14(riveAppStatePlaybackExperiment(outer1_3[35]).RootThemeContextProvider, obj);
      obj[1] = outer1_14(riveAppStatePlaybackExperiment(outer1_3[34]).ReanimatedScreenProvider, obj);
      return outer1_14(tmp, obj);
    }, items2);
  });
  const importDefaultResult = require("module_1208");
  const result2 = require("get ActivityIndicator").fileFinishedImporting("components_native/AppContainer.tsx");
  exports.default = result1;
} catch (err) {
}