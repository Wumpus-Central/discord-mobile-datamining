// discord_app/modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx
import c from "../../../_runtime/00576_c.js";
import Constants from "../../Constants.tsx";
import ChannelConstants from "../channel/ChannelConstants.tsx";
import _mod4911 from "../../../_runtime/metro/04911__.js";
import RouteUtils from "../routing/RouteUtils.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsViewingPremiumMemberships() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const RouteParam = RouteUtils.RouteParam;
        const CHANNELResult = Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS);
        cResult[0] = CHANNELResult;
        let first = CHANNELResult;
      } else {
        first = cResult[0];
      }
      return null != _mod4911.useRouteMatch(first);
    }
  : function useIsViewingPremiumMemberships() {
      const RouteParam = RouteUtils.RouteParam;
      return (
        null != _mod4911.useRouteMatch(Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS))
      );
    };
