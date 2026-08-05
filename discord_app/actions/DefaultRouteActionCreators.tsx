import { dispatcher } from "../Dispatcher.tsx";
import { matchPath } from "../modules/routing/matchPathCompat.tsx";
import { RouteParam } from "../modules/routing/RouteUtils.tsx";
// discord_app/actions/DefaultRouteActionCreators.tsx
import initialize from "initialize";
import { Routes } from "ME";

const require = arg1;
const result = require("matchPath").fileFinishedImporting("actions/DefaultRouteActionCreators.tsx");

export const saveLastRoute = function saveLastRoute(pathname) {
  let obj = matchPath /* matchPath */;
  obj = { path: null };
  const RouteParam = RouteParam /* RouteParam */.RouteParam;
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
    tmp4 = !initialize.isLurking(guildId);
  }
  if (tmp4) {
    obj = { type: "SAVE_LAST_ROUTE", path: null };
    obj[1] = pathname;
    dispatcher.dispatch(obj);
    const obj3 = dispatcher;
  }
};
export const saveLastNonVoiceRoute = function saveLastNonVoiceRoute(Routes) {
  let obj = matchPath /* matchPath */;
  obj = { path: null };
  const RouteParam = RouteParam /* RouteParam */.RouteParam;
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
    tmp4 = !initialize.isLurking(guildId);
  }
  if (tmp4) {
    obj = { type: "SAVE_LAST_NON_VOICE_ROUTE", path: null };
    obj[1] = Routes;
    dispatcher.dispatch(obj);
    const obj3 = dispatcher;
  }
};