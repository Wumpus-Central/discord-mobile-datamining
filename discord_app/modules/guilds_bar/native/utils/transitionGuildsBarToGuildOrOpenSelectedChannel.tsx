// === Module 16308: transitionGuildsBarToGuildOrOpenSelectedChannel ===

// Module 16308 (transitionGuildsBarToGuildOrOpenSelectedChannel)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4417 */;
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import transitionToChannel from "transitionToChannel" /* 4571 */;
import transitionToGuild from "transitionToGuild" /* 7342 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;

require = fn;
const ME = fn(1074).ME;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx");

export default function transitionGuildsBarToGuildOrOpenSelectedChannel(id) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  let isReadyResult;
  if (rootNavigationRef != null) {
    isReadyResult = rootNavigationRef.isReady();
  }
  let tmp4;
  if (true === isReadyResult) {
    let tmpResult = NavigationRouteUtils;
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
      if (id !== ME) {
        tmp7 = id;
      }
      let guildId = SelectedGuildStore.getGuildId();
      if (guildId == null) {
        guildId = null;
      }
      let tmp10;
      if (guildId === tmp7) {
        const channelId = SelectedChannelStore.getChannelId(id, false);
        tmp10 = channelId;
      }
      tmp4 = tmp10;
    }
  }
  if (null != tmp4) {
    tmpResult = transitionToChannel;
    tmpResult.transitionToChannel(tmp4);
  } else {
    transitionToGuild.transitionToGuild(id);
    const tmpResult1 = transitionToGuild;
  }
};