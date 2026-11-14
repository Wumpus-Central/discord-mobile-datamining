// discord_app/modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx
import Constants from "../../Constants.tsx";
import ChannelConstants from "../channel/ChannelConstants.tsx";
import _mod5360 from "../../../_runtime/metro/05360__.js";
import RouteUtils from "../routing/RouteUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteUtils.RouteParam;
  return null != _mod5360.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
}
