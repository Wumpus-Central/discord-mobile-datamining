// discord_app/modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import set2 from "../channel/ChannelConstants.tsx";
import _extends from "../../../_runtime/metro/04392__extends.js";
import RouteParam2 from "../routing/RouteUtils.tsx";

const Routes = ME.Routes;
const StaticChannelRoute = set2.StaticChannelRoute;
const result = set.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteParam2.RouteParam;
  return null != _extends.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
}
