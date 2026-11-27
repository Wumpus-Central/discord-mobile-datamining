// === Module 13838: conjureRouteRewriter ===

// Module 13838 (conjureRouteRewriter)
import Constants from "Constants" /* 1071 */;
import ChannelConstants from "ChannelConstants" /* 4899 */;
import matchPathCompat from "matchPathCompat" /* 5081 */;
import RouteUtils from "RouteUtils" /* 5094 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const RouteParam = RouteUtils.RouteParam;
const path = Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.CONJURE, ":projectId?");
const result = size.fileFinishedImporting("modules/conjure/builder/native/conjureRouteRewriter.tsx");

export default function conjureRouteRewriter(pathname) {
  const matchPathResult = matchPathCompat.matchPath(pathname.pathname, { path, exact: true });
  if (null == matchPathResult) {
    return null;
  } else {
    const params = matchPathResult.params;
    const obj3 = { path: Routes.CHANNEL(params.guildId, StaticChannelRoute.CONJURE_PROJECT, params.projectId), state: pathname.state };
    return obj3;
  }
  const obj2 = { path, exact: true };
};