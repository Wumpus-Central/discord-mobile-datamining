// discord_app/modules/main_tabs_v2/native/navigateToLastChannel.tsx
import set from "../../../../_runtime/00002_set.js";
import coerceMainRoute from "../helpers/NavigationRouteUtils.native.tsx";
import transitionToChannel from "../../routing/transitionToChannel.tsx";
import getNavigatorCurrentRouteDefault from "../navigator/getNavigatorCurrentRoute.tsx";

const result = set.fileFinishedImporting("modules/main_tabs_v2/native/navigateToLastChannel.tsx");

export default function navigateToLastChannel() {
  const coerceGuildsRouteResult = coerceMainRoute.coerceGuildsRoute(getNavigatorCurrentRouteDefault());
  let tmp4 = null != coerceGuildsRouteResult;
  if (tmp4) {
    const params = coerceGuildsRouteResult.params;
    let channelId;
    if (params != null) {
      channelId = params.channelId;
    }
    tmp4 = null != channelId;
  }
  if (tmp4) {
    const params2 = coerceGuildsRouteResult.params;
    let channelId1;
    if (params2 != null) {
      channelId1 = params2.channelId;
    }
    transitionToChannel.transitionToChannel(channelId1);
    const tmpResult = transitionToChannel;
  }
};