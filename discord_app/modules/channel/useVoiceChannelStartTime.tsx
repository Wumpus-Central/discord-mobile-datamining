import noop from "noop";
import _handleConnectionOpen from "_handleConnectionOpen";
import handleConnectionOpen from "handleConnectionOpen";
import _toTimestampMs from "_toTimestampMs";
import { ChannelTypes } from "ME";

const require = arg1;
const result = require("handleConnectionOpen").fileFinishedImporting("modules/channel/useVoiceChannelStartTime.tsx");

export const useStartTime = function useStartTime(channel) {
  const _require = channel;
  const items = [_toTimestampMs, handleConnectionOpen];
  const stateFromStoresObject = _require(hasRequestedStartTimes[5]).useStateFromStoresObject(items, () => ({ hasRequestedStartTimes: outer1_5.hasRequestedStartTimes(channel.guild_id), startTime: outer1_5.getStartTime(channel), isGuildUnavailable: tmp3.isUnavailable(channel.guild_id) }));
  hasRequestedStartTimes = stateFromStoresObject.hasRequestedStartTimes;
  const isGuildUnavailable = stateFromStoresObject.isGuildUnavailable;
  let obj = _require(hasRequestedStartTimes[5]);
  const items1 = [stateFromStores];
  stateFromStores = _require(hasRequestedStartTimes[5]).useStateFromStores(items1, () => stateFromStores.isConnected());
  handleConnectionOpen = tmp3;
  const items2 = [channel.type === ChannelTypes.GUILD_VOICE, channel.guild_id, hasRequestedStartTimes, isGuildUnavailable, stateFromStores];
  const effect = isGuildUnavailable.useEffect(() => {
    let tmp = !hasRequestedStartTimes;
    if (!hasRequestedStartTimes) {
      tmp = handleConnectionOpen;
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