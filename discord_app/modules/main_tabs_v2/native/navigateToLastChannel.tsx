// discord_app/modules/main_tabs_v2/native/navigateToLastChannel.tsx
const result = require("transitionToChannel").fileFinishedImporting("modules/main_tabs_v2/native/navigateToLastChannel.tsx");

export default function navigateToLastChannel() {
  const coerceGuildsRouteResult = require("../helpers/NavigationRouteUtils.native.tsx") /* navigationToRootTabHelper */.coerceGuildsRoute(require("../navigator/getNavigatorCurrentRoute.tsx")());
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
    require("../../routing/transitionToChannel.tsx") /* transitionToChannel */.transitionToChannel(channelId1);
    const tmpResult = require("../../routing/transitionToChannel.tsx") /* transitionToChannel */;
  }
};