// === Module 10278: ChannelTabRoutes ===

// Module 10278 (ChannelTabRoutes)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import ChannelConstants from "ChannelConstants" /* 5162 */;
import matchPathCompat from "matchPathCompat" /* 5354 */;
import RouteUtils from "RouteUtils" /* 5367 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const RouteParam = RouteUtils.RouteParam;
const path = Routes.CHANNEL(RouteParam.guildId(), ChannelConstants.StaticChannelRoute.CONJURE, ":projectId?");
const result = size.fileFinishedImporting("modules/tabs/ChannelTabRoutes.tsx");

export function getRouteTabForLocation(location) {
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
      obj7.routeLabel = intl.string(_modDef4131.uk6jhJ);
      tmp5 = obj7;
    }
    obj = matchPathCompat;
  }
  return tmp5;
}