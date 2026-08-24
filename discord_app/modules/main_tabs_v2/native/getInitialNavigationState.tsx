// discord_app/modules/main_tabs_v2/native/getInitialNavigationState.tsx
import timestampDefault from "../../debug/Logger.tsx";
import transitionTo from "../../routing/router_utils.tsx";
import matchPath from "../../routing/matchPathCompat.tsx";
import RouteParam5 from "../../routing/RouteUtils.tsx";
import useChatLayout from "../../chat/native/useChatLayout.tsx";
import MobileHomeDrawerExperiment2 from "../../home_drawer/native/HomeDrawerExperiment.tsx";
import closure_2 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../stores/AuthenticationStore.tsx";
import closure_4 from "../../../stores/DefaultRouteStore.tsx";
import closure_5 from "../../../stores/SelectedChannelStore.tsx";
import ME from "../../../Constants.tsx";

require = arg1;
function getInitialGuildState(closure_6, channelId, flag, flag2) {
  flag = flag2;
  if (flag2 === undefined) {
    flag = false;
  }
  if (channelId == null) {
    channelId = channelId.getChannelId(closure_6);
  }
  let obj = useChatLayout;
  const isChatLockedOpen = obj.getChatLayout().isChatLockedOpen;
  if (flag) {
    if (null != channelId) {
      if (!isChatLockedOpen) {
        if (!flag) {
          let items = [true, ];
          obj = { index: 0, routes: null };
          obj = { name: "tabs", state: null };
          obj1 = { routes: null, index: 0 };
          const obj2 = { name: "guilds", params: null };
          const obj3 = { guildId: null, channelId: null };
          obj3[0] = closure_6;
          obj3[1] = channelId;
          obj2[1] = obj3;
          const items1 = [obj2];
          obj1[0] = items1;
          obj[1] = obj1;
          const items2 = [obj, ];
          const obj4 = { name: "channel", params: null };
          const obj5 = { guildId: null, channelId: null };
          obj5[0] = closure_6;
          obj5[1] = channelId;
          obj4[1] = obj5;
          items2[1] = obj4;
          const obj6 = { name: "main", state: null };
          const obj7 = { routes: null, index: null };
          obj7[0] = items2;
          obj7[1] = items2.length - 1;
          obj6[1] = obj7;
          const items3 = [obj6];
          obj[1] = items3;
          items[1] = obj;
        }
        return items;
      }
    }
  }
  const items4 = [isChatLockedOpen && null != channelId, ];
  const items5 = [{ name: "guilds", params: { guildId: closure_6, channelId, drawerOpen: flag } }];
  const items6 = [{ name: "tabs", state: { routes: items5, index: 0 } }];
  const items7 = [{ name: "main", state: { routes: items6, index: items6.length - 1 } }];
  items4[1] = { index: 0, routes: items7 };
  items = items4;
}
function computeInitialNavigationStateWithoutLogging() {
  if (null != token.getToken()) {
    obj1 = transitionTo;
    const _location = obj1.getHistory().location;
    let obj2 = matchPath;
    let obj = { path: null };
    const RouteParam = RouteParam5.RouteParam;
    const RouteParam2 = RouteParam5.RouteParam;
    obj[0] = closure_7.CHANNEL(RouteParam.guildId(), RouteParam2.channelId({ optional: true }), ":messageId?");
    const matchPathResult = obj2.matchPath(_location.pathname, obj);
    const MobileHomeDrawerExperiment = MobileHomeDrawerExperiment2.MobileHomeDrawerExperiment;
    const tmp5 = MobileHomeDrawerExperiment.getConfig({ location: "app-start" }).landOnHome && null == matchPathResult;
    if (null == matchPathResult) {
      obj = { path: null };
      const RouteParam3 = tmp(4219).RouteParam;
      const tmpResult = tmp(4206);
      const RouteParam4 = tmp(4219).RouteParam;
      obj[0] = obj5.CHANNEL(RouteParam3.guildId(), RouteParam4.channelId({ optional: true }), ":messageId?");
      let matchPathResult1 = tmpResult.matchPath(lastNonVoiceRoute.lastNonVoiceRoute, obj);
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
      items[1] = getInitialGuildState(closure_6, undefined, false, flag2)[1];
      return items;
    } else {
      if (!flag) {
        flag = guildId !== closure_6;
      }
      const tmp16 = callback(getInitialGuildState(guildId, channelId, flag, tmp5), 2);
      let str2 = "other";
      if (!tmp16[0]) {
        let str3 = "guild-channels";
        if (guildId === closure_6) {
          str3 = "private-channels";
        }
        str2 = str3;
      }
      if ("private-channels" === str2) {
        obj1 = { page: null };
        obj1[0] = str2;
        const items1 = [obj1, tmp17];
        let items2 = items1;
      } else {
        obj2 = { page: null, guildId: null };
        obj2[0] = str2;
        obj2[1] = guildId;
        items2 = [obj2, tmp17];
      }
      return items2;
    }
    const guildIdResult = RouteParam.guildId();
    obj5 = closure_7;
  } else {
    const items3 = [{ page: "other" }, ];
    obj = { routes: null, index: 0 };
    const items4 = [{ name: "auth" }];
    obj[0] = items4;
    items3[1] = obj;
    return items3;
  }
}
({ ME: closure_6, Routes: error } = ME);
let closure_8 = new timestampDefault("getInitialNavigationState");
const tmp3 = new timestampDefault("getInitialNavigationState");
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/getInitialNavigationState.tsx");

export default function getInitialNavigationState(arr) {
  const tmp = computeInitialNavigationStateWithoutLogging()[1];
  closure_0 = tmp;
  if (null != arr) {
    const item = arr.forEach((arg0) => {
      routes = routes.routes;
      return routes.push(arg0);
    });
  }
  return tmp;
};
export const wrapRouteForRootNavigator = function wrapRouteForRootNavigator(items) {
  items = [{ name: "main", state: { routes: items, index: items.length - 1 } }];
  return items;
};
export function getInitialAuthState() {
  const routes = [{ name: "auth" }];
  return { routes, index: 0 };
}
export { getInitialGuildState };
export const computeInitialNavigationState = function computeInitialNavigationState() {
  const tmp = computeInitialNavigationStateWithoutLogging();
  logger.log("Initial State:", tmp);
  return tmp;
};