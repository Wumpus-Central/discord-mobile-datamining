// === Module 15572: transitionGuildsBarToGuildOrOpenSelectedChannel ===

// Module 15572 (transitionGuildsBarToGuildOrOpenSelectedChannel)
import coerceMainRoute from "coerceMainRoute" /* 4229 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4230 */;
import transitionToChannel from "transitionToChannel" /* 4768 */;
import transitionToGuild from "transitionToGuild" /* 7302 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import handleConnectionOpen2 from "handleConnectionOpen" /* 4197 */;
import { ME } from "ME" /* 676 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx");

export default function transitionGuildsBarToGuildOrOpenSelectedChannel(arg0) {
  const rootNavigationRef = getRootNavigationRef.getRootNavigationRef();
  let isReadyResult;
  if (rootNavigationRef != null) {
    isReadyResult = rootNavigationRef.isReady();
  }
  let tmp4;
  if (true === isReadyResult) {
    let tmpResult = coerceMainRoute;
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
    tmpResult = transitionToChannel;
    tmpResult.transitionToChannel(tmp4);
  } else {
    transitionToGuild.transitionToGuild(arg0);
    const tmpResult1 = transitionToGuild;
  }
};