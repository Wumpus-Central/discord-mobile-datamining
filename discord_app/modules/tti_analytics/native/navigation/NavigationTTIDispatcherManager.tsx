// discord_app/modules/tti_analytics/native/navigation/NavigationTTIDispatcherManager.tsx
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import navigationTTIEnabled from "navigationTTIEnabled.tsx";
import NavigationSpanTrackerDefault from "NavigationSpanTracker.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import MessageStore from "../../../../stores/MessageStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import AutomaticLifecycleManager from "../../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function handleChannelSelect(opensChannel) {
  ({ guildId, channelId, fromGuildId, fromChannelId } = opensChannel);
  let obj = navigationTTIEnabled;
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
          guildId = undefined;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          if (guildId == null) {
            guildId = null;
          }
          fromGuildId = guildId;
        }
        obj = {
          spanTtiName: discord_common_AnalyticsUtils.SpanTtiNames.CHANNEL,
          destinationKey: channelId,
          properties: null,
        };
        obj = {
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
        obj.channel_type = type;
        obj.changed_guild = fromGuildId !== guildId;
        obj.warm_message_cache = MessageStore.hasPresent(channelId);
        obj.properties = obj;
        NavigationSpanTrackerDefault.beginNavigation(obj);
      }
    }
  }
}
let prototype = function NavigationTTIDispatcherManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { CHANNEL_SELECT: handleChannelSelect };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIDispatcherManager.tsx");

export default prototype;
