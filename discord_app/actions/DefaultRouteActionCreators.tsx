// === Module 12939: DefaultRouteActionCreators ===

// Module 12939 (DefaultRouteActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import matchPathCompat from "matchPathCompat" /* 4466 */;
import RouteUtils from "RouteUtils" /* 4479 */;
import LurkingStore from "LurkingStore" /* 4279 */;

require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
const result = size.fileFinishedImporting("actions/DefaultRouteActionCreators.tsx");

export const saveLastRoute = function saveLastRoute(pathname) {
  const obj2 = { path: null };
  const RouteParam = RouteUtils.RouteParam;
  obj2.path = Routes.CHANNEL(RouteParam.guildId());
  const matchPathResult = matchPathCompat.matchPath(pathname, obj2);
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
    const obj4 = { type: "SAVE_LAST_ROUTE", path: pathname };
    DispatcherDefault.dispatch(obj4);
  }
};
export const saveLastNonVoiceRoute = function saveLastNonVoiceRoute(Routes) {
  const obj2 = { path: null };
  const RouteParam = RouteUtils.RouteParam;
  obj2.path = Routes.CHANNEL(RouteParam.guildId());
  const matchPathResult = matchPathCompat.matchPath(Routes, obj2);
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
    const obj4 = { type: "SAVE_LAST_NON_VOICE_ROUTE", path: Routes };
    DispatcherDefault.dispatch(obj4);
  }
};