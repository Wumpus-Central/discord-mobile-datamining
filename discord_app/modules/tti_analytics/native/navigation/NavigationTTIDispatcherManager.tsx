// discord_app/modules/tti_analytics/native/navigation/NavigationTTIDispatcherManager.tsx
import encodeProperties from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import initializeDefault from "../../../../lib/AutomaticLifecycleManager.tsx";
import isNavigationTTIEnabled from "navigationTTIEnabled.tsx";
import getLastBundleDefault from "NavigationSpanTracker.tsx";
import closure_3 from "../../../../stores/ChannelStore.tsx";
import closure_4 from "../../../../stores/MessageStore.tsx";
import closure_5 from "../../../../stores/SelectedChannelStore.tsx";

require = arg1;
function handleChannelSelect(opensChannel) {
  ({ guildId, channelId, fromGuildId, fromChannelId } = opensChannel);
  let obj = isNavigationTTIEnabled;
  if (obj.isNavigationTTIEnabled()) {
    if (null != channelId) {
      if (false !== opensChannel.opensChannel) {
        if (guildId == null) {
          guildId = null;
        }
        if (undefined === fromChannelId) {
          lastSelectedChannelId = lastSelectedChannelId.getLastSelectedChannelId();
          if (lastSelectedChannelId == null) {
            lastSelectedChannelId = null;
          }
          fromChannelId = lastSelectedChannelId;
        }
        if (undefined === fromGuildId) {
          channel = channel.getChannel(fromChannelId);
          guildId = undefined;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          if (guildId == null) {
            guildId = null;
          }
          fromGuildId = guildId;
        }
        obj = { spanTtiName: null, destinationKey: null, properties: null };
        obj[0] = encodeProperties.SpanTtiNames.CHANNEL;
        obj[1] = channelId;
        obj = {
          trigger: "navigation",
          from_guild_id: null,
          to_guild_id: null,
          from_channel_id: null,
          to_channel_id: null,
          changed_guild: null,
          warm_message_cache: null,
        };
        obj[1] = fromGuildId;
        obj[2] = guildId;
        obj[3] = fromChannelId;
        obj[4] = channelId;
        obj[5] = fromGuildId !== guildId;
        obj[6] = closure_4.hasPresent(channelId);
        obj[2] = obj;
        getLastBundleDefault.beginNavigation(obj);
        const obj3 = getLastBundleDefault;
      }
    }
  }
}
initializeDefault;
let prototype = function NavigationTTIDispatcherManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { CHANNEL_SELECT: handleChannelSelect };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
const result = require("set").fileFinishedImporting(
  "modules/tti_analytics/native/navigation/NavigationTTIDispatcherManager.tsx",
);

export default prototype;
