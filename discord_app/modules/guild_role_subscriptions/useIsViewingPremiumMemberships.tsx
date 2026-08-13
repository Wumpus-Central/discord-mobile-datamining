// discord_app/modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx
import { Routes } from "ME";
import { StaticChannelRoute } from "set";
import { _extends } from "../../../_runtime/metro/04176__extends.js";
import { RouteParam } from "../routing/RouteUtils.tsx";

const result = require("_extends").fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = RouteParam.RouteParam;
  return null != _extends.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};