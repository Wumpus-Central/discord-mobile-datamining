// discord_app/modules/channel/useVoiceChannelStartTime.tsx
import ChannelInfoActionCreators from "ChannelInfoActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import GatewayConnectionStore from "../gateway/GatewayConnectionStore.tsx";
import GuildAvailabilityStore from "../../stores/GuildAvailabilityStore.tsx";
import VoiceChannelStartTimeStore from "VoiceChannelStartTimeStore.tsx";

require = fn;
const ChannelTypes = fn(1074).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/useVoiceChannelStartTime.tsx");

export const useStartTime = function useStartTime(channel) {
  _require = channel;
  const items = [VoiceChannelStartTimeStore, closure_4];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({
    hasRequestedStartTimes: VoiceChannelStartTimeStore.hasRequestedStartTimes(channel.guild_id),
    startTime: VoiceChannelStartTimeStore.getStartTime(channel),
    isGuildUnavailable: GuildAvailabilityStore.isUnavailable(channel.guild_id),
  }));
  hasRequestedStartTimes = stateFromStoresObject.hasRequestedStartTimes;
  const isGuildUnavailable = stateFromStoresObject.isGuildUnavailable;
  let obj = require("initialize");
  const items1 = [stateFromStores];
  stateFromStores = require("initialize").useStateFromStores(items1, () => stateFromStores.isConnected());
  closure_4 = tmp3;
  const items2 = [
    channel.type === ChannelTypes.GUILD_VOICE,
    channel.guild_id,
    hasRequestedStartTimes,
    isGuildUnavailable,
    stateFromStores,
  ];
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
};
