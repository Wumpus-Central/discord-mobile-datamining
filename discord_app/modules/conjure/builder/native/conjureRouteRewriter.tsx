// discord_app/modules/conjure/builder/native/conjureRouteRewriter.tsx
import Constants from "../../../../Constants.tsx";
import ChannelConstants from "../../../channel/ChannelConstants.tsx";
import matchPathCompat from "../../../routing/matchPathCompat.tsx";
import RouteUtils from "../../../routing/RouteUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
    const obj3 = {
      path: Routes.CHANNEL(params.guildId, StaticChannelRoute.CONJURE_PROJECT, params.projectId),
      state: pathname.state,
    };
    return obj3;
  }
  const obj2 = { path, exact: true };
}
