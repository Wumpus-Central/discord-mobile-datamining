// === Module 9568: navigateToLastChannel ===

// Module 9568 (navigateToLastChannel)
import obj132 from "obj132" /* 2 */;
import coerceMainRoute from "coerceMainRoute" /* 4229 */;
import transitionToChannel from "transitionToChannel" /* 4768 */;
import getNavigatorCurrentRouteDefault from "getNavigatorCurrentRoute" /* 9569 */;

const result = obj132.fileFinishedImporting("modules/main_tabs_v2/native/navigateToLastChannel.tsx");

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