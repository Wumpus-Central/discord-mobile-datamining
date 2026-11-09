// === Module 18407: guilds/Guilds ===

// Module 18407 (guilds/Guilds)
import TTITrackerDefault from "TTITracker" /* 9 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5314 */;
import RootNavigationRef from "RootNavigationRef" /* 5315 */;
import HomeDrawerExperiment from "HomeDrawerExperiment" /* 5320 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6623 */;

require = fn;
const YouBarNavigatorScreens = fn(11659).YouBarNavigatorScreens;
const ComponentActions = fn(1072).ComponentActions;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = false;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default noop.memo(function GuildsOnly() {
  const trackTabPerformance = enabled(18408).useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
  let obj = enabled(18408);
  const tmp5 = isChatBesideChannelList(5310)();
  const isEligibleForQuests = enabled(9764).getIsEligibleForQuests();
  const GuildsRenderExperiment = enabled(18409).GuildsRenderExperiment;
  enabled = GuildsRenderExperiment.useConfig({ location: "GuildsOnly" }).enabled;
  isChatBesideChannelList = undefined;
  dependencyMap = undefined;
  [isChatBesideChannelList, dependencyMap] = noop.useState(() => {
    if (enabled) {
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
  items = [isChatBesideChannelList];
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
      const subscription = isChatBesideChannelList(572).subscribe("CONNECTION_OPEN", allowRenderAfterReady);
      let ComponentDispatch = enabled(1108).ComponentDispatch;
      const subscription1 = ComponentDispatch.subscribe(constants.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
      let obj = isChatBesideChannelList(572);
      let rootNavigationRef = enabled(5315).getRootNavigationRef();
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
    isChatBesideChannelList = isChatBesideChannelList(5317)().isChatBesideChannelList;
  }
  if (!enabled) {
    const obj3 = { gradient: tmp5, children: null };
    const items1 = [closure_8(tmp4(18410), {}), closure_8(tmp4(18787), {}), , ];
    let tmp10Result = isEligibleForQuests;
    if (isEligibleForQuests) {
      tmp10Result = closure_8(tmp4(17477), {});
    }
    const obj4 = { children: null };
    items1[2] = tmp10Result;
    items1[3] = closure_8(tmp(18392).BackgroundChatHost, {});
    obj4.children = items1;
    obj3.children = closure_9(tmp(17397).QuestDockExternalCoordinationContextProvider, obj4);
    let tmp10Result2 = closure_8(tmp(5199).ThemeContextProvider, obj3);
  } else {
    tmp10Result2 = null;
  }
  return tmp10Result2;
}, () => true);