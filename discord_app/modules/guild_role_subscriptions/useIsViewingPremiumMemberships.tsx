// === Module 13610: useIsViewingPremiumMemberships ===

// Module 13610 (useIsViewingPremiumMemberships)
import Constants from "Constants" /* 1071 */;
import ChannelConstants from "ChannelConstants" /* 4650 */;
import _mod4838 from "module_4838" /* 4838 */;
import RouteUtils from "RouteUtils" /* 4845 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteUtils.RouteParam;
  return null != _mod4838.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};