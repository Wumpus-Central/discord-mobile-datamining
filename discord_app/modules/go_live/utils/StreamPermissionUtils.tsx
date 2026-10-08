// === Module 5903: StreamPermissionUtils ===

// Module 5903 (StreamPermissionUtils)
import ChannelUtils from "ChannelUtils" /* 5410 */;
import canJoinVoiceChannelDefault from "canJoinVoiceChannel" /* 5890 */;
import shouldAgeVerifyForAgeGate from "shouldAgeVerifyForAgeGate" /* 5904 */;
import AgeGateUtils from "AgeGateUtils" /* 5930 */;
import GameConsoleStore from "GameConsoleStore" /* 5109 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import VoiceStateStore from "VoiceStateStore" /* 5111 */;

const require = globalThis.__r;

require = fn;
function canStreamInChannel(channel, GuildStore, PermissionStore, arg3) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  if (channel.isPrivate()) {
    return true;
  } else {
    guild = GuildStore.getGuild(channel.getGuildId());
    let num;
    if (guild != null) {
      num = guild.maxStageVideoChannelUsers;
    }
    if (num == null) {
      num = 0;
    }
    let isGuildStageVoiceResult = channel.isGuildStageVoice();
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = num <= 0;
    }
    let tmp5 = !isGuildStageVoiceResult;
    if (!isGuildStageVoiceResult) {
      if (flag) {
        flag = !canJoinVoiceChannelDefault(channel, PermissionStore);
      }
      let tmp9 = !flag;
      if (!flag) {
        let canResult = PermissionStore.can(Permissions.STREAM, channel);
        if (canResult) {
          canResult = null != guild && guild.afkChannelId !== channel.id;
          const tmp12 = null != guild && guild.afkChannelId !== channel.id;
        }
        tmp9 = canResult;
      }
      tmp5 = tmp9;
    }
    return tmp5;
  }
}
function canWatchStream(basicChannel1, VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore) {
  if (null == basicChannel1) {
    const items = [false, obj.NO_PERMISSION];
    return items;
  } else {
    let isInChannelResult = VoiceStateStore.isInChannel(basicChannel1.id);
    let isChannelFullResult = basicChannel1 instanceof ChannelRecordBase;
    if (isChannelFullResult) {
      obj = ChannelUtils;
      isChannelFullResult = obj.isChannelFull(basicChannel1, VoiceStateStore, GuildStore);
    }
    let tmp9 = canJoinVoiceChannelDefault(basicChannel1, PermissionStore);
    const tmp10 = null != GameConsoleStore.getAwaitingRemoteSessionInfo() || null != GameConsoleStore.getRemoteSessionId();
    let result = shouldAgeVerifyForAgeGate.shouldAgeVerifyForAgeGate();
    if (result) {
      result = AgeGateUtils.shouldShowAgeGateForChannelId(basicChannel1.id);
      const tmp11Result = AgeGateUtils;
    }
    if (tmp10) {
      let CHANNEL_FULL = obj.REMOTE_MODE;
    } else if (result) {
      CHANNEL_FULL = obj.AGE_RESTRICTED;
    } else {
      if (!tmp9) {
        if (!isInChannelResult) {
          CHANNEL_FULL = obj.NO_PERMISSION;
        }
      }
      let tmp14 = isChannelFullResult;
      if (isChannelFullResult) {
        tmp14 = !isInChannelResult;
      }
      if (tmp14) {
        CHANNEL_FULL = obj.CHANNEL_FULL;
      }
    }
    let tmp18 = !tmp10;
    if (!tmp10) {
      tmp18 = !result;
    }
    if (tmp18) {
      if (!isInChannelResult) {
        if (tmp9) {
          tmp9 = !isChannelFullResult;
        }
        isInChannelResult = tmp9;
      }
      tmp18 = isInChannelResult;
    }
    const items1 = [tmp18, CHANNEL_FULL];
    return items1;
  }
}
const ChannelRecordBase = fn(2067).ChannelRecordBase;
const GUILD_VOCAL_CHANNELS_KEY = fn(4705).GUILD_VOCAL_CHANNELS_KEY;
const Permissions = fn(1085).Permissions;
const StreamUnavailableReasons = { REMOTE_MODE: 0, [0]: "REMOTE_MODE", CHANNEL_FULL: 1, [1]: "CHANNEL_FULL", NO_PERMISSION: 2, [2]: "NO_PERMISSION", AGE_RESTRICTED: 3, [3]: "AGE_RESTRICTED" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/go_live/utils/StreamPermissionUtils.tsx");

export { canStreamInChannel };
export { StreamUnavailableReasons };
export { canWatchStream };
export const useCanWatchStream = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanWatchStream(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      return canWatchStream(closure_0, VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresArray(first, tmp9);
}) : (function useCanWatchStream(arg0) {
  _require = arg0;
  const items = [VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore];
  return require("initialize").useStateFromStoresArray(items, () => canWatchStream(closure_0, VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore));
});
export const getStreamEligibleChannels = function getStreamEligibleChannels(arg0, GuildStore, PermissionStore) {
  const items = [];
  for (const item10011 of tmp) {
    let channel = item10011.channel;
    let tmp2 = channel;
    if (canStreamInChannel(channel, arg1, arg2)) {
      let arr = items.push(tmp2);
    }
    continue;
  }
  return items;
};