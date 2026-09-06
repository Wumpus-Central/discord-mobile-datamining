// === Module 12788: DefaultRouteActionCreators ===

// Module 12788 (DefaultRouteActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import matchPathCompat from "matchPathCompat" /* 4386 */;
import RouteUtils from "RouteUtils" /* 4399 */;
import LurkingStore from "LurkingStore" /* 4200 */;

require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
const result = size.fileFinishedImporting("actions/DefaultRouteActionCreators.tsx");

export const saveLastRoute = function saveLastRoute(pathname) {
  let obj = { path: null };
  const RouteParam = RouteUtils.RouteParam;
  obj.path = Routes.CHANNEL(RouteParam.guildId());
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
    tmp4 = !LurkingStore.isLurking(guildId);
  }
  if (tmp4) {
    obj = { type: "SAVE_LAST_ROUTE", path: pathname };
    DispatcherDefault.dispatch(obj);
  }
};
export const saveLastNonVoiceRoute = function saveLastNonVoiceRoute(Routes) {
  let obj = { path: null };
  const RouteParam = RouteUtils.RouteParam;
  obj.path = Routes.CHANNEL(RouteParam.guildId());
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
    tmp4 = !LurkingStore.isLurking(guildId);
  }
  if (tmp4) {
    obj = { type: "SAVE_LAST_NON_VOICE_ROUTE", path: Routes };
    DispatcherDefault.dispatch(obj);
  }
};