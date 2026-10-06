// discord_app/components_native/AppContainer.tsx
import react_native from "../../_runtime/00017_react-native.js";
import react2 from "../../_runtime/00576_react.js";
import nativeDefault from "../../discord_common/js/packages/tokens/native.tsx";
import router_utils from "../modules/routing/router_utils.tsx";
import ComponentDispatchUtils from "../utils/ComponentDispatchUtils.tsx";
import SentryInitUtils from "../modules/errors/native/SentryInitUtils.tsx";
import AnalyticsUtilsDefault from "../utils/AnalyticsUtils.tsx";
import GlobalUtils from "../utils/GlobalUtils.tsx";
import AppEntryKeyContext from "../modules/window/native/AppEntryKeyContext.tsx";
import Link from "../../_runtime/01491_Link.js";
import ChannelConstants from "../modules/channel/ChannelConstants.tsx";
import ManaContext from "../../discord_common/js/packages/design/components/ManaContext/ManaContext.native.tsx";
import NavigationRouteUtils from "../modules/main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import RootNavigationRef from "../modules/main_tabs_v2/RootNavigationRef.native.tsx";
import getInitialNavigationStateDefault from "../modules/main_tabs_v2/native/getInitialNavigationState.tsx";
import Portal from "../../_runtime/04758_Portal.js";
import useThemeDefault from "../hooks/useTheme.tsx";
import ModalDispatchQueueDefault from "../modules/main_tabs_v2/native/modal/ModalDispatchQueue.tsx";
import enableScreens from "../../_runtime/05722_enableScreens.js";
import useIsScreenLandscape from "../modules/screen/useIsScreenLandscape.native.tsx";
import useNavigationTheme from "../design/components/Navigator/native/useNavigationTheme.native.tsx";
import NavigationHistoryStore from "../modules/main_tabs_v2/native/NavigationHistoryStore.tsx";
import WebViewContext from "../modules/embedded_apps/native/WebViewContext.tsx";
import StartupProfiler from "../modules/app_startup/StartupProfiler.tsx";
import _mod12566 from "../../_runtime/metro/12566__.js";
import RouteManagerDefault from "../modules/routing/RouteManager.tsx";
import DiscordGestureHandlerRootViewDefault from "../modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx";
import useTrackNavigatorScreenImpression from "../modules/app_analytics/native/useTrackNavigatorScreenImpression.tsx";
import getChannelDetailsFromRouteDefault from "../modules/main_tabs_v2/native/getChannelDetailsFromRoute.tsx";
import MainNavigationLoggerDefault from "../modules/main_tabs_v2/helpers/MainNavigationLogger.tsx";
import useRequestGatewaySocket from "../modules/gateway/useRequestGatewaySocket.tsx";
import ThemedStatusBarDefault from "../modules/status_bar/native/components/ThemedStatusBar.tsx";
import SafeAreaProvider2 from "../modules/safe_area/SafeAreaProvider.native.tsx";
import DevToolsLazyDefault from "../modules/devtools/native/components/DevToolsLazy.tsx";
import components_native_ErrorBoundaryDefault from "ErrorBoundary.tsx";
import AnimatedKeyboardProviderDefault from "../modules/keyboard/native/AnimatedKeyboardProvider.android.tsx";
import AccessibilityPreferencesContextProviderDefault from "../modules/a11y/native/AccessibilityPreferencesContextProvider.native.tsx";
import _mod15889 from "../../_runtime/metro/15889__.js";
import RootThemeContextProvider2 from "../modules/themes/RootThemeContextProvider.native.tsx";
import RiveAppStatePlaybackExperiment from "../modules/design/RiveAppStatePlaybackExperiment.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import react from "../../_runtime/00019_react.js";
import ChannelStore from "../stores/ChannelStore.tsx";
import SelectedChannelStore from "../stores/SelectedChannelStore.tsx";
import Constants from "../Constants.tsx";
import Fragment from "../../_runtime/react/00021_Fragment.js";
import createStyles from "../design/components/Styles/native/createStyles.tsx";
import ReanimatedRexport from "../modules/reanimated/ReanimatedRexport.tsx";
import ReactCompilerGating_mod from "../modules/react_compiler/ReactCompilerGating.tsx";
import config from "../design/config.tsx";
import SentryUtils from "../utils/SentryUtils.native.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const StartupProfilerDefault = StartupProfiler;
let _require, flag, num;

