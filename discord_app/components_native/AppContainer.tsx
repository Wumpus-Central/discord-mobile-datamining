// discord_app/components_native/AppContainer.tsx
import expandEventPropertiesDefault from "../utils/AnalyticsUtils.tsx";
import ThemesDefault from "../../discord_common/js/packages/tokens/native.tsx";
import _modDef1208 from "../utils/SentryUtils.native.tsx";
import _maybeBackfillMissingBreadcrumbsFromTelemetryRing from "../modules/errors/native/SentryInitUtils.tsx";
import ComponentDispatcher from "../utils/ComponentDispatchUtils.tsx";
import isDiscordFrontendDevelopment from "../utils/GlobalUtils.tsx";
import createStandardNavigationFactories from "../../_runtime/01501_createStandardNavigationFactories.js";
import getRootNavigationRef from "../modules/main_tabs_v2/RootNavigationRef.native.tsx";
import useThemeDefault from "../hooks/useTheme.tsx";
import enqueueDefault from "../modules/main_tabs_v2/native/modal/ModalDispatchQueue.tsx";
import useNavigationTheme from "../design/components/Navigator/native/useNavigationTheme.native.tsx";
import DiscordGestureHandlerRootViewDefault from "../modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx";
import getChannelDetailsFromRouteDefault from "../modules/main_tabs_v2/native/getChannelDetailsFromRoute.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../_runtime/00019_noop.js";
import { NativeModules } from "../../_runtime/00017_get_ActivityIndicator.js";
import { handleHistoryStoreNavigationChange as closure_7 } from "../modules/main_tabs_v2/native/NavigationHistoryStore.tsx";
import ensureGuildLoaded from "../stores/ChannelStore.tsx";
import handleConnectionOpen from "../stores/SelectedChannelStore.tsx";
import ME from "../Constants.tsx";
import { isStaticChannelRoute } from "../modules/channel/ChannelConstants.tsx";
import jsxProd from "../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import ReanimatedRexport from "../modules/reanimated/ReanimatedRexport.tsx";
import { useNavigationTheme } from "../design/components/Navigator/native/useNavigationTheme.native.tsx";

