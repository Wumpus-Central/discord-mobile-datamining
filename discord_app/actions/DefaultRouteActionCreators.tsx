// discord_app/actions/DefaultRouteActionCreators.tsx
import dispatcherDefault from "../Dispatcher.tsx";
import matchPath from "../modules/routing/matchPathCompat.tsx";
import RouteParam2 from "../modules/routing/RouteUtils.tsx";
import closure_3 from "../modules/lurker_mode/LurkingStore.tsx";
import { Routes } from "../Constants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("actions/DefaultRouteActionCreators.tsx");

export const saveLastRoute = function saveLastRoute(pathname) {
  let obj = matchPath;
  obj = { path: null };
  const RouteParam = RouteParam2.RouteParam;
  obj[0] = Routes.CHANNEL(RouteParam.guildId());
  const matchPathResult = obj.matchPath(pathname, obj);
  let guildId;
  if (matchPathResult != null) {
    const params = matchPathResult.params;
    if (params != null) {
      guildId = params.guildId;
    }
  }
  let tmp4 = null == guildId;
  if (!tmp4) {
    tmp4 = !closure_3.isLurking(guildId);
  }
  if (tmp4) {
    obj = { type: "SAVE_LAST_ROUTE", path: null };
    obj[1] = pathname;
    dispatcherDefault.dispatch(obj);
    const obj3 = dispatcherDefault;
  }
};
export const saveLastNonVoiceRoute = function saveLastNonVoiceRoute(Routes) {
  let obj = matchPath;
  obj = { path: null };
  const RouteParam = RouteParam2.RouteParam;
  obj[0] = Routes.CHANNEL(RouteParam.guildId());
  const matchPathResult = obj.matchPath(Routes, obj);
  let guildId;
  if (matchPathResult != null) {
    const params = matchPathResult.params;
    if (params != null) {
      guildId = params.guildId;
    }
  }
  let tmp4 = null == guildId;
  if (!tmp4) {
    tmp4 = !closure_3.isLurking(guildId);
  }
  if (tmp4) {
    obj = { type: "SAVE_LAST_NON_VOICE_ROUTE", path: null };
    obj[1] = Routes;
    dispatcherDefault.dispatch(obj);
    const obj3 = dispatcherDefault;
  }
};