let c10;
let closure_12;
let closure_14;
let closure_15;
let obj2;
let unpackModuleId;
function handleNavigationOnReady() {
  const obj = ModalDispatchQueueDefault;
  obj.flush();
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(unpackModuleId.NAVIGATOR_READY);
  const routingInstrumentation = SentryInitUtils.routingInstrumentation;
  const registerNavigationContainer = routingInstrumentation.registerNavigationContainer;
  const obj2 = RootNavigationRef;
  const result = registerNavigationContainer(obj2.getRootNavigationRef());
  closure_7();
}
const NativeModules = react_native.NativeModules;
let closure_7 = NavigationHistoryStore.handleHistoryStoreNavigationChange;
({ AnalyticEvents: c10, ComponentActions: unpackModuleId, Routes: closure_12 } = Constants);
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let obj = { flex: { flex: 1 }, rootBackgroundColor: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.ANDROID_NAVIGATION_BAR_BACKGROUND };
let closure_16 = createStyles.createStyles(obj);
let obj3 = { level: ReanimatedRexport.ReanimatedLogLevel.error, strict: false };
let result = ReanimatedRexport.configureReanimatedLogger(obj3);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const obj = react2;
      const cResult = obj.c(6);
      children = children.children;
      const tmp3 = closure_16();
      let rootBackgroundColor;
      const obj2 = useIsScreenLandscape;
      if (obj2.useIsScreenLandscape()) {
        rootBackgroundColor = tmp3.rootBackgroundColor;
      }
      if (cResult[0] === tmp3.flex) {
        let tmp5;
        if (cResult[1] === rootBackgroundColor) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === children) {
          let tmp6;
          if (cResult[4] === tmp5) {
            tmp6 = cResult[5];
          }
          return tmp6;
        }
        const obj3 = { style: tmp5, children };
        const tmp9 = authStore2(DiscordGestureHandlerRootViewDefault, obj3);
        cResult[3] = children;
        cResult[4] = tmp5;
        cResult[5] = tmp9;
        tmp6 = tmp9;
      }
      const items = [tmp3.flex, rootBackgroundColor];
      cResult[0] = tmp3.flex;
      cResult[1] = rootBackgroundColor;
      cResult[2] = items;
      tmp5 = items;
    }
  : (children) => {
      children = children.children;
      const tmp = closure_16();
      let closure_0 = tmp;
      const obj = useIsScreenLandscape;
      const isScreenLandscape = obj.useIsScreenLandscape();
      let items = [isScreenLandscape, tmp];
      const style = react.useMemo(() => {
        const items = [styles.flex];
        let rootBackgroundColor;
        if (isScreenLandscape) {
          rootBackgroundColor = styles.rootBackgroundColor;
        }
        items[1] = rootBackgroundColor;
        return items;
      }, items);
      return authStore2(DiscordGestureHandlerRootViewDefault, { style, children });
    };
