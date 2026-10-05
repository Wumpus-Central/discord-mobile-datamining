// === Module 7210: StreamPermissionUtils ===

// Module 7210 (StreamPermissionUtils)
import Constants from "Constants" /* 1085 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import GuildChannelStore from "GuildChannelStore" /* 4507 */;
import ChannelUtils from "ChannelUtils" /* 5035 */;
import AgeGateUtils from "AgeGateUtils" /* 5100 */;
import canJoinVoiceChannelDefault from "canJoinVoiceChannel" /* 5573 */;
import GameConsoleStore from "GameConsoleStore" /* 4907 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function canStreamInChannel(channel, GuildStore, PermissionStore, arg3) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  if (channel.isPrivate()) {
    return true;
  } else {
    const guild = GuildStore.getGuild(channel.getGuildId());
    let num;
    if (guild != null) {
      num = guild.maxStageVideoChannelUsers;
    }
    if (num == null) {
      num = 0;
    }
    let tmp5 = !(channel.isGuildStageVoice() && num <= 0);
    const isGuildStageVoiceResult = channel.isGuildStageVoice() && num <= 0;
    if (tmp5) {
      if (flag) {
        flag = !canJoinVoiceChannelDefault(channel, PermissionStore);
      }
      let tmp9 = !flag;
      if (tmp9) {
        let canResult = PermissionStore.can(Permissions.STREAM, channel);
        if (canResult) {
          canResult = null != guild && guild.afkChannelId !== channel.id;
        }
        tmp9 = canResult;
      }
      tmp5 = tmp9;
    }
    return tmp5;
  }
}
function canWatchStream(basicChannel1, VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore) {
  let obj;
  if (null == basicChannel1) {
    const items = [false, obj.NO_PERMISSION];
    return items;
  } else {
    let CHANNEL_FULL;
    let isInChannelResult = VoiceStateStore.isInChannel(basicChannel1.id);
    let isChannelFullResult = basicChannel1 instanceof ChannelRecordBase;
    if (isChannelFullResult) {
      obj = ChannelUtils;
      isChannelFullResult = obj.isChannelFull(basicChannel1, VoiceStateStore, GuildStore);
    }
    let tmp9 = canJoinVoiceChannelDefault(basicChannel1, PermissionStore);
    const tmp10 = null != GameConsoleStore.getAwaitingRemoteSessionInfo() || null != GameConsoleStore.getRemoteSessionId();
    const obj2 = AgeGateUtils;
    let result = obj2.shouldAgeVerifyForAgeGate();
    if (result) {
      const tmp11Result = AgeGateUtils;
      result = tmp11Result.shouldShowAgeGateForChannelId(basicChannel1.id);
    }
    if (tmp10) {
      CHANNEL_FULL = obj.REMOTE_MODE;
    } else if (result) {
      CHANNEL_FULL = obj.AGE_RESTRICTED;
    } else {
      if (!tmp9) {
        if (!isInChannelResult) {
          CHANNEL_FULL = obj.NO_PERMISSION;
        }
      }
      const tmp14 = isChannelFullResult && !isInChannelResult;
      if (tmp14) {
        CHANNEL_FULL = obj.CHANNEL_FULL;
      }
    }
    let tmp18 = !tmp10 && !result;
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
const ChannelRecordBase = ChannelRecord.ChannelRecordBase;
const GUILD_VOCAL_CHANNELS_KEY = GuildChannelStore.GUILD_VOCAL_CHANNELS_KEY;
const Permissions = Constants.Permissions;
const StreamUnavailableReasons = { REMOTE_MODE: 0, [0]: "REMOTE_MODE", CHANNEL_FULL: 1, [1]: "CHANNEL_FULL", NO_PERMISSION: 2, [2]: "NO_PERMISSION", AGE_RESTRICTED: 3, [3]: "AGE_RESTRICTED" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      return canWatchStream(closure_0, VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(first, tmp9);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => canWatchStream(closure_0, VoiceStateStore, GuildStore, PermissionStore, GameConsoleStore));
});
let result = size.fileFinishedImporting("modules/go_live/utils/StreamPermissionUtils.tsx");

export { canStreamInChannel };
export { StreamUnavailableReasons };
export { canWatchStream };
export const useCanWatchStream = tmp2;
export const getStreamEligibleChannels = function getStreamEligibleChannels(arg0, GuildStore, PermissionStore) {
  const items = [];
  const tmp = arg0[GUILD_VOCAL_CHANNELS_KEY];
  for (const item10011 of tmp) {
    let channel = item10011.channel;
    let tmp2 = channel;
    if (canStreamInChannel(channel, GuildStore, PermissionStore)) {
      let arr = items.push(tmp2);
    }
    continue;
  }
  return items;
};