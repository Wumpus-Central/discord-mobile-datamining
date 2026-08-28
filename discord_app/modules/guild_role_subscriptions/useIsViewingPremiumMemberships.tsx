// === Module 12247: useIsViewingPremiumMemberships ===

// Module 12247 (useIsViewingPremiumMemberships)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import set2 from "set" /* 1398 */;
import _extends from "_extends" /* 4279 */;
import RouteParam2 from "RouteParam" /* 4286 */;

const Routes = ME.Routes;
const StaticChannelRoute = set2.StaticChannelRoute;
const result = set.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteParam2.RouteParam;
  return null != _extends.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};