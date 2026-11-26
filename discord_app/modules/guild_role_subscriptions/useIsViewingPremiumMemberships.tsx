// === Module 13815: useIsViewingPremiumMemberships ===

// Module 13815 (useIsViewingPremiumMemberships)
import Constants from "Constants" /* 1071 */;
import ChannelConstants from "ChannelConstants" /* 4899 */;
import _mod5087 from "module_5087" /* 5087 */;
import RouteUtils from "RouteUtils" /* 5094 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteUtils.RouteParam;
  return null != _mod5087.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};