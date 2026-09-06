// === Module 12788: saveLastRoute ===

// Module 12788 (saveLastRoute)
import dispatcherDefault from "dispatcher" /* 573 */;
import matchPath from "matchPath" /* 4386 */;
import RouteParam2 from "RouteParam" /* 4399 */;
import closure_3 from "initialize" /* 4200 */;
import { Routes } from "ME" /* 1074 */;

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