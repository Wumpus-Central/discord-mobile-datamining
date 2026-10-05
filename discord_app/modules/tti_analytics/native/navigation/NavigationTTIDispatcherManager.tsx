// discord_app/modules/tti_analytics/native/navigation/NavigationTTIDispatcherManager.tsx
import navigationTTIEnabled from "navigationTTIEnabled.tsx";
import NavigationSpanTrackerDefault from "NavigationSpanTracker.tsx";
import NavigationTTIDefinition from "NavigationTTIDefinition.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import MessageStore from "../../../../stores/MessageStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import AutomaticLifecycleManager from "../../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function handleChannelSelect(opensChannel) {
  let channelId;
  let fromChannelId;
  let fromGuildId;
  let guildId;
  let obj3;
  let type;
  ({ guildId, channelId, fromGuildId, fromChannelId } = opensChannel);
  opensChannel = opensChannel.opensChannel;
  const obj = navigationTTIEnabled;
  if (obj.isNavigationTTIEnabled()) {
    if (null != channelId) {
      if (false !== opensChannel) {
        if (guildId == null) {
          guildId = null;
        }
        if (undefined === fromChannelId) {
          let lastSelectedChannelId = SelectedChannelStore.getLastSelectedChannelId();
          if (lastSelectedChannelId == null) {
            lastSelectedChannelId = null;
          }
          fromChannelId = lastSelectedChannelId;
        }
        if (undefined === fromGuildId) {
          const channel = ChannelStore.getChannel(fromChannelId);
          let guildId1;
          if (channel != null) {
            guildId1 = channel.getGuildId();
          }
          if (guildId1 == null) {
            guildId1 = null;
          }
          fromGuildId = guildId1;
        }
        const obj2 = {
          definition: NavigationTTIDefinition.CHANNEL_NAVIGATION_TTI,
          destinationKey: channelId,
          properties: obj3,
        };
        const beginNavigation = NavigationSpanTrackerDefault.beginNavigation;
        NavigationSpanTrackerDefault;
        obj3 = {
          trigger: "navigation",
          from_guild_id: fromGuildId,
          to_guild_id: guildId,
          from_channel_id: fromChannelId,
          to_channel_id: channelId,
          channel_type: type,
          changed_guild: fromGuildId !== guildId,
          warm_message_cache: MessageStore.hasPresent(channelId),
        };
        const channel1 = ChannelStore.getChannel(channelId);
        type = undefined;
        if (channel1 != null) {
          type = channel1.type;
        }
        if (type == null) {
          type = null;
        }
        beginNavigation(obj2);
      }
    }
  }
}
class NavigationTTIDispatcherManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { CHANNEL_SELECT: handleChannelSelect };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const navigationTTIDispatcherManager = new NavigationTTIDispatcherManager();
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIDispatcherManager.tsx");

export default navigationTTIDispatcherManager;
