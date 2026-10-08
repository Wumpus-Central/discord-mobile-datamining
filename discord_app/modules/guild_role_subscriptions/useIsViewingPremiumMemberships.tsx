// === Module 12569: useIsViewingPremiumMemberships ===

// Module 12569 (useIsViewingPremiumMemberships)
import c from "c" /* 576 */;
import Constants from "Constants" /* 1085 */;
import ChannelConstants from "ChannelConstants" /* 2070 */;
import _mod4910 from "module_4910" /* 4910 */;
import RouteUtils from "RouteUtils" /* 4917 */;
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
  return null != _mod4910.useRouteMatch(first);
}) : (function useIsViewingPremiumMemberships() {
  const RouteParam = RouteUtils.RouteParam;
  return null != _mod4910.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
});