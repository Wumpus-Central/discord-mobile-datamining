// discord_app/modules/channel/VoiceChannelStartTimeStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import ChannelTypes from "../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import GatewayConnectionStore from "../gateway/GatewayConnectionStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

function _toTimestampMs(arg0) {
  const date = new Date(arg0 * DurationsDefault.Millis.SECOND);
  return date.getTime();
}
function handleConnectionReset() {
  set.clear();
}
function handleGuildReset(guild) {
  set.delete(guild.guild.id);
}
const set = new Set();
const hasOwnProperty = {};
const Store = get_initializedDefault.Store;
class VoiceChannelStartTimeStore extends Store {
  initialize() {
    this.waitFor(GatewayConnectionStore);
  }
  getStartTime(guild_id) {
    if (null != guild_id) {
      if (null != guild_id.guild_id) {
        if (guild_id.type === ChannelTypes.ChannelTypes.GUILD_VOICE) {
          let tmp5;
          if (closure_5[guild_id.guild_id] != null) {
            tmp5 = tmp4[guild_id.id];
          }
          return tmp5;
        }
      }
    }
  }
  hasRequestedStartTimes(guild_id) {
    return set.has(guild_id);
  }
}
const prototype = VoiceChannelStartTimeStore.prototype;
VoiceChannelStartTimeStore.displayName = "VoiceChannelStartTimeStore";
const obj = {
  GUILD_CREATE: handleGuildReset,
  GUILD_DELETE: handleGuildReset,
  CONNECTION_RESUMED: handleConnectionReset,
  CONNECTION_OPEN: handleConnectionReset,
  VOICE_CHANNEL_START_TIME_UPDATE: function handleVoiceChannelStartTimeUpdate(id) {
    let guildId;
    let voiceStartTime;
    ({ guildId, voiceStartTime } = id);
    id = id.id;
    if (null == closure_5[guildId]) {
      closure_5[guildId] = {};
    }
    let time;
    const tmp2 = closure_5[guildId];
    if (null != voiceStartTime) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date(voiceStartTime * DurationsDefault.Millis.SECOND);
      time = date.getTime();
    }
    tmp2[id] = time;
  },
  CHANNEL_INFO: function handleStartTimes(arg0) {
    let channels;
    let guildId;
    ({ guildId, channels } = arg0);
    closure_5[guildId] = {};
    const iter = channels[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let voiceStartTime = nextResult.voiceStartTime;
      let tmp5;
      let id = nextResult.id;
      let tmp4 = closure_5[guildId];
      if (null != voiceStartTime) {
        tmp5 = _toTimestampMs(tmp2);
      }
      tmp4[id] = tmp5;
      continue;
    }
  },
  FETCH_CHANNEL_INFO: function handleFetchChannelInfo(guildId) {
    set.add(guildId.guildId);
  },
};
const voiceChannelStartTimeStore = new VoiceChannelStartTimeStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/channel/VoiceChannelStartTimeStore.tsx");

export default voiceChannelStartTimeStore;
