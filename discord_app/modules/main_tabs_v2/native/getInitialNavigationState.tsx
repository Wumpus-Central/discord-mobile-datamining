// === Module 4738: getInitialNavigationState ===

// Module 4738 (getInitialNavigationState)
import LoggerDefault from "Logger" /* 3 */;
import router_utils from "router_utils" /* 1112 */;
import matchPathCompat from "matchPathCompat" /* 4704 */;
import RouteUtils from "RouteUtils" /* 4717 */;
import useChatLayout from "useChatLayout" /* 4739 */;
import HomeDrawerExperiment from "HomeDrawerExperiment" /* 4742 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import DefaultRouteStore from "DefaultRouteStore" /* 4703 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let routes;

let metroImportDefault;
let metroRequire;
function getInitialGuildState(id, channelId, flag) {
  let items1;
  let items3;
  let items5;
  let items7;
  let obj10;
  let obj13;
  let obj16;
  let obj4;
  let obj6;
  let obj8;
  flag = flag2;
  if (flag2 === undefined) {
    flag = false;
  }
  if (channelId == null) {
    channelId = SelectedChannelStore.getChannelId(id);
  }
  const obj = useChatLayout;
  const isChatLockedOpen = obj.getChatLayout().isChatLockedOpen;
  if (flag) {
    if (null != channelId) {
      if (!isChatLockedOpen) {
        let items;
        if (!flag) {
          items = [true, ];
          const obj3 = { name: "tabs", state: obj4 };
          const obj5 = { name: "guilds", params: obj6 };
          obj4 = { routes: items1, index: 0 };
          items1 = [obj5];
          const items2 = [obj3, ];
          const obj7 = { name: "channel", params: obj8 };
          const obj2 = { index: 0, routes: items3 };
          obj6 = { guildId: id, channelId };
          obj8 = { guildId: id, channelId };
          items2[1] = obj7;
          const obj9 = { name: "main", state: obj10 };
          items3 = [obj9];
          obj10 = { routes: items2, index: items2.length - 1 };
          items[1] = obj2;
        }
        return items;
      }
    }
  }
  const items4 = [, ];
  const tmp3 = isChatLockedOpen && null != channelId;
  items4[0] = tmp3;
  const obj12 = { name: "tabs", state: obj13 };
  obj13 = { routes: items5, index: 0 };
  items5 = [];
  const obj11 = { index: 0, routes: items7 };
  const obj14 = { name: "guilds", params: { guildId: id, channelId, drawerOpen: flag } };
  items5[0] = obj14;
  const items6 = [obj12];
  const obj15 = { name: "main", state: obj16 };
  items7 = [obj15];
  obj16 = { routes: items6, index: items6.length - 1 };
  items4[1] = obj11;
  items = items4;
}
function computeInitialNavigationStateWithoutLogging() {
  let CHANNEL;
  let CHANNEL2;
  let RouteParam2;
  let RouteParam4;
  let channelId;
  let guildId;
  let guildIdResult;
  let guildIdResult1;
  let items4;
  if (null != AuthenticationStore.getToken()) {
    let matchPath2Result;
    let flag;
    const obj2 = router_utils;
    const _location = obj2.getHistory().location;
    const obj3 = { path: CHANNEL(guildIdResult, RouteParam2.channelId({ optional: true }), ":messageId?") };
    const matchPath = matchPathCompat.matchPath;
    const pathname = _location.pathname;
    CHANNEL = metroImportDefault.CHANNEL;
    matchPathCompat;
    const RouteParam = RouteUtils.RouteParam;
    guildIdResult = RouteParam.guildId();
    RouteParam2 = RouteUtils.RouteParam;
    const matchPathResult = matchPath(pathname, obj3);
    const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
    const tmp7 = MobileHomeDrawerExperiment.getConfig({ location: "app-start" }).landOnHome && null == matchPathResult;
    if (null == matchPathResult) {
      const obj4 = { path: CHANNEL2(guildIdResult1, RouteParam4.channelId({ optional: true }), ":messageId?") };
      const matchPath2 = matchPathCompat.matchPath;
      const lastNonVoiceRoute = DefaultRouteStore.lastNonVoiceRoute;
      CHANNEL2 = metroImportDefault.CHANNEL;
      matchPathCompat;
      const RouteParam3 = RouteUtils.RouteParam;
      guildIdResult1 = RouteParam3.guildId();
      RouteParam4 = RouteUtils.RouteParam;
      matchPath2Result = matchPath2(lastNonVoiceRoute, obj4);
      flag = false;
    } else {
      flag = _location.openChannel;
      if (flag == null) {
        flag = false;
      }
      matchPath2Result = matchPathResult;
    }
    let params;
    if (matchPath2Result != null) {
      params = matchPath2Result.params;
    }
    if (params == null) {
      params = {};
    }
    ({ channelId, guildId } = params);
    if (null == guildId) {
      const items = [{ page: "private-channels" }, ];
      let flag2 = tmp7;
      if (tmp7 === undefined) {
        flag2 = false;
      }
      items[1] = getInitialGuildState(metroRequire, undefined, false, flag2)[1];
      return items;
    } else {
      let items2;
      if (!flag) {
        flag = guildId !== metroRequire;
      }
      const tmp19 = _slicedToArray(getInitialGuildState(guildId, channelId, flag, tmp7), 2);
      let str2 = "other";
      if (!tmp19[0]) {
        let str3 = "guild-channels";
        if (guildId === metroRequire) {
          str3 = "private-channels";
        }
        str2 = str3;
      }
      if ("private-channels" === str2) {
        const items1 = [{ page: str2 }, tmp19[1]];
        items2 = items1;
        const obj5 = { page: str2 };
      } else {
        items2 = [{ page: str2, guildId }, tmp19[1]];
        const obj6 = { page: str2, guildId };
      }
      return items2;
    }
  } else {
    const items3 = [{ page: "other" }, ];
    const obj = { routes: items4, index: 0 };
    items4 = [{ name: "auth" }];
    items3[1] = obj;
    return items3;
  }
}
({ ME: metroRequire, Routes: metroImportDefault } = Constants);
let tmp3 = new LoggerDefault("getInitialNavigationState");
const logger = tmp3;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/getInitialNavigationState.tsx");

export default function getInitialNavigationState(arr) {
  const tmp = computeInitialNavigationStateWithoutLogging()[1];
  let closure_0 = tmp;
  if (null != arr) {
    const item = arr.forEach((item) => {
      routes = routes.routes;
      return routes.push(item);
    });
  }
  return tmp;
};
export const wrapRouteForRootNavigator = function wrapRouteForRootNavigator(items) {
  let obj2;
  const obj = { name: "main", state: obj2 };
  obj2 = { routes: items, index: items.length - 1 };
  items = [obj];
  return items;
};
export function getInitialAuthState() {
  let items;
  const obj = { routes: items, index: 0 };
  items = [{ name: "auth" }];
  return obj;
}
export { getInitialGuildState };
export const computeInitialNavigationState = function computeInitialNavigationState() {
  const tmp = computeInitialNavigationStateWithoutLogging();
  logger.log("Initial State:", tmp);
  return tmp;
};