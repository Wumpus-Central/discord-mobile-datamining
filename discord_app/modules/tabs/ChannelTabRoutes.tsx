// discord_app/modules/tabs/ChannelTabRoutes.tsx
import Constants from "../../Constants.tsx";
import util from "../../intl/index.native.tsx";
import _modDef4131 from "../conjure/intl/ConjureUntranslated.messages.js";
import ChannelConstants from "../channel/ChannelConstants.tsx";
import matchPathCompat from "../routing/matchPathCompat.tsx";
import RouteUtils from "../routing/RouteUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
