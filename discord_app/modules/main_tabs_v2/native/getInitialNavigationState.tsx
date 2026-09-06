// discord_app/modules/main_tabs_v2/native/getInitialNavigationState.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import router_utils from "../../routing/router_utils.tsx";
import matchPathCompat from "../../routing/matchPathCompat.tsx";
import RouteUtils from "../../routing/RouteUtils.tsx";
import useChatLayout from "../../chat/native/useChatLayout.tsx";
import HomeDrawerExperiment from "../../home_drawer/native/HomeDrawerExperiment.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import DefaultRouteStore from "../../../stores/DefaultRouteStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";

require = fn;
function getInitialGuildState(guildId, channelId, flag) {
  flag = flag2;
  if (flag2 === undefined) {
    flag = false;
  }
  if (channelId == null) {
    channelId = SelectedChannelStore.getChannelId(guildId);
  }
  let obj = useChatLayout;
  const isChatLockedOpen = obj.getChatLayout().isChatLockedOpen;
  if (flag) {
    if (null != channelId) {
      if (!isChatLockedOpen) {
        if (!flag) {
          let items = [true];
          obj = { index: 0, routes: null };
          obj = { name: "tabs", state: null };
          const obj1 = { routes: null, index: 0 };
          const obj2 = { name: "guilds", params: null };
          const obj3 = { guildId, channelId };
          obj2.params = obj3;
          const items1 = [obj2];
          obj1.routes = items1;
          obj.state = obj1;
          const items2 = [obj];
          const obj4 = { name: "channel", params: null };
          const obj5 = { guildId, channelId };
          obj4.params = obj5;
          items2[1] = obj4;
          const obj6 = { name: "main", state: null };
          const obj7 = { routes: items2, index: items2.length - 1 };
          obj6.state = obj7;
          const items3 = [obj6];
          obj.routes = items3;
          items[1] = obj;
        }
        return items;
      }
    }
  }
  const items4 = [isChatLockedOpen && null != channelId];
  const obj8 = { index: 0, routes: null };
  const obj9 = { name: "tabs", state: null };
  const obj10 = { routes: null, index: 0 };
  const items5 = [{ name: "guilds", params: { guildId, channelId, drawerOpen: flag } }];
  obj10.routes = items5;
  obj9.state = obj10;
  const items6 = [obj9];
  const obj12 = { name: "main", state: { routes: items6, index: items6.length - 1 } };
  const items7 = [obj12];
  obj8.routes = items7;
  items4[1] = obj8;
  items = items4;
  const obj11 = { name: "guilds", params: { guildId, channelId, drawerOpen: flag } };
  const obj13 = { routes: items6, index: items6.length - 1 };
  const tmp3 = isChatLockedOpen && null != channelId;
}
function computeInitialNavigationStateWithoutLogging() {
  if (null != AuthenticationStore.getToken()) {
    let obj1 = router_utils;
    const _location = obj1.getHistory().location;
    let obj2 = matchPathCompat;
    let obj = { path: null };
    const RouteParam = RouteUtils.RouteParam;
    const RouteParam2 = RouteUtils.RouteParam;
    obj.path = React5.CHANNEL(RouteParam.guildId(), RouteParam2.channelId({ optional: true }), ":messageId?");
    const matchPathResult = obj2.matchPath(_location.pathname, obj);
    const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
    const tmp5 = MobileHomeDrawerExperiment.getConfig({ location: "app-start" }).landOnHome && null == matchPathResult;
    if (null == matchPathResult) {
      obj = { path: null };
      const RouteParam3 = RouteUtils.RouteParam;
      const tmpResult = matchPathCompat;
      const RouteParam4 = RouteUtils.RouteParam;
      obj.path = React5.CHANNEL(RouteParam3.guildId(), RouteParam4.channelId({ optional: true }), ":messageId?");
      let matchPathResult1 = tmpResult.matchPath(DefaultRouteStore.lastNonVoiceRoute, obj);
      let flag = false;
      const guildIdResult1 = RouteParam3.guildId();
    } else {
      flag = _location.openChannel;
      if (flag == null) {
        flag = false;
      }
      matchPathResult1 = matchPathResult;
    }
    let params;
    if (matchPathResult1 != null) {
      params = matchPathResult1.params;
    }
    if (params == null) {
      params = {};
    }
    ({ channelId, guildId } = params);
    if (null == guildId) {
      const items = [{ page: "private-channels" }];
      let flag2 = tmp5;
      if (tmp5 === undefined) {
        flag2 = false;
      }
      items[1] = getInitialGuildState(timestampProducer, undefined, false, flag2)[1];
      return items;
    } else {
      if (!flag) {
        flag = guildId !== timestampProducer;
      }
      const tmp16 = _slicedToArray(getInitialGuildState(guildId, channelId, flag, tmp5), 2);
      let str2 = "other";
      if (!tmp16[0]) {
        let str3 = "guild-channels";
        if (guildId === timestampProducer) {
          str3 = "private-channels";
        }
        str2 = str3;
      }
      if ("private-channels" === str2) {
        obj1 = { page: str2 };
        const items1 = [obj1, tmp17];
        let items2 = items1;
      } else {
        obj2 = { page: str2, guildId };
        items2 = [obj2, tmp17];
      }
      return items2;
    }
    const guildIdResult = RouteParam.guildId();
  } else {
    const items3 = [{ page: "other" }];
    obj = { routes: null, index: 0 };
    const items4 = [{ name: "auth" }];
    obj.routes = items4;
    items3[1] = obj;
    return items3;
  }
}
const Constants = fn(1074);
({ ME: metroRequire, Routes: closure_7 } = Constants);
const logger = new LoggerDefault("getInitialNavigationState");
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/getInitialNavigationState.tsx");

export default function getInitialNavigationState(arr) {
  const tmp = computeInitialNavigationStateWithoutLogging()[1];
  let routes = tmp;
  if (null != arr) {
    const item = arr.forEach((item) => {
      routes = routes.routes;
      return routes.push(item);
    });
  }
  return tmp;
}
export const wrapRouteForRootNavigator = function wrapRouteForRootNavigator(items) {
  let obj = { name: "main", state: null };
  obj = { routes: items, index: items.length - 1 };
  obj.state = obj;
  items = [obj];
  return items;
};
export function getInitialAuthState() {
  const obj = { routes: null, index: 0 };
  const items = [{ name: "auth" }];
  obj.routes = items;
  return obj;
}
export { getInitialGuildState };
export const computeInitialNavigationState = function computeInitialNavigationState() {
  const tmp = computeInitialNavigationStateWithoutLogging();
  logger.log("Initial State:", tmp);
  return tmp;
};
