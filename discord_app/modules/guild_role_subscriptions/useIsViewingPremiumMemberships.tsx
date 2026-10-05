// discord_app/modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx
import react from "../../../_runtime/00576_react.js";
import Constants from "../../Constants.tsx";
import ChannelConstants from "../channel/ChannelConstants.tsx";
import MemoryRouter from "../../../_runtime/04710_MemoryRouter.js";
import RouteUtils from "../routing/RouteUtils.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const CHANNEL = Routes.CHANNEL;
        const RouteParam = RouteUtils.RouteParam;
        const CHANNELResult = CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS);
        cResult[0] = CHANNELResult;
        first = CHANNELResult;
      } else {
        first = cResult[0];
      }
      const tmpResult = MemoryRouter;
      return null != tmpResult.useRouteMatch(first);
    }
  : () => {
      const useRouteMatch = MemoryRouter.useRouteMatch;
      const CHANNEL = Routes.CHANNEL;
      MemoryRouter;
      const RouteParam = RouteUtils.RouteParam;
      return null != useRouteMatch(CHANNEL(RouteParam.guildId(), StaticChannelRoute.ROLE_SUBSCRIPTIONS));
    };
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useIsViewingPremiumMemberships.tsx");

export default tmp2;
