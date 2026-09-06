// === Module 17861: handleChannelSelect ===

// Module 17861 (handleChannelSelect)
import encodeProperties from "encodeProperties" /* 1250 */;
import initializeDefault from "initialize" /* 7118 */;
import isNavigationTTIEnabled from "isNavigationTTIEnabled" /* 17862 */;
import getLastBundleDefault from "getLastBundle" /* 17863 */;
import closure_3 from "ensureGuildLoaded" /* 1957 */;
import closure_4 from "reinjectEphemerals" /* 4781 */;
import closure_5 from "handleConnectionOpen" /* 2011 */;

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
          const channel = store.getChannel(fromChannelId);
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
        obj = { trigger: "navigation", from_guild_id: null, to_guild_id: null, from_channel_id: null, to_channel_id: null, channel_type: null, changed_guild: null, warm_message_cache: null };
        obj[1] = fromGuildId;
        obj[2] = guildId;
        obj[3] = fromChannelId;
        obj[4] = channelId;
        const channel1 = store.getChannel(channelId);
        let type;
        if (channel1 != null) {
          type = channel1.type;
        }
        if (type == null) {
          type = null;
        }
        obj[5] = type;
        obj[6] = fromGuildId !== guildId;
        obj[7] = closure_4.hasPresent(channelId);
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
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("set").fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIDispatcherManager.tsx");

export default prototype;