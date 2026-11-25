// === Module 13763: useIsViewingPremiumMemberships ===

// Module 13763 (useIsViewingPremiumMemberships)
import Constants from "Constants" /* 1071 */;
import ChannelConstants from "ChannelConstants" /* 4868 */;
import _mod5056 from "module_5056" /* 5056 */;
import RouteUtils from "RouteUtils" /* 5063 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteUtils.RouteParam;
  return null != _mod5056.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};