try {
  const _module5 = enableScreens;
  _module5.enableFreeze();
} catch (err) {}
let obj4 = { useTrackNavigatorScreenImpression: useTrackNavigatorScreenImpression.useTrackNavigatorScreenImpression };
config.setDesignConfig(obj4);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      let first;
      let ref2;
      let tmp14;
      let tmp17;
      let tmp19;
      let tmp7;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(8);
      children = children.children;
      const tmp5 = useThemeDefault();
      const ref = react.useRef(undefined);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          const obj = RootNavigationRef;
          const rootNavigationRef = obj.getRootNavigationRef();
          if (null != rootNavigationRef) {
            if (rootNavigationRef.isReady()) {
              const currentRoute = rootNavigationRef.getCurrentRoute();
              const tmpResult = NavigationRouteUtils;
              const tmp4 = null != tmpResult.coerceGuildsRoute(currentRoute);
              const tmpResult4 = NavigationRouteUtils;
              const tmp6 = null != tmpResult4.coerceChannelRoute(ref.current) && tmp4;
              if (tmp6) {
                const obj5 = AnalyticsUtilsDefault;
                obj5.track(constants.NAV_DRAWER_OPENED);
              }
              ref.current = currentRoute;
              const tmp14 = _slicedToArray(getChannelDetailsFromRouteDefault(currentRoute, true), 2)[1];
              if (null != tmp14) {
                if (isStaticChannelRoute(tmp14)) {
                  if (tmp14 !== SelectedChannelStore.getChannelId()) {
                    const tmpResult5 = NavigationRouteUtils;
                    const coerceChannelRouteResult = tmpResult5.coerceChannelRoute(currentRoute);
                    const tmp18 = null != coerceChannelRouteResult && coerceChannelRouteResult.params.showCreateThread;
                    if (!tmp18) {
                      const tmpResult6 = router_utils;
                      tmpResult6.transitionTo(closure_12.CHANNEL(tmp13, tmp14), {
                        openChannel: true,
                        navigationReplace: false,
                      });
                    }
                  }
                }
              }
            }
          }
          closure_7();
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp8 = getInitialNavigationStateDefault();
        cResult[1] = tmp8;
        tmp7 = tmp8;
      } else {
        tmp7 = cResult[1];
      }
      let name;
      const log = MainNavigationLoggerDefault.log;
      MainNavigationLoggerDefault;
      if (tmp7 != null) {
        const first1 = tmp7.routes[0];
        if (first1 != null) {
          name = first1.name;
        }
      }
      log("Initial Screen: " + name);
      _require = react.useRef(true);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            if (closure_1.current) {
              flag = false;
              tmp.current = false;
              return;
            } else {
              tmp2 = globalThis;
              _setTimeout = setTimeout;
              num = 0;
              closure_0 = setTimeout(() => {
                const obj = ref2(closure_1_3[19]);
                const rootNavigationRef = obj.getRootNavigationRef();
                if (null != rootNavigationRef) {
                  if (rootNavigationRef.isReady()) {
                    const tmpResult = ref2(closure_1_3[24]);
                    const modalRoutesAboveMainResult = tmpResult.modalRoutesAboveMain(
                      rootNavigationRef.getState().routes,
                    );
                    rootNavigationRef.reset(closure_1_2(closure_1_3[28])(modalRoutesAboveMainResult));
                  }
                }
              }, 0);
              return () => {
                clearTimeout(closure_0);
              };
            }
          }
        }
        const items = [];
        cResult[2] = S;
        cResult[3] = items;
        tmp14 = items;
      } else {
        class S {
          constructor() {
            if (closure_1.current) {
              flag = false;
              tmp.current = false;
              return;
            } else {
              tmp2 = globalThis;
              _setTimeout = setTimeout;
              num = 0;
              closure_0 = setTimeout(() => {
                const obj = ref2(closure_1_3[19]);
                const rootNavigationRef = obj.getRootNavigationRef();
                if (null != rootNavigationRef) {
                  if (rootNavigationRef.isReady()) {
                    const tmpResult = ref2(closure_1_3[24]);
                    const modalRoutesAboveMainResult = tmpResult.modalRoutesAboveMain(
                      rootNavigationRef.getState().routes,
                    );
                    rootNavigationRef.reset(closure_1_2(closure_1_3[28])(modalRoutesAboveMainResult));
                  }
                }
              }, 0);
              return () => {
                clearTimeout(closure_0);
              };
            }
          }
        }
        tmp14 = cResult[3];
      }
      const effect = react.useEffect(S, tmp14);
      let tmpResult = tmp(6545);
      const navigationTheme = tmpResult.useNavigationTheme(tmp5);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            if (closure_1.current) {
              flag = false;
              tmp.current = false;
              return;
            } else {
              tmp2 = globalThis;
              _setTimeout = setTimeout;
              num = 0;
              closure_0 = setTimeout(() => {
                const obj = ref2(closure_1_3[19]);
                const rootNavigationRef = obj.getRootNavigationRef();
                if (null != rootNavigationRef) {
                  if (rootNavigationRef.isReady()) {
                    const tmpResult = ref2(closure_1_3[24]);
                    const modalRoutesAboveMainResult = tmpResult.modalRoutesAboveMain(
                      rootNavigationRef.getState().routes,
                    );
                    rootNavigationRef.reset(closure_1_2(closure_1_3[28])(modalRoutesAboveMainResult));
                  }
                }
              }, 0);
              return () => {
                clearTimeout(closure_0);
              };
            }
          }
        }
        let rootNavigationRef = obj4.getRootNavigationRef();
        cResult[4] = rootNavigationRef;
        tmp17 = rootNavigationRef;
      } else {
        class S {
          constructor() {
            if (closure_1.current) {
              flag = false;
              tmp.current = false;
              return;
            } else {
              tmp2 = globalThis;
              _setTimeout = setTimeout;
              num = 0;
              closure_0 = setTimeout(() => {
                const obj = ref2(closure_1_3[19]);
                const rootNavigationRef = obj.getRootNavigationRef();
                if (null != rootNavigationRef) {
                  if (rootNavigationRef.isReady()) {
                    const tmpResult = ref2(closure_1_3[24]);
                    const modalRoutesAboveMainResult = tmpResult.modalRoutesAboveMain(
                      rootNavigationRef.getState().routes,
                    );
                    rootNavigationRef.reset(closure_1_2(closure_1_3[28])(modalRoutesAboveMainResult));
                  }
                }
              }, 0);
              return () => {
                clearTimeout(closure_0);
              };
            }
          }
        }
      }
      if (cResult[5] === children) {
        class S {
          constructor() {
            if (closure_1.current) {
              flag = false;
              tmp.current = false;
              return;
            } else {
              tmp2 = globalThis;
              _setTimeout = setTimeout;
              num = 0;
              closure_0 = setTimeout(() => {
                const obj = ref2(closure_1_3[19]);
                const rootNavigationRef = obj.getRootNavigationRef();
                if (null != rootNavigationRef) {
                  if (rootNavigationRef.isReady()) {
                    const tmpResult = ref2(closure_1_3[24]);
                    const modalRoutesAboveMainResult = tmpResult.modalRoutesAboveMain(
                      rootNavigationRef.getState().routes,
                    );
                    rootNavigationRef.reset(closure_1_2(closure_1_3[28])(modalRoutesAboveMainResult));
                  }
                }
              }, 0);
              return () => {
                clearTimeout(closure_0);
              };
            }
          }
        }
        return tmp19;
      }
      const obj3 = {
        theme: navigationTheme,
        ref: tmp17,
        onReady: handleNavigationOnReady,
        onStateChange: first,
        initialState: tmp7,
        navigationInChildEnabled: true,
        children,
      };
      tmp19 = closure_14(tmp(1491).NavigationContainer, obj3);
      cResult[5] = children;
      cResult[6] = navigationTheme;
      cResult[7] = tmp19;
    }
  : (children) => {
      let obj3;
      let ref2;
      children = children.children;
      let tmp = useThemeDefault();
      const ref = react.useRef(undefined);
      const callback = react.useCallback(() => {
        const obj = RootNavigationRef;
        const rootNavigationRef = obj.getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            const currentRoute = rootNavigationRef.getCurrentRoute();
            const tmpResult = NavigationRouteUtils;
            const tmp4 = null != tmpResult.coerceGuildsRoute(currentRoute);
            const tmpResult4 = NavigationRouteUtils;
            const tmp6 = null != tmpResult4.coerceChannelRoute(ref.current) && tmp4;
            if (tmp6) {
              const obj5 = AnalyticsUtilsDefault;
              obj5.track(constants.NAV_DRAWER_OPENED);
            }
            ref.current = currentRoute;
            const tmp14 = _slicedToArray(getChannelDetailsFromRouteDefault(currentRoute, true), 2)[1];
            if (null != tmp14) {
              if (isStaticChannelRoute(tmp14)) {
                if (tmp14 !== SelectedChannelStore.getChannelId()) {
                  const tmpResult5 = NavigationRouteUtils;
                  const coerceChannelRouteResult = tmpResult5.coerceChannelRoute(currentRoute);
                  const tmp18 = null != coerceChannelRouteResult && coerceChannelRouteResult.params.showCreateThread;
                  if (!tmp18) {
                    const tmpResult6 = router_utils;
                    tmpResult6.transitionTo(closure_12.CHANNEL(tmp13, tmp14), {
                      openChannel: true,
                      navigationReplace: false,
                    });
                  }
                }
              }
            }
          }
        }
        closure_7();
      }, []);
      const memo = react.useMemo(() => {
        const tmp = getInitialNavigationStateDefault();
        let name;
        const log = MainNavigationLoggerDefault.log;
        MainNavigationLoggerDefault;
        if (tmp != null) {
          const first = tmp.routes[0];
          if (first != null) {
            name = first.name;
          }
        }
        log("Initial Screen: " + name);
        return tmp;
      }, []);
      _require = react.useRef(true);
      const effect = react.useEffect(() => {
        if (ref2.current) {
          tmp.current = false;
        } else {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            const obj = ref2(closure_1_3[19]);
            const rootNavigationRef = obj.getRootNavigationRef();
            if (null != rootNavigationRef) {
              if (rootNavigationRef.isReady()) {
                const tmpResult = ref2(closure_1_3[24]);
                const modalRoutesAboveMainResult = tmpResult.modalRoutesAboveMain(rootNavigationRef.getState().routes);
                rootNavigationRef.reset(closure_1_2(closure_1_3[28])(modalRoutesAboveMainResult));
              }
            }
          }, 0);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }, []);
      let obj = require("useNavigationTheme");
      const navigationTheme = obj.useNavigationTheme(tmp);
      const obj2 = {
        theme: navigationTheme,
        ref: obj3.getRootNavigationRef(),
        onReady: handleNavigationOnReady,
        onStateChange: callback,
        initialState: memo,
        navigationInChildEnabled: true,
        children,
      };
      const NavigationContainer = require("Link").NavigationContainer;
      obj3 = require("RootNavigationRef");
      return closure_14(NavigationContainer, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const obj = react2;
      const cResult = obj.c(3);
      children = children.children;
      const tmp4 = useThemeDefault();
      const obj2 = useNavigationTheme;
      const navigationTheme = obj2.useNavigationTheme(tmp4);
      if (cResult[0] === children) {
        let tmp6;
        if (cResult[1] === navigationTheme) {
          tmp6 = cResult[2];
        }
        return tmp6;
      }
      const tmp7 = authStore2(Link.NavigationContainer, {
        theme: navigationTheme,
        navigationInChildEnabled: true,
        children,
      });
      cResult[0] = children;
      cResult[1] = navigationTheme;
      cResult[2] = tmp7;
      tmp6 = tmp7;
    }
  : (children) => {
      children = children.children;
      const tmp = useThemeDefault();
      const obj = useNavigationTheme;
      const theme = obj.useNavigationTheme(tmp);
      return authStore2(Link.NavigationContainer, { theme, navigationInChildEnabled: true, children });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let appEntryKey;
      let children;
      const obj = react2;
      const cResult = obj.c(6);
      ({ children, appEntryKey } = arg0);
      if ("main" === appEntryKey) {
        let tmp10;
        if (cResult[0] !== children) {
          const obj2 = { children };
          const tmp13 = authStore2(closure_19, obj2);
          cResult[0] = children;
          cResult[1] = tmp13;
          tmp10 = tmp13;
        } else {
          tmp10 = cResult[1];
        }
        return tmp10;
      } else if ("share" === appEntryKey) {
        let tmp6;
        if (cResult[2] !== children) {
          const obj3 = { children };
          const tmp9 = authStore2(closure_20, obj3);
          cResult[2] = children;
          cResult[3] = tmp9;
          tmp6 = tmp9;
        } else {
          tmp6 = cResult[3];
        }
        return tmp6;
      } else {
        let tmp4;
        if (cResult[4] !== appEntryKey) {
          const tmpResult = GlobalUtils;
          const assertNeverResult = tmpResult.assertNever(appEntryKey);
          cResult[4] = appEntryKey;
          cResult[5] = assertNeverResult;
          tmp4 = assertNeverResult;
        } else {
          tmp4 = cResult[5];
        }
        return tmp4;
      }
    }
  : (arg0) => {
      let appEntryKey;
      let children;
      ({ children, appEntryKey } = arg0);
      if ("main" === appEntryKey) {
        const obj2 = { children };
        return authStore2(closure_19, obj2);
      } else if ("share" === appEntryKey) {
        const obj3 = { children };
        return authStore2(closure_20, obj3);
      } else {
        const obj = GlobalUtils;
        return obj.assertNever(appEntryKey);
      }
    };
