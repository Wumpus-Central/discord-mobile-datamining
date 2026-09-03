// === Module 12550: useIsViewingPremiumMemberships ===

// Module 12550 (useIsViewingPremiumMemberships)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import set2 from "set" /* 1393 */;
import _extends from "_extends" /* 4310 */;
import RouteParam2 from "RouteParam" /* 4317 */;

const Routes = ME.Routes;
const StaticChannelRoute = set2.StaticChannelRoute;
const result = set.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteParam2.RouteParam;
  return null != _extends.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};