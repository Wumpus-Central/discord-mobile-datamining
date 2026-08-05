// discord_app/modules/main_tabs_v2/native/navigateToLastChannel.tsx
import { transitionToChannel } from "../../routing/transitionToChannel.tsx";
import { navigationToRootTabHelper } from "../helpers/NavigationRouteUtils.native.tsx";
import { getNavigatorCurrentRoute } from "../navigator/getNavigatorCurrentRoute.tsx";
const result = require("transitionToChannel").fileFinishedImporting("modules/main_tabs_v2/native/navigateToLastChannel.tsx");

export default function navigateToLastChannel() {
  const coerceGuildsRouteResult = navigationToRootTabHelper /* navigationToRootTabHelper */.coerceGuildsRoute(getNavigatorCurrentRoute());
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
    transitionToChannel /* transitionToChannel */.transitionToChannel(channelId1);
    const tmpResult = transitionToChannel /* transitionToChannel */;
  }
};