require = fn;
function GestureWrapper(children) {
  let isScreenLandscape;
  const tmp = callback3();
  closure_0 = tmp;
  isScreenLandscape = isScreenLandscape(8944).useIsScreenLandscape();
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
  const result = routingInstrumentation.registerNavigationContainer(getRootNavigationRef.getRootNavigationRef());
  callback();
}
function AppNavigationContainer(children) {
  closure_0 = React.useRef(undefined);
  const callback = React.useCallback(() => {
    const rootNavigationRef = ref2(dependencyMap[17]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        const currentRoute = rootNavigationRef.getCurrentRoute();
        ref2(dependencyMap[22]);
        const tmpResult = ref2(dependencyMap[22]);
        const tmp4 = null != tmpResult.coerceGuildsRoute(currentRoute);
        if (tmp6) {
          expandEventPropertiesDefault.track(closure_1_10.NAV_DRAWER_OPENED);
        }
        ref.current = currentRoute;
        tmp6 = null != tmpResult.coerceChannelRoute(ref.current) && null != tmpResult.coerceGuildsRoute(currentRoute);
        const tmp14 = closure_1_4(getChannelDetailsFromRouteDefault(currentRoute, true), 2)[1];
        if (null != tmp14) {
          if (isStaticChannelRoute(tmp14)) {
            if (tmp14 !== closure_1_9.getChannelId()) {
              const coerceChannelRouteResult = ref2(dependencyMap[22]).coerceChannelRoute(currentRoute);
              if (!tmp18) {
                ref2(dependencyMap[23]).transitionTo(closure_1_12.CHANNEL(tmp13, tmp14), { openChannel: true, navigationReplace: false });
                const tmpResult2 = ref2(dependencyMap[23]);
              }
              tmp18 = null != coerceChannelRouteResult && coerceChannelRouteResult.params.showCreateThread;
              const tmpResult1 = ref2(dependencyMap[22]);
            }
          }
        }
        const tmp12 = closure_1_4(getChannelDetailsFromRouteDefault(currentRoute, true), 2);
      }
    }
    closure_1_7();
    const obj = ref2(dependencyMap[17]);
  }, []);
  const memo = React.useMemo(() => {
    const tmp = callback(4231)();
    let name;
    if (tmp != null) {
      const first = tmp.routes[0];
      if (first != null) {
        name = first.name;
      }
    }
    callback(13924).log("Initial Screen: " + name);
    return tmp;
  }, []);
  const _require = React.useRef(true);
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
            const found = routes.filter((item, index) => "modal" === item.name);
            rootNavigationRef.reset(callback2(table[26])(found));
          }
        }
        const obj = callback(table[17]);
      }, 0);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, []);
  let obj = useNavigationTheme;
  const navigationTheme = obj.useNavigationTheme(useThemeDefault());
  obj = { theme: navigationTheme, ref: null, onReady: null, onStateChange: null, initialState: null, navigationInChildEnabled: true, children: null };
  let tmp = useThemeDefault();
  obj[1] = require("../modules/main_tabs_v2/RootNavigationRef.native.tsx").getRootNavigationRef();
  obj[2] = handleNavigationOnReady;
  obj[3] = callback;
  obj[4] = memo;
  obj[6] = children.children;
  return callback2(require("../../_runtime/01501_createStandardNavigationFactories.js").NavigationContainer, obj);
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
const createCacheKey = { backgroundColor: ThemesDefault.colors.ANDROID_NAVIGATION_BAR_BACKGROUND };
createCacheKey[1] = createCacheKey;
let closure_16 = createCacheKey.createStyles(createCacheKey);
let result = module_4115.configureReanimatedLogger({ level: require("../modules/reanimated/ReanimatedRexport.tsx").ReanimatedLogLevel.error, strict: false });
try {
  require("enableScreens").enableFreeze();
  let obj6 = require("enableScreens");
  let obj2 = { useTrackNavigatorScreenImpression: null };
  obj2[0] = require("useTrackNavigatorScreenImpression").useTrackNavigatorScreenImpression;
  require("designConfig").setDesignConfig(obj2);
  let c22 = false;
  let closure_23 = { code: "function AppContainerTsx1(){const{RNScreensTurboModule}=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;}" };
  let obj7 = require("designConfig");
  const result1 = _modDef1208.profiledRootComponent(function AppContainer(children) {
    children = children.children;
    const appEntryKey = children.appEntryKey;
    let memo = appEntryKey;
    const requestGatewaySocket = memo(13925).useRequestGatewaySocket("AppContainer:" + appEntryKey);
    const effect = React.useEffect(() => {
      if (!c22) {
        RNScreensTurboModule = RNScreensTurboModule.RNScreensTurboModule;
        memo(4115);
        const fn = function e() {
          RNScreensTurboModule.RNScreensTurboModule = RNScreensTurboModule;
        };
        const obj = { RNScreensTurboModule: null };
        obj[0] = RNScreensTurboModule;
        fn.__closure = obj;
        fn.__workletHash = 8891274578898;
        fn.__initData = closure_23;
        obj.runOnUI(fn)();
        c22 = true;
      }
    }, []);
    const effect1 = React.useEffect(() => {
      let SplashScreenManager = memo(500).isIOS();
      if (SplashScreenManager) {
        SplashScreenManager = closure_6.SplashScreenManager;
      }
      if (SplashScreenManager) {
        const SplashScreenManager2 = closure_6.SplashScreenManager;
        SplashScreenManager2.hideSplashScreen();
      }
      const obj = memo(500);
    }, []);
    memo = undefined;
    let obj = memo(13925);
    const riveAppStatePlaybackExperiment = memo(15206).useRiveAppStatePlaybackExperiment("AppContainer");
    let items = [riveAppStatePlaybackExperiment];
    memo = React.useMemo(() => {
      const items = [];
      if (riveAppStatePlaybackExperiment) {
        items.push("rive-app-state-playback");
      }
      return items;
    }, items);
    let items1 = [memo];
    const memo1 = React.useMemo(() => {
      let obj = { enabledExperiments: memo };
      return obj;
    }, items1);
    const items2 = [appEntryKey, children, memo1];
    return React.useMemo(() => {
      { profile: memo(dependencyMap[33]).Profiles.AppContainer, children: null };
      const obj = { children: null };
      obj1 = { value: memo1, children: null };
      const obj2 = { children: null };
      const tmp = memo1(dependencyMap[33]);
      const obj3 = { value: memo, children: null };
      const obj4 = { appEntryKey: memo, children: null };
      const obj5 = { children: null };
      const obj6 = { history: null, children: null };
      let obj9 = memo1(dependencyMap[41]);
      obj6[0] = obj9.getHistory();
      const obj7 = { children: null };
      const obj8 = { children: null };
      const tmp2 = memo1(dependencyMap[37]);
      obj9 = { children: null };
      const obj10 = { children: null };
      const obj11 = { children: null };
      const tmp3 = memo1(dependencyMap[42]);
      const items = [closure_1_14(memo1(dependencyMap[46]), {}), ];
      const obj12 = { children: null };
      const items1 = [riveAppStatePlaybackExperiment, closure_1_14(memo(dependencyMap[47]).SafeAreaReporter, {}), closure_1_14(memo1(dependencyMap[48]), {}), closure_1_14(memo1(dependencyMap[49]), {})];
      obj12[0] = items1;
      items[1] = closure_1_15(memo(dependencyMap[47]).SafeAreaProvider, obj12);
      obj11[0] = items;
      obj10[0] = closure_1_15(memo1(dependencyMap[45]), obj11);
      obj9[0] = closure_1_14(memo1(dependencyMap[44]).Component, obj10);
      obj8[0] = closure_1_14(memo(dependencyMap[43]).PortalProvider, obj9);
      obj7[0] = closure_1_14(tmp3, obj8);
      obj6[1] = closure_1_14(GestureWrapper, obj7);
      obj5[0] = closure_1_14(memo(dependencyMap[40]).Router, obj6);
      obj4[1] = closure_1_14(memo(dependencyMap[39]).WebViewContextProvider, obj5);
      obj3[1] = closure_1_14(AppNavigationContainerOrEmpty, obj4);
      obj2[0] = closure_1_14(memo(dependencyMap[38]).AppEntryKeyContext.Provider, obj3);
      obj1[1] = closure_1_14(tmp2, obj2);
      obj[0] = closure_1_14(memo(dependencyMap[36]).ManaContextProvider, obj1);
      obj[0] = closure_1_14(memo(dependencyMap[35]).RootThemeContextProvider, obj);
      obj[1] = closure_1_14(memo(dependencyMap[34]).ReanimatedScreenProvider, obj);
      return closure_1_14(tmp, obj);
    }, items2);
  });
  const importDefaultResult = _modDef1208;
  const result2 = require("obj132").fileFinishedImporting("components_native/AppContainer.tsx");
  exports.default = result1;
} catch (err) {
}