let c22 = false;
let closure_23 = {
  code: "function AppContainerTsx1(){const{RNScreensTurboModule}=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;}",
};
let closure_24 = {
  code: "function AppContainerTsx2(){const{RNScreensTurboModule}=this.__closure;global.RNScreensTurboModule=RNScreensTurboModule;}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let Component;
      let PortalProvider;
      let ReanimatedScreenProvider;
      let RootThemeContextProvider;
      let Router;
      let appEntryKey;
      let children;
      let items2;
      let items3;
      let obj10;
      let obj13;
      let obj14;
      let obj15;
      let obj17;
      let obj6;
      let obj7;
      let obj8;
      let obj9;
      let tmp12;
      let tmp15;
      let tmp19;
      let tmp20;
      let tmp25;
      let tmp29;
      let tmp5;
      let tmp6;
      let tmp8;
      let tmp9;
      let obj = react2;
      const cResult = obj.c(19);
      ({ children, appEntryKey } = arg0);
      let obj2 = useRequestGatewaySocket;
      const requestGatewaySocket = obj2.useRequestGatewaySocket("AppContainer:" + appEntryKey);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let fn = function o() {
          let RNScreensTurboModule;
          const tmp = c22;
          if (!tmp) {
            RNScreensTurboModule = RNScreensTurboModule.RNScreensTurboModule;
            const fn = function e() {
              global.RNScreensTurboModule = RNScreensTurboModule;
            };
            const obj2 = { RNScreensTurboModule };
            fn.__closure = obj2;
            fn.__workletHash = 8891274578898;
            fn.__initData = __initData;
            const obj = closure_1(closure_3[11]);
            obj.runOnUI(fn)();
            c22 = true;
          }
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp5 = fn;
        tmp6 = items;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const effect = react.useEffect(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function l() {
          const obj = require("PlatformUtils");
          const SplashScreenManager = obj.isIOS() && NativeModules.SplashScreenManager;
          if (SplashScreenManager) {
            const SplashScreenManager2 = NativeModules.SplashScreenManager;
            SplashScreenManager2.hideSplashScreen();
          }
        };
        const items1 = [];
        cResult[2] = fn2;
        cResult[3] = items1;
        tmp9 = items1;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const effect1 = react.useEffect(tmp8, tmp9);
      const tmp11 = closure_25();
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = RouteManagerDefault;
        const history = obj4.getHistory();
        cResult[4] = history;
        tmp12 = history;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp18 = authStore2(ThemedStatusBarDefault, {});
        cResult[5] = tmp18;
        tmp15 = tmp18;
      } else {
        tmp15 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp22 = authStore2(SafeAreaProvider2.SafeAreaReporter, {});
        const tmp24 = authStore2(DevToolsLazyDefault, {});
        cResult[6] = tmp22;
        cResult[7] = tmp24;
        tmp20 = tmp24;
        tmp19 = tmp22;
      } else {
        tmp19 = cResult[6];
        tmp20 = cResult[7];
      }
      if (cResult[8] !== children) {
        const obj5 = { children: authStore2(Router, obj6) };
        const WebViewContextProvider = WebViewContext.WebViewContextProvider;
        obj6 = { history: tmp12, children: authStore2(closure_17, obj7) };
        obj7 = { children: authStore2(tmp29, obj8) };
        Router = _mod12566.Router;
        obj8 = { children: authStore2(PortalProvider, obj9) };
        obj9 = { children: closure_15(Component, obj10) };
        tmp29 = components_native_ErrorBoundaryDefault;
        PortalProvider = Portal.PortalProvider;
        obj10 = { children: items2 };
        items2 = [tmp15];
        Component = AnimatedKeyboardProviderDefault.Component;
        const obj11 = { children: items3 };
        items3 = [children, tmp19, tmp20];
        items2[1] = closure_15(SafeAreaProvider2.SafeAreaProvider, obj11);
        const tmp31 = authStore2(WebViewContextProvider, obj5);
        cResult[8] = children;
        cResult[9] = tmp31;
        tmp25 = tmp31;
      } else {
        tmp25 = cResult[9];
      }
      if (cResult[10] === appEntryKey) {
        let tmp32;
        if (cResult[11] === tmp25) {
          tmp32 = cResult[12];
        }
        if (cResult[13] === appEntryKey) {
          let tmp34;
          if (cResult[14] === tmp32) {
            tmp34 = cResult[15];
          }
          if (cResult[16] === tmp11) {
            let tmp39;
            if (cResult[17] === tmp34) {
              tmp39 = cResult[18];
            }
            return tmp39;
          }
          const obj12 = {
            profile: StartupProfiler.Profiles.AppContainer,
            children: authStore2(ReanimatedScreenProvider, obj13),
          };
          const tmp42 = StartupProfilerDefault;
          obj13 = { children: authStore2(RootThemeContextProvider, obj14) };
          ReanimatedScreenProvider = _mod15889.ReanimatedScreenProvider;
          obj14 = { children: authStore2(ManaContext.ManaContextProvider, obj15) };
          RootThemeContextProvider = RootThemeContextProvider2.RootThemeContextProvider;
          obj15 = { value: tmp11, children: tmp34 };
          const tmp43 = authStore2(tmp42, obj12);
          cResult[16] = tmp11;
          cResult[17] = tmp34;
          cResult[18] = tmp43;
          tmp39 = tmp43;
        }
        const obj16 = { children: authStore2(AppEntryKeyContext.AppEntryKeyContext.Provider, obj17) };
        obj17 = { value: appEntryKey, children: tmp32 };
        const tmp37 = AccessibilityPreferencesContextProviderDefault;
        const tmp38 = authStore2(tmp37, obj16);
        cResult[13] = appEntryKey;
        cResult[14] = tmp32;
        cResult[15] = tmp38;
        tmp34 = tmp38;
      }
      const tmp33 = authStore2(closure_21, { appEntryKey, children: tmp25 });
      cResult[10] = appEntryKey;
      cResult[11] = tmp25;
      cResult[12] = tmp33;
      tmp32 = tmp33;
    }
  : (children) => {
      children = children.children;
      const appEntryKey = children.appEntryKey;
      let obj = appEntryKey(14418);
      const requestGatewaySocket = obj.useRequestGatewaySocket("AppContainer:" + appEntryKey);
      const effect = react.useEffect(() => {
        let RNScreensTurboModule;
        const tmp = c22;
        if (!tmp) {
          RNScreensTurboModule = RNScreensTurboModule.RNScreensTurboModule;
          const fn = function e() {
            children.RNScreensTurboModule = RNScreensTurboModule;
          };
          const obj2 = { RNScreensTurboModule };
          fn.__closure = obj2;
          fn.__workletHash = 417601113617;
          fn.__initData = __initData;
          const obj = appEntryKey(closure_3[11]);
          obj.runOnUI(fn)();
          c22 = true;
        }
      }, []);
      const effect1 = react.useEffect(() => {
        const obj = appEntryKey(dependencyMap[34]);
        const SplashScreenManager = obj.isIOS() && NativeModules.SplashScreenManager;
        if (SplashScreenManager) {
          const SplashScreenManager2 = NativeModules.SplashScreenManager;
          SplashScreenManager2.hideSplashScreen();
        }
      }, []);
      const tmp4 = closure_25();
      const value = tmp4;
      let items = [appEntryKey, children, tmp4];
      return react.useMemo(() => {
        let Component;
        let ManaContextProvider;
        let PortalProvider;
        let Provider;
        let ReanimatedScreenProvider;
        let RootThemeContextProvider;
        let Router;
        let WebViewContextProvider;
        let items;
        let items1;
        let obj10;
        let obj11;
        let obj12;
        let obj13;
        let obj14;
        let obj2;
        let obj3;
        let obj4;
        let obj5;
        let obj6;
        let obj7;
        let obj8;
        let obj9;
        let tmp2;
        let tmp3;
        const obj = {
          profile: StartupProfiler.Profiles.AppContainer,
          children: authStore2(ReanimatedScreenProvider, obj2),
        };
        const tmp = StartupProfilerDefault;
        obj2 = { children: authStore2(RootThemeContextProvider, obj3) };
        ReanimatedScreenProvider = _mod15889.ReanimatedScreenProvider;
        obj3 = { children: authStore2(ManaContextProvider, obj4) };
        RootThemeContextProvider = RootThemeContextProvider2.RootThemeContextProvider;
        obj4 = { value, children: authStore2(tmp2, obj5) };
        ManaContextProvider = ManaContext.ManaContextProvider;
        obj5 = { children: authStore2(Provider, obj6) };
        obj6 = { value: appEntryKey, children: authStore2(closure_21, obj7) };
        obj7 = { appEntryKey, children: authStore2(WebViewContextProvider, obj8) };
        tmp2 = AccessibilityPreferencesContextProviderDefault;
        Provider = AppEntryKeyContext.AppEntryKeyContext.Provider;
        obj8 = { children: authStore2(Router, obj9) };
        WebViewContextProvider = WebViewContext.WebViewContextProvider;
        obj9 = { history: obj10.getHistory(), children: authStore2(closure_17, obj11) };
        Router = _mod12566.Router;
        obj10 = RouteManagerDefault;
        obj11 = { children: authStore2(tmp3, obj12) };
        obj12 = { children: authStore2(PortalProvider, obj13) };
        obj13 = { children: closure_15(Component, obj14) };
        tmp3 = components_native_ErrorBoundaryDefault;
        PortalProvider = Portal.PortalProvider;
        obj14 = { children: items };
        Component = AnimatedKeyboardProviderDefault.Component;
        items = [authStore2(ThemedStatusBarDefault, {})];
        const obj15 = { children: items1 };
        items1 = [children, ,];
        const SafeAreaProvider = SafeAreaProvider2.SafeAreaProvider;
        items1[1] = authStore2(SafeAreaProvider2.SafeAreaReporter, {});
        items1[2] = authStore2(DevToolsLazyDefault, {});
        items[1] = closure_15(SafeAreaProvider, obj15);
        return authStore2(tmp, obj);
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp3;
      let tmp5;
      let tmp6;
      let tmp7;
      let obj = react2;
      const cResult = obj.c(7);
      let obj2 = RiveAppStatePlaybackExperiment;
      const riveAppStatePlaybackExperiment = obj2.useRiveAppStatePlaybackExperiment("AppContainer");
      if (cResult[0] !== riveAppStatePlaybackExperiment) {
        const items = [];
        if (riveAppStatePlaybackExperiment) {
          items.push("rive-app-state-playback");
        }
        cResult[0] = riveAppStatePlaybackExperiment;
        cResult[1] = items;
        tmp3 = items;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] !== tmp3) {
        const obj3 = { enabledExperiments: tmp3 };
        cResult[2] = tmp3;
        cResult[3] = obj3;
        tmp5 = obj3;
      } else {
        tmp5 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c(arg0, tags) {
          const obj = SentryUtils;
          const obj2 = { tags };
          return obj.captureException(arg0, obj2);
        };
        cResult[4] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[4];
      }
      if (cResult[5] !== tmp5) {
        const obj4 = { experiments: tmp5, captureException: tmp6 };
        cResult[5] = tmp5;
        cResult[6] = obj4;
        tmp7 = obj4;
      } else {
        tmp7 = cResult[6];
      }
      return tmp7;
    }
  : () => {
      let memo;
      let obj = memo(15899);
      const riveAppStatePlaybackExperiment = obj.useRiveAppStatePlaybackExperiment("AppContainer");
      let items = [riveAppStatePlaybackExperiment];
      memo = react.useMemo(() => {
        const items = [];
        if (riveAppStatePlaybackExperiment) {
          items.push("rive-app-state-playback");
        }
        return items;
      }, items);
      const items1 = [memo];
      return react.useMemo(() => {
        let obj2;
        let obj = {
          experiments: obj2,
          captureException(arg0, tags) {
            const obj = closure_1_2(closure_1_3[51]);
            const obj2 = { tags };
            return obj.captureException(arg0, obj2);
          },
        };
        obj2 = { enabledExperiments: memo };
        return obj;
      }, items1);
    };
const result1 = SentryUtils.profiledRootComponent(tmp7);
const result2 = size.fileFinishedImporting("components_native/AppContainer.tsx");

export default result1;
