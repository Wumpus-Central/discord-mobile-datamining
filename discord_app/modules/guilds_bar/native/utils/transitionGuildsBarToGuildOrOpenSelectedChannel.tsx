// === Module 15812: transitionGuildsBarToGuildOrOpenSelectedChannel ===

// Module 15812 (transitionGuildsBarToGuildOrOpenSelectedChannel)
import getRootNavigationRef from "getRootNavigationRef" /* 4300 */;
import closure_2 from "handleConnectionOpen" /* 1981 */;
import closure_3 from "handleConnectionOpen" /* 4267 */;
import { ME } from "ME" /* 676 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx");

export default function transitionGuildsBarToGuildOrOpenSelectedChannel(arg0) {
  const rootNavigationRef = getRootNavigationRef.getRootNavigationRef();
  let isReadyResult;
  if (rootNavigationRef != null) {
    isReadyResult = rootNavigationRef.isReady();
  }
  let tmp4;
  if (true === isReadyResult) {
    let tmpResult = tmp(4299);
    const coerceGuildsRouteResult = tmpResult.coerceGuildsRoute(rootNavigationRef.getCurrentRoute());
    let drawerOpen;
    if (coerceGuildsRouteResult != null) {
      const params = coerceGuildsRouteResult.params;
      if (params != null) {
        drawerOpen = params.drawerOpen;
      }
    }
    if (true !== drawerOpen) {
      let tmp7 = null;
      if (arg0 !== ME) {
        tmp7 = arg0;
      }
      guildId = guildId.getGuildId();
      if (guildId == null) {
        guildId = null;
      }
      let tmp10;
      if (guildId === tmp7) {
        channelId = channelId.getChannelId(arg0, false);
        tmp10 = channelId;
      }
      tmp4 = tmp10;
    }
  }
  if (null != tmp4) {
    tmpResult = tmp(4456);
    tmpResult.transitionToChannel(tmp4);
  } else {
    tmp(6138).transitionToGuild(arg0);
    const tmpResult1 = tmp(6138);
  }
};