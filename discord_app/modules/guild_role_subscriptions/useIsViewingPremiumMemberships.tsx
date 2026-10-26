// === Module 13739: useIsViewingPremiumMemberships ===

// Module 13739 (useIsViewingPremiumMemberships)
import c from "c" /* 576 */;
import Constants from "Constants" /* 1087 */;
import ChannelConstants from "ChannelConstants" /* 4830 */;
import _mod5013 from "module_5013" /* 5013 */;
import RouteUtils from "RouteUtils" /* 5020 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useIsViewingPremiumMemberships() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const RouteParam = RouteUtils.RouteParam;
    const CHANNELResult = Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS);
    cResult[0] = CHANNELResult;
    let first = CHANNELResult;
  } else {
    first = cResult[0];
  }
  return null != _mod5013.useRouteMatch(first);
}) : (function useIsViewingPremiumMemberships() {
  const RouteParam = RouteUtils.RouteParam;
  return null != _mod5013.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
});