// === Module 16200: useVoiceChannelStartTime ===

// Module 16200 (useVoiceChannelStartTime)
import Constants from "Constants" /* 1085 */;
import ChannelInfoActionCreators from "ChannelInfoActionCreators" /* 11149 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5443 */;
import GuildAvailabilityStore_mod from "GuildAvailabilityStore" /* 5625 */;
import VoiceChannelStartTimeStore from "VoiceChannelStartTimeStore" /* 10036 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let GuildAvailabilityStore = GuildAvailabilityStore_mod;
const ChannelTypes = Constants.ChannelTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((type) => {
  let closure_4;
  let first;
  let hasRequestedStartTimes;
  let stateFromStores;
  let tmp10;
  let tmp9;
  _require = type;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VoiceChannelStartTimeStore, GuildAvailabilityStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== type) {
    class S {
      constructor() {
        const obj = { hasRequestedStartTimes: VoiceChannelStartTimeStore.hasRequestedStartTimes(type.guild_id), startTime: VoiceChannelStartTimeStore.getStartTime(type), isGuildUnavailable: GuildAvailabilityStore.isUnavailable(type.guild_id) };
        return obj;
      }
    }
    cResult[1] = type;
    cResult[2] = S;
  } else {
    class S {
      constructor() {
        const obj = { hasRequestedStartTimes: VoiceChannelStartTimeStore.hasRequestedStartTimes(type.guild_id), startTime: VoiceChannelStartTimeStore.getStartTime(type), isGuildUnavailable: GuildAvailabilityStore.isUnavailable(type.guild_id) };
        return obj;
      }
    }
  }
  const tmpResult = tmp(hasRequestedStartTimes[7]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, S);
  hasRequestedStartTimes = stateFromStoresObject.hasRequestedStartTimes;
  const isGuildUnavailable = stateFromStoresObject.isGuildUnavailable;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        const obj = { hasRequestedStartTimes: VoiceChannelStartTimeStore.hasRequestedStartTimes(type.guild_id), startTime: VoiceChannelStartTimeStore.getStartTime(type), isGuildUnavailable: GuildAvailabilityStore.isUnavailable(type.guild_id) };
        return obj;
      }
    }
    const items1 = [stateFromStores];
    const fn = function f() {
      return stateFromStores.isConnected();
    };
    cResult[3] = items1;
    cResult[4] = fn;
    tmp10 = fn;
    tmp9 = items1;
  } else {
    class S {
      constructor() {
        const obj = { hasRequestedStartTimes: VoiceChannelStartTimeStore.hasRequestedStartTimes(type.guild_id), startTime: VoiceChannelStartTimeStore.getStartTime(type), isGuildUnavailable: GuildAvailabilityStore.isUnavailable(type.guild_id) };
        return obj;
      }
    }
    tmp10 = cResult[4];
  }
  const tmpResult2 = tmp(hasRequestedStartTimes[7]);
  stateFromStores = tmpResult2.useStateFromStores(tmp9, tmp10);
  GuildAvailabilityStore = tmp12;
  if (cResult[5] === type.type === ChannelTypes.GUILD_VOICE) {
    class S {
      constructor() {
        const obj = { hasRequestedStartTimes: VoiceChannelStartTimeStore.hasRequestedStartTimes(type.guild_id), startTime: VoiceChannelStartTimeStore.getStartTime(type), isGuildUnavailable: GuildAvailabilityStore.isUnavailable(type.guild_id) };
        return obj;
      }
    }
  }
  class U {
    constructor() {
      const tmp = !hasRequestedStartTimes && closure_4 && !isGuildUnavailable && stateFromStores;
      if (tmp) {
        const obj = ChannelInfoActionCreators;
        const channelInfo = obj.fetchChannelInfo(type.guild_id);
      }
    }
  }
  const items2 = [type.type === ChannelTypes.GUILD_VOICE, type.guild_id, hasRequestedStartTimes, isGuildUnavailable, stateFromStores];
  cResult[5] = type.type === ChannelTypes.GUILD_VOICE;
  cResult[6] = type.guild_id;
  cResult[7] = hasRequestedStartTimes;
  cResult[8] = stateFromStores;
  cResult[9] = isGuildUnavailable;
  cResult[10] = U;
  cResult[11] = items2;
}) : ((type) => {
  let hasRequestedStartTimes;
  let stateFromStores;
  _require = type;
  let obj = require("get initialized");
  const items = [VoiceChannelStartTimeStore, closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { hasRequestedStartTimes: VoiceChannelStartTimeStore.hasRequestedStartTimes(type.guild_id), startTime: VoiceChannelStartTimeStore.getStartTime(type), isGuildUnavailable: GuildAvailabilityStore.isUnavailable(type.guild_id) };
    return obj;
  });
  hasRequestedStartTimes = stateFromStoresObject.hasRequestedStartTimes;
  const isGuildUnavailable = stateFromStoresObject.isGuildUnavailable;
  const startTime = stateFromStoresObject.startTime;
  const items1 = [stateFromStores];
  const obj2 = require("get initialized");
  stateFromStores = obj2.useStateFromStores(items1, () => stateFromStores.isConnected());
  closure_4 = tmp3;
  const items2 = [type.type === ChannelTypes.GUILD_VOICE, type.guild_id, hasRequestedStartTimes, isGuildUnavailable, stateFromStores];
  const effect = isGuildUnavailable.useEffect(() => {
    const tmp = !hasRequestedStartTimes && closure_4 && !isGuildUnavailable && stateFromStores;
    if (tmp) {
      const obj = ChannelInfoActionCreators;
      const channelInfo = obj.fetchChannelInfo(type.guild_id);
    }
  }, items2);
  return startTime;
});
const result = size.fileFinishedImporting("modules/channel/useVoiceChannelStartTime.tsx");

export const useStartTime = tmp2;