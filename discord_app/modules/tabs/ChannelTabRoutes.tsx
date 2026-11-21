// discord_app/modules/tabs/ChannelTabRoutes.tsx
import _mod1099 from "../../../_runtime/metro/01099__.js";
import util from "../../intl/index.native.tsx";
import _modDef4190 from "../conjure/intl/ConjureUntranslated.messages.js";
import matchPathCompat from "../routing/matchPathCompat.tsx";
import RouteUtils from "../routing/RouteUtils.tsx";
import Constants from "../../Constants.tsx";
import ChannelConstants from "../channel/ChannelConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
    const obj2 = { kind: "route", routePath: pathname, routeLabel: null };
    const intl5 = util.intl;
    obj2.routeLabel = intl5.string(util.t.TdEu5X);
    let tmp5 = obj2;
  } else if (pathname.startsWith(Routes.COLLECTIBLES_SHOP)) {
    const obj3 = { kind: "route", routePath: Routes.COLLECTIBLES_SHOP, routeLabel: null };
    const intl4 = util.intl;
    obj3.routeLabel = intl4.string(util.t.pWG4ze);
    tmp5 = obj3;
  } else if (pathname.startsWith(Routes.QUEST_HOME)) {
    const obj4 = { kind: "route", routePath: Routes.QUEST_HOME, routeLabel: null };
    const intl3 = util.intl;
    obj4.routeLabel = intl3.string(util.t.JALI2K);
    tmp5 = obj4;
  } else if (pathname.startsWith(Routes.APPLICATION_STORE)) {
    const obj5 = { kind: "route", routePath: Routes.APPLICATION_STORE, routeLabel: null };
    const intl2 = util.intl;
    obj5.routeLabel = intl2.string(util.t.Ipxkog);
    tmp5 = obj5;
  } else {
    const obj6 = { path, exact: true };
    tmp5 = null;
    if (null != obj.matchPath(pathname, obj6)) {
      const obj7 = { kind: "route", routePath: null, routeLabel: null };
      const _HermesInternal = HermesInternal;
      obj7.routePath = "" + pathname + search + str;
      const intl = util.intl;
      obj7.routeLabel = intl.string(_modDef4190.uk6jhJ);
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

export function getChannelTabPageName(routePath) {
  const first = routePath.split(/[?#]/)[0];
  if (Routes.FRIENDS === first) {
    return "friends";
  } else if (Routes.COLLECTIBLES_SHOP === first) {
    return "shop";
  } else if (Routes.QUEST_HOME === first) {
    return "quests";
  } else if (Routes.APPLICATION_STORE === first) {
    return "nitro";
  } else {
    const obj2 = { path, exact: true };
    let str = "other";
    if (null != obj.matchPath(first, obj2)) {
      str = "conjure";
    }
    return str;
  }
}
export function getFriendsTabLocation() {
  const obj = { kind: "route", routePath: Routes.FRIENDS, routeLabel: null };
  const intl = util.intl;
  obj.routeLabel = intl.string(util.t.TdEu5X);
  return obj;
}
export { getRouteTabForLocation };
export function getTabLocationForPath(path) {
  const parsePathResult = _mod1099.parsePath(path);
  const pathname = parsePathResult.pathname;
  const tmp4 = getRouteTabForLocation({ pathname, search: parsePathResult.search, hash: parsePathResult.hash });
  if (null != tmp4) {
    return tmp4;
  } else {
    const obj3 = { path: path2, exact: true };
    const matchPathResult = matchPathCompat.matchPath(pathname, obj3);
    if (null != matchPathResult) {
      if (!hasOwnProperty(matchPathResult.params.channelId)) {
        const params = matchPathResult.params;
        const guildId = params.guildId;
        const obj4 = { kind: "channel", channelId: params.channelId, guildId: null };
        let tmp9 = null;
        if (guildId !== React3) {
          tmp9 = guildId;
        }
        obj4.guildId = tmp9;
        return obj4;
      }
    }
    return null;
  }
  const obj2 = { pathname, search: parsePathResult.search, hash: parsePathResult.hash };
}
export function isSameTabLocation(atResult, routeTabForLocation1) {
  if ("route" === atResult.kind) {
    let tmp = "route" === routeTabForLocation1.kind && atResult.routePath === routeTabForLocation1.routePath;
    const tmp2 = "route" === routeTabForLocation1.kind && atResult.routePath === routeTabForLocation1.routePath;
  } else {
    tmp = "channel" === routeTabForLocation1.kind && atResult.channelId === routeTabForLocation1.channelId;
  }
  return tmp;
}
