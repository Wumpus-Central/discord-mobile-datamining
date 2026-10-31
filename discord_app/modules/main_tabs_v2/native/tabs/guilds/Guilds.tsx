// discord_app/modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx
import TTITrackerDefault from "../../../../tti_analytics/TTITracker.tsx";
import DispatcherDefault from "../../../../../Dispatcher.tsx";
import ComponentDispatchUtils from "../../../../../utils/ComponentDispatchUtils.tsx";
import NavigationRouteUtils from "../../../helpers/NavigationRouteUtils.native.tsx";
import RootNavigationRef from "../../../RootNavigationRef.native.tsx";
import HomeDrawerExperiment from "../../../../home_drawer/native/HomeDrawerExperiment.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GatewayConnectionStore from "../../../../gateway/GatewayConnectionStore.tsx";

require = fn;
const YouBarNavigatorScreens = fn(11513).YouBarNavigatorScreens;
const ComponentActions = fn(1072).ComponentActions;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = false;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/Guilds.tsx");

export default noop.memo(
  function GuildsOnly() {
    const trackTabPerformance = enabled(18058).useTrackTabPerformance(YouBarNavigatorScreens.GUILDS);
    let obj = enabled(18058);
    const tmp5 = isChatBesideChannelList(5194)();
    let isEligibleForQuests = enabled(9673).getIsEligibleForQuests();
    const GuildsRenderExperiment = enabled(18059).GuildsRenderExperiment;
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
        const subscription = isChatBesideChannelList(572).subscribe("CONNECTION_OPEN", allowRenderAfterReady);
        let ComponentDispatch = enabled(1108).ComponentDispatch;
        const subscription1 = ComponentDispatch.subscribe(constants.BOTTOM_CHANNEL_SCREEN_DRAG_START, allowRender);
        let obj = isChatBesideChannelList(572);
        let rootNavigationRef = enabled(5199).getRootNavigationRef();
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
      isChatBesideChannelList = isChatBesideChannelList(5201)().isChatBesideChannelList;
    }
    if (!enabled) {
      const obj3 = { gradient: tmp5, children: null };
      const items1 = [closure_8(tmp4(18060), {}), closure_8(tmp4(18422), {})];
      if (isEligibleForQuests) {
        isEligibleForQuests = closure_8(tmp4(17142), {});
      }
      const obj4 = { children: null };
      items1[2] = isEligibleForQuests;
      obj4.children = items1;
      obj3.children = closure_9(tmp(17063).QuestDockExternalCoordinationContextProvider, obj4);
      let tmp10Result = closure_8(tmp(5080).ThemeContextProvider, obj3);
    } else {
      tmp10Result = null;
    }
    return tmp10Result;
  },
  () => true,
);
