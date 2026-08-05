// discord_app/modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx
import { Routes } from "ME";
import { StaticChannelRoute } from "set";

const result = require("_extends").fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default function useIsViewingPremiumMemberships() {
  const RouteParam = require("../routing/RouteUtils.tsx") /* RouteParam */.RouteParam;
  return null != require("../../../_runtime/metro/04113__extends.js") /* _extends */.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
};