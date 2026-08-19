// === Module 11951: useIsViewingPremiumMemberships ===

// Module 11951 (useIsViewingPremiumMemberships)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import set from "set" /* 1398 */;
import _extends from "_extends" /* 4208 */;
import RouteParam2 from "RouteParam" /* 4215 */;

const Routes = ME.Routes;
const StaticChannelRoute = set.StaticChannelRoute;
const result = obj132.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteParam2.RouteParam;
  return null != _extends.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};