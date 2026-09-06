// === Module 12776: useIsViewingPremiumMemberships ===

// Module 12776 (useIsViewingPremiumMemberships)
import Constants from "Constants" /* 1074 */;
import ChannelConstants from "ChannelConstants" /* 1964 */;
import _mod4392 from "module_4392" /* 4392 */;
import RouteUtils from "RouteUtils" /* 4399 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteUtils.RouteParam;
  return null != _mod4392.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};