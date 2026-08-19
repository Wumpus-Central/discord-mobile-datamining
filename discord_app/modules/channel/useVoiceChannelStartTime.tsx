// === Module 15493: useStartTime ===

// Module 15493 (useStartTime)
import noop from "noop" /* 19 */;
import _handleConnectionOpen from "_handleConnectionOpen" /* 4495 */;
import handleConnectionOpen from "handleConnectionOpen" /* 4826 */;
import _toTimestampMs from "_toTimestampMs" /* 10509 */;
import { ChannelTypes } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/channel/useVoiceChannelStartTime.tsx");

export const useStartTime = function useStartTime(channel) {
  const _require = channel;
  const items = [closure_5, closure_4];
  const stateFromStoresObject = _require(hasRequestedStartTimes[5]).useStateFromStoresObject(items, () => ({ hasRequestedStartTimes: closure_1_5.hasRequestedStartTimes(channel.guild_id), startTime: closure_1_5.getStartTime(channel), isGuildUnavailable: unavailable.isUnavailable(channel.guild_id) }));
  hasRequestedStartTimes = stateFromStoresObject.hasRequestedStartTimes;
  const isGuildUnavailable = stateFromStoresObject.isGuildUnavailable;
  let obj = _require(hasRequestedStartTimes[5]);
  const items1 = [stateFromStores];
  stateFromStores = _require(hasRequestedStartTimes[5]).useStateFromStores(items1, () => stateFromStores.isConnected());
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
      const channelInfo = channel(hasRequestedStartTimes[6]).fetchChannelInfo(channel.guild_id);
      const obj = channel(hasRequestedStartTimes[6]);
    }
  }, items2);
  return stateFromStoresObject.startTime;
};