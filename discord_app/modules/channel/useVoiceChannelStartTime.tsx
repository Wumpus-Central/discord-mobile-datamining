// === Module 18568: useVoiceChannelStartTime ===

// Module 18568 (useVoiceChannelStartTime)
import ChannelInfoActionCreators from "ChannelInfoActionCreators" /* 11710 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6648 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 6854 */;
import VoiceChannelStartTimeStore from "VoiceChannelStartTimeStore" /* 10254 */;

const require = globalThis.__r;

require = fn;
const ChannelTypes = fn(1072).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/useVoiceChannelStartTime.tsx");

export function useStartTime(channel) {
  _require = channel;
  items = [VoiceChannelStartTimeStore, closure_4];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({ hasRequestedStartTimes: VoiceChannelStartTimeStore.hasRequestedStartTimes(channel.guild_id), startTime: VoiceChannelStartTimeStore.getStartTime(channel), isGuildUnavailable: GuildAvailabilityStore.isUnavailable(channel.guild_id) }));
  hasRequestedStartTimes = stateFromStoresObject.hasRequestedStartTimes;
  const isGuildUnavailable = stateFromStoresObject.isGuildUnavailable;
  let obj = require("initialize");
  const items1 = [stateFromStores];
  stateFromStores = require("initialize").useStateFromStores(items1, () => stateFromStores.isConnected());
  closure_4 = tmp3;
  const items2 = [channel.type === ChannelTypes.GUILD_VOICE, channel.guild_id, hasRequestedStartTimes, isGuildUnavailable, stateFromStores];
  const effect = isGuildUnavailable.useEffect(() => {
    let tmp = !hasRequestedStartTimes;
    if (!hasRequestedStartTimes) {
      tmp = closure_4;
    }
    if (tmp) {
      tmp = !isGuildUnavailable;
    }
    if (tmp) {
      tmp = stateFromStores;
    }
    if (tmp) {
      const channelInfo = ChannelInfoActionCreators.fetchChannelInfo(channel.guild_id);
    }
  }, items2);
  return stateFromStoresObject.startTime;
}