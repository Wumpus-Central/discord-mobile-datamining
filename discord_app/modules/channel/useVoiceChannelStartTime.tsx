// === Module 16646: useVoiceChannelStartTime ===

// Module 16646 (useVoiceChannelStartTime)
import ChannelInfoActionCreators from "ChannelInfoActionCreators" /* 10670 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5757 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 5965 */;
import VoiceChannelStartTimeStore from "VoiceChannelStartTimeStore" /* 9608 */;

const require = globalThis.__r;

require = fn;
const ChannelTypes = fn(1085).ChannelTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/useVoiceChannelStartTime.tsx");

export const useStartTime = ReactCompilerGating.isReactCompilerEnabled() ? (function useStartTime(type) {
  _require = type;
  const cResult = require("c").c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VoiceChannelStartTimeStore, GuildAvailabilityStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== type) {
    class S {
      constructor() {
        obj = { hasRequestedStartTimes: closure_5.hasRequestedStartTimes(closure_0.guild_id), startTime: closure_5.getStartTime(closure_0), isGuildUnavailable: closure_4.isUnavailable(closure_0.guild_id) };
        return obj;
      }
    }
    cResult[1] = type;
    cResult[2] = S;
  } else {
    class S {
      constructor() {
        obj = { hasRequestedStartTimes: closure_5.hasRequestedStartTimes(closure_0.guild_id), startTime: closure_5.getStartTime(closure_0), isGuildUnavailable: closure_4.isUnavailable(closure_0.guild_id) };
        return obj;
      }
    }
  }
  let obj = require("c");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(first, S);
  hasRequestedStartTimes = stateFromStoresObject.hasRequestedStartTimes;
  const isGuildUnavailable = stateFromStoresObject.isGuildUnavailable;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        obj = { hasRequestedStartTimes: closure_5.hasRequestedStartTimes(closure_0.guild_id), startTime: closure_5.getStartTime(closure_0), isGuildUnavailable: closure_4.isUnavailable(closure_0.guild_id) };
        return obj;
      }
    }
    const items1 = [stateFromStores];
    const fn = function h() {
      return stateFromStores.isConnected();
    };
    cResult[3] = items1;
    cResult[4] = fn;
    let tmp10 = fn;
    const tmp9 = items1;
  } else {
    class S {
      constructor() {
        obj = { hasRequestedStartTimes: closure_5.hasRequestedStartTimes(closure_0.guild_id), startTime: closure_5.getStartTime(closure_0), isGuildUnavailable: closure_4.isUnavailable(closure_0.guild_id) };
        return obj;
      }
    }
    tmp10 = cResult[4];
  }
  const tmpResult = require("initialize");
  stateFromStores = require("initialize").useStateFromStores(tmp9, tmp10);
  GuildAvailabilityStore = tmp12;
  if (cResult[5] === type.type === ChannelTypes.GUILD_VOICE) {
    class S {
      constructor() {
        obj = { hasRequestedStartTimes: closure_5.hasRequestedStartTimes(closure_0.guild_id), startTime: closure_5.getStartTime(closure_0), isGuildUnavailable: closure_4.isUnavailable(closure_0.guild_id) };
        return obj;
      }
    }
  }
  class U {
    constructor() {
      tmp = !hasRequestedStartTimes;
      if (!hasRequestedStartTimes) {
        tmp = closure_4;
      }
      if (tmp) {
        tmp2 = isGuildUnavailable;
        tmp = !isGuildUnavailable;
      }
      if (tmp) {
        tmp = closure_3;
      }
      if (tmp) {
        tmp3 = closure_0;
        tmp4 = closure_1;
        obj = closure_0(closure_1[8]);
        tmp5 = closure_0;
        channelInfo = obj.fetchChannelInfo(closure_0.guild_id);
      }
      return;
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
  const tmpResult2 = require("initialize");
}) : (function useStartTime(type) {
  _require = type;
  const items = [VoiceChannelStartTimeStore, closure_4];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({ hasRequestedStartTimes: VoiceChannelStartTimeStore.hasRequestedStartTimes(type.guild_id), startTime: VoiceChannelStartTimeStore.getStartTime(type), isGuildUnavailable: GuildAvailabilityStore.isUnavailable(type.guild_id) }));
  hasRequestedStartTimes = stateFromStoresObject.hasRequestedStartTimes;
  const isGuildUnavailable = stateFromStoresObject.isGuildUnavailable;
  let obj = require("initialize");
  const items1 = [stateFromStores];
  stateFromStores = require("initialize").useStateFromStores(items1, () => stateFromStores.isConnected());
  closure_4 = tmp3;
  const items2 = [type.type === ChannelTypes.GUILD_VOICE, type.guild_id, hasRequestedStartTimes, isGuildUnavailable, stateFromStores];
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
      const channelInfo = ChannelInfoActionCreators.fetchChannelInfo(type.guild_id);
    }
  }, items2);
  return stateFromStoresObject.startTime;
});