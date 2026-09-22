// === Module 4616: getInitialNavigationState ===

// Module 4616 (getInitialNavigationState)
import LoggerDefault from "Logger" /* 3 */;
import router_utils from "router_utils" /* 1101 */;
import matchPathCompat from "matchPathCompat" /* 4583 */;
import RouteUtils from "RouteUtils" /* 4596 */;
import useChatLayout from "useChatLayout" /* 4617 */;
import HomeDrawerExperiment from "HomeDrawerExperiment" /* 4620 */;
import _slicedToArray from "module_32" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import DefaultRouteStore from "DefaultRouteStore" /* 4582 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2096 */;

require = fn;
function getInitialGuildState(guildId, channelId, flag) {
  flag = flag2;
  if (flag2 === undefined) {
    flag = false;
  }
  if (channelId == null) {
    channelId = SelectedChannelStore.getChannelId(guildId);
  }
  const isChatLockedOpen = useChatLayout.getChatLayout().isChatLockedOpen;
  if (flag) {
    if (null != channelId) {
      if (!isChatLockedOpen) {
        if (!flag) {
          let items = [true, ];
          const obj2 = { index: 0, routes: null };
          const obj3 = { name: "tabs", state: null };
          const obj4 = { routes: null, index: 0 };
          const obj5 = { name: "guilds", params: null };
          const obj6 = { guildId, channelId };
          obj5.params = obj6;
          const items1 = [obj5];
          obj4.routes = items1;
          obj3.state = obj4;
          const items2 = [obj3, ];
          const obj7 = { name: "channel", params: null };
          const obj8 = { guildId, channelId };
          obj7.params = obj8;
          items2[1] = obj7;
          const obj9 = { name: "main", state: null };
          const obj10 = { routes: items2, index: items2.length - 1 };
          obj9.state = obj10;
          const items3 = [obj9];
          obj2.routes = items3;
          items[1] = obj2;
        }
        return items;
      }
    }
  }
  const items4 = [isChatLockedOpen && null != channelId, ];
  const obj11 = { index: 0, routes: null };
  const obj12 = { name: "tabs", state: null };
  const obj13 = { routes: null, index: 0 };
  const items5 = [{ name: "guilds", params: { guildId, channelId, drawerOpen: flag } }];
  obj13.routes = items5;
  obj12.state = obj13;
  const items6 = [obj12];
  const obj15 = { name: "main", state: { routes: items6, index: items6.length - 1 } };
  const items7 = [obj15];
  obj11.routes = items7;
  items4[1] = obj11;
  items = items4;
  const obj14 = { name: "guilds", params: { guildId, channelId, drawerOpen: flag } };
  const obj16 = { routes: items6, index: items6.length - 1 };
  const tmp3 = isChatLockedOpen && null != channelId;
}
function computeInitialNavigationStateWithoutLogging() {
  if (null != AuthenticationStore.getToken()) {
    const _location = router_utils.getHistory().location;
    const obj4 = { path: null };
    const RouteParam = RouteUtils.RouteParam;
    const obj3 = matchPathCompat;
    const RouteParam2 = RouteUtils.RouteParam;
    obj4.path = React5.CHANNEL(RouteParam.guildId(), RouteParam2.channelId({ optional: true }), ":messageId?");
    const matchPathResult = obj3.matchPath(_location.pathname, obj4);
    const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
    const tmp5 = MobileHomeDrawerExperiment.getConfig({ location: "app-start" }).landOnHome && null == matchPathResult;
    if (null == matchPathResult) {
      const obj6 = { path: null };
      const RouteParam3 = RouteUtils.RouteParam;
      const tmpResult = matchPathCompat;
      const RouteParam4 = RouteUtils.RouteParam;
      obj6.path = React5.CHANNEL(RouteParam3.guildId(), RouteParam4.channelId({ optional: true }), ":messageId?");
      let matchPathResult1 = tmpResult.matchPath(DefaultRouteStore.lastNonVoiceRoute, obj6);
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
      const items = [{ page: "private-channels" }, ];
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
        const obj7 = { page: str2 };
        const items1 = [obj7, tmp17];
        let items2 = items1;
      } else {
        const obj8 = { page: str2, guildId };
        items2 = [obj8, tmp17];
      }
      return items2;
    }
    const guildIdResult = RouteParam.guildId();
  } else {
    const items3 = [{ page: "other" }, ];
    const obj = { routes: null, index: 0 };
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
};
export const wrapRouteForRootNavigator = function wrapRouteForRootNavigator(items) {
  const obj = { name: "main", state: { routes: items, index: items.length - 1 } };
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