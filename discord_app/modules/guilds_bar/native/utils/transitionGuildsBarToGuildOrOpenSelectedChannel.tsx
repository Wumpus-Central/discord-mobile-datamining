// === Module 15947: transitionGuildsBarToGuildOrOpenSelectedChannel ===

// Module 15947 (transitionGuildsBarToGuildOrOpenSelectedChannel)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import transitionToChannel from "transitionToChannel" /* 4847 */;
import transitionToGuild from "transitionToGuild" /* 6760 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;

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
    const coerceGuildsRouteResult = NavigationRouteUtils.coerceGuildsRoute(rootNavigationRef.getCurrentRoute());
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
    const tmpResult = NavigationRouteUtils;
  }
  if (null != tmp4) {
    transitionToChannel.transitionToChannel(tmp4);
    const tmpResult3 = transitionToChannel;
  } else {
    transitionToGuild.transitionToGuild(id);
    const tmpResult4 = transitionToGuild;
  }
};