// discord_app/modules/guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx
import NavigationRouteUtils from "../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import RootNavigationRef from "../../../main_tabs_v2/RootNavigationRef.native.tsx";
import transitionToChannel from "../../../routing/transitionToChannel.tsx";
import transitionToGuild from "../../../routing/transitionToGuild.native.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../../../stores/SelectedGuildStore.tsx";

require = fn;
const ME = fn(1074).ME;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx",
);

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
}
