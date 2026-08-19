// discord_app/modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";
import set from "../channel/ChannelConstants.tsx";
import _extends from "../../../_runtime/metro/04208__extends.js";
import RouteParam2 from "../routing/RouteUtils.tsx";

const Routes = ME.Routes;
const StaticChannelRoute = set.StaticChannelRoute;
const result = obj132.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteParam2.RouteParam;
  return null != _extends.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};