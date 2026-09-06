// discord_app/modules/guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx
import RootNavigationRef from "../../../main_tabs_v2/RootNavigationRef.native.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../../../stores/SelectedGuildStore.tsx";

require = fn;
const ME = fn(1074).ME;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx",
);

export default function transitionGuildsBarToGuildOrOpenSelectedChannel(arg0) {
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  let isReadyResult;
  if (rootNavigationRef != null) {
    isReadyResult = rootNavigationRef.isReady();
  }
  let tmp4;
  if (true === isReadyResult) {
    let tmpResult = tmp(4417);
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
      let guildId = SelectedGuildStore.getGuildId();
      if (guildId == null) {
        guildId = null;
      }
      let tmp10;
      if (guildId === tmp7) {
        const channelId = SelectedChannelStore.getChannelId(arg0, false);
        tmp10 = channelId;
      }
      tmp4 = tmp10;
    }
  }
  if (null != tmp4) {
    tmpResult = tmp(4571);
    tmpResult.transitionToChannel(tmp4);
  } else {
    tmp(7342).transitionToGuild(arg0);
    const tmpResult1 = tmp(7342);
  }
}
