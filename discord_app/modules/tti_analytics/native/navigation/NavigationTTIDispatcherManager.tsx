// discord_app/modules/tti_analytics/native/navigation/NavigationTTIDispatcherManager.tsx
import NavigationSpanTrackerDefault from "NavigationSpanTracker.tsx";
import navigationTTIEnabled from "navigationTTIEnabled.tsx";
import NavigationTTIDefinition from "NavigationTTIDefinition.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import MessageStore from "../../../../stores/MessageStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import AutomaticLifecycleManager from "../../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function handleChannelSelect(opensChannel) {
  ({ guildId, channelId, fromGuildId, fromChannelId } = opensChannel);
  if (obj.isNavigationTTIEnabled()) {
    if (null != channelId) {
      if (false !== opensChannel.opensChannel) {
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
          properties: null,
        };
        const obj4 = {
          trigger: "navigation",
          from_guild_id: fromGuildId,
          to_guild_id: guildId,
          from_channel_id: fromChannelId,
          to_channel_id: channelId,
          channel_type: null,
          changed_guild: null,
          warm_message_cache: null,
        };
        const channel1 = ChannelStore.getChannel(channelId);
        let type;
        if (channel1 != null) {
          type = channel1.type;
        }
        if (type == null) {
          type = null;
        }
        obj4.channel_type = type;
        obj4.changed_guild = fromGuildId !== guildId;
        obj4.warm_message_cache = MessageStore.hasPresent(channelId);
        obj2.properties = obj4;
        NavigationSpanTrackerDefault.beginNavigation(obj2);
      }
    }
  }
  obj = navigationTTIEnabled;
}
const prototype = function NavigationTTIDispatcherManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { CHANNEL_SELECT: handleChannelSelect };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIDispatcherManager.tsx");

export default prototype1;
