// === Module 12400: useIsViewingPremiumMemberships ===

// Module 12400 (useIsViewingPremiumMemberships)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import set2 from "set" /* 1398 */;
import _extends from "_extends" /* 4277 */;
import RouteParam2 from "RouteParam" /* 4284 */;

const Routes = ME.Routes;
const StaticChannelRoute = set2.StaticChannelRoute;
const result = set.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteParam2.RouteParam;
  return null != _extends.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};