// === Module 12458: useIsViewingPremiumMemberships ===

// Module 12458 (useIsViewingPremiumMemberships)
import c from "c" /* 576 */;
import Constants from "Constants" /* 1085 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import _mod4710 from "module_4710" /* 4710 */;
import RouteUtils from "RouteUtils" /* 4717 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const RouteParam = RouteUtils.RouteParam;
    const CHANNELResult = Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS);
    cResult[0] = CHANNELResult;
    let first = CHANNELResult;
  } else {
    first = cResult[0];
  }
  return null != _mod4710.useRouteMatch(first);
}) : (() => {
  const RouteParam = RouteUtils.RouteParam;
  return null != _mod4710.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
});