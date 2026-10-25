// === Module 17440: guilds/Guilds ===

// Module 17440 (guilds/Guilds)
import TTITrackerDefault from "TTITracker" /* 9 */;
import c from "c" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1123 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5146 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5150 */;
import RootNavigationRef from "RootNavigationRef" /* 5151 */;
import HomeDrawerExperiment from "HomeDrawerExperiment" /* 5156 */;
import QuestDockDefault from "QuestDock" /* 16524 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 17441 */;
import MainChannelsDefault from "MainChannels" /* 17443 */;
import YouBarDefault from "YouBar" /* 17808 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6496 */;

const native = ThemeContextProvider(5037);
const QuestsEligibility = ThemeContextProvider(9565);
const QuestDockExternalCoordinationContext = ThemeContextProvider(16445);
const GuildsRenderExperiment2 = ThemeContextProvider(17442);
require = fn;
const YouBarNavigatorScreens = fn(11181).YouBarNavigatorScreens;
const ComponentActions = fn(1087).ComponentActions;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = false;
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldRender(arg0) {
  _require = arg0;
  const cResult = require("c").c(5);
  if (cResult[0] !== arg0) {
    const fn = function u() {
      if (closure_0) {
        TTITrackerDefault;
        let landOnHome = c10;
        if (!c10) {
          landOnHome = "other" !== tmp4;
        }
        if (!landOnHome) {
          const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
          landOnHome = MobileHomeDrawerExperiment.getConfig({ location: "app-start" }).landOnHome;
        }
        return landOnHome;
      } else {
        return true;
      }
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  [isChatBesideChannelList, dependencyMap] = noop.useState(tmp2);
  if (cResult[2] !== isChatBesideChannelList) {
    const fn2 = function f() {
      if (allowRender) {
        c10 = true;
      } else {
        c0 = true;
        allowRender = function allowRender() {
          if (c0) {
            allowRenderAfterReady(true);
          }
        };
        function allowRenderAfterReady() {
          const timerId = setTimeout(allowRender, 0);
        }
        function handleNavigationChange() {
          const obj = NavigationRouteUtils;
          const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
          let currentRoute;
          if (rootNavigationRef != null) {
            currentRoute = rootNavigationRef.getCurrentRoute();
          }
          if (null != obj.coerceGuildsRoute(currentRoute)) {
            if (typeof allowRender === "function") {
              if (c0) {
                allowRenderAfterReady(true);
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
        if (connected.isConnected()) {
          if (c0) {
            allowRenderAfterReady(true);
          }
        }
        const _setTimeout = setTimeout;
        const timeout = setTimeout(allowRender, 4000);
        const subscription = isChatBesideChannelList(584).subscribe("CONNECTION_OPEN", allowRenderAfterReady);
        let ComponentDispatch = closure_0(1123).ComponentDispatch;
        const subscription1 = ComponentDispatch.subscribe(constants.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
        let obj = isChatBesideChannelList(584);
        let rootNavigationRef = closure_0(5151).getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.addListener("state", handleNavigationChange);
        }
        return () => {
          c0 = false;
          clearTimeout(closure_4);
          DispatcherDefault.unsubscribe("CONNECTION_OPEN", allowRenderAfterReady);
          const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
          ComponentDispatch.unsubscribe(ComponentActions.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
          const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
          if (rootNavigationRef != null) {
            rootNavigationRef.removeListener("state", handleNavigationChange);
          }
        };
      }
    };
    const items = [isChatBesideChannelList];
    cResult[2] = isChatBesideChannelList;
    cResult[3] = fn2;
    cResult[4] = items;
    let tmp5 = items;
    let tmp4 = fn2;
  } else {
    tmp4 = cResult[3];
    tmp5 = cResult[4];
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (!isChatBesideChannelList) {
    isChatBesideChannelList = isChatBesideChannelList(5153)().isChatBesideChannelList;
  }
  return isChatBesideChannelList;
}) : (function useShouldRender(arg0) {
  closure_0 = arg0;
  [isChatBesideChannelList, dependencyMap] = noop.useState(() => {
    if (closure_0) {
      TTITrackerDefault;
      let landOnHome = c10;
      if (!c10) {
        landOnHome = "other" !== tmp4;
      }
      if (!landOnHome) {
        const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
        landOnHome = MobileHomeDrawerExperiment.getConfig({ location: "app-start" }).landOnHome;
      }
      return landOnHome;
    } else {
      return true;
    }
  });
  const items = [isChatBesideChannelList];
  const effect = noop.useEffect(() => {
    function allowRender() {
      if (c0) {
        allowRender(true);
      }
    }
    function allowRenderAfterReady() {
      const timerId = setTimeout(allowRender, 0);
    }
    function handleNavigationChange() {
      const obj = NavigationRouteUtils;
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      let currentRoute;
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      if (null != obj.coerceGuildsRoute(currentRoute)) {
        if (c0) {
          allowRender(true);
        }
      }
    }
    if (timeout) {
      c10 = true;
    } else {
      c0 = true;
      if (connected.isConnected()) {
        if (c0) {
          allowRender(true);
        }
      }
      const _setTimeout = setTimeout;
      timeout = setTimeout(allowRender, 4000);
      const subscription = isChatBesideChannelList(584).subscribe("CONNECTION_OPEN", allowRenderAfterReady);
      let ComponentDispatch = closure_0(1123).ComponentDispatch;
      const subscription1 = ComponentDispatch.subscribe(constants.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
      let obj = isChatBesideChannelList(584);
      let rootNavigationRef = closure_0(5151).getRootNavigationRef();
      if (rootNavigationRef != null) {
        rootNavigationRef.addListener("state", handleNavigationChange);
      }
      return () => {
        c0 = false;
        clearTimeout(closure_1);
        DispatcherDefault.unsubscribe("CONNECTION_OPEN", allowRenderAfterReady);
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(ComponentActions.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
        const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
        if (rootNavigationRef != null) {
          rootNavigationRef.removeListener("state", handleNavigationChange);
        }
      };
    }
  }, items);
  if (!isChatBesideChannelList) {
    isChatBesideChannelList = isChatBesideChannelList(5153)().isChatBesideChannelList;
  }
  return isChatBesideChannelList;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildsOnly() {
  let ThemeContextProvider = require;
  let tmp = dependencyMap;
  const cResult = c.c(5);
  const trackTabPerformance = TabsPerformanceTracker.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp5 = useColorThemeBackgroundDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const isEligibleForQuests = QuestsEligibility.getIsEligibleForQuests();
    cResult[0] = isEligibleForQuests;
    let first = isEligibleForQuests;
    const ThemeContextProviderResult = QuestsEligibility;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { location: "GuildsOnly" };
    cResult[1] = obj3;
    let tmp8 = obj3;
  } else {
    tmp8 = cResult[1];
  }
  const GuildsRenderExperiment = GuildsRenderExperiment2.GuildsRenderExperiment;
  if (GuildsRenderExperiment.useConfig(tmp8).enabled) {
    if (!tmp9) {
      return null;
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_1_8(MainChannelsDefault, {}), closure_1_8(YouBarDefault, {}), ];
    if (first) {
      first = closure_1_8(QuestDockDefault, {});
    }
    const obj4 = { children: null };
    items[2] = first;
    obj4.children = items;
    const tmp12Result = React6(QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContextProvider, obj4);
    cResult[2] = tmp12Result;
    let tmp11 = tmp12Result;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] !== tmp5) {
    ThemeContextProvider = native.ThemeContextProvider;
    const obj5 = { gradient: tmp5, children: tmp11 };
    tmp = closure_1_8(ThemeContextProvider, obj5);
    cResult[3] = tmp5;
    cResult[4] = tmp;
  }
}) : (function GuildsOnly() {
  const trackTabPerformance = TabsPerformanceTracker.useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  const tmp5 = useColorThemeBackgroundDefault();
  let isEligibleForQuests = QuestsEligibility.getIsEligibleForQuests();
  const GuildsRenderExperiment = GuildsRenderExperiment2.GuildsRenderExperiment;
  if (!GuildsRenderExperiment.useConfig({ location: "GuildsOnly" }).enabled) {
    const obj3 = { gradient: tmp5, children: null };
    const items = [closure_1_8(MainChannelsDefault, {}), closure_1_8(YouBarDefault, {}), ];
    if (isEligibleForQuests) {
      isEligibleForQuests = closure_1_8(QuestDockDefault, {});
    }
    const obj4 = { children: null };
    items[2] = isEligibleForQuests;
    obj4.children = items;
    obj3.children = React6(QuestDockExternalCoordinationContext.QuestDockExternalCoordinationContextProvider, obj4);
    let tmp9Result = closure_1_8(native.ThemeContextProvider, obj3);
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
}), () => true);