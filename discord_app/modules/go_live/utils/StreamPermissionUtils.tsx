// === Module 7481: canStreamInChannel ===

// Module 7481 (canStreamInChannel)
import allowChannelAccess from "allowChannelAccess" /* 4666 */;
import shouldShowAgeGateForVoiceChannel from "shouldShowAgeGateForVoiceChannel" /* 4731 */;
import canJoinVoiceChannelDefault from "canJoinVoiceChannel" /* 5368 */;
import closure_3 from "set" /* 4495 */;
import { ChannelRecordBase } from "createChannelRecord" /* 1390 */;
import { GUILD_VOCAL_CHANNELS_KEY } from "comparator" /* 1981 */;
import closure_6 from "createGuildRecordFromRust" /* 1908 */;
import closure_7 from "getUncachedChannelPermissions" /* 4120 */;
import closure_8 from "updateVoiceState" /* 4497 */;
import { Permissions } from "ME" /* 673 */;

require = arg1;
function canStreamInChannel(channel, closure_1_2, closure_1_3, arg3) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  if (channel.isPrivate()) {
    return true;
  } else {
    const guild = closure_1_2.getGuild(channel.getGuildId());
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
        flag = !canJoinVoiceChannelDefault(channel, closure_1_3);
      }
      let tmp9 = !flag;
      if (!flag) {
        let canResult = closure_1_3.can(Permissions.STREAM, channel);
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
function canWatchStream(basicChannel1, closure_17, closure_12, closure_14, closure_8) {
  if (null == basicChannel1) {
    const items = [false, obj.NO_PERMISSION];
    return items;
  } else {
    let isInChannelResult = closure_17.isInChannel(basicChannel1.id);
    let isChannelFullResult = basicChannel1 instanceof ChannelRecordBase;
    if (isChannelFullResult) {
      obj = allowChannelAccess;
      isChannelFullResult = obj.isChannelFull(basicChannel1, closure_17, closure_12);
    }
    let tmp9 = canJoinVoiceChannelDefault(basicChannel1, closure_14);
    const tmp10 = null != closure_8.getAwaitingRemoteSessionInfo() || null != closure_8.getRemoteSessionId();
    let result = shouldShowAgeGateForVoiceChannel.shouldAgeVerifyForAgeGate();
    if (result) {
      result = shouldShowAgeGateForVoiceChannel.shouldShowAgeGateForChannelId(basicChannel1.id);
      const tmp11Result = shouldShowAgeGateForVoiceChannel;
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
let obj = { REMOTE_MODE: 0, [0]: "REMOTE_MODE", CHANNEL_FULL: 1, [1]: "CHANNEL_FULL", NO_PERMISSION: 2, [2]: "NO_PERMISSION", AGE_RESTRICTED: 3, [3]: "AGE_RESTRICTED" };
let result = require("set").fileFinishedImporting("modules/go_live/utils/StreamPermissionUtils.tsx");

export { canStreamInChannel };
export const StreamUnavailableReasons = obj;
export { canWatchStream };
export const useCanWatchStream = function useCanWatchStream(stateFromStores) {
  const _require = stateFromStores;
  const items = [closure_8, closure_6, closure_7, closure_3];
  return _require(586).useStateFromStoresArray(items, () => closure_1_12(closure_0, closure_1_8, closure_1_6, closure_1_7, closure_1_3));
};
export const getStreamEligibleChannels = function getStreamEligibleChannels(arg0, closure_1_2, closure_1_3) {
  const items = [];
  for (const item10011 of tmp) {
    let channel = item10011.channel;
    let tmp3 = canStreamInChannel;
    let tmp2 = channel;
    if (canStreamInChannel(channel, arg1, arg2)) {
      let tmp4 = channel;
      let arr = items.push(tmp2);
    }
    continue;
  }
  return items;
};