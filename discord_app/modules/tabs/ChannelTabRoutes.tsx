// === Module 9985: ChannelTabRoutes ===

// Module 9985 (ChannelTabRoutes)
import _mod1100 from "module_1100" /* 1100 */;
import util from "util" /* 1113 */;
import _modDef4121 from "module_4121" /* 4121 */;
import matchPathCompat from "matchPathCompat" /* 4861 */;
import RouteUtils from "RouteUtils" /* 4874 */;
import Constants from "Constants" /* 1072 */;
import ChannelConstants from "ChannelConstants" /* 4679 */;
import size from "module_2" /* 2 */;

function getRouteTabForLocation(location) {
  ({ pathname, search } = location);
  if (search === undefined) {
    search = "";
  }
  let str = location.hash;
  if (str === undefined) {
    str = "";
  }
  if (pathname === Routes.FRIENDS) {
    const obj2 = { routePath: pathname, routeLabel: null };
    const intl5 = util.intl;
    obj2.routeLabel = intl5.string(util.t.TdEu5X);
    let tmp5 = obj2;
  } else if (pathname.startsWith(Routes.COLLECTIBLES_SHOP)) {
    const obj3 = { routePath: Routes.COLLECTIBLES_SHOP, routeLabel: null };
    const intl4 = util.intl;
    obj3.routeLabel = intl4.string(util.t.pWG4ze);
    tmp5 = obj3;
  } else if (pathname.startsWith(Routes.QUEST_HOME)) {
    const obj4 = { routePath: Routes.QUEST_HOME, routeLabel: null };
    const intl3 = util.intl;
    obj4.routeLabel = intl3.string(util.t.JALI2K);
    tmp5 = obj4;
  } else if (pathname.startsWith(Routes.APPLICATION_STORE)) {
    const obj5 = { routePath: Routes.APPLICATION_STORE, routeLabel: null };
    const intl2 = util.intl;
    obj5.routeLabel = intl2.string(util.t.Ipxkog);
    tmp5 = obj5;
  } else {
    const obj6 = { path, exact: true };
    tmp5 = null;
    if (null != obj.matchPath(pathname, obj6)) {
      const obj7 = { routePath: null, routeLabel: null };
      const _HermesInternal = HermesInternal;
      obj7.routePath = "" + pathname + search + str;
      const intl = util.intl;
      obj7.routeLabel = intl.string(_modDef4121.uk6jhJ);
      tmp5 = obj7;
    }
    obj = matchPathCompat;
  }
  return tmp5;
}
({ ME: c3, Routes } = Constants);
({ isStaticChannelRoute: hasOwnProperty, StaticChannelRoute } = ChannelConstants);
const RouteParam = RouteUtils.RouteParam;
const path = Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.CONJURE, ":projectId?");
const RouteParam2 = RouteUtils.RouteParam;
const RouteParam3 = RouteUtils.RouteParam;
const path2 = Routes.CHANNEL(RouteParam2.guildId(), RouteParam3.channelId(), ":messageId?");
const result = size.fileFinishedImporting("modules/tabs/ChannelTabRoutes.tsx");

export function getFriendsTabLocation() {
  const obj = { kind: "route", routePath: Routes.FRIENDS, routeLabel: null };
  const intl = util.intl;
  obj.routeLabel = intl.string(util.t.TdEu5X);
  return obj;
}
export { getRouteTabForLocation };
export function getTabLocationForPath(path) {
  const parsePathResult = _mod1100.parsePath(path);
  const pathname = parsePathResult.pathname;
  const tmp4 = getRouteTabForLocation({ pathname, search: parsePathResult.search, hash: parsePathResult.hash });
  if (null != tmp4) {
    const obj3 = { kind: "route" };
    const merged = Object.assign(tmp4);
    return obj3;
  } else {
    const obj4 = { path: path2, exact: true };
    const matchPathResult = matchPathCompat.matchPath(pathname, obj4);
    if (null != matchPathResult) {
      if (!hasOwnProperty(matchPathResult.params.channelId)) {
        const params = matchPathResult.params;
        const guildId = params.guildId;
        const obj5 = { kind: "channel", channelId: params.channelId, guildId: null };
        let tmp9 = null;
        if (guildId !== React3) {
          tmp9 = guildId;
        }
        obj5.guildId = tmp9;
        return obj5;
      }
    }
    return null;
  }
  const obj2 = { pathname, search: parsePathResult.search, hash: parsePathResult.hash };
}